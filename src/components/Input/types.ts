export interface IInputProps {
  onChange: (value: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type: string;
  id: string;
  label: string;
}
