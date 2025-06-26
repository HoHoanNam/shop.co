import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="container py-5">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
