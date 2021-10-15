import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import DogSearchFilter from './components/filters/DogSearchFilter/DogSearchFilter';
import HomeSeperator from './components/HomeSeperator/HomeSeperator';
import BreedsCardsList from './components/cards/BreedsCardsList/BreedsCardsList';
import DogsCardsList from './components/cards/DogsCardsList/DogsCardsList';
import MainFooter from './components/MainFooter/MainFooter';

function Home() {
  return (
    <div className="Home">
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