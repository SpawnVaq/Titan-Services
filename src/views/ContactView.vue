<script setup>
import FAQ from '@/components/FAQ.vue'
</script>

<template>
    <div class="container">
        <h1>Need Support?</h1>
        <span>Our main contact method is via Discord!</span>
        <button onclick="window.open('https://discord.gg/teentitans', '_blank')">
            <i class="fa-brands fa-discord"></i> Join Discord
        </button>
        <FAQ />
    </div>
</template>

<style scoped>
.container {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    min-height: 100vh;
    width: 100%;
    padding: 90px 20px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;
}

h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

span {
    font-size: 1rem;
    font-weight: 500;
}

button {
    width: fit-content;
    border: none;
    background-color: rgba(143, 156, 194, 0.75);
    color: #fff;
    font-size: 1rem;
    padding: 10px 15px;
    border-radius: 10px;

    cursor: pointer;
    transition: 0.3s ease;
}

button:hover {
    background-color: rgb(143, 156, 194);
}
</style>
