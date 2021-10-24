import { ReactElement } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { useTodos } from "../../contexts/TodoContext";

export default function Home(): ReactElement {
  const { emoji } = useTodos();
  return (
    <Layout>
      <Container>{emoji}</Container>
    </Layout>
  );
}
