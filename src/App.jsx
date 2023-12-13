import './App.css'
import Header from './layouts/AppHeader/Header/Header'
import SectionContent from './layouts/InputsSection/SectionContent'
import styles from './layouts/AppLayout/AppLayout.module.scss'
import { ImageSection } from './layouts/ImageSection/ImageSection'

function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <SectionContent />
      <ImageSection />
      </div>
  )
}

export default App
