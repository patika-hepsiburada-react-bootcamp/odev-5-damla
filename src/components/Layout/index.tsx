import { ReactElement, ReactNode } from "react";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
// import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </div>
  );
}
