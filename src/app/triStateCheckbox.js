export default function TriStateCheckbox({ name, valueIn = name }) {
  return (
    <li>
      <label>
        <input type="checkbox" id={valueIn} name={valueIn} value={valueIn} />
        {name}
      </label>
    </li>
  );
}
