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
//servicio de traer todo la informacion  encontrada respecto al al parametro filter
const getResultsByFilter = async (filter) => {
    const query = `search=${filter}`
    const response = await api.get(`api/items/${query}`)
    return response
}
//servcio para traer el detalle del la informacion
const getResultById = async (id) => {
    const response = await api.get(`api/items/${id}`)
    return response
}


export const repositorySearch = () => {
    return {model, validate, getResultsByFilter, getResultById}
}
