<script>
  let { recipes } = $props()  
</script>

{#each recipes as r}
  <p><a href="/recipes/{r.slug}">ID: {r.id}</a> - {r.name}</p>  
{/each}