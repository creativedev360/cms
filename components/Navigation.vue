<template>
    <div>
        <div class="flex items-stretch w-full h-16" :class="config.text_color_primary" >
          <div class="lg:w-1/6" :class="config.nav_bg_color_primary">
          </div>
          <div class="w-1/2 lg:w-1/3 flex" :class="config.nav_bg_color_title">
            <div class="w-1/3 mx-0">
              <img :src="config.logo" class="max-h-full"/>
            </div>
            <div class="w-2/3 font-bold font-serif text-xl py-4">{{ config.title }}</div>
          </div>
          <div class="w-1/2 lg:w-1/3 flex ml-auto" :class="[config.nav_bg_color_primary, config.text_color_secondary]">
            <div class="invisible text-2xl lg:visible py-3 font-serif ml-auto pr-3">Categories</div>
            <div class="py-2 text-3xl">
              <v-icon v-if="drawer" @click="drawer=!drawer">{{config.menu_icon_close}}</v-icon>
              <v-icon v-else @click="drawer=!drawer">{{config.menu_icon}}</v-icon>
            </div>
            <div id="dropdown" class="z-10 absolute top-16 right-0 lg:right-80 divide-y divide-gray-100 rounded-md shadow w-44" :class="[drawer ? '' : 'hidden', config.dropdown_bg_color]">
              <ul class="py-2 text-lg" :class="config.dropdown_text_color">
                <li class="block px-4 py-2 underline bg-gray-100">Categories</li>
                <li v-for="category in categories">
                  <a :href="category.href" class="block px-4 py-2" :class="[config.dropdown_hover_bg_color, config.dropdown_hover_text_color]">{{category.name}}</a>
                </li>
              </ul>
            </div>  
          </div>
          <div class="lg:w-1/6" :class="config.nav_bg_color_primary"></div>

                  
        </div>  
    </div>
  </template>
  
  <script setup>
    
    import { useConfigStore } from "~~/stores/ConfigStore";
    import categoriesData from "~/assets/json/Categories.json"

    let configStore = useConfigStore()

    let config = ref(configStore.config)
    
    let drawer = ref(false)
    let categories = ref(null)

    categories = categoriesData
    
  </script>