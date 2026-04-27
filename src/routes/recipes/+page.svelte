<script>
  import RecipesList from "$lib/RecipesList.svelte"
  let { data } = $props()
</script>


<h1>Explore PlainPlates!</h1>

<hr>

<form action="/recipes" method="get">
  <div class="filter-group">
    <h3 class="form-header">SEARCH:</h3>
    <input type="text" name="search">
  </div>

  <div>
    <h3 class="form-header">CATEGORY:</h3>
    <input type="radio" id="category1" name="category" value="" checked={data.categoryParam===null}>
    <label for="category1">All</label><br>
    <input type="radio" id="category2" name="category" value="main" checked={data.categoryParam==='main'}>
    <label for="category2">Main</label><br>
    <input type="radio" id="category3" name="category" value="side" checked={data.categoryParam==='side'}>
    <label for="category3">Side</label><br>
    <input type="radio" id="category4" name="category" value="drink" checked={data.categoryParam==='drink'}>
    <label for="category4">Drink</label><br>
    <input type="radio" id="category5" name="category" value="dessert" checked={data.categoryParam==='dessert'}>
    <label for="category5">Dessert</label><br><br>
  </div>

  <input type="submit" value="submit">
</form>
<br>

<RecipesList recipes={data.recipes} />



<style>
  hr {
    border-color: var(--color-accent);
  }
  .filter-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .form-header {
    margin-block-start: 10px;
    margin-block-end: 10px;
  }
</style>