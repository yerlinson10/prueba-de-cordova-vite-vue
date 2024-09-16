<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }} </h3>
        <h3>Email: {{ registrarStore.email }} </h3>
        <ul>
            <li>
                <router-link to="/counter">Contador</router-link>
            </li>
            <li>
                <router-link to="/lista-de-tareas">Lista de tareas</router-link>
            </li>
            <li>
                <router-link to="/registrar">Registrar</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { useRegistrarStore } from '@modules/Registro/stores/registrarStore';
    // import { ref, watch } from 'vue';
    const registrarStore = useRegistrarStore();
    console.log(registrarStore.nombre);
    
    // const nombre = ref(registrarStore.nombre.value);
    // const email = ref(registrarStore.email.value);

    // watch(() => registrarStore.nombre,(newValue) => {
    //     nombre.value = newValue;
    // });

    // watch(() => registrarStore.email,(newValue) => {
    //     email.value = newValue;
    // });


    // watch(() => [registrarStore.nombre, registrarStore.email],(newValue) => {
    //     nombre.value = newValue[0];
    //     email.value = newValue[1];
    // });

</script>

<style scoped>
    .sidebar{
        width: 200px;
        background-color: #f1f1f1;
    }
</style>