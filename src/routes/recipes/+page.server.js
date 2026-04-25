export async function load({ platform, url }) {
  // do server stuff here
  const search = await url.searchParams.get('search')
  let result
  if (!search) {
    result = await platform.env.DB.prepare("SELECT * FROM recipes LIMIT 100").all()   
  } else {
    result = await platform.env.DB.prepare(
      "SELECT * FROM recipes WHERE name LIKE ? OR description LIKE ? LIMIT 100"
    ).bind(`%${search}%`, `%${search}%`).all()
  }
  

  return {
    // return data here
    recipes: result.results
  }
}