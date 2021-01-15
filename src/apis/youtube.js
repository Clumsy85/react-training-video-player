import axios from 'axios';

const KEY = 'AIzaSyC8LRrcSL3Wu_ZnB2g9cLjw3BkuVAgcQG8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});