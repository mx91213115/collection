<script lang="ts" setup>
defineProps<{ color: "green" | "orange"; direction: "vertical" | "horizontal" }>();
</script>
<template>
	<div
		class="flex gap-1.5 text-12 ext-green font-medium tracking-0.15 whitespace-nowrap"
		:class="{
			'text-green': color == 'green',
			'text-orange': color == 'orange',
			'flex-col': direction == 'vertical',
		}"
	>
		<i-tool
			:class="{ 'text-20 lg:text-40': direction == 'vertical', 'text-16': direction == 'horizontal' }"
		></i-tool
		>使用工具
	</div>
</template>
