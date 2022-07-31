<script lang="ts" setup></script>

<template>
    <div>
        <!-- Topnav -->
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost btn-md text-xl normal-case">Desdevol</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <NuxtLink to="/#about" class="btn btn-ghost btn-md mx-1 normal-case">About</NuxtLink>
                    <NuxtLink to="/#experience" class="btn btn-ghost btn-md mx-1 normal-case">Experience</NuxtLink>
                    <NuxtLink to="/project" class="btn btn-ghost btn-md mx-1 normal-case">Projects</NuxtLink>
                    <NuxtLink to="/#contact" class="btn btn-ghost btn-md mx-1 normal-case">Contact</NuxtLink>
                </ul>
            </div>
        </div>
        <slot />
    </div>
</template>

<style scoped></style>
