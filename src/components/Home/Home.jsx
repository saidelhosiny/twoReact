import React from "react";
import imageHeader from "../image/avataaars.svg";

export default function Home() {
  return (
    <>
      <header className=" vh-100  text-center text-white d-flex justify-content-center align-items-center">
        <figure>
          <img className="imageheader " src={imageHeader} alt="" />
          <h1 className="h1header py-3">START REACT</h1>
          <div >
            <span className=" d-inline-block"></span>
          <i className="fa-solid fa-star fa-2x px-2 "></i>
          <span className=" d-inline-block"></span>
          </div>

          <h4 className=" pt-3">Graphic Artist - Web Designer - Illustrator</h4>
        </figure>
      </header>
    </>
  );
}
