<script>
  import { getContext } from "svelte";
  export let data;
  export let value;
  
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
    return import(`/components/${componentName}.js`).then(x => (imported = x).default);
  }

  export function getCurrentComponentClass() {
    return imported;
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
    Betöltés ...
  {:then component}
    <div style="width: 100%; display: flex;border: 1px solid black">
      <svelte:component this={component} {GenericComponent} {...data} bind:value></svelte:component>
    </div>
  {:catch ex}
    A komponens nem található a könyvtárban ({componentName})
  {/await}
{:else}
  <div class="empty">Nincs itt semmi :(</div>
{/if}