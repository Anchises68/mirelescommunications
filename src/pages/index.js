import React from "react"

import '../css/main.css'

import Layout from "../components/layout"
import Header from "../components/header"

const TemplateWrapper = ({data}) => (
  <div>
    <Layout>
      <Header/>
    </Layout>
  </div>
)

export default TemplateWrapper
