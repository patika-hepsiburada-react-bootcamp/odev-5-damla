import { ReactElement } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import TodoList from "../../components/TodoList";

export default function Home(): ReactElement {
  return (
    <Layout>
      <Container>
        <TodoList />
      </Container>
    </Layout>
  );
}
