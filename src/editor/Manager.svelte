<script>
    import store from '../common';
    import  Automerge from 'automerge';


    import Editor from './Editor.svelte';
    // let data = {type:'List', elements: [
    //     {type:'Button', text:"Korte"},
    //     {type:'Split', elements:[{type:'Button', text:'123'}, {type:'Split', elements:[{type:'Button', text:'123'}, {type:'Button', text:'123'}]}]},
    //     {type:'TextInput', label:''},
    //     {type:'Empty', label:''},
    // ]};
    // let data = {type:'TextInput', label:''};
    // let data = {type:'Split', elements:[{type:'Button', text:'123'}]};
    // let data = Automerge.from({data:{type:'Empty'}});
    let data = {type:'TextInput', label:''};
    let value;
    function reset() {
        data = {type:'Empty', elements: []};;
        value = clear(value);
    }
    
    function clear(v) {
        if(Array.isArray(v)) {
            return v.map(x => clear(x))
        } else {
            return undefined;
        }
    }

    function save() {
        localStorage.data = JSON.stringify(data);
    }
    function load() {
        data = JSON.parse(localStorage.data);
    }
    
    function allowPopup() {
        store.set('allowPopup', !store.get('allowPopup'));
    }
</script>
<div style="height: 100%; display: flex; flex-direction: column;">
<div style="margin: -9px 0px 0px 0px; border-bottom: 4px dashed gray;">
    <button on:click={reset}>reset</button>
    <button on:click={save}>save</button>
    <button on:click={load}>load</button>
    <!-- <button>colors</button>
    <button>canAdd</button>
    <button>hoverAdd</button>
    <button>layoutMode</button> -->
    <button on:click={allowPopup}>allowPopup</button>
    <!-- <button>sidebar</button>
    <button>sidebar Debug</button> -->
    def:
    <mat-form-field style="width: 50px; max-height: 53px;">
        <input style="width: 50px;" matInput type="number" required>
    </mat-form-field>
    hov:
    <mat-form-field style="width: 50px; max-height: 53px;">
        <input style="width: 50px;" matInput type="number"required>
    </mat-form-field>
    sel:
    <mat-form-field style="width: 50px; max-height: 53px;">
        <input style="width: 50px;" type="number" required>
    </mat-form-field>
    <br>
    </div>
    <Editor bind:value bind:data></Editor>
</div>