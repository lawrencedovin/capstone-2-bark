import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import DogSearchFilter from './components/DogSearchFilter/DogSearchFilter';
import HomeSeperator from './components/HomeSeperator/HomeSeperator';
// import LoggedInCardsList from './components/LoggedInCardsList/LoggedInCardsList';
import BreedsCardsList from './components/BreedsCardsList/BreedsCardsList';
// import BreedsCardsList from './components/BreedsCardsList/BreedsCardsList';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Hero />
      <DogSearchFilter />
      <HomeSeperator title="Breeds" />
      <BreedsCardsList/>
    </div>
  );
}

export default Home;