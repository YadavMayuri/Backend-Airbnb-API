import axios from "axios";
export const getSearchByLocation = async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-geo',
        params: {
            location: 'Mumbai',
            checkin: '2023-06-21',
            checkout: '2023-06-25',
            adults: '1',
            children: '0',
            infants: '0',
            pets: '0',
            page: '1',
            currency: 'USD'
        },
        headers: {
            'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.send(response.data)
    } catch (error) {
        res.send(error);
    }
}


//get Calender - Returns availability and prices of a listing

export const getCalender = async (req,res)=>{

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/calendar',
  params: {
    room_id: '18951965',
    currency: 'USD',
    year: '2023',
    month: '12',
    count: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return res.send(response.data);

} catch (error) {
	res.send(error);
}
}



// Autocomplete - Find locations by query

export const Autocomplete = async (req,res)=>{

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/autocomplete',
  params: {query: 'Mumbai'},
  headers: {
    'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return res.send(response.data);

} catch (error) {
	res.send(error);
}
}



//Search by GEO coordinates - Find rooms in a rectangles bounded by provided coordinates

export const SearchByGEO = async (req,res)=>{

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/search-geo',
  params: {
    ne_lat: '52.51',
    ne_lng: '13.41',
    sw_lat: '52.41',
    sw_lng: '13.31',
    checkin: '2023-09-15',
    checkout: '2023-09-16',
    adults: '1',
    children: '0',
    infants: '0',
    pets: '0',
    page: '1',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
	return res.send(response.data);
} catch (error) {
	return res.send(error);
}
}
