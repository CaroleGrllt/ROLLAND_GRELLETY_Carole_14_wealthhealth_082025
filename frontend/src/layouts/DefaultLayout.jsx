import Header from '../layouts/Header'; 
import Footer from '../layouts/Footer';

export default function DefaultLayout({ children }) {
  return (
    <div className="default-layout-display">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}