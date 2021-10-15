import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import DogSearchFilter from './components/DogSearchFilter/DogSearchFilter';
import HomeSeperator from './components/HomeSeperator/HomeSeperator';
import BreedsCardsList from './components/BreedsCardsList/BreedsCardsList';
import DogsCardsList from './components/DogsCardsList/DogsCardsList';
import MainFooter from './components/MainFooter/MainFooter';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Hero />
      <DogSearchFilter />
      <HomeSeperator title="Breeds" />
      <BreedsCardsList/>
      <HomeSeperator title="Dogs" />
      <DogsCardsList/>
      <MainFooter/>
    </div>
  );
}

export default Home;