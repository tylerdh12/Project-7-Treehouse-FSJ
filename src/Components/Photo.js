import React from "react";

const Photo = props => {
  // this takes the props passed from Gallery Component and modifies a string (URL) to then use that string as the image url
  const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  return (
    <li>
      <img src={url} alt={props.title} />
    </li>
  );
};

export default Photo;
