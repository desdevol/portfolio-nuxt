<script lang="ts">
export default {
    head() {
        return {
            htmlAttrs: {
                class: 'dark',
            },
        }
    },
}
</script>

<template>
    <div>
        <NuxtLayout name="main">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
