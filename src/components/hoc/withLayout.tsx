import { ComponentType } from "react";
import { Footer, Header } from "../presentation";

function withLayout<P>(Component: ComponentType<P>, headerTitle?: string) {
  const Layout = (props: P) => (
    <>
      <Header />
      <Component {...props} />
      <Footer />
    </>
  );

  return Layout;
}

export default withLayout;
