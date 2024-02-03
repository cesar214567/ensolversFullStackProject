import { baseUrl } from "../commons/globalVariables"

export const doLogin = (email, password,setPasswordError) => {
    return fetch(baseUrl+"/admins", {
        mode: 'cors',
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return response
        })
        .catch(error => {
            setPasswordError("There was an error when login in, please try again");
        })
        
}
