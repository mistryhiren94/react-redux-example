import React from 'react'
import { Layout } from 'antd'
import { ContentRoute } from 'routes'

const { Content } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout>
        <Content>
          <ContentRoute />
        </Content>
      </Layout>
    </Layout>
  )
}
export default AppLayout
