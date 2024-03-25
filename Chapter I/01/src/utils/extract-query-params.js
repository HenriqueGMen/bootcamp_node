//?search=henrique&page=3

export function extractQueryParams(query) {
  return query.substr(1).split('$').reduce((queryParams, item) => {
    const [key, valeu] = item.split('=')

    queryParams[key] = valeu

    return queryParams
  }, {})
}