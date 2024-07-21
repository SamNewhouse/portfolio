import { NextPage } from "next";
import FeaturedProjects from "../3-organisms/FeaturedProjects";
import Header from "../3-organisms/Header";
import HeaderImage from "../3-organisms/HeaderImage";
import BaseLayout from "../4-layouts/BaseLayout";

interface Props {
  //
}

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <BaseLayout className="home">
        <Header />
        <main className="flex-1">
          <HeaderImage />
          <FeaturedProjects />
      </main>
      </BaseLayout>
    </>
  );
};

export default HomePage;
