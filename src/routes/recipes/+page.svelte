<script>
  let { data } = $props()
</script>


<h1>Welcome to PlainPlates!</h1>

<hr>
<h3>SEARCH:</h3>
<form action="/recipes" method="get">
  <input type="text" name="search">
  <br><br>
  <input type="submit" value="submit">
</form>
<hr>

{#each data.recipes as r}
  <p><a href="/recipes/{r.slug}">ID: {r.id}</a> - {r.name}</p>  
{/each}


<style>
  h1 {
    background: red;
  }
</style>