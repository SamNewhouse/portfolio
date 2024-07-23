import { FC, memo } from "react";

interface Props {
  className?: string;
}

const Code: FC<Props> = ({ className }) => {
  return (
    <>
        <svg data-id="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-6 w-6${className ? " " + className : ""}`}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    </>
  );
};

export default memo<Props>(Code);



