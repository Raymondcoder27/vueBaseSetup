<script setup lang="ts">


</script>

<template>
  <div class="flex mt-2 ml-2 mb-2 bg-white rounded-lg shadow-lg shadow-gray-600">
    <div class="text-gray-500">Side Menu</div>
  </div>
</template>

<style scoped>
.menu{
  @apply w-56 ml-2 flex my-auto text-gray-600 px-2 py-3 hover:text-black-900 cursor-pointer text-sm
}

.menu-active{
  @apply w-52 ml-3 flex my-auto font-bold bg-blue-400 rounded-md text-white px-1 py-2  cursor-pointer text-sm
}
</style>