import React from "react";

function Header({ type, title, user, subtext }: HeaderBoxProps) {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl">{title}</h1>
      <p className="text-sm text-gray-300">{subtext}</p>
    </div>
  );
}

export default Header;
