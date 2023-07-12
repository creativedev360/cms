<template>
    <div class="lg:flex bg-black">
        <div class="lg:w-1/6"></div>
        <div class="p-6 lg:p-0 lg:w-1/3">
            <div class="flex mb-4 mt-2">
                <div class="w-1/3 mx-0 h-16">
                    <img :src="config.logo" class="max-h-full"/>
                </div>
                <div class="w-2/3 font-bold absolute ml-32 font-serif text-xl py-4">{{ config.title }}</div>
            </div>

            <div>
                {{ footer.info }}
            </div>
            <br/>
            Copyright © {{ new Date().getFullYear() }} {{config.site_url}}
            <br/><br/>
        </div>
        <div class="lg:w-1/3 mt-2 ml-8 pl-12">
            <div class="text-2xl"><b>Quick</b> Links</div>
            <div class="grid grid-cols-3" v-for="link in footer.links">
                <div class="col-span-1 my-2"><a :href="link.href">{{link.name}}</a></div>
            </div>
        </div>
        <div class="lg:w-1/6"></div>
    </div>
</template>

<script setup>
    import { useConfigStore } from "~~/stores/ConfigStore";
    let configStore = useConfigStore()
    let config = ref(configStore.config)
    let footer = ref(configStore.footer)
</script>