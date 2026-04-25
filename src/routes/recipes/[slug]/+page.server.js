export async function load({ platform, params }) {
  // do server stuff here
  const result = await platform.env.DB.prepare("SELECT * FROM recipes WHERE slug = ?").bind(params.slug).first()
  
  return {
    // return data here
    item: result
  }
}