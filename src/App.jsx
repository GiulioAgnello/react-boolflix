import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { MovieProvider } from "./Context/MovieContext";

export default function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <Main />
      </MovieProvider>
    </>
  );
}
