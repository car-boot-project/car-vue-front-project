<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
       <router-link to="/register">Register</router-link>
      <router-link to="/collections">Collections</router-link>
  <router-link to="/CarDetail">CarDetail</router-link>
      <router-link to="/manageuser">manageUser</router-link>
      <router-link to="/managelogin">manageLogin</router-link>
      <router-link to="/managecar">manageCar</router-link>
      <router-link to="/managelist">manageList</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
