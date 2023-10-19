export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <br />
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </div>
  );
};
