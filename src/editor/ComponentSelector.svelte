<script>
    import { getContext } from "svelte";
    import store from "../common";
    let { close } = store.get('simple-modal')
    export let onOkay = () => {};
    function _onOkay() {
      onOkay({type:'List', elements: [{type:'https://a.ic.hu/bundle.js', name:"YoooMoo"}, {type:'Button', text:"Korte"}]});
      close();
    }
    export let message;


</script>
  
  <style>
    h2 {
          font-size: 2rem;
          text-align: center;
      }
  </style>
  
  <h2>🎉 {message} 🍾</h2>
  <button on:click={_onOkay}>Hello</button>