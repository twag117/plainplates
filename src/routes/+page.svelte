<script>
  let { data } = $props()
</script>


<h1>Welcome to PlainPlates!</h1>
{#each data.recipes as r}
  <p><a href="/recipes/{r.slug}">ID: {r.id}</a> - {r.name}</p>  
{/each}


<style>
  h1 {
    background: red;
  }
</style>