

import team from './data/employees';
import "./App.scss"
import Nav from './components/Nav/Nav';
import SearchTeam from './components/SearchBoxContainer/SearchBoxContainer';




const App = () => {


 
  return (<>
    <Nav/>
    <section >
      <SearchTeam team={team} />
    </section>
    </>
    )
};

export default App;
