<template>
    <div class="my-10">
        <div class="lg:flex">
            <div class="lg:w-1/6"></div>
            <div class="p-6 lg:p-0 lg:w-2/3 lg:mr-10 grid grid-cols-1 lg:grid-cols-2">
                
                <div class="mx-auto my-4" v-for="(d, index) in data">
                    <Card :position="index%2 ? 'left': 'right'" :data="d"/>
                </div>

            </div>
            <div class="lg:w-1/6"></div>
        </div>
    </div>
    <div class="mt-10 p-6 lg:p-0 lg:flex">
        <div class="lg:w-1/6"></div>
        <div  class="w-full lg:w-2/3">
            <div class="text-3xl my-4"><b>Related</b> Articles</div>
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <div class="col-span-1 mx-2 my-3" v-for="(d, index) in data">
                    <Card :position="index%2 ? 'left': 'right'" :data="d"/>
                </div>
            </div>
        </div>
        <div class="lg:w-1/6"></div>
    </div>
</template>

<script setup>
    import { useConfigStore } from "~~/stores/ConfigStore";

    let configStore = useConfigStore()
    let config = ref(configStore.config)
    let data = ref([{
        category: "Health",
        image:"/assets/images/article_1.jpg",
        text:"Myasthenia gravis – causes, symptoms, and more",
        url:"#"
    }])
</script>