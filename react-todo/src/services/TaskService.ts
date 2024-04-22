import axios, { AxiosResponse } from 'axios';
import { ListItemType as Task } from '../types/ListItem.type';

const baseURL = process.env.API_URL || 'http://localhost:8080';

const taskAPI = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

type CreateTask = {
  name: string
}

export const createTask = async (task: CreateTask): Promise<AxiosResponse<Task>> => {
  return await taskAPI.post('/tasks', task);
};

export const getAllTasks = async (): Promise<AxiosResponse<Task[]>> => {
  return await taskAPI.get('/tasks');
};

export const getTaskById = async (id: number): Promise<AxiosResponse<Task>> => {
  return await taskAPI.get(`/tasks/${id}`);
};

export const deleteTaskById = async (id: number): Promise<void> => {
  await taskAPI.delete(`/tasks/${id}`);
};

export const markTaskAsDone = async (id: number, done: boolean): Promise<AxiosResponse<Task>> => {
  return await taskAPI.put(`/tasks/${id}/${done}`);
};
