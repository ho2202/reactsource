import React, { useEffect, useState } from "react";
import { getBook } from "../api/bookApi";
import Loading from "./Loading";

const BookDetail = ({ id }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    getBook(id).then((data) => {
      console.log(data);
      setBook(data);
    });
  }, [id]);

  if (!book) return <Loading />;

  return (
    <section>
      <div>
        <h2>{book.title}</h2>
        <p>
          <strong>Author : {book.author}</strong>
        </p>
        <p>
          <strong>Genre : {book.genre}</strong>
        </p>
        <p>
          <strong>PUblished date : {book.publishedDate}</strong>
        </p>
        <p>
          <strong>rating : {book.rating}</strong>
          <span></span>
        </p>
        <p>
          <strong>Avail : {book.available ? "Available" : "Unavailable"}</strong>
          <span></span>
        </p>
      </div>
      <div className="text-center p-2">
        <button type="submit">Add</button>
        <button type="button">Cancel</button>
      </div>
    </section>
  );
};

export default BookDetail;
