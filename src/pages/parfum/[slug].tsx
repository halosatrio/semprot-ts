import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

import MainLayout from "@/components/MainLayout";
import Content from "@/components/Content";

import { DataParfum } from "@/types/data";
import dataAllParfum from "@/data/all-parfum.json";

type Context = GetStaticPropsContext<{ slug: string }>;
type Result = GetStaticPropsResult<{ content: DataParfum[] }>;
type Props = { content: DataParfum[] };

const ParfumSlugPage = (props: Props) => {
  const { content } = props;

  return (
    <MainLayout page="parfum">
      <Content data={content[0]} />
    </MainLayout>
  );
};

export default ParfumSlugPage;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = dataAllParfum.map((item) => ({
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
  const content = dataAllParfum.filter((item) => {
    return item.slug === slug;
  });

  return {
    props: {
      content,
    },
  };
}
