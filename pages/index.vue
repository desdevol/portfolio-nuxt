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

const timelineItems = [
    {
        title: '2020 - 2022',
        desc: 'Pak Yiu',
    },
    {
        title: '2020',
        desc: 'Pak Yiu',
    },
    {
        title: '2019 - 2020',
        desc: 'Pak Yiu',
    },
]
</script>

<template>
    <div>
        <section class="hero-section">
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
        </section>

        <!-- =============================================================== -->
        <!--                              ABOUT                              -->
        <!-- =============================================================== -->
        <section class="about-section mb-6" id="about">
            <h2 class="section-title">About Me</h2>

            <p>Graduated from Southern University College, I've been in the web development industry for 4 years.</p>
            <p>
                I believe in "quality over quantity" for every product. Hence, over the time I've tried to improve
                myself and improve the quality of work I can produce.
            </p>

            <!-- Experience -->
            <Timeline :items="timelineItems"></Timeline>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.hero-section {
    @apply m-auto flex h-screen w-4/5 flex-row flex-wrap items-center justify-center;
}
.section-title {
    @apply my-6 text-3xl font-extrabold uppercase;
}
</style>
