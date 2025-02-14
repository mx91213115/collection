<script lang="ts" setup>
defineProps<{ color: "green" | "orange"; direction: "vertical" | "horizontal" }>();
</script>
<template>
	<div
		class="flex gap-1.5 text-12 font-medium tracking-0.15 whitespace-nowrap"
		:class="{
			'text-green': color == 'green',
			'text-orange': color == 'orange',
			'flex-col': direction == 'vertical',
		}"
	>
		<i-lamp
			:class="{ 'text-20 lg:text-40': direction == 'vertical', 'text-16': direction == 'horizontal' }"
		></i-lamp
		>負責項目
	</div>
</template>
