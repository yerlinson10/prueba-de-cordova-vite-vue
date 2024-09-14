import { defineStore } from "pinia"
import { ref } from "vue"

export const useRegistrarStore = defineStore('registrar', () => {
    const nombre = ref('');
    const email = ref('');

    const guardarRegistro = (nombreInput, emailInput) =>{
        nombre.value = nombreInput;
        email.value = emailInput;
    }

    return {
        nombre,
        email,
        guardarRegistro
    }
})