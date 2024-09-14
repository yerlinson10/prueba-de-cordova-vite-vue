<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSumit">
            <div class="form-div">
                <label for="nombre">Nombre:</label>
                <Field type="text" name="nombre" id="nombre" placeholder="Nombre" required v-model="nombre" />
                <ErrorMessage name="nombre" component="span" class="error-message"></ErrorMessage>
            </div>
            <div class="form-div">
                <label for="email">Email:</label>
                <Field type="email" name="email" id="email" placeholder="Email" required v-model="email" />
                <ErrorMessage name="email" component="span" class="error-message"></ErrorMessage>

            </div>
            <div class="form-div">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
    import {Form, Field, ErrorMessage} from 'vee-validate';
    import { schema } from '../schemas/validationSchemas.js';
    import { useRegistrarStore } from '../stores/registrarStore.js';
    import { ref } from 'vue'; 


    const RegistrarStore = useRegistrarStore();

    const nombre = ref('');
    const email = ref('');

    const onSumit = ()=>{
        RegistrarStore.guardarRegistro(nombre.value, email.value)
        console.log('Register');
        
    }
</script>

<style scoped>
    .form-div {
        margin-bottom: 10px;
    }
    .error-message{
        color: red;
    }

</style>