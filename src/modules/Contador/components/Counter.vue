<template>
  <h1>Hola mundo</h1>
  <button @click="descrementar" class="btn btn-less">-</button>
  <p :class="{'green':contador>=0, 'red':contador<0}">{{ contador }}</p>
  <button @click="incrementar" class="btn btn-add">+</button>
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
  .btn{
    padding: 0.5rem 1.2rem;
    /* margin: 10px; */
    border-radius: 5px;
    border: 0px solid rgb(255, 255, 255);
    cursor: pointer;
  }
  .btn-add{
    background-color: rgb(106, 255, 131);
  }
  .btn-less{
    background-color: rgb(248, 72, 72);
  }
  .btn-add:hover{
    background-color: rgb(110, 226, 129);
  }
  .btn-less:hover{
    background-color: rgb(219, 62, 62);
  }
</style>
