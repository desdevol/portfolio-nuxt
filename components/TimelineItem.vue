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
    <li class="mb-10 ml-6">
        <span
            class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-white dark:bg-primary dark:ring-zinc-900"
        >
            <svg
                aria-hidden="true"
                class="h-3 w-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </span>
        <h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            {{ company }}
        </h3>
        <time class="mb-4 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ date }}</time>

        <ol class="mb-4 ml-5 list-disc text-base font-normal text-gray-500 dark:text-gray-400">
            <li v-for="(highlight, index) in highlights" :key="index">
                {{ highlight }}
            </li>
        </ol>
    </li>
</template>

<style scoped></style>
