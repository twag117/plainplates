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

  <div class="filter-group">
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

    <div>
      <h3 class="form-header">SORT:</h3>
      <input type="radio" id="sort1" name="sort" value="alphabetical" checked={data.sortParam==='alphabetical'||data.sortParam===null}>
      <label for="sort1">A-Z</label><br>
      <input type="radio" id="Sort2" name="sort" value="new" checked={data.sortParam==='new'}>
      <label for="sort2">Newest</label><br>
      <input type="radio" id="sort3" name="sort" value="time" checked={data.sortParam==='time'}>
      <label for="sort3">Cook Time</label><br><br>
    </div>
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
    align-items: baseline;
    justify-content: flex-start;
  }
  .form-header {
    margin-block-start: 10px;
    margin-block-end: 10px;
    padding-right: 10px;
  }
</style>