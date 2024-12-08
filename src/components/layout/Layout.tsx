import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'

interface LayoutProps{
    children: any

}
const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout