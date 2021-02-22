import Layout, { siteTitle } from "components/Layout";
import {
  composeOfferInformation,
  offerCalculator,
} from "../components/OfferCalculator";
import { useEffect, useState } from "react";

import Form from "components/Form";
import FormPageLayout from "components/FormPageLayout";
import Head from "next/head";
import { useFormData } from "components/FormData";

export default function QuotationResponse() {
  const inputData = useFormData();
  const [offerResult, setOfferResult] = useState(null);

  useEffect(() => {
    offerCalculator(
      "",
      "",
      inputData.volume,
      inputData.additionalVolume,
      inputData.largeObject
    ).then((data) => {
      var res = {
        ...data,
        data: {
          ...inputData,
          ...composeOfferInformation(data.id, data.price, data.distance),
        },
      };
      setOfferResult(res);
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {offerResult ? (
        <FormPageLayout
          title={"Offertförslag " + offerResult.id + " för bohagsflytt"}
          class="quotation_response"
        >
          <Form
            preview={{ show: true, data: offerResult.data }}
            nextStep="/thanks"
          />
        </FormPageLayout>
      ) : (
        <div className="container">
          <div className="row">
            <div className="twelve columns">Laddar information ...</div>
          </div>
        </div>
      )}
    </Layout>
  );
}
