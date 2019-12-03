import React, { Suspense } from 'react'
import { Router, RouteComponentProps } from '@reach/router'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Loading from 'components/Loading'

import './App.css'

const Home = React.lazy(() => import('pages/Home'))

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<Suspense fallback={<Loading />}>
				<Router>
					<RouterPage path='/' pageComponent={<Home />} default />
				</Router>
			</Suspense>
			<Footer />
		</div>
	)
}

export default App

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent
