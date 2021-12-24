import Container from "home/Container";
import Header from "home/Header";
import Footer from "home/Footer";
import Search from "search/Search";
import Checkout from "checkout/Checkout";
import Carousel from "carousel/Carousel";

function App() {
  return (
    <Container>
      <Header />
      <div>Home App</div>
      <Search />
      <Checkout />
      <Carousel />
      <Footer />
    </Container>
  );
}

export default App;
