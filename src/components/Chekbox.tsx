function Checkbox() {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="custom-checkbox" className="hidden peer" />
      <label
        htmlFor="custom-checkbox"
        className="flex items-center justify-center w-6 h-6 border border-gray-300 rounded-md peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300"
      ></label>
      <span className="text-gray-700">Custom Checkbox</span>
    </div>
  );
}

export default Checkbox;
