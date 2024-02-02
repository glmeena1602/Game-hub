import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fc89e54e9cfb4340950dd9f36af609ec',
  },
});
