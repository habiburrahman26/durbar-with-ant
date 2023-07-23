import { RootLayout } from "@/layout/RootLayout";

const SingleMoviePage = () => {
  return <div>Single movie page</div>;
};

export default SingleMoviePage;

SingleMoviePage.getLayout = function getLayout(page: React.ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
