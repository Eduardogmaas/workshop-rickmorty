import {Routes, Route} from "react-router";
import Characters from "../pages/characters/Characters";
import Episodes from "../pages/episodes/Episodes";
import Locations from "../pages/locations/Locations";
import Home from "../pages/home/Home";
import DetailCharacter from "../pages/characters/Detail.Characters";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/characters" element={<Characters />}/>
            <Route path="/characters/:id" element={<DetailCharacter />}/>
            <Route path="/episodes" element={<Episodes/>}/>
            <Route path="/locations" element={<Locations />}/>
        </Routes>
    )
}