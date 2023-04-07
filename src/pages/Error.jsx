import { useRouteError } from 'react-router-dom';
import Header from '../components/Header/Header';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Header />
      Hello ! Here is the 404 Not found Error page
      <i>{error.statusText || error.message}</i>
    </>
  );
}

export default ErrorPage;
