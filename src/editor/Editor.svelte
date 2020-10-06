<script>
import Container from './../base/Container.svelte';

import Side from './Side.svelte';
import store from '../common';
import { getContext } from 'svelte';

store.set('Container', Container);
store.set('simple-modal', getContext('simple-modal'));

export let data;
let value;
$: console.log(value);

</script>

<editor style="display: flex; flex-grow: 1;">
	<div style="display: flex; flex-grow: 1; flex-direction: column">
		<Container bind:data bind:value></Container>
    </div>
    <Side></Side>
</editor>
