<template>
	<div class="">
		<div class="relative group hover:drop-shadow-lg">
			<!-- Image Container -->
			<div class="w-full bg-red-500 shadow-lg border rounded-md overflow-hidden">
				<NuxtLink :to="post.path">
					<img v-if="post.featureImage" :src="post.featureImage" :alt="post.title"
						class="w-full h-auto group-hover:scale-125 transition-transform duration-700" />
				</NuxtLink>
			</div>

			<!-- Overlapping Content -->
			<div
				class="-mt-10 group-hover:-mt-14 p-6 bg-slate-100 group-hover:bg-[linear-gradient(42deg,#00D9A6,#000000)] group-hover:from-[#00D9A6] group-hover:to-[#000] transition-all duration-300 shadow-md w-5/6 mx-auto z-20 relative rounded-md">
				<NuxtLink :to="post.path" class="group-hover:text-white">
					<h2 class="text-2xl font-bold mt-2 min-h-[3.75rem] line-clamp-2 leading-tight">{{ post.title }}</h2>
				</NuxtLink>
				<div class="mt-4 flex items-center text-sm text-neutral-300 group-hover:text-neutral-200">
					<!-- Author -->
					<span v-if="config.theme.blog.author.visible">
						By&nbsp;;
						<NuxtLink :to="`/blog/archive/${post.author}`"
							class="text-aquamarine-400 group-hover:text-neutral-200">
							{{ post.author }}
						</NuxtLink>,

					</span>

					<!-- Publish Date -->
					<span v-if="config.theme.blog.publishDate.visible">
						&nbsp;on&nbsp;
						<NuxtLink v-if="config.theme.blog.publishDate.linkArchivePage"
							:to="`/blog/archive/${getYearMonthString(post.date)}`"
							class="text-aquamarine-400 group-hover:text-neutral-200">
							{{ formatDate(post.date) }}
						</NuxtLink>
						<span v-else class="text-aquamarine-400">{{ formatDate(post.date) }}</span>
					</span>

					<!-- Category -->
					<span v-if="config.theme.blog.publishDate.linkArchivePage && post.category">
						, under category:&nbsp;
						<NuxtLink :to="`/blog/category/${post.category}`"
							class="text-aquamarine-400 group-hover:text-neutral-200">
							{{ post.category }}
						</NuxtLink>
					</span>
				</div>
			</div>
		</div>
	</div>

</template>
<script setup>
	import { useAppConfig } from '#app';

	const props = defineProps({
		post: Object
	});
	const config = useAppConfig();
	//console.log('theme config:', config);
	await nextTick();

	// Format date function
	const formatDate = (date) => {
		if (!date) return "";
		return new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const getYearMonthString = (date) => {
		if (!date) return "";
		const dateObj = new Date(date);
		const year = dateObj.getFullYear();
		const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Ensures two-digit month format


		//console.log('theme: ', `'${year}-${month}'`)
		return year + '-' + month;
	};

</script>
