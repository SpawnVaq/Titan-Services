<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <main>
        <NavBar />
        <div class="page">
            <RouterView />
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
}

.page {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
}

@media (max-width: 1280px) {
    .page {
        top: 6vh;
    }
}
</style>
