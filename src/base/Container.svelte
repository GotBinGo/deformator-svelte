<script>
  import store from "../common";
  export let data;
  export let value;
  
  let Container = store.get('Container')
  let {open} = store.get('simple-modal')
  let ComponentSelector = store.get('ComponentSelector')


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

  function outerClick(e) {
    console.log('outer', componentName)
    open(ComponentSelector, {
      message: "It's a popup!",
      onOkay: x => {
        console.log('okay', x);
        data = x;
      },
      onClose: x => {
        console.log('close');
        data = {type:'Button', text:"Korte"}
      } }, {}, {

    });
    e.stopPropagation();
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
    <div on:click={outerClick} style="width: 100%; display: flex;border: 1px solid black">
      <svelte:component this={component} {Container} bind:data bind:value></svelte:component>
    </div>
  {:catch ex}
    A komponens nem található a könyvtárban ({componentName})
  {/await}
{:else}
  <div class="empty">Nincs itt semmi :(</div>
{/if}