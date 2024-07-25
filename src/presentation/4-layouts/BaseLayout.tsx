import Link from "next/link";
import { FC, memo, PropsWithChildren, ReactNode } from "react";
import Github from "../1-atoms/icons/Github";

interface Props {
  children?: ReactNode;
  className?: string;
}

const BaseLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`flex flex-col min-h-[100dvh]${className ? " " + className : ""}`}
      >
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; {`${new Date().getFullYear().toString()} Sam Newhouse. All rights reserved.`}
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="https://github.com/SamNewhouse" prefetch={false} target="_blank" rel="noopener">
              <Github />
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(BaseLayout);
