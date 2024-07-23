import { FC, memo } from "react";
import CardContent from "../1-atoms/CardContent";
import CardHeader from "../1-atoms/CardHeader";

interface Props {
  cardContentClassName?: string;
  cardHeaderClassName?: string;
  imgUrl?: string;
  imgWidth?: string;
  cardName: string;
  cardDescription: string;
}

const Card: FC<Props> = ({ cardHeaderClassName, cardContentClassName, imgUrl, imgWidth, cardName, cardDescription }) => {
  return (
    <>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full">
          { imgUrl ? <CardHeader cardHeaderClassName={cardHeaderClassName} imgUrl={imgUrl} imgWidth={imgWidth} cardName={cardName} /> : null }
        <CardContent cardContentClassName={cardContentClassName} cardName={cardName} cardDescription={cardDescription} />
        </div>
    </>
  );
};

export default memo<Props>(Card);
