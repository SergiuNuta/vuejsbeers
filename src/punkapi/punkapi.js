const punkapiClient = require('api.punkapi.com/v2/beers')

module.exports = {
  async fetchBeersList (config = {}) {
    const response = await punkapiClient().get()
    console.log(response)
    return response
  }
}
