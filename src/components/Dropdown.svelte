<script>
	export let value = null;
	export let data;
	data.options = []
</script>

<select bind:value>
	<option value={null}>--</option>
	{#each data.options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>