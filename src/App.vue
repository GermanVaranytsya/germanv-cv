<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
  body{
    background-color: #1f1f1f;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 40px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: white;
    transition: 0.3s;
    &.router-link-exact-active {
      color: #FF6D94;
      text-decoration: none;
    }
    &:hover{
      color: #559696;
      text-decoration: none;
    }
  }
}
</style>
