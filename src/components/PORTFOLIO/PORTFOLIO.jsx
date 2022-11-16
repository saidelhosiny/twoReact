import React, { useEffect } from "react";

import one from "../image/cabin.png";
import two from "../image/cake.png";
import three from "../image/circus.png";
import four from "../image/game.png";
import five from "../image/safe.png";
import sex from "../image/submarine.png";

export default function PORTFOLIO() {


    
   
    useEffect(function(){
        let images = document.querySelectorAll(".oll_image i")
    for (let i = 0; i < images.length; i++) {
        
        images[i].addEventListener("click",function(){

         let myLayer = document.querySelector(".PORTIFOLI_layer")
         myLayer.classList.remove("d-none")
         
        })
    }

    document.querySelector(".parent_image_portifolio i  ").addEventListener("click",function(){
        console.log("lolo");
        document.querySelector(".PORTIFOLI_layer").classList.add("d-block")
    })
    document.querySelector(".parent_image_portifolio button").addEventListener("click",function(){
        console.log("fesha");
        document.querySelector(".PORTIFOLI_layer").classList.add("d-block")
    })

    },[])

    
  return (
    <>
      <section className="  text-center PORTIFOLIO py-5 mt-5">
        <h1>PORTFOLIO</h1>
        <div>
          <span className=" d-inline-block"></span>
          <i className="fa-solid fa-star fa-2x px-2 "></i>
          <span className=" d-inline-block"></span>
        </div>
        <div className=" container py-5">
          <div className="row g-5">
            <div className=" col-lg-4">
              <div className=" oll_image">
                <img className="  w-100" src={one} alt="" />
                <div className=" layer">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
            <div className=" col-lg-4">
              <div className=" oll_image">
                <img className=" w-100" src={two} alt="" />
                <div className=" layer">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
            <div className=" col-lg-4">
              <div className=" oll_image">
                <img className=" w-100" src={three} alt="" />
                <div className=" layer">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
            <div className=" col-lg-4">
              <div className=" oll_image">
                <img className=" w-100" src={four} alt="" />
                <div className=" layer">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
            <div className=" col-lg-4">
              <div className=" oll_image">
                <img className=" w-100" src={five} alt="" />
                <div className=" layer">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
            <div className=" col-lg-4">
              <div className=" oll_image">
                <img className=" w-100" src={sex} alt="" />
                <div className=" layer">
                  <i className="fa-solid fa-plus fa-5x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <div className=" position-fixed  d-none PORTIFOLI_layer   bg-secondary bg-opacity-75 top-0 end-0 bottom-0 start-0">
        <div className=" text-center  parent_image_portifolio position-relative my-5 py-5 PORTIFOLIO bg-white container">
        <i class="fa-solid fa-x fa-3x position-absolute top-0 end-0 p-3 text-success "></i>
        <h1>LOG CABIN</h1>
        <div>
          <span className=" d-inline-block"></span>
          <i className="fa-solid fa-star fa-2x px-2  "></i>
          <span className=" d-inline-block"></span>
        </div>
        <img className=" one1 w-75 py-5" src={one} alt="" />
     <div className=" my-4">
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,</p>
      <p>molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit</p>
      <p>soluta, eos quod consequuntur itaque. Nam.</p>
     </div>

        <button className=" btn bg-success text-white "> <i className="fa-solid fa-x text-white"></i> Close Window </button>


        </div>

       

            
       
        </div>
        
        
    </>
  );
}
