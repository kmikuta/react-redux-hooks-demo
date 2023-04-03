export function FetchingWrapper({ children, errorState, loadingState }) {
  if (loadingState) {
    return <span className="color_secondary">Loading...</span>;
  }

  if (errorState) {
    return (
      <span className="color_error">An error occurred while loading data.</span>
    );
  }

  return children;
}
