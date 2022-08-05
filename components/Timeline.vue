<script lang="ts" setup>
interface TimelineItem {
    title: String
    desc: String
}
interface Props {
    items: Array<TimelineItem>
}
defineProps<Props>()
</script>

<template>
    <div class="flex w-full flex-wrap">
        <div class="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
            <div v-for="(item, index) in items" :key="index">
                <div v-if="index !== items.length - 1" class="relative flex pb-12">
                    <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
                        <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div
                        class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white"
                    >
                        <!-- ICON -->
                    </div>
                    <div class="flex-grow pl-4">
                        <h2 class="title-font mb-1 text-sm font-medium tracking-wider dark:text-white">
                            {{ item.title }}
                        </h2>
                        <p class="leading-relaxed">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative flex">
                <div
                    class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white"
                >
                    <!-- ICON -->
                </div>
                <div class="flex-grow pl-4">
                    <h2 class="title-font mb-1 text-sm font-medium tracking-wider dark:text-white">
                        {{ items[items.length - 1].title }}
                    </h2>
                    <p class="leading-relaxed">
                        {{ items[items.length - 1].desc }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
