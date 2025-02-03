<script setup>
import FAQ from '@/components/FAQ.vue'

const testimonials = [
    {
        name: 'Cartel',
        jobTitle: 'Discord Customer',
        message:
            'Absolutely phenomenal service. Do NOT hesitate to buy each lobby i did (16 straight) were 200+ kills some in the 400’s. They make sure yall get kills so you can complete your camos.',
    },
    {
        name: 'AussieFitness',
        jobTitle: 'Content Creator & Discord Customer',
        message:
            "10/10 service, i’ve bought tonnes from other people but Titans are hands down the best value. Easy 400 - 600 kill games, insane XP & cool asf dude to deal with.",
    },
    {
        name: 'YL',
        jobTitle: 'Discord Customer',
        message:
            "10/10 service, I’ve had nothing but the best experience with this with Titan! I lvled up so much doing this process, high level kills each time, skins and all. I’ll be back for sure! Would recommend highly!.",
    },
]
</script>

<template>
    <section class="why-us-container">
        <h1>Why Choose Us?</h1>
        <div class="intro-text">
            <p>
                At Titan Services, we pride ourselves on offering high-quality services for all your
                Call of Duty needs. Here's why our customers trust us:
            </p>
        </div>

        <div class="key-points">
            <div class="point">
                <h3><i class="fa-solid fa-people-group"></i> Experienced Team</h3>
                <p>
                    We bring years of experience in gaming services, ensuring a smooth and top-tier
                    experience.
                </p>
            </div>
            <div class="point">
                <h3><i class="fa-solid fa-face-smile"></i> Customer Satisfaction</h3>
                <p>
                    Our client's satisfaction is our top priority, and we always go the extra mile
                    to meet your needs.
                </p>
            </div>
            <div class="point">
                <h3><i class="fa-solid fa-hand-holding-dollar"></i> Competitive Pricing</h3>
                <p>
                    We offer the best services at affordable rates, giving you maximum value for
                    your call of duty needs.
                </p>
            </div>
        </div>

        <div class="testimonials-container">
            <h2>What Our Clients Say</h2>
            <div class="testimonials">
                <div
                    class="testimonial-card"
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                >
                    <p class="testimonial-text">{{ testimonial.message }}</p>
                    <div class="testimonial-author">
                        <p>- {{ testimonial.name }}</p>
                        <p>
                            <i>{{ testimonial.jobTitle }}</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <FAQ />
    </section>
</template>

<style scoped>
.why-us-container {
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
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
}

.intro-text p {
    font-size: 1.2rem;
    max-width: 80%;
    margin: 0 auto 40px;
}

.key-points {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.point {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    width: 400px;
}

.point i {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px 15px;
    border-radius: 10px;
}

.point h3 {
    font-size: 1.4rem;
    font-weight: 700;
}

.testimonials-container {
    margin-top: 40px;
    text-align: center;
}

h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
}

.testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.testimonial-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 350px;
    text-align: left;
}

.testimonial-text {
    font-size: 1.1rem;
    margin-bottom: 15px;
    font-style: italic;
}

.testimonial-author p {
    font-size: 1rem;
    font-weight: bold;
}

.testimonial-author i {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
}
</style>
