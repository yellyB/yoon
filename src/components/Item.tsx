import React from "react";
import { Card } from "antd";
import { IPicture } from "../common/interface";

const { Meta } = Card;

const Item = (props: { data: IPicture }) => {
  const { data } = props;

  const description = (
    <div>
      <div>{data.title}</div>
      <div>{data.size}</div>
      <div>{data.created}</div>
      <div>{data.descriptions}</div>
    </div>
  );

  return (
    <Card hoverable>
      <div style={{ display: "flex" }}>
        <img
          alt="example"
          // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          src={process.env.PUBLIC_URL + "/images/" + data.fileName + ".png"}
          style={{ width: 260, height: 340 }}
        />
        {description}
      </div>
    </Card>
  );
};

export default Item;
