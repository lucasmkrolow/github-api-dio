import axios from 'axios'

const token = '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'; /* É preciso gerar um token pessoal do Github, caso contrário o número de consultas é limitado */
const api = axios.create({
    baseURL: 'https://api.github.com/', 
    headers: {'Authorization': 'Bearer '+token}
})

export default api;