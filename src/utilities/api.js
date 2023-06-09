import axios from "axios";

const ORIGIN = 'https://youtube138.p.rapidapi.com';

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} 

catch (error) {
	console.error(error);
}

export const fetchDataFromAPI = async (url) => {
    try {
    const response = await axios.get(`${ORIGIN}/${url}`, options);
    return response.data;
  } 
  
  catch (error) {
    if (error.response) {
      
      console.error("Response Error:", error.response.data);
      console.error("Response Status:", error.response.status);
      console.error("Response Headers:", error.response.headers);
    } else if (error.request) {
      
      console.error("Request Error:", error.request);
    } else {

      console.error("Error:", error.message);
    }
    throw error; 
  }
};