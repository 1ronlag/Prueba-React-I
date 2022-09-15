import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Header from "./Components/Header";
import Scene from "./Components/Scene";
import Footer from "./Components/Footer";
import MyApi from './Components/MyApi';

const App = () => {
  return (
    <>
      <Header />
      <MyApi />
      <Scene />
      <Footer />
    </>
  )
}

export default App;
