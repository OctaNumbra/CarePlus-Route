import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";

function Home() {
  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <h1>Home</h1>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
