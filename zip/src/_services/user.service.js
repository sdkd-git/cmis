import {
    authHeader,history
} from '../_helpers';
 
import config from "../config";
import { message } from 'antd';
export const userService = {
    login,
    logout,
    getAll,
    createUser,
    getAdminUsers,
    updateUser
};

 const baseUrl = 'http://35.154.88.86:8080/api';
// const baseUrl = 'http://localhost:8080/api';

function createUser(data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        },
        body: JSON.stringify(data)
    };
    return fetch(`${baseUrl}/users/create`, requestOptions).then(handleResponse);
}

function login(userid, password,phone) {
    //console.log(config)
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userid,
            password,
            phone
        })
    };
    return fetch(`${baseUrl}/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
     history.push('login');
}

function getAll(cityId, role) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${baseUrl}/users/findAllUsers/${cityId}/${role}`, requestOptions).then(handleResponse);
}

function getAdminUsers(role) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${baseUrl}/users/findAdminUsers/${role}`, requestOptions).then(handleResponse);
}

function updateUser(data, id) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader()
        },
        body: JSON.stringify(data)
    };

    return fetch(`${baseUrl}/users/${id}`, requestOptions).then(handleResponse);
}



function handleResponse(response) {

    if (response.status === 401) {
        //console.log('Test')
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
    }

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        //console.log(response)

        if (!response.ok) {
            if (response.status === 401) {
                //console.log('Test')
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }
            if (response.status === 404) {
                //console.log('Test')
                message.error(response.statusText)
            }
            if (response.status === 400) {
                //console.log('Test')
                message.error(response.statusText)
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}