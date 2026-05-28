import {Routes, Route} from "react-router";
import Characters from "../pages/characters/Characters";
import Episodes from "../pages/episodes/Episodes";
import Locations from "../pages/locations/Locations";
import Home from "../pages/home/Home";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Characters" element={<Characters />}/>
            <Route path="/Episodes" element={<Episodes/>}/>
            <Route path="/Locations" element={<Locations />}/>
        </Routes>
    )
}