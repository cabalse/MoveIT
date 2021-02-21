import Layout, { siteTitle } from "components/Layout";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="twelve columns">Welcome to Move IT Website</div>
          <Link href="/quotation_request">Offert förfrågan</Link>
        </div>
      </div>
    </Layout>
  );
}
