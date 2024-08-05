<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Button from './components/Button.vue'


const show = ref(false)
const msg = ref('Nuevo')
// function handleHelloWorld () {

// } 
const handleHelloWorld = (id) => {
  console.log('Id: ', id) 
}

</script>

<template>
  <div>
    <header>
      <Button color="#ffff00"/>
      <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
      <!-- <div class="wrapper"> -->
        <!-- <HelloWorld :msg="msg" @evento-hello-world="(i) => handleHelloWorld(i)" :show="show"/> -->
      <!-- </div> -->
    </header>
    <input type="checkbox" v-model='show'>
    <main>
      
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
