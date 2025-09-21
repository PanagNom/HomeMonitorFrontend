import axios from 'axios';
import type {SensorsData} from "@/types";

const apiClient = axios.create({
    baseURL: 'https://localhost:7231/Sensor',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getSensorData = async (): Promise<SensorsData> => {
    const response = await apiClient.get<SensorsData>('/GetSensorData');
    return response.data;
};

