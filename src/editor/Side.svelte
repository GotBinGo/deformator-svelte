<script>
	export let data;
	export let value;
</script>
<app-side style="border-left: 4px dashed gray; display: flex; width: 450px; min-width: 450px;">
<div style="padding: 5px; width: 100%">
	options
	<button mat-raised-button color="primary" >parent</button>&nbsp;
	<button mat-raised-button color="primary" >surround</button>&nbsp;
	<button mat-raised-button color="primary" >copy</button>&nbsp;
	<button mat-raised-button color="primary" >paste</button>&nbsp;
	<br>
	<br>
	Form:
	<pre>
		{JSON.stringify(data, undefined, '  ')}
	</pre>
	<br>
	Value:
	<pre>
		{JSON.stringify(value, undefined, '  ')}
	</pre>
  </div>
</app-side>
    