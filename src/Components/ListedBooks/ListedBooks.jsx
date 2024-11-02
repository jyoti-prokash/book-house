import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredList } from "../Utility/Utility";
import Book from "../Book/Book";
import Books from "../Books/Books";

const ListedBooks = () => {
  const [readList,setReadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(()=>{
    const storeReadList = getStoredList();
    const storeReadListStr = storeReadList.map(id => parseInt(id));
    const readBooksList = allBooks.filter(book => storeReadListStr.includes(book.bookId))
    setReadList(readBooksList)
  },[])
  return (
    <div>
      <h1>Listed Book</h1>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Read books: </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {
              readList.map(book => <Book key={book.bookId} book={book}></Book>)
              }
            </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
