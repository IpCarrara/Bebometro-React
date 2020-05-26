import React from 'react';

import NavBar from './NavBar.js'
import HeaderJumbotron from './HeaderJumbotron.js'
import Content from './Content.js'
import Download from './Download.js'

const App = () => {
  return(
    <div>
        <NavBar />
        <HeaderJumbotron />
        <Content />
        <Download />
    </div>

  )
}

export default App