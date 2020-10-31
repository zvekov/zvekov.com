<template>
	<ul v-if="value.length >= 3" class="font-medium">
		<li v-for="result in searchResults" :key="result.id">
			<g-link :to="result.path" :title="result.index"><span v-html="boldNew(result.title)" /></g-link>
		</li>
		<li v-if="!searchResults.length">
			<em>Sorry, no results found</em>
		</li>
	</ul>
</template>

<script>
	function findInString(haystack, needle) {
		return [...haystack.matchAll(new RegExp(needle, 'gi'))].map((match) => match.index);
	}
	function findPartsInString(haystack, needles) {
		return needles.split(' ').map((needle) => findInString(haystack, needle).map((index) => [index, index + needle.length])).flat();
	}
	function numbersToRanges(positions, leeway = 1) {
		return [...new Set(positions)].sort((a, b) => a - b).reduce((p, c) => {
			if (!p.length) return [[c, c]];
			if (p[p.length - 1][1] !== c - leeway) return [...p, [c, c]];
			p[p.length -1 ][1] = c;
			return p;
		}, []);
	}
	function rangeToNumbers(start, end) {
		return [...Array(end).keys()].slice(start);
	}
	function rangesToNumbers(ranges) {
		return [...new Set(ranges.map((range) => rangeToNumbers(...range)).flat())].sort((a, b) => a - b);
	}
	function uniqueArray(list) {
		return [...new Set(list)];
	}
	function deduplicateRanges(ranges) {
		return numbersToRanges(rangesToNumbers(ranges));
	}
	function positions(haystack, needle) {
		return findPartsInString(haystack, needle);
	}
	function tag(string, ranges, tag = 'u') {
		return ranges.reverse().reduce((p, c) => insertTag(p, tag, c[0], c[1] + 1), string);
	}
	function insertString(string, insert, position) {
		return position > string.length ? string : [string.slice(0, position), insert, string.slice(position)].join('');
	}
	function insertTag(string, tag, start, end) {
		return insertString(insertString(string, `</${tag}>`, end), `<${tag}>`, start);
	}
	export default {
		props: ['value'],
		data() {
			return {
				items: [],
			};
		},
		computed: {
			searchResults() {
				if (this.value.length < 3) return [];
				return this.$search.search({query: this.value, limit: 999});
			}
		},
		methods: {
			boldNew(result) {
				return tag(result, deduplicateRanges(findPartsInString(result, this.value)));
			},
			bold(result) {
				const pos = result.toLowerCase().indexOf(this.value.toLowerCase());
				return pos === -1 ? result : `${result.substr(0, pos)}<b>${result.substr(pos, this.value.length)}</b>${result.substr(pos + this.value.length)}`;
			},
		},
	};
</script>

<style scoped lang="postcss">
	li {
		@apply m-2;
	}
</style>