import { HomeSliderType } from "@/types/common";
import { Col, Row, Typography, Button, Space } from "antd";
import { PlusOutlined, PlayCircleOutlined } from "@ant-design/icons";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import Image from "next/image";

type PropsType = {
  slider: HomeSliderType[];
};

const HomeBanner = ({ slider }: PropsType) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const findActiveSliderData = slider.find((d, i) => i === activeSlide);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    beforeChange: (_current: number, next: number) => {
      setImageIndex(next);
    },
    afterChange: (index: number) => {
      setActiveSlide(index);
    },
    className: "home-slider",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.section}>
      <Row align="middle" gutter={16}>
        <Col span={13}>
          <div>
            <Typography.Text className={styles.category}>
              {findActiveSliderData?.root_category["movie type"].toUpperCase()}
            </Typography.Text>
            <Typography.Title level={2} style={{ marginTop: "0" }}>
              {findActiveSliderData?.title}
            </Typography.Title>
            <Typography.Text className={styles.description}>
              {findActiveSliderData?.description}
            </Typography.Text>
            <Typography.Title level={3} style={{ marginTop: "7px" }}>
              {findActiveSliderData?.bottom_title || "Coming soon"}
            </Typography.Title>

            <Space>
              <Button type="primary" size="large" icon={<PlayCircleOutlined />}>
                <Link href={`/watch/${findActiveSliderData?.content_url}`}>
                  Watch Now
                </Link>
              </Button>
              <Button icon={<PlusOutlined />} size="large">
                Watch List
              </Button>
            </Space>
          </div>
        </Col>
        <Col span={11}>
          <Slider {...settings}>
            {slider.map((s, i) => (
              <Image
                key={s.id}
                src={s.image}
                alt={s.title}
                width={250}
                height={400}
                style={{ borderRadius: "4px" }}
                className={`${
                  i === imageIndex ? "active-slide" : "inactive-slide"
                }`}
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </section>
  );
};

export default HomeBanner;
