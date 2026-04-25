<script>
  let { data } = $props()
</script>


<h1>Welcome to PlainPlates!</h1>
<p>ID: {data.item.id} - {data.item.name}</p>  


<style>
  h1 {
    background: red;
  }
</style>