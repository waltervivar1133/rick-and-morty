<template>
 <div class="max-w-9xl mx-auto">
  <h1 class="text-3xl font-bold text-white uppercase mb-5">
      Personajes de Rick and Morty
    </h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters'
import FilterByStatus from '@/components/FilterByStatus'
import FilterByName from '@/components/FilterByName'
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>

<style lang="scss">
body {
  background: url("https://www.hdwallpaper.nu/wp-content/uploads/2018/11/rick_and_morty-2.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
