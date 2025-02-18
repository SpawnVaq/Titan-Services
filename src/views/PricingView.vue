<script setup>
const categories = [
    {
        title: "Bot Lobbies",
        items: [
            {
                tag: "Basic",
                price: "$4",
                priceDetail: "One Time",
                description: "1 Nuketown 24/7 Bot Lobby",
                features: ["Camos", "Weapon XP", "Levels", "Calling Cards / Emblems"],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "Ultra",
                price: "$2.50",
                priceDetail: "Each for 5+ Lobbies",
                description: "5+ Nuketown 24/7 Bot Lobbies",
                features: ["Camos", "Weapon XP", "Levels", "Calling Cards / Emblems"],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "Basic",
                price: "$5",
                priceDetail: "One Time",
                description: "1 Hardcore Domination Bot Lobby",
                features: ["Camos", "Weapon XP", "Levels", "Calling Cards / Emblems"],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "Ultra",
                price: "$25",
                sale: "$15",
                priceDetail: "5 Domination Lobbies ",
                description: "5 Domination Lobbies",
                features: ["Camos", "Weapon XP", "On Sale!", "Levels", "Calling Cards / Emblems"],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "VIP",
                price: "$250",
                sale:"$150",
                priceDetail: "One Time",
                description: "Unlimited Bot Lobbies",
                features: ["Camos", "Weapon XP", "On Sale!", "Levels", "Calling Cards / Emblems"],
                link: "https://discord.gg/teentitans",
            },
        ],
    },
    {
        title: "Dark Matter & Prestige Master",
        items: [
            {
                tag: "VIP",
                price: "$125",
                sale: "$95",
                priceDetail: "One Time",
                description: "Unlock Dark Matter",
                features: [
                    "Dark Matter on every gun",
                    "Quick Delivery Time",
                    "On Sale!",
                    "Fast Responses & Updates",
                    "VIP Role in our discord",
                ],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "VIP",
                price: "$150",
                sale:"$90",
                priceDetail: "One Time",
                description: "Hit Prestige Master",
                features: [
                    "Dark Matter on every gun",
                    "Quick Delivery Time",
                    "On Sale!",
                    "Fast Responses & Updates",
                    "VIP Role in our discord",
                ],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "ULTIMATE",
                price: "$285",
                sale:"$180",
                priceDetail: "One Time",
                description: "Hit Prestige Master",
                features: [
                    "Dark Matter on every gun",
                    "Prestige Master",
                    "All of our bundles",
                    "On Sale!",
                    "100 Hours Of 2XP Codes",
                    "VIP Role in our discord"
                ],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "VIP",
                price: "$300+",
                sale: "$130",
                priceDetail: "One Time",
                description: "Hit Prestige Master & Unlock Dark Matter",
                features: [
                    "Dark Matter on every gun",
                    "Quick Delivery Time",
                    "On Sale!",
                    "Fast Responses & Updates",
                    "VIP Role in our discord",
                ],
                link: "https://discord.gg/teentitans",
            },
        ],
    },
    {
        title: "In-game Bundles & 2XP Codes",
        items: [
            {
                tag: "Basic",
                price: "$5",
                priceDetail: "One Time",
                description: "Little Caesars: 5 Codes (1 code per day)",
                features: [
                    "Unlock exclusive rewards in game",
                    "Quick Delivery Time",
                    "Fast Responses & Updates",
                    "Customer role in our discord",
                ],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "Basic",
                price: "$25",
                priceDetail: "One Time",
                description: "Monster Energy Bundle",
                features: [
                    "Unlock exclusive rewards in game",
                    "Quick Delivery Time",
                    "Fast Responses & Updates",
                    "Customer role in our discord",
                ],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "Basic",
                price: "$15",
                priceDetail: "One Time",
                description: "Tokyo Game Show 2024 Bundle",
                features: [
                    "Unlock exclusive rewards in game",
                    "Quick Delivery Time",
                    "Fast Responses & Updates",
                    "Customer role in our discord",
                ],
                link: "https://discord.gg/teentitans",
            },
            {
                tag: "Basic",
                price: "$5",
                priceDetail: "One Time",
                description: "5 Codes (Redeemable once per day.)",
                features: [
                    "Unlock exclusive rewards in game",
                    "Quick Delivery Time",
                    "Fast Responses & Updates",
                    "Customer role in our discord",
                ],
                link: "https://discord.gg/teentitans",
            },
        ],
    },
];

const getDiscountedPrice = (item) => {
    if (item.sale && item.discount) {
        return (item.price * (1 - item.discount / 100)).toFixed(2);
    }
    return item.price;
};

const formatPrice = (price) => {
    return `${price}`;
};
</script>

<template>
    <div class="container">
        <div v-for="category in categories" :key="category.title" class="item">
            <h1>{{ category.title }}</h1>
            <div class="divider"></div>
            <div class="cards">
                <div v-for="item in category.items" :key="item.description" class="card">
                    <div class="tag">{{ item.tag }}</div>

                    <div v-if="item.sale" class="price-container">
                        <span class="price">{{ formatPrice(item.sale) }}</span>
                        <span class="original-price">{{ formatPrice(getDiscountedPrice(item)) }}</span>
                        <span class="price2">{{ item.priceDetail }}</span>
                    </div>
                    <div v-else class="price-container">
                        <span v-if="item.sale" class="original-price">{{ formatPrice(item.price) }}</span>
                        <span class="price">{{ formatPrice(getDiscountedPrice(item)) }}</span>
                        <span class="price2">{{ item.priceDetail }}</span>
                    </div>

                    <p>{{ item.description }}</p>
                    <div class="divider"></div>
                    <div class="info">
                        <div v-for="feature in item.features" :key="feature">
                            <i class="fa-solid fa-circle-check"></i> {{ feature }}
                        </div>
                    </div>
                    <button @click="window.open(item.link, '_blank')">Purchase</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;

    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 50px;
    padding: 90px 20px;

    overflow-y: scroll;
    overflow-x: hidden;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
}

.divider {
    background-color: rgba(143, 156, 194, 0.8);
    width: 100%;
    height: 1px;
}

.cards {
    padding: 10px;
    display: flex;
    flex-direction: row;
    min-width: calc((330px * 4));
    max-width: calc((330px * 4));
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-around;
    align-items: stretch;
    width: 100%;
}

@media (max-width: 1280px) {
    .cards {
        min-width: 100%;
        max-width: 100%;
    }

    .card {
        width: 75%;
        max-width: 75%;
    }
}

@media (max-width: 1028px) {
    .cards {
        min-width: 100%;
        max-width: 100%;
    }

    .card {
        width: 60%;
        max-width: 60%;
    }
}

@media (max-width: 768px) {
    .cards {
        min-width: 100%;
        max-width: 100%;
    }

    .card {
        width: 48%;
        max-width: 48%;
    }
}

@media (max-width: 480px) {
    .cards {
        min-width: 100%;
        max-width: 100%;
    }

    .card {
        width: 100%;
        max-width: 100%;
    }
}

.card {
    background: rgba(34, 34, 34, 0.5);
    border: 1px solid rgba(143, 156, 194, 0.6);
    padding: 15px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 5px;

    max-width: 300px;
    width: 100%;
    min-height: 325px;
}

.card .tag {
    background-color: rgba(143, 156, 194, 0.2);
    border: 1px solid rgba(143, 156, 194, 0.9);
    color: rgb(143, 156, 194);
    border-radius: 25px;
    padding: 2px 15px;
}

.original-price {
    text-decoration: line-through;
    color: rgba(255, 255, 255, 0.45);
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 10px;
    position: relative;
}

.card .price-container {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 5px;
}

.card .price {
    font-size: 2rem;
    font-weight: 700;
}

.card .price .price2 {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.65);
}

.card .info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.card .info div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 7px;
    color: white;
    font-size: 0.85rem;
}

.card .info div i {
    color: rgb(143, 156, 194);
}

.card p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.75rem;
}

.card button {
    background: rgba(143, 156, 194, 0.8);
    border: none;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    margin-top: auto;
    transition: 0.3s;
}

.card button:hover {
    background: rgb(143, 156, 194);
}
</style>
