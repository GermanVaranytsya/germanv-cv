<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <RandImg />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RandImg from '@/components/RandImg.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    RandImg
  }
}
</script>
