import { FC } from "react";

type Props = {
  src: string;
};

const Icon: FC<Props> = ({ src }) => {
  return <img className="object-contain w-5 h-5" src={src} />;
};

export default Icon;
