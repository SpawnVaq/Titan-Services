<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="home">
        <div class="overlay"></div>
        <img src="/background.png" alt="Background" class="background" />

        <div class="content">
            <h1>Where <span>Call of Duty</span> <br />Mastery Begins</h1>
            <p>
                Titan Services offers top-tier coaching, boosting, and resources to elevate your
                Call Of Duty and keep you ahead in the game.
            </p>

            <RouterLink to="/pricing" class="button"> View Services </RouterLink>

            <div class="examples">
                <div class="example-card">
                    <img src="/2x-xp-boost.png" alt="2XP Boost" />
                    <h3>10 Hours 2XP</h3>
                    <span>$6.00</span>
                </div>
                <div class="example-card">
                    <img src="/MESKBO6.png" alt="ME Skin" />
                    <h3>Monster Energy Bundle</h3>
                    <span>$25.00</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: start;
    width: 100vw;
    height: 100vh;
    padding: 90px 0;
    padding-left: 3%;
    color: white;
}

.background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    z-index: -2;
}

.overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: -1;
}

.content {
    width: 100%;
    max-width: 1200px;
    height: 80%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media (max-width: 1280px) {
    .content {
        width: 90%;
    }
}

h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 700;
}

h1 span {
    color: rgb(143, 156, 194);
    font-weight: 700;
}

p {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.5;
}

.button {
    margin-top: 6%;
    padding: 1rem 5rem;
    font-size: 1.3rem;
    width: fit-content;
    text-align: center;
    border: none;
    border-radius: 25px;
    color: rgb(255, 255, 255);
    background-color: rgb(143, 156, 194);
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
}

.button:hover {
    background-color: rgb(100, 110, 160);
}

.examples {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: auto;
}

.example-card {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 5px 10px;
    text-align: center;
    transition: 0.3s;
    min-width: 160px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.example-card img {
    width: 50px;
    object-fit: contain;
    border-radius: 5px;
}

.example-card h3 {
    font-size: 1.2rem;
    width: fit-content;
}

.example-card span {
    font-size: 1rem;
    font-weight: bold;
    color: rgb(143, 156, 194);
    width: fit-content;
}

.example-card:hover {
    transform: scale(1.02);
}
</style>
