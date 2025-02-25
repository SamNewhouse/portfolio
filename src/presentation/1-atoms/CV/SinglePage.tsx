import { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const SinglePage: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`bg-white w-full lg:w-[210mm] lg:h-[297mm] shadow-sm p-4 lg:py-6 lg:px-8 mb-5${
          className ? " " + className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(SinglePage);
