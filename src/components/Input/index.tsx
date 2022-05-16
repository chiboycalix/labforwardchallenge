
import { IInputProps } from './types';

const Input = ({ onChange, value, placeholder, type, id, label }: IInputProps) => {
  return (
    <div className="mb-4">
      {/* text-gray-700 */}
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        id={id}
      />
    </div>
  );
};

export default Input;
