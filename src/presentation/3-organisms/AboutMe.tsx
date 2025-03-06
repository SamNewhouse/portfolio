import Link from "next/link";
import { FC, memo } from "react";
import Card from "../2-molecules/Card";

interface Props {
  className?: string;
}

const AboutMe: FC<Props> = ({ className }) => {
  return (
    <>
      <section
        className={`w-full py-12 md:py-24 lg:pt-24 lg:pb-20 bg-muted${
          className ? " " + className : ""
        }`}
        id="about"
      >
        <div className="space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Me
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                As a Software Engineer based in Brighton, I specialise in
                leveraging TypeScript and AWS services to create advanced web
                applications. With a robust background in both front-end and
                back-end development, I excel in designing intuitive user
                experiences and scalable architectures. I work closely with
                teams to deliver innovative solutions that cater to the evolving
                needs of our users.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              cardName="Front-end Development"
              cardDescription="I have extensive experience in building responsive and interactive user interfaces using modern front-end frameworks like React and Vue.js"
            />
            <Card
              cardName="Back-end Development"
              cardDescription="I'm proficient in building scalable and secure back-end systems using Node.js, Express, and various database technologies like MongoDB, PostgreSQL, and MySQL."
            />
            <Card
              cardName="DevOps and Cloud"
              cardDescription="I have experience in setting up and managing infrastructure on cloud platforms like AWS, as well as automating deployment processes using tools such as Docker and Kubernetes."
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="w-full">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl mb-3">
                Curriculum vitae
              </h2>
              <div className="flex flex-col items-center justify-center gap-2 p-6">
                <Link href="/cv" target="_blank" rel="noopener">
                  <img
                    className="drop-shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-all rounded-xl overflow-hidden hover:scale-[102%]"
                    src="https://apparent-sapphire-ape.myfilebase.com/ipfs/QmWFPmYESoteVXXBMMQ35z6EiMSMWH2d2mF2PLLESfJhuS"
                  />
                </Link>
                <Link
                  href="https://drive.google.com/uc?export=download&id=1btdzRaqVKzdS_Ys4j2rJ7iSWXvzuPAPq"
                  className="hover:underline"
                  rel="noopener"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo<Props>(AboutMe);
