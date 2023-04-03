export function ListWrapper({ children, emptyState }) {
  if (emptyState) {
    return <span className="color_secondary">The list is empty</span>;
  }
  return children;
}
