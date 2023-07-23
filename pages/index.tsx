import Head from "next/head";
import { RootLayout } from "@/layout/RootLayout";
import HomeBanner from "@/components/HomeBanner";
import { HomeSliderType } from "@/types/common";
import styles from "@/styles/home.module.css";

type PropsType = {
  slider: HomeSliderType[];
};
export default function Home({ slider }: PropsType) {
  return (
    <>
      <Head>
        <title>Home - Durbar OTT</title>
        <meta name="description" content="This is durbar ott home page" />
      </Head>

      <section>
        <HomeBanner slider={slider} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://ott.durbar.live/api/v1/app/sliders");
  const data = await res.json();

  const homeSliderData = data?.data?.original?.filter(
    (s: HomeSliderType) => s.is_home === 1
  );

  return {
    props: {
      slider: homeSliderData,
    },
  };
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
