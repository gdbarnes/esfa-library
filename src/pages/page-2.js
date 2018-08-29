import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Component list</h1>
    <p>This is where we will list all the components</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
