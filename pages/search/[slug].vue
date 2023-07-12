<template>
    <div class="my-4 flex">
        <div class="p-6 lg:p-0 lg:w-1/6"></div>
        <div class="p-6 lg:p-0 lg:w-1/2">
            <div class="absolute text-sm">
                <a href="#" :class="config.link_hover_color">Home</a> | 
                <a href="#" :class="config.link_hover_color">Health</a> |
                <a href="#" :class="config.link_hover_color">9 Tips for choosing the right dentist</a>
            </div>
            <!-- Heading -->
            <div class="font-bold text-3xl mt-12">
                9 Tips For Choosing The Right Dentist
            </div>
            <!-- Author -->
            <div class="text-xs my-4 flex align-end">
                <div class="mr-2"><v-icon>mdi-account-tie</v-icon></div>
                <div>Ethan Anderson</div>
            </div>
            <!-- Before Read More -->
            <div class="text-sm no-tailwindcss-base">
                Macular degeneration is a condition in which the patient’s eyesight gets compromised. 
                <RelatedTopics :data="data"/>
                It impacts the retina’s sensitive and central part known as the macula. The disease is known to affect approximately 8 million people in the country. It is also one of the biggest causes of vision loss in people aged 50 years or above. Macular degeneration is often considered an age-related disease but may sometimes occur in younger patients.
            </div>
            <!-- After Read More -->
            <div class="text-sm no-tailwindcss-base">
                Macular degeneration causes
Research has failed to identify why some people develop macular degeneration while others do not. However, age has appeared to be a significant contributing factor. It has also been indicated that genetic predisposition might contribute as a risk factor. Some other factors that can increase the risk for an individual include:

Increased exposure to UV rays or light
Improper nutrition
Decreased activity
Age – 65 years or above
Family history of macular degeneration

Macular degeneration symptoms
Macular degeneration is categorized into dry and wet macular degeneration. The symptoms observed in both these conditions are the same, except patients with the latter have increased severity of symptoms and a rapidly progressing condition. About 75% of patients suffer from dry macular degeneration.
            </div>
        </div>
        <div class="p-6 lg:p-0 lg:w-1/6">
            <div class="text-3xl my-4"><b>Top</b> Articles</div>
            <div class="my-6" v-for="(d, index) in data">
                <Card :position="index%2 ? 'left': 'right'" :data="d"/>
            </div>
        </div>
        <div class="p-6 lg:p-0 lg:w-1/6"></div>
    </div>
</template>

<script setup>
    import { useConfigStore } from "~~/stores/ConfigStore";

    let configStore = useConfigStore()
    let config = ref(configStore.config)
    function func(v){
        alert(v)
    }

    let data = ref([
        {
            title: "Reverse Macular Degeneration",
            link: "https://example.com/"
        },
        {
            title: "Reverse Macular Degeneration",
            link: "https://example.com/"
        },
        {
            title: "Reverse Macular Degeneration",
            link: "https://example.com/"
        },
        {
            title: "Reverse Macular Degeneration",
            link: "https://example.com/"
        },
        {
            title: "Reverse Macular Degeneration",
            link: "https://example.com/"
        },
        {
            title: "Reverse Macular Degeneration",
            link: "https://example.com/"
        },
    ])

</script>
