<script lang="ts" setup>
useHead({
    title: 'Desdevol',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'Desmond Lee. Web developer from Malaysia. Tech stack: Vue, Laravel.',
        },
    ],
})
</script>

<template>
    <div>
        <div class="hero-section">
            <div>
                <h1 class="block h-fit w-full text-6xl">
                    Hi, I am <span class="font-bold text-primary">Desmond Lee</span>
                </h1>
                <h2 class="block h-fit w-full text-4xl">
                    A <span class="font-bold text-primary">Web Developer</span> from Johor, Malaysia
                </h2>

                <p class="mt-5">
                    I'm a software engineer mostly specialized in front-end. <br />
                    I can make web applications, websites, and ocassionally designing namecards, logo and banners.
                </p>

                <button class="btn btn-outline btn-primary mt-8">Get To Know Me</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero-section {
    @apply m-auto flex h-screen w-4/5 flex-row flex-wrap items-center justify-center;
}
</style>
