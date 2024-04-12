<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <navbar-link v-for="(page, index) in publishedPages" class="nav-item" :key="index" :page="page"
                    :index="index"></navbar-link>
                <li>
                    <router-link to="/pages/create" class="nav-link" aria-current="page" active-class="active">
                        Create Page
                    </router-link>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle</button>
            </form>
        </div>
    </nav>
</template>

<script lang="ts">
import NavbarLink from "./navbar-link.vue"
import { defineComponent } from "vue"
import { Page } from "../data";

export default defineComponent({
    components: {
        NavbarLink
    },
    data() {
        return {
            theme: "light",
            pages: [] as Page[]
        }
    },
    created() {
        this.getThemeSettings();
        this.pages = this.$pages.getAllPages()
    },
    computed: {
        publishedPages(): Page[] {
            return this.pages.filter((page: Page) => page.published)
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light'

            if (this.theme === "light") {
                theme = "dark"
            }

            this.theme = theme;
            this.storeThemeSettings();
        },
        storeThemeSettings() {
            localStorage.setItem("theme", this.theme)
        },
        getThemeSettings() {
            const theme = localStorage.getItem("theme")

            if (theme) {
                this.theme = theme;
            }
        },
    }
})
</script>