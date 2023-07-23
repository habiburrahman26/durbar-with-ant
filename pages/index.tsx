import Head from 'next/head';
import { RootLayout } from '@/layout/RootLayout';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Home - Durbar OTT</title>
        <meta name="description" content="This is durbar ott home page" />
      </Head>
    </section>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
