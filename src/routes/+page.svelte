<script>
  let { data } = $props()
</script>


<h1>Hello PlainPlates!</h1>
{#each data.recipes as r}
  <p>ID: {r.id} - {r.name}</p>  
{/each}


<style>
  h1 {
    background: red;
  }
</style>