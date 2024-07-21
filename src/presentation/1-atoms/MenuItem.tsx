import Link from "next/link";
import { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  textClassName?: string;
  text?: string;
  link?: string;
}

const MenuItem: FC<Props> = ({ children, className, textClassName, text, link }) => {
  return (
    <>
        <Link href={link ? link : "#"} className={`${className ? className : "text-sm font-medium hover:underline underline-offset-4"}`} prefetch={false}>
            {children}<span className={textClassName}>{text}</span>
        </Link>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(MenuItem);
