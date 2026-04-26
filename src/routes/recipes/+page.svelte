<script>
  import RecipesList from "$lib/RecipesList.svelte"
  let { data } = $props()
</script>


<h1>Explore PlainPlates!</h1>

<hr>
<h3>SEARCH:</h3>
<form action="/recipes" method="get">
  <input type="text" name="search">
  <br><br>
  <input type="submit" value="submit">
</form>
<hr>

<RecipesList recipes={data.recipes} />



<style>
  h1 {
    background: red;
  }
</style>