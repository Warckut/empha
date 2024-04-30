import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import "./checkbox.scss";

function Checkbox<T extends FieldValues>(
  props: UseControllerProps<T> & { label: string }
) {
  const { field } = useController(props);
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className={field.value ? "checked" : ""}
        id={props.label}
        checked={field.value}
        {...field}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  );
}

export default Checkbox;
