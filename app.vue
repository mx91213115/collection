<script setup lang="ts">
import type { SwiperContainer } from "swiper/element";
// import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";
import type { Swiper } from "swiper/types";
const menu = [
	{ text: "ABOUT", index: 1 },
	{ text: "SKILLS", index: 2 },
	{ text: "WORKS", index: 3 },
	{ text: "CONTACT", index: 4 },
];

const containerRef = ref<SwiperContainer | null>(null);
useSwiper(containerRef, {
	on: {
		init: init,
		slideChange: onSlideChange,
	},
});
const swiperInstance = ref<Swiper | null>(null);
function swiperTo(i: number) {
	// swiper.instance.value?.slideTo(5);
	swiperInstance.value?.slideTo(i);
}
const swiperActiveIndex = ref(1);
const skills = [
	{
		icon: "i-edit-folder",
		title: "前端框架",
		app: ["NUXT.JS", "VUE.JS", "Tailwindcss"],
	},
	{
		icon: "i-layer",
		title: "設計軟體",
		app: ["Adobe Photoshop", "Adobe Illustrator", "Clip Studio Paint", "FIGMA"],
	},
];
function init(e: Swiper) {
	swiperInstance.value = e;
	onSlideChange(e);
}
function onSlideChange(e: Swiper) {
	swiperActiveIndex.value = e.activeIndex + 1;
}

const setBackground = computed(() => {
	switch (swiperActiveIndex.value) {
		case 2:
			return `url(${new URL(`/assets/bg/skill.png`, import.meta.url)})`;
		case 3:
			return `url(${new URL(`/assets/bg/work1.png`, import.meta.url)})`;
		case 4:
			return `url(${new URL(`/assets/bg/work2.png`, import.meta.url)})`;
		case 5:
			return `url(${new URL(`/assets/bg/work3.png`, import.meta.url)})`;
		case 6:
			return `url(${new URL(`/assets/bg/end.png`, import.meta.url)})`;
		default:
			return `url(${new URL(`/assets/bg/none.png`, import.meta.url)})`;
	}
});
// case 3:
// 			return "url('/bg/work1.png')";
// 		case 4:
// 			return "url('/bg/work2.png')";
// 		case 5:
// 			return "url('/bg/work3.png')";
// 		case 6:
// 			return "url('/bg/end.png')";
// 		default:
// 			return "url('/bg/none.png')";
const setBackgroundParallax = computed(() => {
	switch (swiperActiveIndex.value) {
		case 2:
			return "15%";
		default:
			return "0%";
	}
});
const setTime = computed(() => {
	switch (swiperActiveIndex.value) {
		case 3:
			return "2023.03 - 2024.03";
		case 4:
			return "2022.10 至今";
		case 5:
			return "2023.10 至今";
		default:
			return "";
	}
});
</script>
<template>
	<div class="bg-background">
		<header class="fixed top-0 right-0 z-10 px-16">
			<ul class="flex justify-end">
				<li v-for="item in menu" class="font-concert text-gray2 text-16 tracking-0.1">
					<button type="button" class="py-5 px-2.5" @click="swiperTo(item.index)">
						{{ item.text }}
					</button>
				</li>
			</ul>
		</header>
		<transition name="fade">
			<span
				v-if="setTime"
				class="text-gray1 text-12 tracking-0.15 font-bold bg-gray2 bg-opacity-20 px-9 py-2 fixed top-16 left-0 z-10"
				>{{ setTime }}</span
			>
		</transition>
		<swiper-container
			ref="containerRef"
			:direction="'vertical'"
			:slidesPerView="1"
			:speed="1000"
			:mousewheel="true"
			:parallax="true"
			:init="false"
			:modules="[Mousewheel]"
			class="w-full h-screen"
		>
			<div
				slot="container-start"
				class="parallax-bg h-screen w-full absolute bg-cover bg-center bg-fixed bg-no-repeat"
				:style="{
					'background-image': setBackground,
				}"
				:data-swiper-parallax-y="setBackgroundParallax"
			></div>
			<swiper-slide class="">
				<div class="flex flex-col gap-y-12 center">
					<h1 class="font-bold text-gray1 text-28 text-center" data-swiper-parallax="0">我是林孟昕</h1>
					<span class="text-gray1 track-0.1 text-center text-nowrap" data-swiper-parallax-y="200"
						>一個會一點設計的前端工程師。</span
					>
					<button
						class="absolute -bottom-16 right-1/2 translate-y-full translate-x-full flex flex-col items-center text-gray2 font-concert tracking-0.04"
						data-swiper-parallax-y="50"
						@click="swiperTo(2)"
					>
						NEXT<i-arrow class="text-24" />
					</button>
				</div>
			</swiper-slide>
			<swiper-slide class="">
				<div class="flex center container justify-between w-10/12d !max-w-[800px]">
					<!-- <img class="w-full center scale-200" src="~/assets/bg/skill.png " alt="" srcset="" /> -->
					<div v-for="(item, i) in skills" class="flex items-center gap-x-14">
						<div
							class="flex items-center [writing-mode:vertical-lr] font-medium text-28 tracking-0.4 text-gray2"
						>
							<component :is="item.icon" :class="{ 'text-28': i == 0, 'text-30': i == 1 }"></component>
							{{ item.title }}
						</div>
						<ul class="flex flex-col" :class="{ 'gap-y-10': i == 0, 'gap-y-5': i == 1 }">
							<li
								v-for="a in item.app"
								class="px-6 py-1 text-20 text-gray1 bg-background rounded-40 shadow-[0_0_8px_0_rgba(0,0,0,0.15)]"
							>
								{{ a }}
							</li>
						</ul>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="">
				<div class="container center">
					<h2 class="mb-2 tracking-0.15 font-medium text-gray1 text-28">WYSIWYG創建網頁</h2>
					<div class="flex justify-between mb-7">
						<p class="tracking-0.15 text-gray1">透過後臺所見及所得模組及功能，構建全新網頁</p>
						<more-button
							:swiper-active-index="swiperActiveIndex"
							placement="top"
							:list="[
								'第三方登入串接。',
								'模型可點選地面或選單移動、拖曳轉動攝影機視角。',
								'商辦模型有多種模式，分為三個區域: 影片牆、電腦區、海報區。',
								'藝廊模型分為2D及3D區域，可瀏覽作品內容並加入購物車，個人後台已切版但尚未進行實作。',
							]"
						>
							依據專案要求討論規畫並設計切版，同時進行技術方面(Unity,Three.js)研究，確保設計之畫面可達成。網站分為三個主題,
							此區展示商辦及藝廊兩個主題首頁，可由首頁進入各模型。
						</more-button>
					</div>
					<div class="flex h-[50vh] rounded-20 overflow-hidden">
						<a
							href="https://www.sheng-dong.com.tw/activity/2023TILF"
							class="w-8/12 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black after:opacity-40 after:transition after:duration-500 hover:after:opacity-80 group"
							target="_blank"
						>
							<iframe
								class="w-full h-full"
								src="https://www.sheng-dong.com.tw/activity/2023TILF"
								frameborder="0"
							></iframe>
							<button
								type="button"
								class="z-10 text-white center tracking-0.2 text-14 font-black opacity-70 group-hover:opacity-100 transition duration-500"
							>
								VIEW MORE
							</button>
							<!-- <img class="object-contain w-full" src="~/assets/images/work1-2.jpg" /> -->
							<span
								class="z-10 tracking-0.15 text-white text-12 font-medium absolute right-2 bottom-2 group-hover:opacity-30 transition duration-500"
								>展示網頁由後台建構/他人設計</span
							>
						</a>
						<div class="w-4/12 h-full">
							<img class="w-full" src="~/assets/images/work1.png" />
							<span class="tracking-0.15 text-gray2 text-12 font-medium absolute right-10 bottom-2"
								>後台示意圖</span
							>
						</div>
					</div>
					<div class="flex mt-9">
						<div class="flex flex-col w-1/2">
							<title-response class="mb-4" />
							<work-list
								class="ml-[22px] mb-4"
								title="後台"
								:list="['規劃', 'UIUX', '切版', '串接api']"
							/>
							<work-list
								class="ml-[22px]"
								title="前台"
								:list="['已完成切版之項目優化', '新增區塊功能', '串接api']"
							/>
						</div>
						<div class="flex flex-col w-1/2">
							<title-tool class="mb-4" />
							<work-list class="ml-[22px] mt-2.5" :list="['NUXT.JS', 'VUE.JS', 'FIGMA']" />
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="">
				<div class="container center flex justify-center gap-10">
					<div class="inline-flex flex-col">
						<more-button
							:swiper-active-index="swiperActiveIndex"
							placement="bottom-end"
							:list="[
								'第三方登入串接。',
								'模型可點選地面或選單移動、拖曳轉動攝影機視角。',
								'商辦模型有多種模式，分為三個區域: 影片牆、電腦區、海報區。',
								'藝廊模型分為2D及3D區域，可瀏覽作品內容並加入購物車，個人後台已切版但尚未進行實作。',
							]"
						>
							前台設計團隊完成設計規劃及切版後，我接手進行後續處理及優化。<br />依據前台功能設計規劃後台，並依切版完成之樣式，套用至後台做到所見及所得拖曳區塊及其他功能設定。
						</more-button>
						<h2 class="mt-5 mb-4 tracking-0.15 font-medium text-gray1 text-28">3D商辦及藝廊</h2>
						<p class="tracking-0.15 text-gray1 mb-11">由Unity優化烘焙模型後導出至網頁呈現可交互之模型。</p>
						<div class="flex items-center gap-4 mb-4">
							<title-response class="" />
							<work-list class="" :list="['規劃', 'UIUX', '切版', '串接api']" />
						</div>
						<div class="flex items-center gap-4">
							<title-tool class="" />
							<work-list class="" :list="['NUXT.JS', 'THREE.JS', 'Tailwindcss', 'FIGMA', 'Unity']" />
						</div>
					</div>
					<div class="flex rounded-[72px] overflow-hidden">
						<a href="" class="group w-1/2 overflow-hidden">
							<img
								src="@/assets/images/work2-2.png "
								class="object-full w-full h-full group-hover:scale-105 transition duration-500"
								alt=""
							/>
							<span
								class="bg-background text-gray1 absolute top-10 left-10 py-0.5 px-5 rounded-40 text-12 opacity-0 transition duration-500 group-hover:opacity-100"
								>商辦</span
							>
							<div class="center">
								<span
									class="text-white tracking-0.2 text-14 font-black flex items-center gap-x-2 whitespace-nowrap translate-x-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500"
									>VIEW MORE<i-next
										class="text-18 -translate-x-full opacity-0 group-hover:translate-x-1/4 group-hover:opacity-100 transition duration-500"
									></i-next
								></span>
							</div>
						</a>
						<a href="" class="group w-1/2 overflow-hidden">
							<img
								src="@/assets/images/work2-3.png "
								class="object-full group-hover:scale-105 transition duration-500"
								alt=""
							/>
							<span
								class="bg-background text-gray1 absolute top-10 left-10 py-0.5 px-5 rounded-40 text-12 opacity-0 transition duration-500 group-hover:opacity-100"
								>藝廊</span
							>
							<div class="center">
								<span
									class="text-white tracking-0.2 text-14 font-black flex items-center gap-x-2 whitespace-nowrap translate-x-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500"
									>VIEW MORE<i-next
										class="text-18 -translate-x-full opacity-0 group-hover:translate-x-1/4 group-hover:opacity-100 transition duration-500"
									></i-next
								></span>
							</div>
						</a>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide class="">
				<div class="container center flex flex-col items-center justify-center">
					<h2 class="tracking-0.15 font-medium text-gray1 text-28">供應商系統後台</h2>
					<p class="tracking-0.15 text-gray1 mt-5 mb-9">多個後台系統, 依需求進行功能規劃及開發</p>
					<div class="flex items-center gap-4 mb-4">
						<title-response class="" />
						<work-list class="" :list="['規劃', 'UIUX', '切版', '串接API (各後台有差異)']" />
					</div>
					<div class="flex items-center gap-4 mb-7">
						<title-tool class="" />
						<work-list class="" :list="['NUXT.JS', 'VUE.JS', 'Tailwindcss', 'FIGMA']" />
					</div>
					<more-button
						:swiper-active-index="swiperActiveIndex"
						placement="top"
						:title="'(每個專案不同，以較大或特別功能為例)'"
						:list="[
							'權限功能，前後台各自依據後台權限設定有不同顯示或操作區別。',
							'自製周曆，將資料庫資料於前端進行處理，依據畫面邏輯顯示每日訂單需求及詳情。',
							'圖文、商品上傳編輯。',
							'將前台收集之表單資料轉為.csv供客戶下載統計。',
							'各列表畫面篩選呈現。',
							'多語系品牌官網管理。',
						]"
					>
						多個後台專案的設計規劃及功能開發，皆依客戶要求客製化開發。由於後台資訊屬於敏感範疇，因此無法提供截圖作為說明。
					</more-button>
				</div>
			</swiper-slide>

			<swiper-slide class="">
				<span
					class="tracking-0.15 text-gray1 text-32 font-light text-center h-[60vh] flex justify-center items-center"
					>THANK YOU</span
				>
				<div class="bg-gray1 text-background h-[25vh] flex flex-col items-center justify-center">
					<span class="flex font-concert justify-center tracking-0.15 text-24 items-end gap-x-2 mb-4"
						><i-mail class="text-20 pb-1.5"></i-mail>mx91213115@gmail.com
					</span>
					<div class="tracking-0.15 text-background text-12 font-light text-center">
						如有相關問題或建議，請與我聯繫並歡迎指教
					</div>
				</div>
				<ul
					class="text-gray1 text-12 tracking-0.15 text-center flex items-center justify-center flex-col h-[15vh]"
				>
					<li class="mb-3">其他專案</li>
					<li>
						<a href="" class="underline underline-offset-2">SWEETS</a>
					</li>
				</ul>
			</swiper-slide>
		</swiper-container>
		<footer class="fixed bottom-0 w-full z-10 px-10 py-5">
			<div class="">
				<span>{{ swiperActiveIndex?.toString()?.padStart(2, "0") }}</span>
				<span>/ 08</span>
			</div>
		</footer>
	</div>
</template>
<style>
.nuxt-icon {
	margin-bottom: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-enter-from,
.fade-leave-to {
	transform: translate(-100%, 0);
	opacity: 0;
}
</style>
