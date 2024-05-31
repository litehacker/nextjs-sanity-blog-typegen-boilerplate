import { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  type?: "rounded" | "edged";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  icon?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  type = "edged",
  backgroundColor,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-primary" : "bg-secondary";
  const rounded = type === "rounded" ? "rounded-[28px] px-6 py-3" : "px-8 py-4";
  return (
    <button
      type="button"
      className={`${rounded} ${mode} flex flex-row gap-5 items-center  text-white font-normal leading-6 focus:outline-none text-base focus:ring-primary focus:ring-none`}
      {...props}
    >
      <span className="button-text-white">{label}</span>
      {icon && (
        <span className="flex items-center justify-center w-5 h-5">{icon}</span>
      )}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
