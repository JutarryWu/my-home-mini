<template>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'
const appStore = useAppStore()
appStore.addCar(3)
console.log('user', appStore.count)
</script>

<style lang="scss" scoped></style>
