import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
    const isSidebarOpened = ref(false)
    function openSidebar() {
        isSidebarOpened.value = true
    }
    function closeSidebar() {
        isSidebarOpened.value = false
    }
    return { isSidebarOpened, closeSidebar, openSidebar }
})
