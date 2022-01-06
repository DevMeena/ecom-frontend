import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  
  var imageurl = product ? `${API}/product/photo/${product._id}` : `https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg`;

  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photoimg"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
