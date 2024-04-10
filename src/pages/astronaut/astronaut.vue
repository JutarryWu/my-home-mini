<template>
	<image v-for="(src, index) in imgUrls" :key="index" :src="src"></image>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imgUrls = ref<string[]>([
	'https://gd-hbimg.huaban.com/6624b051b187a2b8c45dd157a9824832612f992b5b6d6-f2JVSi_fw658webp',
	'https://gd-hbimg.huaban.com/b7306d78bc381a273242c3013c2298f3e90f881f5b9c3-U0VGPi_fw658webp',
	'https://gd-hbimg.huaban.com/3c5b65c60180df22dd754ea59c717b8472f1baba49a5a-npfTYG_fw658webp',
	'https://gd-hbimg.huaban.com/9fab3378f7fc8981ba07c17d5d542fff4633bcea4bc3e-SOjwiQ_fw658webp',
	'https://gd-hbimg.huaban.com/8c6e5cf34c785eefbf6539e06baeb0d21b69763d4938a-bjRGH3_fw658webp',
	'https://gd-hbimg.huaban.com/25275ab960588a20ce8a13c513faf8b7626bd27f6308d-FEC7zI_fw658webp',
	'https://gd-hbimg.huaban.com/d80baa52e36eaeefd3aa5740d33454451fb2bd9b53ce1-MpsPV2_fw658webp'
]);
</script>

<style lang="scss" scoped></style>