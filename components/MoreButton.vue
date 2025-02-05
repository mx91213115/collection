<script setup lang="ts">
const props = defineProps<{ placement: string; list: string[]; swiperActiveIndex: number; title?: string }>();
const visible = ref(false);
watch(
	() => props.swiperActiveIndex,
	(e) => {
		visible.value = false;
	}
);
</script>
<template>
	<el-tooltip
		ref="toolEl"
		:placement="placement"
		popper-class="!bg-background !shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] !rounded-20 !p-10 [&>span]:!hidden max-w-[50vw] "
		trigger="click"
		:visible="visible"
		effect="light"
	>
		<button
			type="button"
			class="bg-background shadow-[0_1px_8px_0_rgba(0,0,0,0.25)] rounded-20 text-12 inline-flex w-fit py-1 px-3 gap-x-1 items-center"
			@click="visible = !visible"
		>
			開發說明 <i-box class="text-16 text-gray1 pointer-events-none"></i-box>
		</button>
		<template #content>
			<div class="flex flex-col text-12">
				<div class="text-gray1 tracking-0.1 leading-5"><slot></slot></div>
				<span class="text-12 text-gray2 tracking-0.15 flex gap-1 items-center mt-5 pb-2">
					<i-document class="text-14"></i-document>功能{{ title }}</span
				>
				<ul class="text-gray2 tracking-0.07 leading-5 list-disc marker:text-[8px] list-inside">
					<li v-for="item in list" class="pl-1.5">
						{{ item }}
					</li>
				</ul>
			</div>
		</template>
	</el-tooltip>
</template>
