import axios from 'axios';

const client = axios.create({
  baseURL: 'https://atat-backend-devel.bioinfo.perdanauniversity.edu.my'
});
export const { get, post } = client;
