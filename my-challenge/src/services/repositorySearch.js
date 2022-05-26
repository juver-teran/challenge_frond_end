import {Api} from "../api/Api";
const api = new Api();


const validate = {
    search: {
        type: 'string',
        required: true,
    },
}

const model = () => {
    return {
        search: '',
    }
}

const getResultsByFilter = async (filter) => {
    const query = `search=${filter}`
    const response = await api.get(`api/items/${query}`)
    return response
}

const getResultById = async (id) => {
    const response = await api.get(`api/items/${id}`)
    return response
}


export const repositorySearch = () => {
    return {model, validate, getResultsByFilter, getResultById}
}
