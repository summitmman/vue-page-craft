<template>
  <div class="container">
    <nav>
      <ul>
        <li><RouterLink :to="{name: 'native'}">Native</RouterLink></li>
        <li><RouterLink :to="{name: 'vuetify'}">Vuetify</RouterLink></li>
        <li><RouterLink :to="{name: 'naiveui'}">Naive UI</RouterLink></li>
      </ul>
    </nav>
    <div class="body">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<style scoped>

.container {
  margin: 0;
  padding: 0;
}
.body {
  /* margin-top: 50px; */
  margin: 50px 20px 0px;
  /* width: 50%; */
}
@media only screen and (max-width: 1200px) {
  .body {
    width: 80%;
  }
}
@media only screen and (max-width: 1500px) {
  .body {
    width: 60%;
  }
}

nav {
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0px;
  padding-left: 20px;
  background: #55d6aa;
  z-index: 10;
}
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
  margin-left: 30px;
  padding-top: 15px;

  position: relative;
}
nav a {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}
nav a:hover, nav a.router-link-active {
  color: #000;
}
nav a::before {
  content: '';
  display: block;
  height: 5px;
  background-color: #444;

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}
nav a:hover::before, nav a.router-link-active::before {
  width: 100%;
}

</style>