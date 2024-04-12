<template>
    <div v-if="page" class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script lang="ts">
import { Page } from "@/data";
import { defineComponent } from "vue";

export default defineComponent({
    props: ['index'],
    created() {
        this.page = this.$pages.getSinglePage(this.index);
    },
    data() {
        return { page: null } as { page: null | Page }
    },
    watch: {
        index(newIndex) {
            this.page = this.$pages.getSinglePage(newIndex);
        }
    }
});

</script>