import { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  title?: string;
}

const Section: FC<Props> = ({ children, title, className }) => {
  return (
    <>
      <section className={`mb-4 last:mb-0${className ? " " + className : ""}`}>
        {title ? (
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-1 mb-4">
            {title}
          </h2>
        ) : null}
        {children}
      </section>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(Section);
