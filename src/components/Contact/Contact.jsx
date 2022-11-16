import React from "react";

export default function Contact() {
  return (
    <>
      <section className=" text-center Contact py-5 mt-5">
        <h1>CONTACTME</h1>
        <div>
          <span className=" d-inline-block"></span>
          <i className="fa-solid fa-star fa-2x px-2 "></i>
          <span className=" d-inline-block"></span>
        </div>

        <div className="input_section  pt-4 mt-4">
          <form>
            <input
              className=" form-control  "
              type="text"
              name=""
              id=""
              placeholder="Name"
              required
              pattern="^[A-Z][a-z]{3,9}$"
            />
            <input
              className=" form-control my-3  "
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              required
              pattern=""
            />
            <input
              className=" form-control  "
              type="text"
              name=""
              id=""
              placeholder="Phone Number"
              required
            />
            <textarea
              className="form-control  my-3"
              name=""
              id=""
              cols="5"
              rows="8"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-success mt-4 p-3 d-flex ">
              <h6> Send</h6>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
