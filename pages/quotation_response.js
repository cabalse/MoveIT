import Layout, { siteTitle } from "components/Layout";
import { useEffect, useState } from "react";

import Form from "components/Form";
import FormPageLayout from "components/FormPageLayout";
import Head from "next/head";
import { offerCalculator } from "../components/OfferCalculator";
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
          price: "Uppskattat pris: " + data.price + " kr inkl moms",
          distance: "Totalt avstånd mellan bostäder: " + data.distance + " km",
          info:
            "Offert gäller i 90 dagar utifrån vårt svar till dig.<br/>Vid frågor kontakta <a href='mailto:flytt@move-it.se'>flytt@move-it.se</a><br/><br/>För att se offerten igen klicka här: <a href=''>move-it.se/offert/XXXXX</a>",
        },
      };
      console.log(res);
      setOfferResult(res);
    });
  }, [inputData]);

  return offerResult ? (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FormPageLayout
        title={"Offertförslag " + offerResult.id + " för bohagsflytt"}
        class="quotation_response"
      >
        <Form preview={{ show: true, data: offerResult.data }} />
      </FormPageLayout>
    </Layout>
  ) : null;
}
