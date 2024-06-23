import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Caraousel from './components/Caraousel/Caraousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
	<>
		<Navbar l1="Articles" l2="Books" l3="Collections" l4="Custom Solutions" />
		<Caraousel/>
		<Footer/>
	</>
  );
}

export default App;
