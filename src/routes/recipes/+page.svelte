<script>
  import RecipesList from "$lib/RecipesList.svelte"
  let { data } = $props()
</script>


<h1>Explore PlainPlates!</h1>

<hr>
<div class="search-group">
  <h3>SEARCH:</h3>
  <form action="/recipes" method="get">
    <input type="text" name="search">
    <input type="submit" value="submit">
  </form>
</div>

<RecipesList recipes={data.recipes} />



<style>
  hr {
    border-color: var(--color-accent);
  }
  .search-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>