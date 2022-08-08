<script lang="ts" setup>
import Content from '~~/layouts/content.vue'
useHead({
    title: 'Project | Desdevol',
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
</script>

<template>
    <Content>Page: foo</Content>
</template>

<style scoped></style>
