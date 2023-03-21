import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import MainLayout from "@/components/MainLayout";

import { Brands } from "@/types/data";
import dataBrands from "@/data/brands.json";

type Context = GetStaticPropsContext<{ slug: string }>;
type Result = GetStaticPropsResult<{ content: Brands[] }>;
type Props = { content: Brands[] };

const BrandSlugPage = (props: Props) => {
  const { content } = props;

  return (
    <MainLayout page="brand">
      <h1>hehe item brands belum ada isinya</h1>
      <h1 className="text-xl font-bold mt-8">Nama Brand: {content[0]?.name}</h1>
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
  const { slug } = params!;
  const content = dataBrands.filter((item) => {
    return item.slug === slug;
  });

  return {
    props: {
      content,
    },
  };
}
