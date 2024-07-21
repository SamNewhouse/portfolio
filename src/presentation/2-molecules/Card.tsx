import { FC, memo, PropsWithChildren } from "react";
import CardContent from "../1-atoms/CardContent";
import CardHeader from "../1-atoms/CardHeader";

interface Props {
  className?: string;
  imgUrl?: string;
  imgWidth?: string;
  cardName: string;
  cardDescription: string;
}

const Card: FC<Props> = ({ className, imgUrl, imgWidth, cardName, cardDescription }) => {
  return (
    <>
        <div className={`rounded-lg border bg-card text-card-foreground shadow-sm${className ? " " + className : ""}`}>
          { imgUrl ? <CardHeader imgUrl={imgUrl} imgWidth={imgWidth} cardName={cardName} /> : null }
          <CardContent cardName={cardName} cardDescription={cardDescription} />
        </div>
    </>
  );
};

export default memo<PropsWithChildren<Props>>(Card);
