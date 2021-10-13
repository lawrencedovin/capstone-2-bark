import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import DogSearchFilter from './components/DogSearchFilter/DogSearchFilter';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Hero />
      <DogSearchFilter />
    </div>
  );
}

export default Home;