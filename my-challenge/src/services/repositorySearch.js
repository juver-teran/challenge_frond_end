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
    const response = await api.get(`items?${query}`)
    return [
        {
            id: 1,
            title: "titel",
            autor: "Juver uver 1",
            description: "description fake",
            date: "12/12/12"
        },
        {
            id: 2,
            title: "titel 2",
            autor: "Juver uver 2",
            description: "description fake 2",
        },
        {
            id: 3,
            title: "titel",
            autor: "Juver uver 2",
            description: "description fake",
        },
    ]
}

const getResultById = async (id) => {
    const response = await api.get(`items/${id}`)
    return {
        id: 1,
        title: "titel",
        autor:"juver",
        description: "description fulllllll",
        date: "12/12/12",
        img: "https://picsum.photos/900/450"
    }
}


export const repositorySearch = () => {
    return {model, validate, getResultsByFilter, getResultById}
}
