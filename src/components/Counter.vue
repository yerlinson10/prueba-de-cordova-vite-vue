<template>
  <h1>Hola mundo</h1>
  <button @click="descrementar">-</button>
  <p :class="{'green':contador>=0, 'red':contador<0}">{{ contador }}</p>
  <button @click="incrementar">+</button>
</template>

<script setup>
  import { ref } from 'vue';
  const contador = ref(0);

  const incrementar = () => {
    contador.value++;
  }
  const descrementar = () => {
    contador.value--;
  }

</script>

<style scoped>
  .red{
    color: red;
  }
  .green{
    color: rgb(0, 177, 38);
  }
</style>
