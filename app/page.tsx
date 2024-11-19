import Header from "./components/header/Header";
import Content from "./components/contentSections/Content";
import Feature from "./components/features/Feature";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ containerType: "inline-size" }}>
        <Content />
        <Feature />
      </div>
      <Footer />
    </>
  );
}
