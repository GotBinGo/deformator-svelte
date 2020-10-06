<script>
import Manager from './editor/Manager.svelte';
import ComponentSelector from './editor/ComponentSelector.svelte'
import store from './common';
import ModalHost from './modal/ModalHost.svelte';
store.set('ComponentSelector', ComponentSelector)
</script>
<Manager></Manager>
<ModalHost></ModalHost>

<style>
</style>