<template>
    <div class="text-gray-200">Page {{ breakpoint }}</div>
</template>

<script setup lang="ts">
const { breakpoint } = useResponsive();
</script>
