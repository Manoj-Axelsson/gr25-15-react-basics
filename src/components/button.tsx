import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "outline";
}

const buttonVariants = {
  primary: "bg-blue-600 text-blue-50",
  outline: "border-2",
};

const baseClassName = "p-2 rounded-md";

function Button({ variant = "primary", className, ...props }: Props) {
  // if (variant === "primary") {
  //   return <button {...props} />;
  // }

  return (
    <button
      className={`${className} ${baseClassName} ${buttonVariants[variant]}`}
      {...props}
    />
  );
}

export default Button;
