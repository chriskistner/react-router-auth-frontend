import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import Labels from './Labels'
import BlogPostsFrontPage from './BlogPostsFrontPage'
import BlogPostArchive from './BlogPostArchive'
import BlogPostsByUser from './BlogPostsByUser'
import BlogPostsByLabel from './BlogPostsByLabel'
import SideBar from './SideBar'
import Footer from './Footer'

import '../styles/home.css'

const Home = props =>  
  <div>
    <div className="container">
      <Labels />
    </div>

    <main role="main" className="container">
      <div className="row">
        <Switch>
          <Route exact path={props.match.url} component={BlogPostsFrontPage} />
          <Route path={`${props.match.url}archive/:month/:year`} component={ BlogPostArchive } />
          <Route path={`${props.match.url}users/:username`} component={ BlogPostsByUser } />
          <Route path={`${props.match.url}labels/:label`} component={ BlogPostsByLabel } />
        </Switch>

        <SideBar />
      </div>
    </main>

    <Footer />
  </div>

export default Home
