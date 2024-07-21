import { FC, memo } from "react";

interface Props {
  className?: string;
  imgUrl?: string;
  imgWidth?: string;
  cardName: string;
}

const CardHeader: FC<Props> = ({ className, imgUrl, imgWidth, cardName }) => {
  const width = imgWidth ? imgWidth : "550";
  return (
    <>
        <div className={`flex flex-col space-y-1.5 p-4${className ? " " + className : ""}`}>
          <img
              src={imgUrl + "?q=100&w=" + width}
              width={width}
              height="310"
              alt={cardName}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
        </div>
    </>
  );
};

export default memo<Props>(CardHeader);
