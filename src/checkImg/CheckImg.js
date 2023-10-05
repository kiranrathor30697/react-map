import React from "react";

export default function CheckImg() {
  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    console.log(offsetHeight, offsetWidth);
  };

  return (
    <div>
      <img
        onLoad={onImgLoad}
        alt=""
        src="https://i.picsum.photos/id/360/200/300.jpg?hmac=Fl1CgUfxrFjmcS1trYDG80XpEjYixcXfc2uTtCxFkDw"
      />
    </div>
  );
}