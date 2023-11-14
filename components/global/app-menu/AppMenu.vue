<template>
    <div>
        <HeadlessMenu as="div" class="relative">
            <div>
                <HeadlessMenuButton>
                    <slot name="button" />
                </HeadlessMenuButton>
            </div>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <HeadlessMenuItems class="absolute">
                    <template v-for="(item, index) in items">
                        <HeadlessMenuItem as="div" v-slot="{ active }">
                            <slot name="item" v-bind="{ item, index, active }" />
                        </HeadlessMenuItem>
                    </template>
                </HeadlessMenuItems>
            </transition>
        </HeadlessMenu>
    </div>
</template>

<script setup lang="ts">
interface IMenuProps {
    items: any[];
}
defineProps<IMenuProps>();
</script>
