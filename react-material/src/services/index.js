import axios from 'axios'
import { getTokens } from '../helpers'

export let privateApi = axios

if (getTokens()) {

    privateApi.defaults.headers.common['Authorization'] = getTokens().accessToken;

    privateApi.defaults.headers.common['Token'] = getTokens().refreshToken;

}
export default axios