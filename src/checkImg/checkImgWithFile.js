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

const CheckImgWithFile = () => {
  const [imageDimensions, setImageDimensions] = useState({});
  const [imgs, setImgs] = useState({});
  const imageUrl = "https://picsum.photos/200/300";

  useEffect(() => {
    loadImage(setImageDimensions, imageUrl);
    console.log(imageDimensions);
  }, []);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImgs({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
console.log(imgs.image,"imgsimgs")
  return (
    <div>

      <input type="file" onChange={onImageChange} className="filetype" id="group_image" />
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

export default CheckImgWithFile;