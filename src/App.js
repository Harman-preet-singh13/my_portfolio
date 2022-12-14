import './App.css';
import Header from './componets/Header'
import Home from './componets/Home';
import Projects from './componets/Projects';
import About from './componets/About';

import Container from '@mui/material/Container';
import Footer from './componets/Footer';
import BacktoTop from './componets/BacktoTop';
import ProjectIndex from './componets/ProjectIndex';

function App() {
  
  return (
    <div>
      <Header />
      <Home />
      <Container fixed>
      <div className="App">
        <About/>
        <ProjectIndex />
        <Projects/>
        
      </div>
      </Container>
      <BacktoTop />
      <Footer />
      
    </div>
  );
}

export default App;
