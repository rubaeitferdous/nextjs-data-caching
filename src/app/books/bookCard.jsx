"use client";

import { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

const BookCard = ({ book }) => {
  const { id, title, author, description } = book;
  const context = useContext(UserContext);
  const userName = context?.user?.name ?? "Guest";

  return (
    <div className="card h-full w-full bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>by {author}</p>
        <p>{description}</p>
        <p className="text-sm text-base-content/70">For {userName}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={`/books/${id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

 