<template>
  <header>
    <nav>
      <ul>
        <li :ref="(el) => menuItems['native'] = el"><RouterLink class="menu-link" :to="{name: 'native'}">Native</RouterLink></li>
        <li :ref="(el) => menuItems['vuetify'] = el"><RouterLink class="menu-link" :to="{name: 'vuetify'}">Vuetify</RouterLink></li>
        <li :ref="(el) => menuItems['naiveui'] = el"><RouterLink class="menu-link" :to="{name: 'naiveui'}">Naive UI</RouterLink></li>
        <li :ref="(el) => menuItems['routing'] = el"><RouterLink class="menu-link" :to="{name: 'routing'}">Routing</RouterLink></li>
      </ul>
      <div class="underline" :style="{ transform: `translateX(${underlineLeftOffset}px)` }"></div>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();
const menuItems = ref<{[key: string]: any}>({});
const underlineLeftOffset = computed(() => {
  let m = String(route.name);
  if (!route.name && route.path.startsWith('/routing/page')) {
    m = 'routing';
  }
  const menuEl = menuItems.value[m];
  if (!menuEl) {
    return 0;
  }
  const offsetLeft = menuEl.offsetLeft ?? 0;
  const width = menuEl.offsetWidth ?? 0;
  const halfWidth = width ? (width / 2) - 7 : 0;
  return offsetLeft + halfWidth;
});

</script>

<style scoped>
header {
    width: 100%;
    padding: 15px 0;
    background-color: #26355D;
    color: #FFDB00;
}
nav {
    position: relative;
}
nav > ul > li {
    display: inline-block;
    cursor: pointer;
}
nav > ul {
    margin-left: 15px;
}
nav > ul > li:not(:first-child) {
    margin-left: 15px;
}
.underline {
    content: '';
    width: 14px;
    border: 2px solid #FF8F00;
    display: block;
    border-radius: 4px;
    position: absolute;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>