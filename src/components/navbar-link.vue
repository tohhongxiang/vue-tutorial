<template>
    <li>
        <router-link :to="`/${index}`" class="nav-link" active-class="active" aria-current="page" :href="page.link.url"
            :title="`This link goes to the ${page.link.text} page`">
            {{ page.link.text }}
        </router-link>
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    props: ['page', 'index'],
})
</script>