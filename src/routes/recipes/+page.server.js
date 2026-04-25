export async function load({ platform }) {
  // do server stuff here
  const result = await platform.env.DB.prepare("SELECT * FROM recipes").all()

  return {
    // return data here
    recipes: result.results
  }
}