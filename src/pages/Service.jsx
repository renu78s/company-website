import React from "react";
import Card from "../components/Card";
import dataApi from "../api/api";

const Service = () => {
  const post = dataApi;

  const style = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  };

  return (
    <div style={style}>
      {post.map((data) => {
        const { id, topic, description, image } = data;
        console.log(image);
        return (
          <div key={id}>
            <Card image={image} topic={topic} description={description} />
          </div>
        );
      })}
    </div>
  );
};

export default Service;
