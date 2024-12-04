import React from "react";

function Header({ type, title, user, subtext }: HeaderBoxProps) {
  return (
    <div>
      <h1 className="text-5xl">{title}</h1>
      <p className="text-lg text-gray-300">{subtext}</p>
    </div>
  );
}

export default Header;
