<script setup>
import { ref } from 'vue'

const faqs = ref([
    {
        question: 'What services do you offer?',
        answer: 'We offer a variety of Call of Duty-related services, including account boosting, bot lobbies & more',
    },
    {
        question: 'How do I get started?',
        answer: 'Simply browse our available services on the website and select the one that best fits your needs. You can then proceed with the order via discord.',
    },
    {
        question: 'What is your pricing?',
        answer: 'Our pricing is competitive and varies depending on the service. Visit our store page for detailed pricing.',
    },
    {
        question: 'How do I contact customer support?',
        answer: 'You can contact our support team through the ticket system on the Discord server.',
    },
    {
        question: 'Do you offer refunds?',
        answer: 'Refunds are only available under specific conditions, such as service failure. Please refer to our refund policy for more details.',
    },
])
</script>

<template>
    <div class="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div class="faq-list">
            <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="faq-item"
                @click="faq.shown = !faq.shown"
                :class="{ selected: faq.shown }"
            >
                <div class="faq-question">
                    <h3>
                        {{ faq.question }}
                    </h3>
                    <i class="fa-solid fa-arrow-right" :class="{ rotated: faq.shown }"></i>
                </div>
                <div class="faq-answer-wrapper" :class="{ shown: faq.shown }">
                    <div class="faq-answer">
                        <p>{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.faq-container {
    color: white;
    width: 100%;
    padding: 60px 20px;
    text-align: center;
}

h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 40px;
}

.faq-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 80%;
    margin: 0 auto;
}

@media (max-width: 1280px) {
    .faq-container {
        padding: 60px 0px;
    }

    .faq-list {
        max-width: 100%;
    }
}

.faq-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: left;
    overflow: hidden;
    transition: 0.3s ease;
    cursor: pointer;
}

.faq-item:hover {
    background: rgba(255, 255, 255, 0.2);
}

.faq-item.selected {
    background: rgba(255, 255, 255, 0.2);
}

.faq-question {
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.faq-question i {
    transition: 0.3s ease;
    margin-right: 10px;
}

.faq-question i.rotated {
    transform: rotate(90deg);
}

.faq-answer-wrapper {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: 0.5s ease;
}

.faq-answer-wrapper.shown {
    opacity: 1;
    max-height: 1000px;
}

.faq-answer {
    font-size: 1rem;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.8);
}
</style>
