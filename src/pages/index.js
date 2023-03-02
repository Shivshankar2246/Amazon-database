import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon_Build</title>
      </Head>

      {/* header */}
      <Header />
    </div>
  );
}
