export async function load({ platform, url }) {
  // do server stuff here
  const search = await url.searchParams.get('search')
  const category = await url.searchParams.get('category')
  const sort = await url.searchParams.get('sort')
  let sql = 'SELECT * FROM recipes'
  let values = []
  let result

  if (search && category) {
    sql += ' WHERE category = ? AND (name LIKE ? OR description LIKE ?)'
    values.push(category, `%${search}%`, `%${search}%`)
  } else if (search) {
    sql += ' WHERE name LIKE ? OR description LIKE ?'
    values.push(`%${search}%`, `%${search}%`)
  } else if (category) {
    sql += ' WHERE category = ?'
    values.push(category)
  }

  if (sort === 'new') {
    sql += ' ORDER BY id DESC'
  } else if (sort === 'time') {
    sql += ' ORDER BY cook_time ASC'
  } else {
    sql += ' ORDER BY name ASC'
  }

  sql += ' LIMIT 100'

  result = await platform.env.DB.prepare(sql).bind(...values).all()


  return {
    // return data here
    recipes: result.results,
    categoryParam: category,
    sortParam: sort
  }
}