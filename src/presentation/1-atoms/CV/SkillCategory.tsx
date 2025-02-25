import { FC, memo, PropsWithChildren } from "react";

interface Props {
  className?: string;
  title: string;
  skills: string;
  description: string;
}

const SkillCategory: FC<Props> = ({
  className,
  title,
  skills,
  description,
}) => {
  return (
    <>
      <div className={`mb-3${className ? className : ""}`}>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-800 mb-1">{skills}</p>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(SkillCategory);
