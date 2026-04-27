<script>
    import RecipeCard from "./RecipeCard.svelte";

  let { recipes } = $props()  
</script>

<div class="container">
  {#each recipes as recipe}
    <RecipeCard r={recipe} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>