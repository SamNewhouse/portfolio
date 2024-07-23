import { FC, memo } from "react";

interface Props {
  className?: string;
  cardHeaderClassName?: string;
  imgUrl?: string;
  imgWidth?: string;
  cardName: string;
}

const CardHeader: FC<Props> = ({ cardHeaderClassName, imgUrl, imgWidth, cardName }) => {
  const width = imgWidth ? imgWidth : "550";
  return (
    <>
      <div className={`p-4${cardHeaderClassName ? " " + cardHeaderClassName : ""}`}>
        <div className="overflow-hidden rounded-xl">
          <img
              src={imgUrl + "?q=100&w=" + width}
              width={width}
              height="310"
              alt={cardName}
              className="mx-auto aspect-video object-cover object-center brightness-75 saturate-150 hover:scale-[110%] hover:saturate-100 hover:brightness-100 transition-all duration-300"
          />
          </div>
        </div>
    </>
  );
};

export default memo<Props>(CardHeader);
