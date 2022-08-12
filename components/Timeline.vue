<script lang="ts" setup>
interface TimelineItem {
    date: String
    company: String
    desc: String
    highlights?: Array<String>
}

interface Props {
    items: Array<TimelineItem>
}

defineProps<Props>()
</script>

<template>
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <TimelineItem
            v-for="(item, index) in items"
            :key="index"
            :date="item.date"
            :company="item.company"
            :desc="item.desc"
            :highlights="item.highlights"
        ></TimelineItem>
    </ol>
</template>

<style scoped></style>
