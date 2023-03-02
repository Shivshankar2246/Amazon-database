import Header from "@/components/Header";
import Head from "next/head";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon_Build</title>
      </Head>

      {/* header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
      </main>
    </div>
  );
}
