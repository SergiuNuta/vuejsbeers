const axios = require("axios")

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';

exports.handler = async (event, context) => {
  try {
    const response = await axios(API_ENDPOINT);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
          