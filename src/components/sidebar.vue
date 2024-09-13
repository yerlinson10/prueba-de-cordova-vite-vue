<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
        <ul>
            <li>
                <router-link to="/counter">Contador</router-link>
            </li>
            <li>
                <router-link to="/lista-de-tareas">Lista de tareas</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .sidebar{
        width: 200px;
        background-color: #f1f1f1;
    }
</style>