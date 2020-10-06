<script>
  import { onMount, onDestroy } from 'svelte';
import { registerHost, unregisterHost } from './index';
  export let name;

  let store;
  onMount(() => store = registerHost(name));
  onDestroy(() => unregisterHost(name))
</script>

<style>
  .modal-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-container {
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }
</style>

{#if store}
  {#each $store as { component, props, close }}
    <div class="modal-overlay" on:click={() => close()} on:mousedown={(e) => e.preventDefault()}>
      <div class="modal-container" on:click={e=> e.stopPropagation()}>
        <svelte:component this={component} {...props} {close}></svelte:component>
      </div>
    </div>
  {/each}
{/if}

