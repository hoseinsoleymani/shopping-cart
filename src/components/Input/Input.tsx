import { InputContainer } from './inputStyles';
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <InputContainer>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} />
    </InputContainer>
  );
};

export default Input;
