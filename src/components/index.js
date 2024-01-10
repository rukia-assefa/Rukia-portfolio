import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Particles from 'react-tsparticles';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Particles
        // id="tsparticles"
        params={{
          particles:{
            number:{
              value:45
            }
          }
        }}/>
    </div>
  );
};

export default Home;
