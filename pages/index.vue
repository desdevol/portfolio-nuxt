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

const contact = {
    github: 'https://github.com/desdevol',
    linkedIn: 'https://www.linkedin.com/in/desmond-lee-yong-wei',
    instagram: 'https://www.instagram.com/desdevol',
    email: 'desleeyw@gmail.com',
    discord: 'desdevol#2880',
}
</script>

<template>
    <div class="container mx-auto px-10">
        <!-- =============================================================== -->
        <!--                               HERO                              -->
        <!-- =============================================================== -->
        <section class="hero-section">
            <div>
                <h1 class="block h-fit w-full text-4xl md:text-6xl">
                    Hi, I am <span class="font-bold text-primary">Desmond Lee</span>
                </h1>
                <h2 class="block h-fit w-full text-2xl md:text-4xl">
                    A <span class="font-bold text-primary">Web Developer</span> from Johor, Malaysia
                </h2>

                <p class="mt-5">
                    I can make web applications, websites, and ocassionally designing namecards, logo and banners.
                </p>

                <div class="flex gap-4">
                    <a href="#project" class="btn btn-primary mt-8">See My Work</a>
                    <a href="#about" class="btn mt-8">Get To Know Me</a>
                </div>
                <div class="orb-canvas">
                    <span class="orb"></span>
                    <span class="orb"></span>
                </div>
            </div>
        </section>

        <!-- =============================================================== -->
        <!--                              ABOUT                              -->
        <!-- =============================================================== -->
        <section class="content-section about-section mb-6" id="about">
            <h2 class="section-title">About Me</h2>

            <div class="mb-8 grid grid-cols-1 gap-10 sm:grid-cols-[200px_minmax(auto,_1fr)]">
                <img class="portrait-image" src="~/assets/img/portrait.jpg" alt="Desmond Lee" />
                <div>
                    <p>
                        Graduated from Southern University College, I've been in the web development industry for 4
                        years. Mostly specialized in frontend, Vue.js
                    </p>
                    <p>
                        I believe in <span class="font-bold italic">quality over quantity</span> for product. Hence,
                        over the time I've tried to improve myself and improve the quality of work I can produce.
                    </p>

                    <!-- Experience -->
                    <h3 class="mt-5 mb-4 text-2xl font-bold">My Experience</h3>
                    <Timeline :items="timelineItems"></Timeline>

                    <!-- Tech Stack -->
                    <h3 class="mt-5 mb-4 text-2xl font-bold">My Tech Stack</h3>
                    <div class="flex gap-4">
                        <font-awesome-icon icon="fab fa-vuejs" class="text-2xl md:text-3xl" title="Vue JS" />
                        <font-awesome-icon icon="fab fa-laravel" class="text-2xl md:text-3xl" title="Laravel" />

                        <font-awesome-icon icon="fab fa-sass" class="text-2xl md:text-3xl" title="Sass" />
                        <font-awesome-icon icon="fab fa-git-alt" class="text-2xl md:text-3xl" title="Git" />
                        <font-awesome-icon icon="fab fa-linux" class="text-2xl md:text-3xl" title="Linux" />
                        <font-awesome-icon icon="fab fa-" class="text-2xl md:text-3xl" title="Linux" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- =============================================================== -->
    <!--                             CONTACT                             -->
    <!-- =============================================================== -->
    <section class="contact-section" id="contact">
        <div class="content">
            <h2 class="section-title pb-14 text-center">Contact</h2>

            <div class="mb-12 flex justify-center">
                <div class="grid" :style="{ gridTemplateColumns: 'min-content 1fr', gridGap: '16px 12px' }">
                    <div class="flex justify-center">
                        <font-awesome-icon icon="fab fa-discord" class="text-2xl md:text-3xl" title="Discord" />
                    </div>
                    <span class="text-lg md:text-2xl">{{ contact.discord }}</span>

                    <div class="flex justify-center">
                        <font-awesome-icon icon="fas fa-envelope" class="text-2xl md:text-3xl" title="Email" />
                    </div>
                    <span class="text-lg md:text-2xl">{{ contact.email }}</span>
                </div>
            </div>

            <div class="flex justify-center">
                <a :href="contact.github" class="contact-floating-item px-6" target="_blank" rel="noopener">
                    <font-awesome-icon icon="fab fa-github" class="text-5xl sm:text-6xl md:text-8xl" title="Github" />
                </a>
                <a :href="contact.linkedIn" class="contact-floating-item px-6" target="_blank" rel="noopener">
                    <font-awesome-icon
                        icon="fab fa-linkedin"
                        class="text-5xl sm:text-6xl md:text-8xl"
                        title="LinkedIn"
                    />
                </a>
                <a :href="contact.instagram" class="contact-floating-item px-6" target="_blank" rel="noopener">
                    <font-awesome-icon
                        icon="fab fa-instagram"
                        class="text-5xl sm:text-6xl md:text-8xl"
                        title="Instagram"
                    />
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero-section {
    @apply m-auto flex h-screen w-4/5 flex-row flex-wrap items-center justify-center;

    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }
    $orbSize: 450px;
    $animationDuration: 6s;
    $amount: 2;
    .orb-canvas {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        .orb {
            overflow-x: hidden;
            overflow-y: visible;
            width: $orbSize;
            height: $orbSize;
            border-radius: $orbSize;
            backface-visibility: hidden;
            position: absolute;
            animation-name: move;
            animation-duration: $animationDuration;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            $colors: #4b2033, #423453;
            @for $i from 1 through length($colors) {
                &:nth-child(#{$i}) {
                    background: nth($colors, $i);
                    filter: blur(60px) brightness(0.75);
                    top: $i * 10 + 10%;
                    left: $i * 15 + 20%;
                    animation-duration: calc(random($animationDuration * 10) / 10) * 1s + 15s;
                    animation-delay: calc(random(($animationDuration + 10s) * 10) / 10) * -1s;
                    transform-origin: 0;
                }
            }
        }
    }
}

.content-section {
    @apply m-auto mb-14 w-full pt-14 lg:w-3/4 xl:w-3/5;
}

.about-section {
    p {
        @apply pb-2;
    }
    .portrait-image {
        object-fit: cover;
        border-radius: 20px;
        max-width: 200px;
        filter: brightness(0.85) grayscale(0.1);
    }
}

.contact-section {
    @apply flex h-screen flex-wrap;
    .content {
        @apply m-auto items-center py-12 lg:w-3/4 xl:w-3/5;

        .contact-floating-item {
            transition: ease-in-out 0.2s;
            &:hover {
                filter: drop-shadow(0 1.6em 1rem #00000035);
                scale: 1.1;
                transition: ease-in-out 0.2s;
            }
        }
    }
    background: radial-gradient(ellipse at top, #151515, transparent),
        radial-gradient(ellipse at bottom, #4b2033, transparent);
    background-size: 100% 100%;
    background-position: 80px;
}
.section-title {
    @apply my-6 text-3xl font-extrabold uppercase;
}
</style>
