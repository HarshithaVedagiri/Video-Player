import axios from 'axios';

const KEY = "AIzaSyAVl6CzsTLD068995Ezj3jPe6-jVY3wrno";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})