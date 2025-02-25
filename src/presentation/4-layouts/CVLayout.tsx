import { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const CVLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div
        className={`min-h-screen bg-gray-300 flex flex-col items-center justify-center transition-all p-4${
          className ? " " + className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(CVLayout);
