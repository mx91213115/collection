<script lang="ts" setup>
defineProps<{ title?: string; list: string[] }>();
</script>
<template>
	<div class="flex text-gray2 tracking-0.15 text-14 gap-x-4">
		<span v-if="title">
			{{ title }}
		</span>
		<ul class="flex">
			<li v-for="(item, i) in list">{{ item }}<i v-if="i != list.length - 1" class="mx-1">/</i></li>
		</ul>
	</div>
</template>
