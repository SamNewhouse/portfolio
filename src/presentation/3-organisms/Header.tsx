import { FC, memo } from "react";
import Code from "../1-atoms/icons/Code";
import MenuItem from "../1-atoms/MenuItem";
import RightMenu from "../2-molecules/RightMenu";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  return (
    <>
      <header className={`px-4 lg:px-6 h-14 flex items-center${className ? " " + className : ""}`}>
        <MenuItem className="flex items-center justify-center" textClassName="sr-only" text="Sam Newhouse's Portfolio">
          <Code />
        </MenuItem>
        <RightMenu />
      </header>
    </>
  );
};

export default memo<Props>(Header);
