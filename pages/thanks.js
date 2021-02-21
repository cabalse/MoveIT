import Layout, { siteTitle } from "components/Layout";

import Head from "next/head";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <span>Tack så mycket!!!!</span>
    </Layout>
  );
}
