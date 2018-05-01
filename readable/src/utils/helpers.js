import sortBy from 'sort-by'

export function capitalize (str = '') {
    return typeof str !== 'string'
        ? ''
        : str[0].toUpperCase() + str.slice(1)
}

export const sortPosts = (posts, filter) => {
  if (filter && filter.sorts && posts) {
    const active_filter = filter.sorts.filter(item => item.id === filter.active_filter)[0]
    posts.sort(sortBy(...active_filter.sortByFields))
  }
  return posts;
}
