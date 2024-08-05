<script setup>
import {ref , onMounted} from 'vue'
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  msg : {
    type: String,
    default:'Soy msg'
  }
})
const id = ref(1)

onMounted(() => {
  console.log('Id :',id)
})

</script>

<template>
  <div class="greetings">
    <h1 v-if="show" class="green">{{ msg }}</h1>
    <button @click="$emit('eventoHelloWorld', id)">Click Me</button>
    <h3>
      {{ msg }}
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <!-- <input type="text" v-model='msg' name="Modificar msg" id="1"> -->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
