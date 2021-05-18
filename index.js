
const axios = require('axios');

const traePersonaje = async () => {
    let res = await axios.get('http://rickandmortyapi.com/api/character');
    console.log(res.data);
}