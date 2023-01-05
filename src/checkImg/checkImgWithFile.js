import React, { useEffect, useState } from "react";

// const loadImage = (setImgs, url) => {
//   const img = new Image();
//   img.src = url;

//   img.onload = () => {
//     setImgs({
//       height: img.height,
//       width: img.width
//     });
//   };
//   img.onerror = (err) => {
//     console.log("img error");
//     console.error(err);
//   };
// };

const CheckImgWithFile = () => {
  const [imgs, setImgs] = useState({});
  let url;

  useEffect(() => {
    // loadImage(setImgs, url.image);
        const img = new Image();
        img.src = url;
      
        img.onload = () => {
          setImgs({
            height: img.height,
            width: img.width
          });
        };
        img.onerror = (err) => {
          console.log("img error");
          console.error(err);
        };

  }, []);

  const onImageChange = (event) => {
    debugger
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        url = e.target.result
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
console.log(url,"imgsimgs")
  return (
    <div>

      <input type="file" onChange={onImageChange} className="filetype" id="group_image" />
      <br />
      {url === undefined ? (
        <b>Calculating...</b>
      ) : (
        <>
          <p>
            <b>Height:</b> {imgs.height}{" "}
          </p>
          <p>
            <b>Width:</b> {imgs.width}{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default CheckImgWithFile;










// import React, { useEffect, useState } from "react";

// // const loadImage = (setImgs, url) => {
// //   const img = new Image();
// //   img.src = url;

// //   img.onload = () => {
// //     setImgs({
// //       height: img.height,
// //       width: img.width
// //     });
// //   };
// //   img.onerror = (err) => {
// //     console.log("img error");
// //     console.error(err);
// //   };
// // };

// const CheckImgWithFile = () => {
//   const [imgs, setImgs] = useState({});
//   const [url, setUrl] = useState({});

//   useEffect(() => {
//     // loadImage(setImgs, url.image);
//         const img = new Image();
//         img.src = url.image;
      
//         img.onload = () => {
//           setImgs({
//             height: img.height,
//             width: img.width
//           });
//         };
//         img.onerror = (err) => {
//           console.log("img error");
//           console.error(err);
//         };

//   }, []);

//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       let reader = new FileReader();
//       reader.onload = (e) => {
//         setUrl({ image: e.target.result });
//       };
//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }
// console.log(url.image,"imgsimgs")
//   return (
//     <div>

//       <input type="file" onChange={onImageChange} className="filetype" id="group_image" />
//       <br />
//       {Object.keys(url).length === 0 ? (
//         <b>Calculating...</b>
//       ) : (
//         <>
//           <p>
//             <b>Height:</b> {imgs.height}{" "}
//           </p>
//           <p>
//             <b>Width:</b> {imgs.width}{" "}
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default CheckImgWithFile;