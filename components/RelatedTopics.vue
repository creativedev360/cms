<template>
    <div class="bg-white my-6 p-4">
        <div class="text-sm font-semibold text-indigo-900 border-b-2">Related Topics (Ads):</div>
        <div v-for="(d, index) in data">
            <div class="flow-root p-2 border-b-2">
                <a :href="getURL(d.link)" class="text-xl text-indigo-900 font-bold">
                    <div class="float-left">
                        {{index+1}} &nbsp;&nbsp; {{ d.title }}
                    </div>
                    <div class="float-right">
                        <v-icon>mdi-menu-right</v-icon>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
 let { data } = defineProps(['data'])
 const route = useRoute()
 let query = ref(route.fullPath.split('?')[1])

 function getURL(link){
    return query.value ? link + '?' + query.value : link;
 }
</script>
