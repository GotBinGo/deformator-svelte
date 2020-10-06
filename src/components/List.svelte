<script >
	export let Container;
	export let data;
	export let value = [];
	// value = value || [];

	$: if (data.elements && value && value.length != data.elements.length) value.length = data.elements.length; // value length sync
	
	export let addElement = function (e) {
		data.elements = [...data.elements, {type:"Empty", text:"New"}];
		e.stopPropagation();
	}
</script>

<div style="display: flex; width: 100%; flex-direction: column">
	{#if data.elements.length}
		{#each data.elements as item, i (i)}
			<Container bind:data={item} bind:value={(value)[i]}></Container>
		{/each}
	{:else}
		<div class="center">&lt;&lt;Üres lista&gt;&gt;</div>
	{/if}
    <app-adder on:click={addElement} style="display: flex; min-width: 40px; height: 50px; justify-content: center;">+</app-adder>
</div>