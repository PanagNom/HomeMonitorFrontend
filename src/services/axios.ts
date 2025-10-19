import axios from 'axios';
import type {SensorsData} from "@/types";

const apiClient = axios.create({
    baseURL: 'https://localhost:7231/Sensor',
    headers: {
        'Content-Type': 'application/json'
    }
});

const loginClient = axios.create({
    baseURL: 'https://localhost:7231/api/auth',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getSensorData = async (): Promise<SensorsData> => {
    const response = await apiClient.get<SensorsData>('/GetSensorData');
    return response.data;
};

export const login = async (email:string, password:string): Promise<String> => {
    debugger;
    const response = await loginClient.post<String>('/login', {
        "username": email,
        "password": password
    });
    debugger;
    return response.data;
};