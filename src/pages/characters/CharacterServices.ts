import axios from "axios"

class CharacterServices{
    list = () => {
        return axios.get('https://rickandmorty.api.com/api/character')
    }
}

export default new CharacterServices()