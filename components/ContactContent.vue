<script lang="ts" setup></script>

<template>
    <h2 class="section-title">Contact</h2>

    <font-awesome-icon icon="fab fa-github" size="8x" />
    <font-awesome-icon icon="fab fa-discord" size="8x" />
    <font-awesome-icon icon="fab fa-linkedin" size="8x" />
    <font-awesome-icon icon="fas fa-envelope" size="8x" />
</template>

<style lang="scss" scoped>
/* ========================================================
 *                Gradient animation CSS
 * ========================================================
 */
.contact-section {
    @apply m-auto py-12 lg:w-3/4 xl:w-3/5;
    .gradient-flow {
        background: linear-gradient(to right top, #232931, #363554, #42202f, #232931);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }
}
</style>
