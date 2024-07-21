import { FC, memo } from "react";

interface Props {
  className?: string;
}

const HeaderImage: FC<Props> = ({ className }) => {
  return (
    <>
      <section className={`w-full h-[calc(100dvh-(6.9rem*2))] bg-cover bg-center bg-no-repeat relative transition-all${className ? " " + className : ""}`}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')` }}
        >
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/70 before:z-10 flex items-center justify-center">
            <div className="container space-y-10 xl:space-y-16 px-4 lg:px-1 2xl:px-0 relative z-20">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col items-start justify-center text-white">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Sam Newhouse
                  </h1>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">Software Engineer</h2>
                  <p className="mt-4 max-w-[650px] md:text-lg">
                  I am an experienced Software Engineer skilled in full-stack development and cloud services. I excel in improving efficiency and scalability in web applications, consistently delivering high-quality solutions with TypeScript, JavaScript, and AWS.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo<Props>(HeaderImage);
