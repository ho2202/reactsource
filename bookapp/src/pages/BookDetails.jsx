import React from "react";
import EditBook from "./EditBook";
import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail";

const BookDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-[32px]">Book Details</h1>
      <BookDetail id={id} />
    </div>
  );
};

export default BookDetails;
