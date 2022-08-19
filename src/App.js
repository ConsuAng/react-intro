import './App.css';
import Header from './layouts/header/Header';
import Card from './components/card/Card';
import Footer from './layouts/footer/Footer';
import Container from './layouts/container/Container';
import file from './assets/data.json';

const data = file.data;

function App() {  
  return (
    <>
      <Header title="Galería de Imágenes con React" />
      <Container>
        <Card info={data[0]} />
        <Card info={data[1]} />
        <Card info={data[2]} />
        <Card info={data[3]} />
        <Card info={data[4]} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
