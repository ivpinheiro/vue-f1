import axios from "axios";

export class ElementService {
    static serverURL = 'http://localhost:9000';
    static oficialBackendURL = 'http://localhost:8080';
    static getAllElements(){
        let dataURL = `${this.serverURL}/elements`;
        return axios.get(dataURL);
    }
    static getElement(elementId){
        let dataURL = `${this.serverURL}/elements/${elementId}`;
        return axios.get(dataURL);
    }
    static createElement(element, endPoint){
        console.log(endPoint);
        let dataURL = `${this.serverURL}/elements/`;
        return axios.post(dataURL, element);
    }
    static updateElement(element, elementId){
        let dataURL = `${this.serverURL}/elements/${elementId}`;
        return axios.put(dataURL, element);
    }
    static deleteElement(elementId){
        let dataURL = `${this.serverURL}/elements/${elementId}`;
        return axios.delete(dataURL);
    }
    static getAllGroups(element){
        let groupId = element.groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL);
    }
    static getPerson(){
        let dataURL = `${this.serverURL}/person`;
        return axios.get(dataURL);
    }

    static authenticate(user){
        let dataURL = `${this.oficialBackendURL}/usuario/login`;
         return axios.post(dataURL, user, 
            {
                method: 'POST', // Especifica o método HTTP como POST
                headers: {
                'Content-Type': 'application/json' // Define o cabeçalho Content-Type corretamente
                },
                timeout: 10000
            },   
        )
    }

    static getRelatorio146(token){
        let dataURL = `${this.oficialBackendURL}/status/relatorio/quantidade-por-resultado`;
         return axios.get(dataURL, 
            {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json', // Define o cabeçalho Content-Type corretamente
                'Authorization': token
                },
                timeout: 10000
            },   
        )
    }

    static getRelatorio2(token, busca){
        let dataURL = `${this.oficialBackendURL}/airports/relatorios/exibir-aeroportos-proximos`;
         return axios.get(dataURL, 
            {
                params: {nomeCidade:busca},
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token
                },
                timeout: 10000
            },   
        )
    }

    static getRelatorio3(token, busca){
        let dataURL = `${this.oficialBackendURL}/airports/relatorios/exibir-aeroportos-proximos`;
         return axios.get(dataURL, 
            {
                params: {nomeCidade:busca},
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token
                },
                timeout: 10000
            },   
        )
    }
}