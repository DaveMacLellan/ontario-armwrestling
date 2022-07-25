import './App.css';
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Rankings from './components/Rankings/Rankings';
import ContentList from './components/Content/ContentList';
import Events from './components/Events/Events';
import Home from './components/Home/Home';
import LiftRanks from './components/Rankings/LiftRanks/LiftRanks';
import Clubs from './components/Clubs/Clubs'


function App() {
  /*
  import {ProfileLayout} from "./ProfileLayout"
import Gains from './components/Gains/Gains';
import Schedule from './components/Schedule/Schedule';
import Stats from './components/Stats/Stats';
import Profile from './components/Profile/Profile';
  <Route path="/profile" element={<ProfileLayout />}>
            <Route path="/profile/dave" element={<Profile />}/>
            <Route path="/profile/dave/schedule" element={<Schedule />}/>
            <Route path="/profile/dave/gains" element={<Gains />}/>
            <Route path="/profile/dave/stats" element={<Stats />}/>
          </Route>


          import Supermatch from './components/Supermatch/Supermatch';
          <Route path="/supermatch" element={<Supermatch />}/>
  */

  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            
            <Route path="/rankings/" element={<Rankings />}/>
            <Route path="/rankings/topten" element={<Rankings />}/>
            <Route path="/rankings/lifts" element={<LiftRanks />}/>
            <Route path="/content" element={<ContentList />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/clubs" element={<Clubs />}/>
          </Route>          
      </Routes>
    </>
  );
}

export default App;
