<script lang="ts" setup>
interface TimelineItem {
    date: String
    company: String
    desc: String
    highlights?: Array<String>
}

defineProps<TimelineItem>()
</script>

<template>
    <div class="flex-grow pl-4">
        <div class="title-font mb-1 text-sm font-medium tracking-wider dark:text-white">
            {{ date }}
        </div>
        <p class="text-xl font-bold">{{ company }}</p>
        <p class="leading-relaxed">
            {{ desc }}
        </p>
        <ul v-if="highlights" class="mt-3 ml-8 list-disc">
            <li v-for="(highlight, index) in highlights" :key="index">{{ highlight }}</li>
        </ul>
    </div>
</template>

<style scoped></style>
