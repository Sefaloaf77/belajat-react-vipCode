import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="my-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-700">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
