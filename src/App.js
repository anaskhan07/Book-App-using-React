import React from "react";
import Navbar from "./component/Navbar";
import './css/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import BookList from "./screens/BookList";
import CreateBook from "./screens/CreateBook";
import BookDetail from "./screens/BookDetail";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={BookList} />
      <Route path="/create" exact component={CreateBook} />
      <Route path="/detail/:id" exact component={BookDetail} />
    </BrowserRouter>
  )
} 


export default App;