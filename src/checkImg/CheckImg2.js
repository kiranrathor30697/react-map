import React, { useEffect, useState } from "react";

const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};
  
const CheckImg2 = () => {
  const [imageDimensions, setImageDimensions] = useState({});
  const imageUrl = "https://picsum.photos/200/300";

  useEffect(() => {
    loadImage(setImageDimensions, imageUrl);
    console.log(imageDimensions);
  }, []);

  return (
    <div>

      <br />
      {Object.keys(imageDimensions).length === 0 ? (
        <b>Calculating...</b>
      ) : (
        <>
          <p>
            <b>Height:</b> {imageDimensions.height}{" "}
          </p>
          <p>
            <b>Width:</b> {imageDimensions.width}{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default CheckImg2;