<script lang="ts" setup>
const store = useStore()

const isSidebarOpened = computed(() => store.isSidebarOpened)
</script>

<template>
    <div>
        <!-- Topnav -->
        <div class="navbar fixed z-10 bg-base-100/60 backdrop-blur-sm">
            <div class="flex-1">
                <a href="/" class="btn btn-ghost btn-md text-xl normal-case">Desdevol</a>
            </div>
            <!-- Nav Item -->
            <div class="hidden flex-none md:block">
                <ul class="menu menu-horizontal p-0">
                    <a href="/#about" class="btn btn-ghost btn-md mx-1 normal-case">About</a>
                    <a href="/#project" class="btn btn-ghost btn-md mx-1 normal-case">Projects</a>
                    <a href="/#contact" class="btn btn-ghost btn-md mx-1 normal-case">Contact</a>
                </ul>
            </div>
            <!-- Sidebar Toggle -->
            <button class="btn btn-ghost md:hidden" @click="store.openSidebar">
                <font-awesome-icon icon="fas fa-bars" class="text-xl" />
            </button>
        </div>
        <!-- Sidebar/Drawer -->
        <Transition name="slide">
            <div
                v-show="isSidebarOpened"
                class="fixed right-0 z-20 h-screen w-full overflow-y-auto bg-white p-4 dark:bg-zinc-900"
                tabindex="-1"
            >
                <div class="flex justify-between">
                    <a href="/" class="btn btn-ghost btn-md text-xl normal-case">Desdevol</a>
                    <button class="btn" @click="store.closeSidebar">
                        <font-awesome-icon icon="fas fa-close" class="text-xl" />
                    </button>
                </div>
                <div class="mt-5">
                    <a href="/#about" class="sidebar-item" @click="store.closeSidebar">About</a>
                    <a href="/#project" class="sidebar-item" @click="store.closeSidebar">Projects</a>
                    <a href="/#contact" class="sidebar-item" @click="store.closeSidebar">Contact</a>
                </div>
            </div>
        </Transition>

        <slot />
    </div>
</template>

<style lang="scss">
html {
    scroll-behavior: smooth;
}

.sidebar-item {
    @apply block rounded-md px-5 py-4 text-xl font-bold normal-case hover:bg-gray-600;

    &:target {
        @apply bg-zinc-600;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.25s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(50vw);
    opacity: 0;
}
</style>
