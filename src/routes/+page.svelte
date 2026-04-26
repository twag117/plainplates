<script>
  import RecipesList from '$lib/RecipesList.svelte'

  let { data } = $props()
</script>

<h1>Welcome to PlainPlates!</h1>
<hr>
<RecipesList recipes={data.recipes} />

<style>
  hr {
    border-color: var(--color-accent);
  }
</style>