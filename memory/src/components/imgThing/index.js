import React from "react";

function ImgThing(props) {
  return (
    <img src={props.imgs} key={props.imgs}  onClick={props.imgClicked} alt={props.imgs} className="img-thumbnail" id="slot1" />
  );
}

export default ImgThing;