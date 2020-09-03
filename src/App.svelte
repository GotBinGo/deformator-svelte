<script>
	import Nested from './Nested/Nested.svelte';
	let name = "TOmi";
</script>
OK
<main>
		{#await import('/bundle.js') then value}
			<svelte:component this={value.default} />
		{/await}
</main>

<style>
</style>