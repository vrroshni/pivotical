import React from "react";

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  classnames,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
    flex 
    items-center
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg
      border border-solid 
      transition
      text-lg 
      w-full
      ${outline ? "bg-white" : "bg-black"}
      ${outline ? "border-black" : "border-black"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "py-1" : "py-2"}
      ${small ? "px-1" : "px-2"}
      ${small ? "font-light" : "font-medium"}
      ${small ? "border-[1px]" : "border-2"}
      ${classnames}
    `}
    >
      {label}
      {Icon && Icon}
    </button>
  );
};

export default Button;
