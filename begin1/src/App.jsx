import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Product from "./Product";
import ParentCardLayout from "./ParentCardLayout";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputMutipleSample from "./InputMutipleSample";
import Say from "./Say";
import Movie from "./Movie";
import Hello from "./components/Hello";
import Home from "./components/Home";
import MyApp from "./components/MyApp";
import CounterRef from "./CounterRef";
import InputRef from "./InputRef";
import UserProfile from "./UserProfile";
import Form from "./Form";
import Life from "./Life";
import FetchBook from "./FetchBook";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Average from "./Average";
import Parent from "./Parent";
import BookList from "./BookList";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
      <h1>World</h1>*/}
      {/* <MyComponent name="React">리액트</MyComponent> */}
      {/* <Card /> */}
      {/* <Product /> */}
      {/* <ParentCardLayout /> */}
      <BookList />
      {/* <Say /> */}
      {/* <Home /> */}
      {/* <MyApp /> */}
      {/* <Parent /> */}
    </>
  );
}

export default App;
