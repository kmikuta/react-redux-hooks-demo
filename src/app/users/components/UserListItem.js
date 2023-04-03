export function UserListItem({ id, name, onSelection }) {
  return (
    <li>
      <span className="margin-right_8">{name}</span>
      <button onClick={() => onSelection(id)}>Select</button>
    </li>
  );
}
