import { ContentType } from "@/types/common";
import { Typography } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import styles from "@/styles/home.module.css";
import Link from "next/link";

type PropsType = {
  movieData: ContentType[];
};

const HomeMovieSlider = ({ movieData }: PropsType) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    className: "movie-slider",
  };

  return (
    <div>
      <Slider {...settings}>
        {movieData.map((m) => (
          <Link
            href={`/watch/${m?.ott_content?.uuid}`}
            key={m.id}
            style={{ textDecoration: "none" }}
          >
            <Image
              src={m.ott_content.poster}
              alt={m.ott_content.title}
              width={260}
              height={400}
              className={styles.image}
            />
            <Typography.Title level={5} underline={false}>
              {m.ott_content.title}
            </Typography.Title>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default HomeMovieSlider;
