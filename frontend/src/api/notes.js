import { baseUrl } from "../commons/globalVariables"

export const getNotes = (jwt,setNotes,active,categoryId) => {
    const activeValue = active !== null? "?active="+active:"";
    const categoryIdValue = categoryId!==null? "?categoryId="+categoryId:"";
    const url = baseUrl+"/notes"+ activeValue + categoryIdValue;
    console.log(activeValue)
    console.log(categoryIdValue)
    console.log(url);
    return fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {'Content-Type':'application/json','jwt':jwt},
        })
        .then(response => response.json())
        .then(response => setNotes(response))
        .catch(error => {
            console.log(error);
        })
}

export const getNote = (jwt,id,setNote) => {
    return fetch(baseUrl+"/notes/"+id, {
        mode: 'cors',
        method: 'GET',
        headers: {'Content-Type':'application/json','jwt':jwt},
        })
        .then(response => response.json())
        .then(response => setNote(response))
        .catch(error => {
            console.log(error);
        })
}


export const deleteNote = (jwt,id) => {
    return fetch(baseUrl+"/notes/"+id, {
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
    return fetch(baseUrl+"/notes/"+id, {
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

export const createNote = (jwt,body) => {
    const {id,...rest} = body;
    return fetch(baseUrl+"/notes", {
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