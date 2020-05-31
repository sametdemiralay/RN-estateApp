import axios from 'axios';

const getInfoSuccess = info => {
  return {
    type: 'GET_INFO',
    payload: info,
  };
};

const getInfo = () => {
  return dispatch => {
    axios.get('http://localhost:8081/getHouses').then(res => {
      dispatch(getInfoSuccess(res.data.houses));
    });
  };
};

export default {
  getInfo,
};
