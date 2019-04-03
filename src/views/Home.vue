<template>
  <div class="home">
    <HelloWorld msg="Welcome to my CV page"/>
    <RandImg />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import RandImg from '@/components/RandImg'

export default {
  name: 'home',
  components: {
    HelloWorld,
    RandImg
  }
}
</script>
