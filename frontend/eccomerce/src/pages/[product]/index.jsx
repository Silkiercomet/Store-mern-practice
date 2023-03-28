import React from "react";

export default function Product({ product }) {
  const { name, company, _id, featured, price, rating } = product;

  return (
    <div className="product">
      <img src="https://picsum.photos/300/?decoration" alt={`${name}`} />
      <div>
        <p className="card__header">{name}</p>
        <p className="card__price">${price}</p>
        <p>{company}</p>
        <p>Rating: {rating}</p>
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
