<script>
	export let value = null;
	export let options = [];
</script>

<select bind:value>
	<option value={null}>--</option>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>