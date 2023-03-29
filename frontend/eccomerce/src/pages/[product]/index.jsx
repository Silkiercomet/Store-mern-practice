import React from "react";
import Link from "next/link"
export default function Product({ product }) {
  const { name, company, _id, featured, price, rating } = product;

  return (
    <div className="product">
      <img src="https://picsum.photos/300/?decoration" alt={`${name}`} />
      <div className="product__details">
        <p className="product__card_header">{name}</p>
        <p className="product__card_price">${price}</p>
        <p>{company}</p>
        <p>Rating: {rating}</p>
        <Link href={`/`}>
        <button className="btn">go back</button>
        </Link>
      </div>
    </div>
  );
}

const getAllProducts = async (path = "") => {
  const res = await fetch(
    `http://localhost:3001/api/${!!path ? `product/${path}` : ""}`
  );
  const data = res.json();
  return data;
};

export async function getStaticProps(context) {
  const { product } = context.params;

  const data = await getAllProducts(product);

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await getAllProducts();
  const productsIds = await data.map((e) => ({
    params: { product: `${e._id}` },
  }));
  return {
    paths: productsIds,
    fallback: true, // Pre-render any unmatched routes at runtime
  };
}
