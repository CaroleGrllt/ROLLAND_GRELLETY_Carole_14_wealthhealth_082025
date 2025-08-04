import Footer from '../layouts/Footer';

export default function HomeLayout({ children }) {
  return (
    <div className="home-layout-display">
        <main>{children}</main>
        <Footer />
    </div>
  )
}