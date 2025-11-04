import { ComponentProps } from "react";

type Props = ComponentProps<"h1">;

export default function Title({ className, ...props }: Props) {
  return <h1 className={`text-3xl ${className}`} {...props} />;
}

// type TitleProps = ComponentProps<typeof Title>
