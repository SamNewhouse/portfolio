import { FC, memo } from "react";
import Card from "../2-molecules/Card";

interface Props {
  className?: string;
}

const AboutMe: FC<Props> = ({ className }) => {
  return (
    <>
      <section className={`w-full py-12 md:py-24 lg:py-32 bg-muted${className ? " " + className : ""}`} id="about">
          <div className="space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a software developer with a passion for creating innovative and user-friendly applications. I have
                  a strong background in full-stack web development, with expertise in technologies like React, Node.js,
                  and MongoDB. I'm constantly learning and exploring new technologies to improve my skills and deliver
                  the best possible solutions for my clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                cardName="Front-end Development"
                cardDescription="I have extensive experience in building responsive and interactive user interfaces using modern front-end frameworks like React, Vue.js, and Angular."
              />
              <Card
                cardName="Back-end Development"
                cardDescription="I'm proficient in building scalable and secure back-end systems using Node.js, Express, and various database technologies like MongoDB, PostgreSQL, and MySQL."
              />
              <Card
                cardName="DevOps and Cloud"
                cardDescription="I have experience in setting up and managing infrastructure on cloud platforms like AWS, Azure, and Google Cloud, as well as automating deployment processes using tools like Docker and Kubernetes."
              />
            </div>
          </div>
        </section>
    </>
  );
};

export default memo<Props>(AboutMe);



