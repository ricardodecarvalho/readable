import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesList = ({ categories }) => (
  <ul>
    {categories.length === 0 && (
      <li>No categories found</li>
    )}
    {categories.map(categorie =>
      <li><Link to="/">{categorie.name}</Link></li>
    )}
  </ul>
)

export default CategoriesList
