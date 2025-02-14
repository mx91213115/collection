<script lang="ts" setup>
defineProps<{ title?: string; list: string[] }>();
</script>
<template>
	<div class="flex max-md:flex-col tracking-0.15 text-12 md:text-14 gap-x-4 w-fit">
		<span v-if="title" class="whitespace-nowrap max-md:mb-1">
			{{ title }}
		</span>
		<ul class="flex whitespace-nowrap flex-wrap w-fit leading-5">
			<li v-for="(item, i) in list">{{ item }}<i v-if="i != list.length - 1" class="mx-1">/</i></li>
		</ul>
	</div>
</template>
