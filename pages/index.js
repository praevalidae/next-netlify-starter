import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2253eea21c524342863e02c1af230c41@o299784.ingest.sentry.io/6293879",

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [new Sentry.Replay()],
});

export default function Home() {
  const asdf = () => {
    throw "testing sentry";
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div onClick={() => asdf()}>BREAK IT</div>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
