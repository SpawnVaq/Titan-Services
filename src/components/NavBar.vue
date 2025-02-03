<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/pricing">Pricing</RouterLink>
            <RouterLink to="/whyus">Why Us</RouterLink>
            <RouterLink to="/reviews">Reviews</RouterLink>
            <RouterLink to="/contact">Contact Us</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    left: 0;
    top: 0;
    margin-bottom: 60px;
    width: 100%;
    height: fit-content;
    z-index: 1000;
    padding: 10px 0;
    background-color: rgb(0, 0, 0);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

nav {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

nav a {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.85);
}

nav a:hover,
nav a.router-link-exact-active {
    background-color: rgba(32, 32, 32, 0.89);
    color: rgb(143, 156, 194);
}

@media (max-width: 768px) {
    nav {
        padding: 10px 0;
    }

    nav a {
        padding: 12px 12px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    nav {
        padding: 10px 0;
    }

    nav a {
        font-size: 12px;
        padding: 5px 9px;
    }
}
</style>
