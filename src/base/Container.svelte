<script>
  import { getContext } from 'svelte';
  import ComponentSelector from '../editor/ComponentSelector.svelte';
  export let data;
  export let value;
  
  // const open = getContext('simple-modal').open;
  
  let GenericComponent = getContext('GenericComponent');
  
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

  function outerClick(e){
    console.log(componentName);
    open(ComponentSelector, { message: "It's a popup!" });
    // e.stopPropagation();
  }

</script>

<style>
  .empty {
    padding: 10px;
    text-align: center;
  }
</style>

{#if componentName}
  {#await getComponent(componentName)}
    Loading...
  {:then component}
    <div on:click={outerClick} style="width: 100%; display: flex;border: 1px solid black">
      <svelte:component this={component} {GenericComponent} {...data} bind:value></svelte:component>
    </div>
  {:catch ex}
    Component not found ({componentName})
  {/await}
{:else}
  <div class="empty">Missing componentName</div>
{/if}