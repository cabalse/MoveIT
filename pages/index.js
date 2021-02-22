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
          <div className="twelve columns">Välkommen till Move IT</div>
          <Link href="/quotation_request">Offert förfrågan</Link>
        </div>
      </div>
    </Layout>
  );
}
