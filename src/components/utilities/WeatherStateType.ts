export type WeatherStateType = {
    location: {
    name: string,
    country: string,
    },
    current: {
    observation_time: string,
    temperature: number,
    weather_icons: string[
    
    ],
    weather_descriptions: string[],
    wind_speed: number,
    humidity: number,
    precip: number,
    cloudcover: number,
    }
};
export const initialState = {
    location: {
    name: '',
    country: '',
    },
    current: {
    observation_time: '',
    temperature: 0,
    weather_icons: [''],
    weather_descriptions: [''],
    wind_speed: 0,
    humidity: 0,
    precip: 0,
    cloudcover: 0,
    }
};