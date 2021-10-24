import { ReactElement } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import TodoList from "../../components/TodoList";
import TodoListItem from "../../components/TodoListItem";

export default function Home(): ReactElement {
  return (
    <Layout>
      <Container>
        <TodoList>
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </TodoList>
      </Container>
    </Layout>
  );
}
