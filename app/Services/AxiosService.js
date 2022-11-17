
// @ts-ignore
export const GiftAPI = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 8000
})

// @ts-ignore
export const giphyAPI = axios.create({
  baseURL: 'api.giphy.com/v1/gifs/search',
  timeout: 8000,
  params: {key: 'ULHOMDvAgW1ZZXRNLsaaiMFKZqM5jXZE'}
})
