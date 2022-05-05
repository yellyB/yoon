import React from "react";
import "./App.less";
import { Layout } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import Lists from "./components/Lists";

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Lists />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
