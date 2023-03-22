import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

import MainLayout from "@/components/MainLayout";

import { DataParfum } from "@/types/data";
import dataBrands from "@/data/brands.json";

type Context = GetStaticPropsContext<{ slug: string }>;
type Result = GetStaticPropsResult<{ data: DataParfum[] }>;
type Props = { data: DataParfum[] };

const BrandSlugPage = (props: Props) => {
  const { data } = props;

  return (
    <MainLayout page="brand">
      <h1>hehe item brands belum ada isinya</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {data.map((item) => (
          <Link href={`/parfum/${item.slug}`} key={item.id}>
            <div className="p-4 border border-gray-500 rounded-md">
              <img src={item.image} />
              <h2>{item.name}</h2>
              <p>{item.brand}</p>
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

  return {
    props: {
      data: JSON.parse(parfumsByBrand),
    },
  };
}
