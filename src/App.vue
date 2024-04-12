<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>

    <create-page @page-created="pageCreated"></create-page> -->
</template>

<script lang="ts">
import NavBar from "./components/nav-bar.vue"
// import { Page } from "./data";
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        NavBar
    },
    methods: {
        // pageCreated(pageObj: Page) {
        //     this.pages.push(pageObj)
        // }
    }
})
</script>