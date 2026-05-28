import { useParams } from "react-router"

export default function DetailCharacter(){
    const {id} = useParams()
    
    return<>o personagem aberto é: {id}</>


}