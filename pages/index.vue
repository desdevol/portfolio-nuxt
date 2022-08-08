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
        date: '2020 - 2022',
        company: 'Steadee',
        desc: '',
        highlights: [
            'Developing frontend control panel with Vue',
            'Writing custom Vue components',
            'Developing interactive site plan with leaflet.js',
            'Workng with agile team with tools like Jira',
            'Deploying Vue, Nuxt sites with pm2',
        ],
    },
    {
        date: '2020',
        company: 'Freelancing/Contracting',
        desc: '',
        highlights: [
            'Customize Wordpress sites',
            'Hack/Tweak Wordpress plugins',
            'Develop mobile driven dashboard UI with Vue',
            'Develop simple REST API with Laravel',
            'Namecard design',
            'Banner design',
        ],
    },
    {
        date: '2019 - 2020',
        company: 'IT Wonders',
        desc: '',
        highlights: [
            'Worked with Vue.js, developing web applications with Vuetify or Quasar',
            'Worked with Laravel for writing REST API',
            'Developed mock-ups with Adobe XD',
        ],
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

                <a href="#about" class="btn btn-outline btn-primary mt-8">Get To Know Me</a>
            </div>
        </section>

        <!-- =============================================================== -->
        <!--                              ABOUT                              -->
        <!-- =============================================================== -->
        <section class="content-section about-section mb-6" id="about">
            <h2 class="section-title">About Me</h2>

            <div class="mb-8">
                <p>
                    Graduated from Southern University College, I've been in the web development industry for 4 years.
                </p>
                <p>
                    I believe in "quality over quantity" for every product. Hence, over the time I've tried to improve
                    myself and improve the quality of work I can produce.
                </p>
            </div>

            <!-- Experience -->
            <h3 class="mb-4 text-2xl font-bold">My Experience</h3>
            <Timeline :items="timelineItems"></Timeline>
        </section>

        <!-- =============================================================== -->
        <!--                             CONTACT                             -->
        <!-- =============================================================== -->
    </div>
</template>

<style lang="scss" scoped>
.hero-section {
    @apply m-auto flex h-screen w-4/5 flex-row flex-wrap items-center justify-center;
}
.content-section {
    @apply m-auto mb-6 lg:w-3/4 xl:w-3/5;
}
.section-title {
    @apply my-6 text-3xl font-extrabold uppercase;
}
</style>
