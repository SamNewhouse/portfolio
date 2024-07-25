import Link from "next/link";
import { FC, memo } from "react";
import CardContent from "../1-atoms/CardContent";
import CardHeader from "../1-atoms/CardHeader";

interface Props {
  url?: string;
  cardContentClassName?: string;
  cardHeaderClassName?: string;
  imgUrl?: string;
  imgWidth?: string;
  cardName: string;
  cardDescription: string;
}

const Card: FC<Props> = ({ url, cardHeaderClassName, cardContentClassName, imgUrl, imgWidth, cardName, cardDescription }) => {
  const cardComponent = (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full">
      {imgUrl && (
        <CardHeader
          cardHeaderClassName={cardHeaderClassName}
          imgUrl={imgUrl}
          imgWidth={imgWidth}
          cardName={cardName}
        />
      )}
      <CardContent
        cardContentClassName={cardContentClassName}
        cardName={cardName}
        cardDescription={cardDescription}
      />
    </div>
  );
  return url ? (
    <Link href={url} target="_blank" rel="noopener" className="h-full">
      {cardComponent}
    </Link>
  ) : (
    cardComponent
  );
};

export default memo<Props>(Card);
