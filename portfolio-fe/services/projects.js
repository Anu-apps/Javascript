import axios from 'axios'

export const getProjects = () => axios.get('http://localhost:5000/api/projects/all')