import React from "react";
import "./App.less";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Lists from "./components/Lists";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Lists />
    </>
  );
}

export default App;
