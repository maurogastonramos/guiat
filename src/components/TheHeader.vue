<template>
    <header class="w-full h-24 bg-gray-lightest flex border-b border-black select-none">
        <div class="flex-1">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>

        <div class="flex flex-2 justify-center items-center">
            <img src="@/assets/logo.svg" alt="App Logo" class="max-h-full py-4">
            <span class="logo text-2xl font-bold ml-2 text-brand">GuiaT</span>
        </div>

        <div class="flex-1">
            Usuario
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "TheHeader",
    setup() {

    },
})
</script>

<style>
.logo{
    font-family: Lobster;
}
</style>
