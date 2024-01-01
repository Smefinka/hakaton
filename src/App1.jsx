import './App.css'
import Header from './layouts/AppHeader/Header/Header'
import SectionContent from './layouts/InputsSection/SectionContent'
import { AppLayout } from './layouts/AppLayout/Applayout'
import { ImageSection } from './layouts/ImageSection/ImageSection'
import NameSection from './layouts/NameSection/NameSection'

function App() {
  return (
    <AppLayout>
      <Header />
      <SectionContent />
      <ImageSection />

    </AppLayout>
  )
}

export default App
