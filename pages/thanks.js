import Layout, { siteTitle } from "components/Layout";

import Head from "next/head";
import Link from "next/link";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            Tack så mycket för din offert förfrågan!
          </div>
          <Link href="/quotation_request">Gör en ny offert förfrågan</Link>
        </div>
      </div>
    </Layout>
  );
}
