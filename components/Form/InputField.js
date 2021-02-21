import { controllerType } from "components/formStructure";

export default function InputField(props) {
  var displayLabel = true;
  var controller = null;
  switch (props.display) {
    case controllerType.text:
      controller = previewDisplay() ? (
        <input
          className="u-full-width"
          type="text"
          id={props.id}
          name={props.id}
          ref={props.formRef}
        />
      ) : (
        <div className="preview">
          {props.preview && props.preview.data
            ? props.preview.data[props.id]
            : ""}
        </div>
      );
      break;
    case controllerType.radio:
      controller = (
        <div className="radioGroupRow">
          <div className="radioGroup">
            <label htmlFor={props.id + "ja"}>Ja</label>
            <input
              name={props.id}
              id={props.id + "ja"}
              type="radio"
              value="Ja"
              ref={props.formRef}
            />
          </div>
          <div className="radioGroup">
            <label htmlFor={props.id + "nej"}>Nej</label>
            <input
              name={props.id}
              id={props.id + "nej"}
              type="radio"
              value="Nej"
              ref={props.formRef}
            />
          </div>
        </div>
      );

      break;
    case controllerType.label:
      controller = (
        <p>
          {props.preview && props.preview.data
            ? props.preview.data[props.id]
            : ""}
        </p>
      );
      displayLabel = false;
      break;
    default:
      break;
  }

  function previewDisplay() {
    return !props.preview || (props.preview && !props.preview.show);
  }

  return (
    <>
      {displayLabel ? (
        <label htmlFor={props.id}>
          {props.title}
          {props.required && <span className="required">*</span>}
          {props.error && <span className="error">Required</span>}
        </label>
      ) : null}
      {controller}
    </>
  );
}
