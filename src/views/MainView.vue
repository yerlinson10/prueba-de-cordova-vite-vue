<template>

    <div class="cantainer">
        <sidebar></sidebar>
        <Header></Header>
        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script setup>
import sidebar from '@components/sidebar.vue';
import Header from '../components/Header.vue';

</script>

<style scoped>
    .container {
        display: flex;
    }
    .content{
        flex: 1;
        padding: 20px;
    }
</style>