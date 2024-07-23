import { FC, memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  cardContentClassName?: string;
  cardName: string;
  cardDescription: string;
}

const CardContent: FC<Props> = ({ cardContentClassName, cardName, cardDescription }) => {
  return (
    <>
      <div className={`p-4${cardContentClassName ? " " + cardContentClassName : ""}`}>
        <h3 className="text-xl font-bold">{cardName}</h3>
        <p className="text-muted-foreground">
          {cardDescription}
        </p>
      </div>
    </>
  );
};

export default memo<Props>(CardContent);
