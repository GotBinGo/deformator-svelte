<script>
    import Editor from './Editor.svelte';
    let data = {type:'List', elements: [{type:'https://a.ic.hu/bundle.js', name:"YoooMoo"}, {type:'Button', text:"Korte"}]};
    function reset() {
        data = {type:'Empty', elements: []};
    }
    function save() {
        localStorage.data = JSON.stringify(data);
    }
    function load() {
        data = JSON.parse(localStorage.data);
    }
</script>
<div style="height: 100%; display: flex; flex-direction: column;">
<div style="margin: -9px 0px 0px 0px; border-bottom: 4px dashed gray;">
    <button on:click={reset}>reset</button>
    <button on:click={save}>save</button>
    <button on:click={load}>load</button>
    <button>colors</button>
    <button>canAdd</button>
    <button>hoverAdd</button>
    <button>layoutMode</button>
    <button>allowPopup</button>
    <button>sidebar</button>
    <button>sidebar Debug</button>
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
    <Editor bind:data></Editor>
</div>