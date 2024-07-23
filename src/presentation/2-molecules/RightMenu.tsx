import { FC, memo } from "react";
import MenuItem from "../1-atoms/MenuItem";

interface Props {
  className?: string;
}

const RightMenu: FC<Props> = ({ className }) => {
  return (
    <>
        <nav className={`ml-auto flex gap-4 sm:gap-6${className ? " " + className : ""}`}>
          <MenuItem text="Projects" link="/#projects"/>
          <MenuItem text="About" link="/#about"/>
          <MenuItem text="Contact" link="/#contact"/>
        </nav>
    </>
  );
};

export default memo<Props>(RightMenu);
