<template>
  <div class="max-w-lg mx-auto grid gap-x-4 gap-y-4 categorias-container select-none">
      <categorias-item  v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue'
import CategoriasItem from './CategoriasItem.vue'
import Categoria from "../types/Categoria"

export default defineComponent({
    name: "Categorias",
    components: {CategoriasItem},
    setup(){
        const items = ref<Categoria[]>([
                { id:'cerrajeria', name: 'Cerrajería', photo: 'https://nion.es/wp-content/uploads/2019/11/cerrajeria.jpg'},
                { id:'dietetica', name: 'Dietética', photo: 'https://guia25digital.com.ar/app/uploads/comercios/dietetica-del-so_2_1564774982.jpg'},
                { id:'ferreteria', name: 'Ferretería', photo: 'https://resizer.glanacion.com/resizer/yLoMGM6LL5JprBURbuemRj5yWY8=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PYCQHBHQ3BA5LH4XA4JUL7SK7M.jpg'},
                { id:'bazar', name: 'Bazar', photo: 'https://www.pausa.com.ar/wp-content/uploads/2017/03/bazar.jpg'},
        ])
        return { items }
    }
    
})
</script>


<style scoped>
    .categorias-container {
        grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
    }
</style>