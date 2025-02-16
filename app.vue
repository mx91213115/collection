<script setup lang="ts">
import nuxtImg from "/assets/images/logo/nuxt.png";
import aiImg from "/assets/images/logo/ai.png";
import figmaImg from "/assets/images/logo/figma.png";
import paintImg from "/assets/images/logo/paint.png";
import psImg from "/assets/images/logo/ps.png";
import tailwindImg from "/assets/images/logo/tailwind.png";
import vueImg from "/assets/images/logo/vue.png";
import type { SwiperContainer } from "swiper/element";
// import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";
import type { Swiper } from "swiper/types";

const menu = [
	{ text: "ABOUT", index: 1 },
	{ text: "SKILLS", index: 2 },
	{
		text: "WORKS",
		index: 3,
		el: [
			{
				text: "所見及所得",
				index: 3,
			},
			{
				text: "3D商辦及藝廊",
				index: 4,
			},
			{
				text: "供應商後台",
				index: 5,
			},
		],
	},
	{ text: "CONTACT", index: 6 },
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
	swiperInstance.value?.slideTo(i - 1);
}
const swiperActiveIndex = ref(0);
const skills = [
	{
		icon: "i-edit-folder",
		title: "前端框架",
		app: [
			{ text: "NUXT.JS", logo: nuxtImg },
			{ text: "VUE.JS", logo: vueImg },
			{ text: "Tailwindcss", logo: tailwindImg },
		],
	},
	{
		icon: "i-layer",
		title: "設計軟體",
		app: [
			{ text: "Adobe Photoshop", logo: psImg },
			{ text: "Adobe Illustrator", logo: aiImg },
			{ text: "Clip Studio Paint", logo: paintImg },
			{ text: "FIGMA", logo: figmaImg },
		],
	},
];
function init(e: Swiper) {
	swiperInstance.value = e;
	onSlideChange(e);
}
function onSlideChange(e: Swiper) {
	swiperActiveIndex.value = e.activeIndex + 1;
}

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
const addAosAnimate = computed(() => (i: number, animate: string, outAnimate: string = "") => {
	return swiperActiveIndex.value == i ? animate : outAnimate;
});
</script>
<template>
	<div class="bg-background">
		<header class="fixed w-full top-0 right-0 z-10 px-16">
			<ul class="flex justify-center sm:justify-end">
				<li v-for="item in menu" class="font-concert text-orange text-16 tracking-0.1 group">
					<button
						type="button"
						class="py-3 px-2.5 hover:scale-110 transition-all"
						:class="{
							'border-b-2 border-b-orange ':
								item.index == swiperActiveIndex ||
								(item.index == 3 && (swiperActiveIndex == 4 || swiperActiveIndex == 5)),
						}"
						@click="swiperTo(item.index)"
					>
						{{ item.text }}
					</button>
					<span class="h-3 w-full block"></span>
					<ul
						v-if="item.el"
						class="px-4 py-2 border border-orange border-dashed rounded-20 flex flex-col gap-y-2 absolute whitespace-nowrap bottom-0 left-0 translate-y-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-500 bg-yellow_light bg-opacity-25"
					>
						<li
							class="text-14 font-medium tracking-0.2 cursor-pointer w-fit hover:scale-105"
							v-for="e in item.el"
							:class="{ 'border-b border-dashed border-orange ': e.index == swiperActiveIndex }"
							@click="swiperTo(e.index)"
						>
							{{ e.text }}
						</li>
					</ul>
				</li>
			</ul>
		</header>
		<transition name="fade">
			<span
				v-if="setTime"
				class="text-black text-12 tracking-0.15 font-bold px-9 py-2 fixed top-16 max-sm:-right-2 sm:left-0 z-10 bg-[url(/assets/bg/tag.png)] bg-full bg-no-repeat"
				>{{ setTime }}</span
			>
		</transition>
		<client-only>
			<swiper-container
				ref="containerRef"
				:direction="'vertical'"
				:slidesPerView="1"
				:speed="1000"
				:touchReleaseOnEdges="true"
				:mousewheel="true"
				:parallax="true"
				:init="false"
				:modules="[Mousewheel]"
				:breakpoints="{
					640: {
						speed: 2000,
					},
				}"
				class="w-full h-screen"
			>
				<!-- #region  首頁-->
				<swiper-slide class="">
					<img
						src="@/assets/bg/1-1.png "
						data-swiper-parallax-y="-20%"
						class="max-sm:h-[30vh] sm:w-3/12"
						alt=""
						srcset=""
					/>
					<img
						src="@/assets/bg/1-2.png "
						data-swiper-parallax-y="-20%"
						class="h-[50vh] sm:h-[80vh] absolute right-0 sm:top-1/2 bottom-0 translate-y-1/3 sm:-translate-y-1/2"
						alt=""
						srcset=""
					/>
					<div
						class="flex flex-col gap-y-12 max-sm:-translate-y-2/3 max-sm:-translate-x-1/2 center items-center"
					>
						<h1
							class="font-bold text-black text-28 text-center animate-both whitespace-nowrap"
							:class="
								addAosAnimate(
									1,
									'animate-[fadeIn_1s_ease-in-out]',
									'animate-[fadeOut_1.5s_ease-in-out]'
								)
							"
						>
							我是林孟昕
						</h1>
						<span
							class="text-black track-0.1 text-center text-nowrap animate-both whitespace-nowrap"
							:class="
								addAosAnimate(
									1,
									'animate-[fadeIn_1s_ease-in-out_0.5s]',
									'animate-[fadeOut_1.5s_ease-in-out]'
								)
							"
							>一個會一點設計的前端工程師。</span
						>
					</div>
					<div
						class="absolute left-1/2 bottom-1/4 sm:bottom-[10vh] -translate-x-1/2 animate-both"
						:class="
							addAosAnimate(1, 'animate-[fadeIn_2s_ease-in-out_1s]', 'animate-[fadeOut_2s_ease-in-out]')
						"
					>
						<button
							class="flex flex-col items-center text-black opacity-50 gap-5 font-concert tracking-0.04 animate-[shakeY_10s_ease_infinite] transition-all w-fit hover:!opacity-70"
							@click="swiperTo(2)"
						>
							<!-- animate-[shakeY_5s_ease-in-out_infinite] -->
							NEXT<i-arrow class="text-24" />
						</button>
					</div>
				</swiper-slide>
				<!-- #endregion  首頁-->

				<!-- #region  軟體 -->
				<swiper-slide class="bg-background">
					<div
						class="h-[200vh] xl:h-[250vh] w-11/12 absolute top-1/2 left-0 -translate-y-[80vh] xl:-translate-y-[105vh] pointer-events-none"
					>
						<img
							src="@/assets/bg/2-1.png"
							class="object-fill w-full h-full"
							alt=""
							data-swiper-parallax-y="1%"
						/>
					</div>
					<img
						src="@/assets/bg/2-2.png"
						class="max-sm:hidden absolute w-5/12 md:w-3/12 top-0 md:top-[10vh] right-0 pointer-events-none"
						data-swiper-parallax-y="-20%"
						alt=""
					/>
					<div class="flex flex-col container center justify-between gap-y-16 w-10/12">
						<!-- <img class="w-full center scale-200" src="~/assets/bg/skill.png " alt="" srcset="" /> -->
						<div v-for="(item, i) in skills" class="flex flex-col gap-y-8 sm:gap-y-10">
							<div
								class="flex items-center font-medium text-20 sm:text-24 xl:text-28 tracking-0.2 sm:tracking-0.4 text-orange gap-3 sm:gap-5"
								:data-swiper-parallax-x="i == 0 ? '5%' : '5%'"
							>
								<component
									:is="item.icon"
									:class="{
										'text-20 sm:text-24 xl:text-28': i == 0,
										'text-[22px] sm:text-[26px] xl:text-30': i == 1,
									}"
								></component>
								{{ item.title }}
							</div>
							<ul class="inline-flex max-lg:flex-wrap w-full lg:w-9/12 xl:w-fit gap-6 sm:gap-10">
								<div
									class="max-lg:hidden absolute top-0 left-0 w-full h-full"
									:class="{
										'-translate-x-[5vw] translate-y-5 ': i == 0,
										'translate-x-[5vw]  lg:translate-y-5': i == 1,
									}"
								>
									<span
										class="bg-center bg-contain bg-no-repeat w-full h-full block"
										:class="{
											'bg-[url(/assets/bg/2-square-1.png)] ': i == 0,
											'bg-[url(/assets/bg/2-square-2.png)]': i == 1,
										}"
										:data-swiper-parallax-x="i == 0 ? '-5%' : '10%'"
									>
									</span>
								</div>
								<li v-for="a in item.app">
									<div
										class="px-4 sm:px-6 py-4 sm:py-5 text-16 xl:px-12 xl:py-10 xl:text-20 text-orange tracking-0.06 font-bold bg-background rounded-20 xl:rounded-40 whitespace-nowrap w-fit"
									>
										<img
											:src="a.logo"
											class="w-6 xl:w-9 absolute -top-2.5 sm:-top-1.5 xl:-top-3 left-0 animate-[wiggle_2s_ease-in-out] animate-infinite"
										/>
										{{ a.text }}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</swiper-slide>
				<!-- #endregion  軟體-->
				<!-- #region  WYSIWYG-->
				<swiper-slide class="">
					<div class="container center max-sm:h-[calc(70vh-100px)]">
						<!-- :class="[addAosAnimate(3)]" -->
						<!-- data-aos="fade-up" -->
						<div class="flex items-center gap-5 mb-2">
							<h2 class="tracking-0.15 font-medium text-black text-20 sm:text-24 lg:text-28">
								WYSIWYG創建網頁
							</h2>
							<more-button
								:swiper-active-index="swiperActiveIndex"
								placement="bottom-start"
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
						<div class="flex justify-between mb-7">
							<p class="tracking-0.15 text-black text-12 sm:text-14 lg:text-16">
								透過後臺所見及所得模組及功能，構建全新網頁
							</p>
						</div>
						<div class="flex max-sm:flex-col-reverse gap-y-10 h-full">
							<div class="flex sm:flex-col sm:w-4/12 gap-3 sm:gap-5 justify-center max-sm:mb-6">
								<div class="flex flex-col lg:pb-12 lg:pl-5 xl:pl-10 max-sm:w-fit">
									<div class="absolute top-[5%] max-lg:hidden left-0 bottom-0 right-[5%]">
										<span
											class="bg-[url(/assets/bg/3-1.png)] bg-full bg-no-repeat w-full h-full block"
											data-swiper-parallax-x="-20%"
										></span>
									</div>
									<title-tool
										color="orange"
										direction="vertical"
										class="max-lg:!flex-row max-lg:items-center lg:mb-8"
									/>
									<work-list
										class="text-black opacity-50 max-lg:my-4 max-sm:pl-6"
										:list="['NUXT.JS', 'VUE.JS', 'FIGMA']"
									/>
								</div>
								<div class="flex flex-col gap-y-4 lg:pb-12 lg:pr-[5%] lg:z-10">
									<span
										class="absolute top-[5%] -left-[12%] max-lg:hidden bottom-0 right-0 bg-[url(/assets/bg/3-2.png)] bg-full bg-no-repeat"
										data-swiper-parallax-x="20%"
									></span>
									<title-response
										color="orange"
										direction="vertical"
										class="max-lg:!flex-row max-lg:items-center"
									/>
									<work-list
										class="text-black opacity-50 max-sm:pl-6"
										title="後台 :"
										:list="['規劃', 'UIUX', '切版', '串接api']"
									/>
									<work-list
										class="text-black opacity-50 max-sm:pl-6"
										title="前台 :"
										:list="['已完成切版之項目優化', '新增區塊功能', '串接api']"
									/>
								</div>
							</div>
							<a
								href="https://www.sheng-dong.com.tw/activity/2023TILF"
								class="w-full group rounded-[100px] overflow-hidden lg:-translate-x-6 xl:-translate-x-10 sm:aspect-[2/0.9] max-sm:h-full"
								target="_blank"
							>
								<iframe
									class="w-full h-full"
									src="https://www.sheng-dong.com.tw/activity/2023TILF"
									frameborder="0"
								></iframe>
								<span
									class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 sm:opacity-40 transition duration-500 group-hover:opacity-80 pointer-events-none"
								></span>
								<button
									type="button"
									class="opacity-70 group-hover:opacity-100 transition duration-500 center"
								>
									<span class="block text-white tracking-0.2 text-14 font-black"> VIEW MORE </span>
								</button>
								<!-- <img class="object-contain w-full" src="~/assets/images/work1-2.jpg" /> -->
								<span
									class="tracking-0.15 text-white text-12 font-medium absolute left-1/2 -translate-x-1/2 md:translate-x-0 whitespace-nowrap md:left-[10%] bottom-[5%] group-hover:opacity-30 transition duration-500 opacity-80 max-sm:scale-75"
									>展示網頁由後台建構/他人設計</span
								>
							</a>
							<div
								class="absolute right-[5%] max-sm:top-0 max-sm:translate-y-full sm:bottom-[5%] translate-x-1/2 h-1/4 sm:h-1/2"
							>
								<div class="w-full h-full">
									<img class="w-full h-full object-contain" src="~/assets/images/work1.png" />
									<span
										class="tracking-0.15 text-black text-12 font-medium absolute right-1/2 translate-x-1/2 bottom-[5%] block whitespace-nowrap max-sm:scale-75"
										>後台示意圖</span
									>
								</div>
							</div>
						</div>
					</div>
				</swiper-slide>
				<!-- #endregion  WYSIWYG-->

				<!-- #region  鏡像-->
				<swiper-slide class="">
					<div
						class="h-[200vh] sm:h-[250vh] w-8/12 sm:w-6/12 absolute top-1/2 right-0 -translate-y-[100vh] sm:-translate-y-[130vh] pointer-events-none"
					>
						<img src="@/assets/bg/4-2.png" class="w-full h-full" alt="" data-swiper-parallax-y="-2%" />
					</div>
					<div
						class="container center flex max-sm:flex-col justify-center h-[calc(70vh-100px)] items-center gap-y-10"
					>
						<div
							class="max-lg:hidden absolute w-8/12 xl:w-7/12 xl:translate-x-[15%] left-0 top-0 translate-y-[15%] pointer-events-none"
						>
							<img
								src="/assets/bg/4-1.png"
								class="object-contain h-full w-full object-center"
								alt=""
								data-swiper-parallax-y="10%"
								srcset=""
							/>
						</div>
						<div class="sm:w-6/12 lg:w-7/12">
							<div class="flex flex-col justify-center lg:w-10/12 lg:ml-auto">
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

								<h2
									class="my-3 lg:mt-5 lg:mb-4 tracking-0.15 font-medium text-black text-20 sm:text-24 lg:text-28"
								>
									3D商辦及藝廊
								</h2>
								<p class="tracking-0.15 text-black mb-4 lg:mb-9 text-12 sm:text-14">
									由Unity優化烘焙模型後導出至網頁呈現可交互之模型。
								</p>
								<div
									class="flex w-fit items-center gap-4 mb-4 border border-dashed border-green px-4 lg:px-8 py-2 rounded-40 lg:rounded-16 bg-background"
								>
									<title-response color="green" direction="horizontal" class="" />
									<work-list class="text-green" :list="['規劃', 'UIUX', '切版', '串接api']" />
								</div>
								<div
									class="flex w-fit items-center gap-4 border border-dashed border-orange px-4 lg:px-8 py-2 rounded-40 lg:rounded-16 bg-background"
								>
									<title-tool color="orange" direction="horizontal" class="" />
									<work-list
										class="text-orange"
										:list="['NUXT.JS', 'THREE.JS', 'Tailwindcss', 'FIGMA', 'Unity']"
									/>
								</div>
							</div>
						</div>
						<div
							class="max-sm:h-3/4 sm:w-6/12 lg:w-5/12 flex justify-center rounded-[72px] sm:mr-[-10%] max-sm:gap-x-10"
						>
							<a href="" class="group w-1/2 z-10 sm:-translate-y-[5%]">
								<img
									src="@/assets/images/work2-3.png "
									class="object-contain group-hover:scale-105 transition duration-500 h-full"
									alt=""
								/>
								<span
									class="bg-background text-black absolute top-[15%] left-[15%] py-0.5 px-3 md:px-5 rounded-40 text-12 md:text-14 sm:opacity-0 transition duration-500 group-hover:opacity-100"
									>藝廊</span
								>
								<div class="center">
									<span
										class="text-white tracking-0.2 text-12 md:text-14 font-black flex items-center gap-x-2 whitespace-nowrap translate-x-5 sm:opacity-50 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500"
										>VIEW MORE<i-next
											class="text-18 -translate-x-full opacity-0 group-hover:translate-x-1/4 group-hover:opacity-100 transition duration-500"
										></i-next
									></span>
								</div>
							</a>
							<a
								href=""
								class="group w-1/2 sm:-translate-x-1/4 translate-y-10 sm:translate-y-1/3 hover:z-20"
							>
								<img
									src="@/assets/images/work2-2.png "
									class="object-contain group-hover:scale-105 transition duration-500 h-full"
									alt=""
								/>
								<span
									class="bg-background text-black absolute top-[15%] left-[15%] py-0.5 px-3 md:px-5 rounded-40 text-12 sm:opacity-0 transition duration-500 group-hover:opacity-100"
									>商辦</span
								>
								<div class="center">
									<span
										class="text-white tracking-0.2 text-12 md:text-14 font-black flex items-center gap-x-2 whitespace-nowrap translate-x-5 sm:opacity-50 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500"
										>VIEW MORE<i-next
											class="text-18 -translate-x-full opacity-0 group-hover:translate-x-1/4 group-hover:opacity-100 transition duration-500"
										></i-next
									></span>
								</div>
							</a>
						</div>
					</div>
				</swiper-slide>
				<!-- #endregion  鏡像-->
				<!-- #region  後台-->
				<swiper-slide class="">
					<img
						src="/assets/bg/5-1.png"
						class="absolute h-[100vh] md:h-[180vh] w-1/2 -left-20 top-[30vh] md:-top-[28vh]"
						alt=""
						data-swiper-parallax-y="-5%"
						srcset=""
					/>
					<img
						src="/assets/bg/5-2.png"
						class="absolute h-[100vh] md:h-[180vh] w-1/2 left-0 top-[35vh] md:-top-[20vh]"
						alt=""
						data-swiper-parallax-y="5%"
						srcset=""
					/>
					<div class="flex flex-col absolute bottom-[10%] rotate-[15deg] left-[5%] max-sm:z-10">
						<i5-foot
							class="text-40 md:text-60 text-green ml-10 animate-[wiggle_2s_ease-in-out] animate-infinite"
						></i5-foot>
						<i5-foot
							class="text-40 md:text-60 text-orange opacity-80 animate-[wiggle_2s_ease-in-out] animate-infinite"
						></i5-foot>
						<i5-foot
							class="text-40 md:text-60 text-green ml-10 opacity-70 animate-[wiggle_2s_ease-in-out] animate-infinite"
						></i5-foot>
						<i5-foot
							class="text-40 md:text-60 text-orange opacity-60 animate-[wiggle_2s_ease-in-out] animate-infinite"
						></i5-foot>
					</div>
					<div class="container center flex justify-center">
						<div
							class="inline-flex w-full flex-col items-center justify-center py-[10%] md:py-[5%] sm:px-[10%] md:px-[8%] top-0 left-0"
						>
							<div class="absolute top-0 bottom-0 -left-[5%] -right-[5%] max-sm:hidden">
								<div class="absolute right-[30%] top-[10%]">
									<i5-decoration class="text-[80px]" data-swiper-parallax-y="-40"></i5-decoration>
								</div>
								<img
									class="w-full h-full object-cover sm:object-contain object-center animate-[floatCircle_10s_ease-in-out] animate-infinite"
									src="/assets/images/work3.png"
									alt=""
								/>
							</div>
							<div class="flex flex-col">
								<h2
									class="tracking-0.15 block text-left sm:text-center font-medium text-black text-20 sm:text-24 md:text-28"
								>
									供應商系統後台
								</h2>
								<p class="tracking-0.15 text-black text-14 md:text-16 mt-2 mb-10 md:mt-5 md:mb-9">
									多個後台系統, 依需求進行功能規劃及開發
								</p>
							</div>
							<div class="flex items-start sm:items-center gap-2 sm:gap-4 max-sm:flex-col mb-4">
								<title-response color="orange" direction="horizontal" class="" />
								<work-list
									class="text-orange"
									:list="['規劃', 'UIUX', '切版', '串接API (各後台有差異)']"
								/>
							</div>
							<div class="flex items-start sm:items-center gap-2 sm:gap-4 max-sm:flex-col mb-10 sm:mb-7">
								<title-tool color="orange" direction="horizontal" class="" />
								<work-list class="text-orange" :list="['NUXT.JS', 'VUE.JS', 'Tailwindcss', 'FIGMA']" />
							</div>
							<more-button
								:swiper-active-index="swiperActiveIndex"
								color="green"
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
					</div>
				</swiper-slide>
				<!-- #endregion  後台-->

				<!-- #region 頁尾-->
				<swiper-slide class="">
					<div class="inline-flex flex-col absolute top-[15%] left-[10%]">
						<i6-firework
							class="text-[clamp(60px,10vw,110px)] text-black animate-[zoomIn_2s_ease-in-out] animate-infinite animate-alternate"
						></i6-firework>
						<i6-firework
							class="text-32 text-orange self-end translate-x-full animate-[zoomIn_2s_ease-in-out_0.5s] animate-infinite animate-alternate"
						></i6-firework>
					</div>
					<div class="h-[65vh]">
						<h5 class="tracking-0.15 text-black text-[clamp(1.5rem,2vw,2rem)] font-light center mt-[15vh]">
							THANK YOU
						</h5>
					</div>
					<div class="text-yellow_light h-[35vh] flex">
						<img
							src="/assets/bg/6.png "
							class="absolute w-full h-full"
							data-swiper-parallax-y="-10%"
							alt=""
						/>
						<div class="container">
							<div
								class="absolute max-lg:-rotate-3 top-0 lg:-top-[5%] xl:-top-[8%] min-w-[150px] w-2/12 -translate-y-1/2 right-0"
							>
								<img
									src="/assets/bg/shiba.png"
									class="w-full h-full object-contain object-center"
									alt=""
								/>
								<div class="absolute top-0 right-0 translate-x-2/3 -translate-y-1/2">
									<i6-heart
										data-swiper-parallax-y="50%"
										class="text-[clamp(60px,10vw,110px)] text-orange animate-[wiggle_3s_ease-in-out] animate-infinite"
									></i6-heart>
								</div>
							</div>
							<div class="flex flex-col items-center justify-end h-full pb-10">
								<span
									class="flex font-concert justify-center tracking-0.15 text-24 items-end gap-x-2 mb-4"
									><i-mail class="text-20 pb-1.5"></i-mail>mx91213115@gmail.com
								</span>
								<div class="tracking-0.15 text-yellow_light text-12 font-light text-center">
									如有相關問題或建議，請與我聯繫並歡迎指教
								</div>
								<ul
									class="text-yellow_light text-12 tracking-0.15 text-center flex items-center justify-center flex-col mt-[3%]"
								>
									<li class="mb-3">其他專案</li>
									<li>
										<a href="" class="underline underline-offset-2">SWEETS</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</swiper-slide>
				<!-- #endregion 頁尾-->
			</swiper-container>
		</client-only>
		<footer class="fixed bottom-0 w-full z-10 px-10 py-5">
			<div class="">
				<span class="text-20 font-bold">{{ swiperActiveIndex?.toString()?.padStart(2, "0") }}</span>
				<span class="text-12">/ 06</span>
			</div>
		</footer>
	</div>
</template>
<style lang="scss">
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
	@media (width < 640px) {
		transform: translate(100%, 0);
	}
	opacity: 0;
}

.animate__backInDown {
	animation-duration: 3s;
	-webkit-animation-name: backInLeft;
	animation-name: backInLeft;
}
@-webkit-keyframes backInLeft {
	0% {
		-webkit-transform: translateX(-2000px) scale(0.7);
		transform: translateX(-2000px) scale(0.7);
		opacity: 0.7;
	}
	80% {
		-webkit-transform: translateX(0) scale(0.7);
		transform: translateX(0) scale(0.7);
		opacity: 0.7;
	}
	to {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1;
	}
}
@keyframes backInLeft {
	0% {
		-webkit-transform: translateX(-2000px) scale(0.7);
		transform: translateX(-2000px) scale(0.7);
		opacity: 0.7;
	}
	80% {
		-webkit-transform: translateX(0) scale(0.7);
		transform: translateX(0) scale(0.7);
		opacity: 0.7;
	}
	to {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 1;
	}
}
.animate__backInLeft {
	-webkit-animation-name: backInLeft;
	animation-name: backInLeft;
}
</style>
