interface ButtonProps {
  type?: "primary" | "secondary";
  theme?: "light" | "dark";
  text: string;
  className?: string;
}

export const Button = ({
  type = "primary",
  text,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`py-2 px-5 w-auto rounded-full ${
        type === "primary" ? "bg-primary" : "text-primary"
      } ${className}`}
    >
      {`${text} `}
      {type === "secondary" && <>&#8250;</>}
    </button>
  );
};
