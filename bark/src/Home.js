import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import DogSearchFilter from './components/DogSearchFilter/DogSearchFilter';
import HomeSeperator from './components/HomeSeperator/HomeSeperator';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Hero />
      <DogSearchFilter />
      <HomeSeperator title="Breeds" />
    </div>
  );
}

export default Home;