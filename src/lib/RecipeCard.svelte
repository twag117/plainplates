<script>
  let { r } = $props()
</script>

<a href="/recipes/{r.slug}" class="card">
  <img src="{ r.image_path ? r.image_path : 'https://placehold.co/300x200?text=Image%0AComing%20Soon'   }" alt="{r.name}" width="300" height="200">
  <h3 class="recipe-title">{r.name}</h3>
  <div class="recipe-description">{r.description}</div>
</a>

<style>
  .card {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;

    border: 1px solid red;
    padding: 5px 5px;
		text-decoration: none;
    max-width: 300px;
    margin-bottom: 5px;
    color: var(--font-color);
  }

  .recipe-title {
    height: 20px;
  }

  .recipe-description {
    padding: 5px 0;
  }
</style>