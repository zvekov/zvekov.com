<template>
	<div class="h-10 pl-3 pr-2 bg-white border rounded text-grey-darker flex justify-between items-center relative">
		<input
			type="search"
			placeholder="Search..."
			class="appearance-none w-full outline-none focus:outline-none active:outline-none"
			:value="value"
			@input="$emit('input', $event.target.value)"
			@focus="$emit('focus')"
			@blur="$emit('blur')"
		/>
		<g-link :to="'/search?s=' + value" class="ml-1 outline-none focus:outline-none active:outline-none">
			<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
				<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
			</svg>
		</g-link>
	</div>
</template>

<script>
	export default {
		props: ['value'],
		methods: {
			hide() {
				setTimeout(() => {this.focus = false}, 100);
			},
		}
	};
</script>