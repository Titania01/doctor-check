import React, { MouseEventHandler, ReactNode } from "react";
import "./Button.scss";

// const Wrapper = styled.button<{ isAdd?: boolean; isActive?: boolean }>`
//   padding: 0.8rem 4em;
//   border-radius: 10px;
//   border: ${(props) => (props.isAdd ? "1px solid #7165E3" : "none")};
//   background-color: ${(props) =>
//     props.isActive ? "#7165E3" : props.isAdd ? "white" : "#7165E3"};
//   color: ${(props) =>
//     props.isActive ? "white" : props.isAdd ? "#7165E3" : "white"};
//   font-weight: 500;
//   cursor: pointer;

//   :hover {
//     background-color: ${(props) => (props.isAdd ? "#7165E3" : "white")};
//     color: ${(props) => (props.isAdd ? "white" : "#07a807")};
//     border: 1px solid #7165e3;
//   }
// `;

const Button = ({
  children,
  isAddBtn,
  isActive,
  type,
  onClick,
}: {
  children?: ReactNode;
  isAddBtn?: boolean;
  isActive?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className="button-wrapper" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
