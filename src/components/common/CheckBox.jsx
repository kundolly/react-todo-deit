export default function CheckBox({ label, checked, onChange, className }) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        className="sr-only"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
