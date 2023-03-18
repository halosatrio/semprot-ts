import Head from "next/head";
import { useRouter } from "next/router";

type SeoProps = {
  title?: string;
  description?: string;
};

const SEO = (props: SeoProps) => {
  const router = useRouter();

  const desc = "Online Katalog Parfum Lokal Indonesia";
  const title = props.title ?? "Online Katalog Parfum Lokal Indonesia";

  const baseUrl = "https://semprot.vercel.app";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="canonical" href={`${baseUrl}${router.asPath}`} />
    </Head>
  );
};

export default SEO;
