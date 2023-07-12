<template>
    <div class="bg-gray-100 flow-root">
        <img :src="data.image" class="h-24 w-32" :class="[position=='left' ? 'float-left' :'float-right']"/>
        <div class="inline-block mx-6" :class="[position=='left' ? 'float-right' :'float-left']">
            <div class="mt-4" :class="config.category_heading_color">{{data.category}}</div>
            <div class="hover:underline" :class="config.link_hover_color">
                <a :href="data.url">{{ data.text }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useConfigStore } from "~~/stores/ConfigStore";
    let configStore = useConfigStore()
    let config = ref(configStore.config)

    let { position, data} = defineProps(['position', 'data'])

</script>
