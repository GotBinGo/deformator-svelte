<script>

let components = ['Button', 'Empty'];
$: console.log(components);

</script>

{#each components as item, i (i)}
    <div>
        Alma {components[i]}
    </div>
{/each}

