import InputField from "./InputField";

export default function InputRows(props) {
  var rows = [],
    pairs = [];
  props.inputs.forEach((input) => {
    switch (props.columns) {
      case 2:
        pairs.push(input);
        if (pairs.length === 2) {
          let first = pairs[0];
          let second = pairs[1];
          rows.push(
            <div className="inputRow" key={first.id + second.id}>
              <div className="inputColumn">
                <InputField
                  {...first}
                  formRef={props.register(
                    first.required ? { required: true } : null
                  )}
                  error={props.errors[first.id]}
                  preview={props.preview}
                />
              </div>
              <div className="inputColumn">
                <InputField
                  {...second}
                  formRef={props.register(
                    second.required ? { required: true } : null
                  )}
                  error={props.errors[second.id]}
                  preview={props.preview}
                />
              </div>
            </div>
          );
          pairs = [];
        }
        break;
      case 1:
        rows.push(
          <div className="inputRow" key={input.id}>
            <div className="inputColumnFull">
              <InputField
                {...input}
                formRef={props.register(
                  input.required ? { required: true } : null
                )}
                error={props.errors[input.id]}
                preview={props.preview}
              />
            </div>
          </div>
        );
        break;
    }
  });

  return rows;
}
