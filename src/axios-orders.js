import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-f7346.firebaseio.com/'
});

instance.defaults.headers.common['Authorization']='AUTH TOKEN FROM INSTANCE';

export default instance;
