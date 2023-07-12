<template>
    <div class="my-10">
        <div class="lg:flex">
            <div class="lg:w-1/6"></div>
            <div class="p-6 lg:p-0 lg:w-1/2 lg:mr-10">
                <div class="absolute text-sm">
                    <a href="#" :class="config.link_hover_color">Home</a> | 
                    <a href="#" :class="config.link_hover_color">Health</a> |
                    <a href="#" :class="config.link_hover_color">9 Tips for choosing the right dentist</a>
                </div>
                <!-- Article Image -->
                <div class="mt-6">
                    <img src="/assets/images/article_1.jpg" max-height="100"/>
                </div>
                <!-- Category -->
                <div class="my-4" :class="config.category_heading_color">
                    Health
                </div>
                <!-- Heading -->
                <div class="font-bold text-3xl">
                    9 Tips For Choosing The Right Dentist
                </div>
                <!-- Author -->
                <div class="text-xs my-4 flex align-end">
                    <div class="mr-2"><v-icon>mdi-account-tie</v-icon></div>
                    <div>Ethan Anderson</div>
                </div>
                <!-- Content (WYSIWYG) -->
                <div class="no-tailwindcss-base">
                    
                </div>

            </div>
            <div class="p-6 lg:p-0 lg:w-1/6">
                <div class="text-3xl my-4"><b>Top</b> Articles</div>
                <div class="my-6" v-for="(d, index) in data">
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