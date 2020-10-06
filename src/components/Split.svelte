<script >
	import Container from "../base/Container.svelte";
	export let data;
	data.elements = [];
	export let value = [];

	// $: if (elements && value && value.length != elements.length) value.length = elements.length; // value length sync
	export let addElement = function () {
		elements = [...elements, {type:"Empty", text:"New"}];
	}
</script>

<div style="display: flex; width: 100%; flex-direction: column">
	{#if data.elements.length}
		{#each data.elements as item, i (i)}
			<Container bind:data={item} bind:value={value[i]}></Container>
		{/each}
	{:else}
		<div class="center">&lt;&lt;Üres lista&gt;&gt;</div>
	{/if}
    <app-adder on:click={addElement} style="display: flex; min-width: 40px; height: 50px; justify-content: center;">+</app-adder>
</div>