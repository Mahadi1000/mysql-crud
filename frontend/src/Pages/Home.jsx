import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [books, setBooks] = useState([]);
      useEffect(() => {
        const fetchAllBooks = async () => {
          try {
            const res = await axios.get("http://localhost:3000/books");
            setBooks(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllBooks();
      }, []);

      console.log(books);

        const handleDelete = async (id) => {
          try {
            await axios.delete(`http://localhost:3000/books/${id}`);
            window.location.reload();
          } catch (err) {
            console.log(err);
          }
        };
  return (
    <div className="flex mt-10 flex-col justify-center flex-wrap items-center">
      <h1 className="my-5 text-3xl font-semibold">Mahadi's Book Shop</h1>
      <div className="card bg-base-100 w-96 shadow-xl">
        {books.map((book) => (
          <div key={book.id} className="book card-body">
            <figure>
              <img src={book.cover} alt="book image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {book.title}
                <div className="badge badge-secondary">${book.price}</div>
              </h2>
              <p>{book.desc}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <button
                    className="delete"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </div>
                <button className="update badge badge-outline">
                  <Link
                    to={`/update/${book.id}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Update
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
      <button className="btn mt-5 btn-primary">
          Add new book
      </button>
        </Link>
    </div>
  );
}

export default Home