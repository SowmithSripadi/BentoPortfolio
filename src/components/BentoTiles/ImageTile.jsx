import React from "react";

function ImageTile() {
  return (
    <div className="grid-item overflow-hidden max-h-[228px] max-w-[320px] ">
      <img
        src="/images/Potrait.jpg"
        alt="profile picture"
        className="w-full h-full object-cover "
        style={{ objectPosition: "50% 30%" }}
      />
    </div>
  );
}

export default ImageTile;
