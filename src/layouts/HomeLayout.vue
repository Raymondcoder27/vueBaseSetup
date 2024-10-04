<script setup lang="ts">
import { ref } from 'vue';

const message = ref<string>('Welcome to HomeLayout!');
</script>

<template>
    <div>
        <h1>{{ message }}</h1>
        <h1 class="text-gray-400 font-semibold bg-white shadow-gray-500 rounded-md text-sm">Hello World!!</h1>
    </div>
</template>