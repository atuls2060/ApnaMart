import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Pages = ({url,title,desc,price,cutprice,save,cut,base,id}) =>{
  console.log(price,cutprice,save,cut,base)

  return (
    <>
      <Link
        href={`http://localhost:3000/products/${id}`}
        style={{ margin: "auto", textAlign: "center" }}
      >
        <div style={{ width: "50%", margin: "auto" }}>
          <img
            style={{ width: "100%", height: "200px", margin: "auto" }}
            src={url}
            alt="images"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <p
            style={{
              borderRadius: "50%",
              backgroundColor: "black",
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          ></p>
          <p
            style={{
              borderRadius: "50%",
              backgroundColor: "red",
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          ></p>
          <p
            style={{
              borderRadius: "50%",
              backgroundColor: "orange",
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          ></p>
          <p
            style={{
              borderRadius: "50%",
              backgroundColor: "teal",
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          ></p>
          <p
            style={{
              borderRadius: "50%",
              backgroundColor: "brown",
              width: "20px",
              height: "20px",
              marginRight: "5px",
            }}
          ></p>
          <p
            style={{
              borderRadius: "50%",
              backgroundColor: "pink",
              width: "20px",
              height: "20px",
            }}
          ></p>
        </div>
        <h1
          style={{ fontWeight: "bold", fontSize: "19px", textAlign: "center" }}
        >
          {title}
        </h1>
        <h1 style={{ fontSize: "17px", textAlign: "center" }}>
          {desc.substring(0, 25)}..
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <Image
            style={{ marginRight: "5px" }}
            src="https://i.ibb.co/G9KvM8Q/star.png"
            width={20}
            height={20}
            alt="image"
          />
          <Image
            style={{ marginRight: "5px" }}
            src="https://i.ibb.co/G9KvM8Q/star.png"
            width={20}
            height={20}
            alt="image"
          />
          <Image
            style={{ marginRight: "5px" }}
            src="https://i.ibb.co/G9KvM8Q/star.png"
            width={20}
            height={20}
            alt="image"
          />
          <Image
            style={{ marginRight: "5px" }}
            src="https://i.ibb.co/G9KvM8Q/star.png"
            width={20}
            height={20}
            alt="image"
          />
          <Image
            src="https://i.ibb.co/ZJFJbZG/rating.png"
            width={20}
            height={20}
            alt="image"
          />
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "28px" }}>
            ₹{price}
            <span style={{ fontSize: "16px", textDecoration: "line-through" }}>
              {cutprice.length > 0 ? " ₹" : ""}
              {cutprice}
            </span>
          </p>
        </div>
        <p>{cut}</p>
        <p style={{ fontWeight: "500", textAlign: "center" }}>{base}</p>
      </Link>
    </>
  );
}

export default Pages