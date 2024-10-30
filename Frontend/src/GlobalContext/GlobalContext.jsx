import axios from "axios";
import React, { createContext, useState } from "react";

export const GlobalState = createContext(null);

function GlobalContext({ children }) {
  // Get Books
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5001/api/books/");
      setBooksData(response.data.data.books);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Create Books
  const [data, setData] = useState({
    title: "",
    price: 0,
    author: "",
  });

  const createBook = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5001/api/books/",
        data
      );
      await fetchData(); 
      return true; 
    } catch (err) {
      console.error(err.message);
      return false; 
    } finally {
      setIsLoading(false);
    }
  };

  // Deletes Books
  const handleOnDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/books/${id}`);
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateBook = async () => {
    try {
      setIsLoading(true);
      await axios.put(`http://localhost:5001/api/books/${data._id}`, data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlobalState.Provider
      value={{
        fetchData,
        booksData,
        createBook,
        data,
        setData,
        handleOnDelete,
        isLoading,
        updateBook,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
}

export default GlobalContext;
