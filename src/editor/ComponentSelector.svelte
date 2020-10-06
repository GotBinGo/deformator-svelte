<script>
    import { getContext } from "svelte";
    import store from "../common";
    export let close;

    function onButton() {
      close({type:'Button', text:'123'});
    }
    function onText() {
      close({type:'TextInput', label:''});
    }
    function onList() {
      close({type:'List', elements:[{type:'Button', text:'123'}, {type:'Button', text:'123'}]});
    }
    function onSplit() {
      close({type:'Split', elements:[{type:'Button', text:'123'}, {type:'Button', text:'123'}]});
    }
    function onUrl() {
      close({type:prompt()});
    }
    function onTorol() {
      close(false);
    }
</script>
  
<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  .modal-body {
    background-color: white;
  }
</style>

<div class="modal-body">
  <h2>🎉 New Component 🍾</h2>
  <button on:click={onButton}>Button</button>
  <br>
  <button on:click={onText}>Text</button>
  <br>
  <button on:click={onList}>List</button>
  <br>
  <button on:click={onSplit}>Split</button>
  <br>
  <button on:click={onUrl}>URL</button>
  <br>
  <button on:click={onTorol}>Torol</button>
  <br>
</div>