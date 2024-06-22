import Header from './components/Header/Header'
import Post from './components/Post/Post'
import Sidebar from './components/Sidebar/Sidebar'

import styles from '/src/styles/_app.module.sass'

import '/src/styles/_global.sass'

function App() {
  return (
    <div>
      <Header></Header>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
