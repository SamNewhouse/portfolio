import { FC, memo } from "react";
import Card from "../2-molecules/Card";

interface Props {
  className?: string;
}

const FeaturedProjects: FC<Props> = ({ className }) => {
  return (
    <>
      <section className={`w-full py-12 md:py-24 lg:py-32${className ? " " + className : ""}`} id="projects">
          <div className="space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my latest and greatest projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
              <Card
                cardHeaderClassName="flex flex-col space-y-1.5"
                imgUrl="https://ipfs.filebase.io/ipfs/QmfZDprXJocwPEM86dSYGhLq9sqKrUSQFQ4i8Y1pvYJfHe"
                cardName="TPICAP"
                cardDescription="A web application that helps users manage their tasks and projects more efficiently."
              />
              <Card
                cardHeaderClassName="flex flex-col space-y-1.5"
                imgUrl="https://ipfs.filebase.io/ipfs/Qmb5gdKKEF1hqGUEVB6R7RNwssVYDUP1q1ygB4PFuTxydb"
                cardName="Expression Insurance"
                cardDescription="A web-based dashboard that provides real-time analytics and insights for businesses."
              />
              <Card
                cardHeaderClassName="flex flex-col space-y-1.5"
                imgUrl="https://ipfs.filebase.io/ipfs/QmZibhwgdoBuHyupnxc5m4KLy45T8gJnYEyN9D2eLCqu2d"
                cardName="Collectivly"
                cardDescription="A mobile app that helps users track their fitness activities and progress."
              />
              <Card
                cardHeaderClassName="flex flex-col space-y-1.5"
                imgUrl="https://ipfs.filebase.io/ipfs/QmV3ZyLhs7xT7yTmYKDfPf9TSxVQdBvEBBkhw3pDUSdgtU"
                cardName="Shieldpay"
                cardDescription="A web-based dashboard that provides real-time analytics and insights for businesses."
              />
            </div>
          </div>
        </section>
    </>
  );
};

export default memo<Props>(FeaturedProjects);
