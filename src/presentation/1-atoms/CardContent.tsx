import { FC, memo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  cardName: string;
  cardDescription: string;
}

const CardContent: FC<Props> = ({ className, cardName, cardDescription }) => {
  return (
    <>
      <div className={`p-4${className ? " " + className : ""}`}>
        <h3 className="text-xl font-bold">{cardName}</h3>
        <p className="text-muted-foreground">
          {cardDescription}
        </p>
      </div>
    </>
  );
};

export default memo<Props>(CardContent);
