import axios from 'axios';


var data = JSON.stringify({
  "collection": "myWork",
  "database": "riteshDB",
  "dataSource": "ritesh",
});

var config = {
  url: 'https://data.mongodb-api.com/app/data-zrqqd/endpoint/data/beta/action/findMany',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': process.env.API_KEY
  },
  data: data
};

export const testAPI = async () => {
  try {
    const data = await axios.get(config)
  } catch (error) {
    console.log(error)
  }
  return data
}
