import { baseUrl } from "../commons/globalVariables"

export const getCategories = (jwt,setCategories) => {
    return fetch(baseUrl+"/categories", {
        mode: 'cors',
        method: 'GET',
        headers: {'Content-Type':'application/json','jwt':jwt},
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return setCategories(response)
        })
        .catch(error => {
            console.log(error);
        })
}

export const getCategory = (jwt,id,setCategories) => {
    return fetch(baseUrl+"/categories/"+id, {
        mode: 'cors',
        method: 'GET',
        headers: {'Content-Type':'application/json','jwt':jwt},
        })
        .then(response => response.json())
        .then(response => setCategories(response))
        .catch(error => {
            console.log(error);
        })
}


export const deleteCategory = (jwt,id) => {
    return fetch(baseUrl+"/categories/"+id, {
        mode: 'cors',
        method: 'DELETE',
        headers: {'Content-Type':'application/json','jwt':jwt},
        })
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        })
}


export const updateNote = (jwt,body) => {
    const {id,...rest} = body;
    return fetch(baseUrl+"/categories/"+id, {
        mode: 'cors',
        method: 'PUT',
        headers: {'Content-Type':'application/json','jwt':jwt},
        body: JSON.stringify(rest)
        })
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        })
}

export const createCategory = (jwt,body) => {
    const {id,...rest} = body;
    return fetch(baseUrl+"/categories", {
        mode: 'cors',
        method: 'POST',
        headers: {'Content-Type':'application/json','jwt':jwt},
        body: JSON.stringify(rest)
        })
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        })
}