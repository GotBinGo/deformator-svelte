<script>
	export let label;
	export let value;
</script>

<label for="inp">{label}</label>
<input name="inp" type="text" bind:value />
