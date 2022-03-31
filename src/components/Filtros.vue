<template>
  <select v-model="genero" @input="pegaGenero">
      <option>Todos</option>
      <option value="1"> Drama</option>
      <option value="2">Ficção</option>
      <option value="3">Terror</option>
      <option value="4">Romance</option>
      <option value="5">Comedia</option>
  </select>
</template>

<script>


export default {
  data() {
    return {
      genero:''
    }
  },
  methods: {
      pegaGenero(){
        this.$root.$emit('pegaGenero', this.genero)
      }
  },

}
</script>

<style>

</style>