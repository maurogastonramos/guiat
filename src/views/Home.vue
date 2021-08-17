<template>
  <div class="container mx-auto p-2 mt-4">
    <categorias />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Categorias from '../components/Categorias.vue'

export default defineComponent({
  components: { Categorias },
  setup() {
    
  },
})
</script>
