<script>
  import RecipesList from '$lib/RecipesList.svelte'

  let { data } = $props()
</script>

<h1>Welcome to PlainPlates!</h1>
<RecipesList recipes={data.recipes} />

<style>
  h1 {
    background: red;
  }
</style>