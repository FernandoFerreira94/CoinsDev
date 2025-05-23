import axios from 'axios'

const API_KEY =
  'de4902cf241ccdebb7ddc6175a990f7a2eb00fb479b493b7a6985127d087d991'

export const Axios = (limit: number) => {
  const url = `https://rest.coincap.io/v3/assets?limit=${limit}&offset=0&apiKey=${API_KEY}`

  return {
    getData: () => axios.get(url),
  }
}

export const AxiosDetail = (cripto: string) => {
  const url = `https://rest.coincap.io/v3/assets/${cripto}?apiKey=${API_KEY}`

  return {
    getData: () => axios.get(url),
  }
}
