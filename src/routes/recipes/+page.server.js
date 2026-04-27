export async function load({ platform, url }) {
  // do server stuff here
  const search = await url.searchParams.get('search')
  const category = await url.searchParams.get('category')
  let result

  if (search && category) {
    result = await platform.env.DB.prepare(
      "SELECT * FROM recipes WHERE category = ? AND (name LIKE ? OR description LIKE ?) LIMIT 100"
    ).bind(`${category}`, `%${search}%`, `%${search}%`).all()
  } else if (search) {
    result = await platform.env.DB.prepare(
      "SELECT * FROM recipes WHERE name LIKE ? OR description LIKE ? LIMIT 100"
    ).bind(`%${search}%`, `%${search}%`).all()
  } else if (category) {
    result = await platform.env.DB.prepare(
      "SELECT * FROM recipes WHERE category = ? LIMIT 100"
    ).bind(`${category}`).all()
  } else {
    result = await platform.env.DB.prepare("SELECT * FROM recipes LIMIT 100").all()   
  }


  return {
    // return data here
    recipes: result.results,
    categoryParam: category
  }
}