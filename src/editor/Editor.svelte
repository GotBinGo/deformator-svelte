<script>
import Container from '../base/Container.svelte';
import Side from './Side.svelte';
let data = {type:'List', elements: [{type:'Button', text:"Alma"}, {type:'Button', text:"Korte"}]};
let value;
$: console.log(value);

</script>

<editor style="display: flex; flex-grow: 1;">
	<div style="display: flex; flex-grow: 1; flex-direction: column">
		<Container {data} bind:value></Container>
    </div>
    <Side></Side>
</editor>
