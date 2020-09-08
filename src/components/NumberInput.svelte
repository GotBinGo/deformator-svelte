<script>
	export let label;
	export let value;
</script>

<label for="inp">{label}</label>
<input name="inp" type="number" bind:value />
