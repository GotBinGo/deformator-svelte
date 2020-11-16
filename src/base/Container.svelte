<script>
  import store from "../common";
  export let data;
  export let value;
  import {open as openModal} from '../modal';
  let Container = store.get('Container')
  let ComponentSelector = store.get('ComponentSelector')
  export let deleteSelf = () => {};


  let componentName;
  let imported;

  $: if (data ) {
    if (data.type != componentName) {
      componentName = data.type;
    }
  } else {
    componentName = undefined;
  }

  function getComponent(componentName) {
    if(componentName.endsWith('.js')) {
      return import(`${componentName}`).then(x => (imported = x).default);
    } else {
      return import(`/components/${componentName}.js`).then(x => (imported = x).default);
    }
  }

  export function getCurrentComponentClass() {
    return imported;
  }

  async function outerClick(e) {
    e.stopPropagation();

    // if(e.target !== target) return;
    if(!store.get('allowPopup')) return;

    let a = await openModal(ComponentSelector, {props: { message:'123'}}).afterClosed();
    if(a) {
      data = a;
    } else if(a === false) {
      console.log('call dele self')
      deleteSelf();
    }
  }
  let target;

  // let oldData; //TODO this puts value into data
  // $: {if(oldData != data) {oldData = data; value = data.value}; if(data.value !== value) data.value = value};

</script>

<style>
  .empty {
    padding: 10px;
    text-align: center;
  }
</style>

{#if componentName}
  {#await getComponent(componentName)}
    Betöltés ...
  {:then component}
    <div bind:this={target} on:click={outerClick} style="width: 100%; display: flex;border: 1px solid black">
      <svelte:component this={component} {Container} bind:data bind:value></svelte:component>
    </div>
  {:catch ex}
    <div on:click={outerClick} style="width: 100%; display: flex;border: 1px solid black">
      A komponens nem található a könyvtárban ({componentName})
    </div>
  {/await}
{:else}
  <div class="empty">Nincs itt semmi :(</div>
{/if}