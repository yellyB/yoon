import React from "react";
import { Card } from "antd";
import { IPicture } from "../common/interface";

const { Meta } = Card;

const Item = (props: { data: IPicture }) => {
  const { data } = props;

  console.log(data);

  const description = (
    <>
      <div>{data.size}</div>
      <div>{data.created}</div>
      <div>{data.descriptions}</div>
    </>
  );

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={data.title} description={description} />
    </Card>
  );
};

export default Item;
