import "../styles/global.scss";

import { FormDataProvider } from "../components/FormData";

export default function App({ Component, pageProps }) {
  return (
    <FormDataProvider>
      <Component {...pageProps} />
    </FormDataProvider>
  );
}
