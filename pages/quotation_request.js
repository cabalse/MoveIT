import Layout, { siteTitle } from "components/Layout";

import Form from "components/Form";
import FormPageLayout from "components/FormPageLayout";
import Head from "next/head";

export default function QuotationRequest() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FormPageLayout
        title="Offertförfrågan för bohagsflytt"
        class="quotation_request"
      >
        <Form nextStep="/quotation_response" />
      </FormPageLayout>
    </Layout>
  );
}
