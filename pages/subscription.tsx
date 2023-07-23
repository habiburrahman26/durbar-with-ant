import { SubscriptionPackageType } from "@/types/common";
import Head from "next/head";
import { Button, Space, Typography } from "antd";
import styles from "@/styles/subscription.module.css";
import { ReactElement } from "react";
import { RootLayout } from "@/layout/RootLayout";

type PropsType = {
  subscriptionPackages: SubscriptionPackageType[];
};

const { Title, Text } = Typography;

const Subscription = ({ subscriptionPackages }: PropsType) => {
  return (
    <section style={{ paddingTop: "20px" }}>
      <Head>
        <title>Subscription - Durbar OTT</title>
      </Head>
      <div className={styles.center}>
        <Title level={4}>Buy Durbar Premium</Title>
        <Text>Unlimited movies, dramas, and more.</Text>
      </div>
      <div className={styles.subscription}>
        {subscriptionPackages?.map((p) => (
          <div key={p.id} className={styles.package}>
            <div>
              <Title level={5} className={styles.title}>
                {p.plan_name}
              </Title>
              <Title level={5} className={styles.title}>
                {p.regular_price}
              </Title>
            </div>
            <Button>Buy Now</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscription;

export async function getStaticProps() {
  const res = await fetch(
    "https://ott.durbar.live/api/v1/web/available-subscription-plans"
  );
  const data = await res.json();

  return {
    props: {
      subscriptionPackages: data?.data,
    },
  };
}

Subscription.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
