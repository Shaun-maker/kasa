import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      Hello ! Here is the 404 Not found Error page
      <i>{error.statusText || error.message}</i>
    </div>
  );
}

export default ErrorPage;
