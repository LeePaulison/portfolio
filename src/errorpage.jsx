import { useRouteError } from "react-router-dom";

const errorCardStyle = {
  dispay: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1em",
  textAlign: "center",
  padding: "1em",
  margin: "1em",
  border: "1px solid #f00",
  backgroundColor: "#fee",
};

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' style={errorCardStyle}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
