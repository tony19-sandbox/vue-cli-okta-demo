<script setup lang="ts">
// import { getCurrentInstance } from 'vue'
// import type { OktaAuth } from '@okta/okta-auth-js'
// const oktaAuth = getCurrentInstance()!!.appContext.app.config.globalProperties.$auth as OktaAuth

import { oktaAuth } from './auth'
const login = () => oktaAuth.signInWithRedirect()
const logout = () => oktaAuth.signOut()
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/protected">Protected</router-link> |
    <button v-if="authState && authState.isAuthenticated" v-on:click="logout" id="logout-button">Logout</button>
    <button v-else v-on:click="login" id="login-button">Login</button>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
