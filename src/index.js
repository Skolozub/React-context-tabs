import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Tabs } from "./tabs";

const App = () => (
  <div className="App">
    <Tabs defaultTabKey="all">
      <Tabs.Tab tabKey="all" title="Все">
        <Content>Все</Content>
      </Tabs.Tab>
      <Tabs.Tab tabKey="categories" title="Категории">
        <Content>Категории</Content>
      </Tabs.Tab>
      <Tabs.Tab tabKey="my" title="Мои">
        <Content>Мои</Content>
      </Tabs.Tab>
      <Tabs.Tab tabKey="edit-mode" title="Режим редактирования">
        <Content>Режим редактирования</Content>
      </Tabs.Tab>
    </Tabs>
  </div>
);

const Content = styled.div`
  padding: 20px;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
