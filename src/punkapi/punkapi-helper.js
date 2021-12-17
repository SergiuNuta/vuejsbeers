const punkapi = require('./punkapi')

this.fetchBeersList = async () => {
  const response = await punkapi.fetchStoryList()
  return response
}
