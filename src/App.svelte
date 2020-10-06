<script>
import Manager from './editor/Manager.svelte';
import Modal from './modal/Modal.svelte';
import ComponentSelector from './editor/ComponentSelector.svelte'
import store from './common';
store.set('ComponentSelector', ComponentSelector)
</script>
<Modal>
	<Manager></Manager>
</Modal>

<style>
</style>