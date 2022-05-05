import React, { useEffect, useState } from "react";
import Item from "./Item";
import Axios from "axios";
import { IPicture } from "../common/interface";

const Lists = () => {
  const getData = async () => {
    let result: any = [];
    await Axios.get(process.env.PUBLIC_URL + "/data/pictures.json")
      .then((response) => {
        result = response.data;
      })
      .catch((error) => console.log("error:", error));
    return result;
  };

  const [pictures, setPictures] = useState<IPicture[]>([]);

  useEffect(() => {
    getData().then((res) => setPictures(res));
  }, []);

  return (
    <>
      {pictures.map((picture, index) => (
        <Item key={index} data={picture} />
      ))}
    </>
  );
};

export default Lists;
