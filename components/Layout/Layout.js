import Head from "next/head";
import styles from "./Layout.module.scss";

export const siteTitle = "MOVE IT";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="content" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.color_plate}></div>
      <header className={styles.header}>
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <img
                className="u-pull-right"
                src="/images/logo.png"
                alt="Move IT Logo"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="">{children}</main>
    </div>
  );
}
