import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

import MainLayout from "@/components/MainLayout";

import { Brands, DataParfum } from "@/types/data";
import dataBrands from "@/data/brands.json";

type Context = GetStaticPropsContext<{ slug: string }>;
type Result = GetStaticPropsResult<{ data: DataParfum[]; brand: Brands }>;
type Props = { data: DataParfum[]; brand: Brands };

const BrandSlugPage = (props: Props) => {
  const { data, brand } = props;

  return (
    <MainLayout page="brand">
      <h1 className="text-center text-3xl font-bold mt-4">{brand.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
        {data.map((item) => (
          <Link href={`/parfum/${item.slug}`} key={item.id}>
            <div className="p-4 border border-gray-500 rounded-md h-full flex flex-col">
              <img className="object-fill m-auto" src={item.image} />
              <div className="flex flex-col flex-auto mt-4 justify-end">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <p>{item.type}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default BrandSlugPage;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = dataBrands.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: Context): Promise<Result> {
  const parfumsByBrand = fs
    .readFileSync(
      path.join("src/data/brand", (params?.slug as string) + ".json")
    )
    .toString();

  const content = dataBrands.filter((item) => {
    return item.slug === params?.slug;
  });

  return {
    props: {
      data: JSON.parse(parfumsByBrand),
      brand: content[0],
    },
  };
}
