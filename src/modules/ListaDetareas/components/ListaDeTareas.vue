<template>
    <div>
        <h2>Lista de tareas</h2>
        <input v-model="nuevaTarea" @keyup.enter="agregarTarea" type="text">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="'tatarea_'+index">
                {{ tarea }}
                <button @click="borrarTarea(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const tareas = ref([]);
    const nuevaTarea = ref('');
    
    const agregarTarea = () => {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
    }

    const borrarTarea = (index) => {
        tareas.value.splice(index, 1);
    }

</script>

<style scoped>

</style>