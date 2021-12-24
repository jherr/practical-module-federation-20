import React from "react";

const Page = ({ title, text, img1, img2, img3 }) => (
  <div>
    <h1 style={{ borderBottom: "5px solid black" }}>{title}</h1>
    <p>{text}</p>
    <div className="grid-cols-3">
      <>
        {img1 && (
          <div>
            <img
              src={img1}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
        )}
        {img2 && (
          <div>
            <img
              src={img2}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
        )}
        {img3 && (
          <div>
            <img
              src={img3}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
        )}
      </>
    </div>
  </div>
);

export default Page;
