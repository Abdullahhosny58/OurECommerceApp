import { Form } from "react-bootstrap";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<TFeildValue extends FieldValues> = {
  name: Path<TFeildValue>;
  label: string;
  type?: string;
  register: UseFormRegister<TFeildValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};
const Input = <TFeildValue extends FieldValues>({
  label,
  name,
  type,
  register,
  error,
  onBlur,
  formText,
  success,
  disabled,
}: InputProps<TFeildValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        onBlur={onblurHandler}
        isValid={success ? true : false}
        disabled={disabled}
        isInvalid={error ? true : false}
      />

      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && <Form.Text muted>{formText}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
