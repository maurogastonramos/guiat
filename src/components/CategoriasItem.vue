<template>
  <div
    class="p-2 flex items-center justify-center relative border-brand-dark border-1 cursor-pointer rounded-xl group item"
    @click="goToCategoria"
  >
    <div class="z-10">
      <div
        class="bg-gradient-to-r from-brand to-brand-gd h-full w-full absolute top-0 left-0 z-10 opacity-80 group-hover:opacity-100 transition-opacity rounded-md"
      ></div>
      <img
        :src="item.photo"
        alt=""
        class="h-full w-full absolute top-0 left-0 rounded-md"
      />
    </div>

    <div class="z-20">
      <span class="text-white text-2xl">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToCategoria() {
      this.$router.push({
        name: "Categoria",
        params: { categoria: this.item.id },
      });
    },
  },
});
</script>

<style scoped>
.item {
  height: 8em;
  font-family: "Roboto";
}
</style>
