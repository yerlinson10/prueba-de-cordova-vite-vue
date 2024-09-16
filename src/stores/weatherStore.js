import { defineStore } from "pinia";
import {ref} from "vue"

export const useWeatherStore = defineStore('weather',() =>{
    const temparatura = ref(0);

    const setTemperatura = (temp) =>{
        temparatura.value = temp;
    }

    return {
        temparatura,
        setTemperatura
    }
})