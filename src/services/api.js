import axios from 'axios';

const api = axios.create({
    baseURL: 'https://webservicetasklist.herokuapp.com'
});

export const getTasks = async () => {
    try {
        const { data } = await api.get('task/listall');

        return data;
    } catch(err) {
        alert("Não é possível listar as tarefas. Tente mais tarde");
    }
}

export const saveTask = async (_prName) => {
    try {
        const { data } = await api.post('task/save', { name: _prName });

        return data;
    } catch(err) {
        alert("Não foi possível adicionar a tarefa. Tente mais tarde");
    }
}

export const updateTask = async (_prTask) => {
    try {
        const { data } = await api.put('task/update', _prTask);

        return data;
    } catch(err) {
        alert("Não foi possível atualizar o nome da tarefa. Tente mais tarde");
    }
}

export const deleteTask = async (_prId) => {
    try {
        const { data } = await api.delete(`task/delete/${ _prId }`);

        return data;
    } catch(err) {
        alert("Não foi possível excluir a tarefa. Tente mais tarde");
    }
}