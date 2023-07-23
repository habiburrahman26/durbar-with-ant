import Head from "next/head";
import { RootLayout } from "@/layout/RootLayout";
import HomeBanner from "@/components/HomeBanner";
import { ContentSectionType, HomeSliderType } from "@/types/common";
import styles from "@/styles/home.module.css";
import { Typography, Space } from "antd";
import HomeMovieSlider from "@/components/HomeMovieSlider";

type PropsType = {
  slider: HomeSliderType[];
  section: ContentSectionType[];
};
export default function Home({ slider, section }: PropsType) {
  return (
    <>
      <Head>
        <title>Home - Durbar OTT</title>
        <meta name="description" content="This is durbar ott home page" />
      </Head>

      <section>
        <HomeBanner slider={slider} />
      </section>

      {section?.map((m) => (
        <section key={m.id} style={{ padding: "0 8px 0 14px", overflowX: "hidden" }}>
          <Space>
            <Typography.Title level={3}>
              {m.content_type_title?.toUpperCase()}
            </Typography.Title>
          </Space>
          <HomeMovieSlider
            movieData={m?.frontend_custom_content_limited_data}
          />
        </section>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const [categoryRes, sectionRes] = await Promise.all([
    fetch("https://ott.durbar.live/api/v1/web/sliders"),
    fetch("https://ott.durbar.live/api/v1/web/frontend/custom/sections"),
  ]);

  const [categoryData, sectionData] = await Promise.all([
    categoryRes.json(),
    sectionRes.json(),
  ]);

  const homeSliderData = categoryData?.data?.original?.filter(
    (s: HomeSliderType) => s.is_home === 1
  );

  return {
    props: {
      slider: homeSliderData,
      section: sectionData.data,
    },
  };
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
