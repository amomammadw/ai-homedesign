<template>
    <header>
        <nav class="py-4 backdrop-blur-lg">
            <ul class="flex items-center container space-x-8">
                <NuxtLink to="/">
                    <AppLogo width="158" height="31" />
                </NuxtLink>

                <template v-for="(linkItem, linkIndex) in headerItems" :key="linkIndex">
                    <li>
                        <NuxtLink
                            v-if="!linkItem.subMenu"
                            class="text-gray-500"
                            active-class="!text-gray-300"
                            :to="linkItem.link"
                        >
                            {{ linkItem.text }}
                        </NuxtLink>

                        <span v-else>mmd</span>
                    </li>
                </template>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { headerItems } from "~/data/components/header.data";
</script>
