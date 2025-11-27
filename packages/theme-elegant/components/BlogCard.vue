<!--layers\theme-elegant\components\BlogCard.vue-->
<template>
	<div class="rounded-lg shadow-md hover:shadow-lg overflow-hidden bg-white dark:bg-gray-800">
		<NuxtLink :to="post.path">
			<img v-if="post.featureImage" :src="post.featureImage" :alt="post.title" class="w-full h-48 object-cover">
		</NuxtLink>
		<div class="p-6">
			<!-- <NuxtLink :to="`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`"
	              class="text-sm text-mikado_yellow-500 hover:underline">
	              {{ post.category }}
	            </NuxtLink> -->

			<!-- Category -->
			<div v-if="config.theme.blog.category.visible">
				<NuxtLink v-if="config.theme.blog.category.linkArchivePage" :to="`/blog/category/${post.category}`"
					:class="config.theme.blog.category.colorClass">
					{{ post.category }}
				</NuxtLink>
				<span v-else :class="config.theme.blog.category.colorClass">{{ post.category }}</span>
			</div>



			<NuxtLink :to="post.path">
				<h2 class="text-xl font-bold mt-2">{{ post.title }}</h2>
			</NuxtLink>
			<NuxtLink :to="post.path">
				<p class="text-gray-600 dark:text-gray-300 mt-2">{{ post.excerpt }}</p>
			</NuxtLink>
			<div class="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
				<NuxtLink :to="`/blog/archive/${post.author}`" :class="config.theme.blog.author.colorClass">
					<span v-if="config.theme.blog.author.visible">
						{{ post.author }} &nbsp;•&nbsp;
					</span>
				</NuxtLink>
				<NuxtLink v-if="config.theme.blog.publishDate.linkArchivePage"
					:to="`/blog/archive/${getYearMonthString(post.date)}`"
					:class="config.theme.blog.publishDate.colorClass">
					{{ formatDate(post.date) }}
				</NuxtLink>
				<span v-else :class="config.theme.blog.publishDate.colorClass">
					{{ formatDate(post.date) }}
				</span>

			</div>
		</div>

	</div>
</template>
<script setup>


	const props = defineProps({
		post: Object
	});
	const config = useAppConfig();
	console.log('theme config:', config.theme.blog);
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
