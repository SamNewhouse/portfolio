import { FC, memo, PropsWithChildren } from "react";

interface Props {
  className?: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github?: string;
}

const Header: FC<Props> = ({
  className,
  name,
  location,
  phone,
  email,
  linkedin,
  github,
}) => {
  return (
    <>
      <header
        className={`text-gray-900 mb-4 border-b border-gray-300 ${
          className ? className : ""
        }`}
      >
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="mt-1 text-gray-600">{location}</p>
        <div className="my-1 text-sm flex flex-wrap gap-4">
          <p>{phone}</p>
          <p>{email}</p>
          {github && <p>{github}</p>}
          <p>{linkedin}</p>
        </div>
      </header>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(Header);
