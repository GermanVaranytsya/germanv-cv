<template>
  <div class="home">
    <LoadingPage></LoadingPage>
    <HelloWorld msg="WELCOME TO MY PAGE"/>
    <RandImg />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import RandImg from '@/components/RandImg'
import LoadingPage from '@/components/LoadingPage'

export default {
  name: 'home',
  components: {
    HelloWorld,
    RandImg,
    LoadingPage
  }
}
</script>
