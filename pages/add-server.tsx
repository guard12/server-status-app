import React from 'react'

import { Layout } from '../components/page/layout'
import { AddServerForm } from '../components/add-server/add-server-form'

export const AddServerPage = () => {
	return <Layout title="Add server">
		<AddServerForm/>
	</Layout>
}

export default AddServerPage