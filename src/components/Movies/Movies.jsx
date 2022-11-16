import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function Movies() {
  let [frist, setFrist] = useState([]);

  async function Api() {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2"
    );
    let ollApi = data.results;
    setFrist(ollApi);
  }

  useEffect(function () {
    Api();
  }, []);
  return (
    <>
      <div className=" row py-5">
        {frist.map((parent, index) => (
          <div className=" col-lg-4">
            <img
              className=" w-100"
              src={"https://image.tmdb.org/t/p/w500/" + parent.poster_path}
              alt=""
            />
            <h2 className=" bg-danger text-white text-center">
              {parent.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}
