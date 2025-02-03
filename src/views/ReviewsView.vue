<script setup>
import { ref, computed } from 'vue'
import NavBar from '@/components/NavBar.vue'

import reviewsData from '@/assets/reviews.json'

const reviews = ref(
    reviewsData.map((review) => ({
        ...review
    })),
)

const reviewsIndexed = ref(reviews.value.map((item, index) => ({ index, ...item })))
const sortedReviews = computed(() => [...reviewsIndexed.value].reverse())
</script>

<template>
    <main>
        <NavBar />
        <div class="reviews-container">
            <h1>Customer Reviews</h1>

            <div v-if="sortedReviews.length > 0" class="reviews">
                <div v-for="(review, index) in sortedReviews" :key="index" class="review-card">
                    <div class="review-header">
                        <h3>Customer #{{ sortedReviews.length - index }}</h3>

                        <span class="rating">
                            <span v-for="star in 5" :key="star"
                                :class="['star', { filled: star <= review.rating }]">⭐</span>
                        </span>
                    </div>
                    <p class="review-text">{{ review.message }}</p>
                </div>
            </div>

            <p v-else class="no-reviews">No reviews yet. Be the first to leave one!</p>
        </div>
    </main>
</template>

<style scoped>
.reviews-container {
    position: relative;

    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 90px 20px;

    overflow-y: scroll;
    overflow-x: hidden;
}

h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
}

.reviews {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 80%;
}

.review-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: left;
    width: 400px;
    /* height: fit-content; */
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rating {
    color: rgb(255, 215, 0);
}

.star {
    width: 20px;
    height: 20px;
    background-size: contain;
    opacity: 0.15;
    transition: opacity 0.2s ease-in-out;
}

.star.filled {
    opacity: 1;
}

.review-text {
    font-size: 1rem;
    margin-bottom: 10px;
}

.review-date {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
}

.no-reviews {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
}
</style>
