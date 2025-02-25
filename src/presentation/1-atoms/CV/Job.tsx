import { FC, memo, PropsWithChildren } from "react";

interface Props {
  className?: string;
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

const Job: FC<Props> = ({
  className,
  title,
  company,
  period,
  location,
  responsibilities,
  achievements,
  technologies,
}) => {
  return (
    <>
      <div
        className={`pb-4 mb-4 border-b last:border-none border-gray-300 last:mb-0 last:pb-0${
          className ? className : ""
        }`}
      >
        <h3 className="font-semibold text-lg text-gray-900">
          {title} / {company}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {period} / {location}
        </p>
        <div className="mb-2">
          <h4 className="font-medium text-sm text-gray-800">
            Key Responsibilities:
          </h4>
          <ul className="list-disc list-inside">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm text-gray-600">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2">
          <h4 className="font-medium text-sm text-gray-800">
            Key Achievements:
          </h4>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-gray-600">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-800">
            Technologies Used:
          </h4>
          <p className="text-sm text-gray-600">{technologies.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(Job);
