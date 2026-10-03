"use client";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProductCard = ({ product }) => {
  const context = useContext(UserContext);
  const userName = context?.user?.name ?? "Guest";

  const { name, price, description } = product;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-sm text-base-content/70">Sold to {userName}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${price.toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;