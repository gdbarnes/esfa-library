import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Introduction</h1>
    <p>A compiled list of all ESFA components and guides on how to use them.</p>
    <Link to="/page-2/">View components</Link>
  </Layout>
)

export default IndexPage
