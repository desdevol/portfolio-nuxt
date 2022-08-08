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

const props = defineProps<Props>()

const lastItem = computed(() => props.items[props.items.length - 1])
</script>

<template>
    <div class="flex w-full flex-wrap">
        <div class="md:py-6 md:pr-10">
            <div v-for="(item, index) in items" :key="index">
                <div v-if="index !== items.length - 1" class="relative flex pb-12">
                    <div class="absolute inset-0 flex h-full w-6 items-center justify-center">
                        <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div
                        class="relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white"
                    ></div>
                    <TimelineItem
                        :date="item.date"
                        :company="item.company"
                        :desc="item.desc"
                        :highlights="item.highlights"
                    ></TimelineItem>
                </div>
            </div>

            <div class="relative flex">
                <div
                    class="relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white"
                ></div>
                <TimelineItem
                    :date="lastItem.date"
                    :company="lastItem.company"
                    :desc="lastItem.desc"
                    :highlights="lastItem.highlights"
                ></TimelineItem>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
