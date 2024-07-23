import Link from "next/link";
import { FC, memo } from "react";

interface Props {
  className?: string;
}

const Contact: FC<Props> = ({ className }) => {
  return (
    <>
      <section className={`w-full py-10 md:py-20 lg:py-30 border-t${className ? " " + className : ""}`} id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Connect</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm always excited to discuss new projects and opportunities. Feel free to reach out to me!
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              href="mailto:hello@samnewhouse.co.uk"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target=""
              rel="noopener"
            >
              Email Me
            </Link>
            <Link
              href="https://linkedin.com/in/snewhouse"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo<Props>(Contact);
