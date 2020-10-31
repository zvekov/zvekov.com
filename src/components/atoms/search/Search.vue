<template>
	<div class="w-48 text-grey-darker">
		<search-box v-model="searchTerm" @focus="show = true" @blur="hide" />
		<transition name="fade">
			<search-list
				v-if="show"
				:value="searchTerm"
				class="absolute w-auto max-w-sm right-0 bg-white p-0 rounded mr-6 overflow-y-auto z-50"
				style="min-width: 192px; max-height: 90vh;"
			/>
		</transition>
	</div>
</template>

<script>
	import SearchBox from './Box.vue';
	import SearchList from './List.vue';
	export default {
		components: {SearchBox, SearchList},
		data() {
			return {
				searchTerm: '',
				show: true,
			};
		},
		methods: {
			hide() {
				setTimeout(() => {this.show = false}, 100);
			}
		},
	};
</script>