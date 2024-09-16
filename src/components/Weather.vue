<template>
    {{ WeatherStore.temparatura }}
</template>

<script setup>
import { useWeather } from '../composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '../stores/weatherStore';

const WeatherStore = useWeatherStore();
onMounted(() => {
    useWeather();
});
</script>

<style scoped>

</style>