<template>
    <p v-if="msgErro.length >= 1" >
        <b>Por favor, corrija o(s) seguinte(s) erro(  s):</b>
        <ul>
          <li class="erro" v-for="erro in msgErro" :key="erro.key">{{ erro }}</li>
        </ul>
    </p>
</template>

<script>
export default {
    props:{
        msgErro: []
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
.erro{
  color: red
}
</style>