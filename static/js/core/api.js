import axios from 'axios'
import config from '../config'

const api = axios.create({
    baseURL: config.apiUrl,
})

export default (opt) => {
    let params = {apiKey: config.apiKey};
    if (opt.id) params.i = opt.id;
    if (opt.query) params.s = opt.query;
    return api.get('/', {params: params})
}
