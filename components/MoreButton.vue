<script setup lang="ts">
const props = defineProps<{
	placement: string;
	list: string[];
	swiperActiveIndex: number;
	title?: string;
	color?: string;
}>();
const { color = "orange" } = props;
const visible = ref(false);
watch(
	() => props.swiperActiveIndex,
	(e) => {
		visible.value = false;
	}
);
function background() {
	switch (color) {
		case "orange":
			return "!bg-[url(/assets/bg/button-orange.png)]";
		case "green":
			return "!bg-[url(/assets/bg/button-green.png)]";
	}
}
</script>
<template>
	<el-tooltip
		ref="toolEl"
		:placement="placement"
		:popper-class="`!bg-[#ffffff00] ${background()} !bg-full !rounded-20 !p-10 [&>span]:!hidden max-w-[50vw] !border-0`"
		trigger="click"
		:visible="visible"
		effect="light"
	>
		<button
			type="button"
			class="bg-[#FFFCF8] rounded-10 border border-dashed tracking-0.15 text-12 inline-flex w-fit py-2 px-3 gap-x-1 items-center whitespace-nowrap"
			:class="`text-${color} border-${color}`"
			@click="visible = !visible"
		>
			開發說明 <i-box :class="`text-${color}`" class="text-16 pointer-events-none"></i-box>
		</button>
		<template #content>
			<div class="flex flex-col text-12">
				<div class="text-black tracking-0.1 leading-5"><slot></slot></div>
				<span class="text-12 text-black tracking-0.15 flex gap-1 items-center mt-5 pb-2">
					<i-document class="text-14"></i-document>功能{{ title }}</span
				>
				<ul class="text-black tracking-0.07 leading-5 list-disc marker:text-[8px] list-inside">
					<li v-for="item in list" class="pl-1.5">
						{{ item }}
					</li>
				</ul>
			</div>
		</template>
	</el-tooltip>
</template>
