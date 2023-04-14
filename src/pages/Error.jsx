import { useRouteError } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Error.css';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <main>
        <Header />
        <div className="error-container">
          <p className="error-code">{error.status}</p>
          <p className="error-message">{error.message || error.statusText}</p>
          <p className="error-message">
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
