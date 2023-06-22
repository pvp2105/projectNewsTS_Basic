import Header from "../components/Header/header";
import Article from "../components/Article/article";

function HomePage() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Article />
    </div>
  );
}

export default HomePage;
