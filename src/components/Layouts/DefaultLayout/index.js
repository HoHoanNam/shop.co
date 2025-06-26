import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
