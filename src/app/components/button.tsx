import { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  children,
  className = "px-5 py-2 text-base font-bold bg-[#FFA3EC] rounded border-none cursor-pointer",
  onClick = () => {},
}: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
