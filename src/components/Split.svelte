<script >
	export let elements = [];
	export let value = [];

	export let GenericComponent;

	// $: if (elements && value && value.length != elements.length) value.length = elements.length; // value length sync
	export let addElement = function () {
		elements = [...elements, {type:"Empty", text:"New"}];
	}
</script>

<div style="display: flex; width: 100%; flex-direction: column">
	{#if elements.length}
		{#each elements as item, i (i)}
			<GenericComponent bind:data={item} bind:value={value[i]}></GenericComponent>
		{/each}
	{:else}
		<div class="center">&lt;&lt;Üres lista&gt;&gt;</div>
	{/if}
    <app-adder on:click={addElement} style="display: flex; min-width: 40px; height: 50px; justify-content: center;">+</app-adder>
</div>