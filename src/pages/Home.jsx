import React from 'react';
import Header from "../components/Layouts/Header"
// import Profil from "../components/Layouts/Profil"
import Competence from "../components/Layouts/Competence"
import Projects from "../components/Layouts/Projects"
import Contact from '../components/Layouts/Contact';




const Home=()=>{

    return (
      <div className="App">
         <Header/>
          <main >
            {/* <Profil/> */}
            <Projects/>
            <Competence/>
            <Contact/>
            {/* <Experience/> */}
          </main>
         {/* <Footer/> */}
      </div>
    );
  }

export default Home;
