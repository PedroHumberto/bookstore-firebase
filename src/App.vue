<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="container">

  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</div>
</template>

<style>
.container{
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
a{
  margin: 10px 10px;
  text-decoration: none;
  font-size: 20px;
  color: green

}
nav{
  text-align: center;
  margin: 10px auto;
  background: none;
}
</style>
