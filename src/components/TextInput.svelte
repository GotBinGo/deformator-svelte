<script>
	export let data;
	export let value;
</script>

<label for="inp">{data.label}</label>
<input style="width: 100%;" name="inp" type="text" bind:value />

