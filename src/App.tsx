import React, { Suspense } from "react"
import { Router, RouteComponentProps } from "@reach/router"

import Loading from "components/Loading"
import "./App.css"

import { initGA } from "components/analytics"

const Home = React.lazy(() => import("pages/Home"))
const IframeVoluntarios = React.lazy(() => import("pages/IframeVoluntarios"))
const Resultados = React.lazy(() => import("pages/Resultados"))
const App: React.FC = () => {
  initGA()
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Router>
          <RouterPage path="/" pageComponent={<Home />} default />
          <RouterPage path="/voluntarios" pageComponent={<IframeVoluntarios />} />
          <RouterPage path="/resultados" pageComponent={<Resultados />} />

        </Router>
      </Suspense>
    </div>
  )
}

export default App

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) =>
  props.pageComponent
