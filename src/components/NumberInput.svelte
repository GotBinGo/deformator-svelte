<script>
	export let data;
	export let value;
</script>

<label for="inp">{data.label}</label>
<input name="inp" type="number" bind:value />
