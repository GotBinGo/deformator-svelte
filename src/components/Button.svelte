<script>
	import { tick } from "svelte";
	export let text;
	export let value;
	async function doclick() {
		value = true;
		await tick();
		value = false;
	}
</script>

<div style="padding:5px; width: 100%">
    <button on:click={doclick} style="width: 100%;">{text}</button>
</div>
