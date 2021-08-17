<template>
  <the-header />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from './components/TheHeader.vue'

export default defineComponent({
  components: { TheHeader },
  setup() {

  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body, html, #app {
  height: 100%;
}
</style>
