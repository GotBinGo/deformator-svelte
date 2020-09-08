<script>
	import Editor from './Editor.svelte';

</script>
<div style="height: 100%; display: flex; flex-direction: column;">
<div style="margin: -9px 0px 0px 0px; border-bottom: 4px dashed gray;">
    <button class="m" mat-raised-button >reset</button>
    <button class="m" mat-raised-button >save</button>
    <button class="m" mat-raised-button >load</button>
    <button class="m" mat-raised-button >colors</button>
    <button class="m" mat-raised-button >canAdd</button>
    <button class="m" mat-raised-button >hoverAdd</button>
    <button class="m" mat-raised-button >layoutMode</button>
    <button class="m" mat-raised-button >allowPopup</button>
    <button class="m" mat-raised-button >sidebar</button>
    <button class="m" mat-raised-button >sidebar Debug</button>
    def: <mat-form-field style="width: 50px; max-height: 53px;">
        <input style="width: 50px;" matInput type="number" required>
    </mat-form-field>
    hov: <mat-form-field style="width: 50px; max-height: 53px;">
        <input style="width: 50px;" matInput type="number"required>
    </mat-form-field>
    sel: <mat-form-field style="width: 50px; max-height: 53px;">
        <input style="width: 50px;" type="number" required>
    </mat-form-field>
    <br>
    </div>
    <Editor></Editor>
</div>