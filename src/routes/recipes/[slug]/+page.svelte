<script>
  let { data } = $props()
  const recipe = $derived(data.item)
</script>


<h1>{recipe.name}</h1>
<hr>
<p>ID: {recipe.id}</p>
<p>Name: {recipe.name}</p>
<p>Slug: {recipe.slug}</p>
<p>Description: {recipe.description}</p>
<p>Ingredients: {recipe.ingredients}</p>
<p>Instructions: {recipe.instructions}</p>
<p>Prep Time: {recipe.prep_time}</p>
<p>Cook Time: {recipe.cook_time}</p>
<p>Servings: {recipe.servings}</p>
<p>Category: {recipe.category}</p>
<p>Notes: {recipe.notes}</p>
<p>Featured: {recipe.featured}</p>
<p>Image: {recipe.image_path}</p>






<style>
  hr {
    border-color: var(--color-accent);
  }
</style>