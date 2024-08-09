import axios from 'axios';
import  { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBook = () => {
    const [book, setBook] = useState({
      title: "",
      desc: "",
      price: null,
      cover: "",
    });
    const [error, setError] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
      setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
      e.preventDefault();

      try {
        await axios.put(`http://localhost:3000/books/${bookId}`, book);
        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };



  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-3 text-2xl">Update book</h1>
      <form className="bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Update book title
          </label>
          <input
            placeholder="Enter a book title"
            type="text"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Add Price
          </label>
          <input
            placeholder="Enter price"
            type="number"
            name="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Add a Cover
          </label>
          <input
            placeholder="Enter a book cover"
            type="text"
            name="cover"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            rows="5"
            placeholder="Enter your Description"
            id="content"
            name="desc"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleClick}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBook