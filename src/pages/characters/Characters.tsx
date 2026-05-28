import { useEffect } from "react";
import CharacterServices from "./CharacterServices";

export default function Characters(){
    const [data, setData] = useState()

    useEffect(() => {
        CharacterServices.list().then((response) => {
            // console.log(response)
            setData(response.data)
        })
    },[])
    
    function renderData(){
        if(data != 0){
            return data?.map((item) =>)
                return(
                    <p>{item.name}</p>
                    <img src={item.image} alt ={}
                )
        }
    }
    
    return <>essa é a tela Characters</>;
}