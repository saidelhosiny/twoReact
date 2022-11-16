import React from "react";

export default function Footer() {
  return (
    <>
      <section className=" footerEnd">
        <div className=" footerr  py-5 text-white">
          <div className=" row">
            <div className=" col-lg-4">
              <h2 className=" fw-bolder pb-3">LOCATION</h2>
              <h6>2215 John Daniel Drive</h6>
              <h6>Clark, MO 65243</h6>
            </div>
            <div className=" col-lg-4 ">
              <h2 className=" fw-bolder pb-3">AROUND THE WEB</h2>
              <div className=" d-flex  ">
                <div className=" icon_i">
                  <i className="fa-brands fa-facebook-f  "></i>
                </div>
                <div className=" icon_i ms-3">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className=" icon_i mx-3 ">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className=" icon_i">
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className=" col-lg-4">
              <h2 className=" fw-bolder pb-3">ABOUT FREELANCER</h2>
              <h6>Freelance is a free to use, MIT</h6>
              <h6>licensed Bootstrap theme created by</h6>
              <h6>Route</h6>
            </div>
          </div>
        </div>

        <section className=" ENd text-center text-white py-3">
          <p className=" pt-2">Copyright © Your Website 2021</p>
        </section>
      </section>
    </>
  );
}
