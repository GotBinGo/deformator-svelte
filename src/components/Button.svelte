<script>
	import { tick } from "svelte";
	export let data;
	export let value;
	async function doclick(e) {
		value = true;
		await tick();
		value = false;
		e.stopPropagation();
	}
</script>

<div style="padding:5px; width: 100%">
    <button on:click={doclick} style="width: 100%;">{data.text}</button>
</div>
