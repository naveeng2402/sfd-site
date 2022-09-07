import { ComponentType } from "react";
import { Footer, Header } from "../presentation";

function withLayout<P extends Object>(Component: ComponentType<P>) {
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
