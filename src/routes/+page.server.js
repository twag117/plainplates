export async function load({ platform }) {
  // do server stuff here
  const result = await platform.env.DB.prepare("SELECT * FROM recipes WHERE featured=1").all()

  return {
    // return data here
    recipes: result.results
  }
}