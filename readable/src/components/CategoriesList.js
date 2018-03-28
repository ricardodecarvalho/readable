import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../utils/helpers'

const CategoriesList = ({ categories }) => (
  <ul>
    {categories.length === 0 && (
      <li>No categories found</li>
    )}
    {categories.map(categorie =>
      <li key={categorie.path}>
        <Link to={{
          pathname: categorie.path
        }}>
          {capitalize(categorie.name)}
        </Link>
      </li>
    )}
  </ul>
)

export default CategoriesList
