import axios from 'axios';

function data() {
  return axios.get('https://rickandmortyapi.com/api/character');
}

const richData = async () => {
  const breeds = await data();
};

export default richData;
