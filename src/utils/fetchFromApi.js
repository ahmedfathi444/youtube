import axios from "axios";

const BASE_URL =  'https://youtube-v31.p.rapidapi.com';

const options = {
    // method: 'GET',
    // mmkn n3ml comment ll BASE_URL Msh hy7sl 7aga 
    url: BASE_URL,
    params: {
    //   q: 'music',
    //   part: 'snippet,id',
    //   regionCode: 'US',
      maxResults: '50',
    //   order: 'date'
    },
    headers: {
        // dh mogod fe file .env => REACT_APP_RAPID_API_KEY = 'ab8abe7517msh5e4a55fbc795d33p14720fjsnedf2858ad429'
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url)=>{

   const {data}= await axios.get(`${BASE_URL}/${url}`,options)

   return data ;

  }