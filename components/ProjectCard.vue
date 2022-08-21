<script lang="ts" setup>
interface Project {
    img?: string
    title: string
    desc: string
    url: string
    techUsed?: Array<string>
}

interface Prop {
    project: Project
}

const props = defineProps<Prop>()

const image = computed(() => {
    return props.project.img ?? 'https://images.unsplash.com/photo-1608306448197-e83633f1261c?w=640'
})
</script>

<template>
    <div class="project-card group">
        <figure class="">
            <img
                :src="image"
                :alt="project.title"
                class="h-60 w-full rounded-[2rem] object-cover p-4 brightness-90 transition-all group-hover:rounded-[1.5rem] group-hover:p-2"
            />
        </figure>
        <div class="flex h-full flex-col justify-between p-8">
            <div>
                <h2 class="mb-3 text-xl font-bold">{{ project.title }}</h2>
                <p class="text-sm">{{ project.desc }}</p>

                <div class="mt-4 flex flex-wrap">
                    <div
                        v-for="(tech, index) in project.techUsed"
                        :key="index"
                        class="badge badge-outline badge-secondary mr-1 font-bold"
                    >
                        {{ tech }}
                    </div>
                </div>
            </div>
            <div class="mt-4 flex justify-end">
                <a :href="project.url" class="btn btn-primary btn-ghost" target="_blank">See Demo</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-card {
    @apply card card-compact transition-all hover:bg-zinc-800;
}
</style>
