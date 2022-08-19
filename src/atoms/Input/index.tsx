import { InputHTMLAttributes, useState, DetailedHTMLProps } from "react";
import "./Input.scss";

type Props = {
  label?: string;
  password?: string;
  color?: string;
  variant?: "small" | "large";
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const generateId = (): string => Math.random().toString(36).substr(2, 9);

const Input = ({
  label = "",
  placeholder = "type here",
  required = true,
  color,
  variant = "large",
  ...props
}: Props) => {
  const [id] = useState(generateId());

  return (
    <div className="input-style">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input-container">
        <input
          id={id}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
