import { Fragment } from "preact/jsx-runtime";

export const ErrorText = (props:unknown) => {
  return (
    <Fragment>
      <h3>Error</h3>
      <p>{props.message}</p>
    </Fragment>
  );
};