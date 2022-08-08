<script lang="ts" setup></script>

<template>
    <div>
        <!-- Topnav -->
        <div class="navbar fixed z-10 bg-base-100/60 backdrop-blur-sm">
            <div class="flex-1">
                <a href="/" class="btn btn-ghost btn-md text-xl normal-case">Desdevol</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <a href="/#about" class="btn btn-ghost btn-md mx-1 normal-case">About</a>
                    <NuxtLink to="/project" class="btn btn-ghost btn-md mx-1 normal-case">Projects</NuxtLink>
                    <a href="/#contact" class="btn btn-ghost btn-md mx-1 normal-case">Contact</a>
                </ul>
            </div>
        </div>
        <div class="container mx-auto px-10">
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
