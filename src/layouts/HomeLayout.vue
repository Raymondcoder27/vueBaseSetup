<script setup lang="ts">
import { ref } from 'vue';
import AppNotification from "@/components/AppNotification.vue"
import AppHeader from '@/components/AppHeader.vue';
import SideMenu from '@/components/SideMenu.vue';
</script>

<template>
    <div>
        <h1>{{ message }}</h1>
        <h1 class="text-gray-400 font-semibold bg-white shadow-gray-500 rounded-md text-sm">Hello World!!</h1>
    </div>
</template>