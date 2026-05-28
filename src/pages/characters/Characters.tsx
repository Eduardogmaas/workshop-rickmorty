import { useEffect } from "react";
import CharacterServices from "./CharacterServices";

export default function Characters(){
    useEffect(() => {
        CharacterServices.list().then((responce) => {
            console.log(responce)
        })
    },[])
    
    return <>essa é a tela Characters</>;
}