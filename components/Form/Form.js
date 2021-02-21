import InputRows from "./InputRows";
import Section from "./Section";
import { formStructure } from "components/formStructure";
import { useDispatchFormData } from "components/FormData";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Form(props) {
  const dispatch = useDispatchFormData();
  const router = useRouter();

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch({ type: "SET", payload: data });
    router.push(props.nextStep);
  };

  function displaySection(previewOnly, preview) {
    return (preview && preview.show) || !previewOnly;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <div className="container">
          {formStructure.map((section) =>
            displaySection(section.head.previewOnly, props.preview) ? (
              <div className="section" key={section.head.title}>
                <Section {...section.head} preview={props.preview}>
                  <InputRows
                    inputs={section.inputs}
                    register={register}
                    errors={errors}
                    preview={props.preview}
                    columns={section.head.columns ? section.head.columns : 2}
                  />
                </Section>
              </div>
            ) : null
          )}
        </div>
        {!props.preview ? (
          <div className="container">
            <div className="submitRow">
              <div className="submitColumn">
                <button className="u-pull-right button" type="submit">
                  Skicka in offertförfrågan
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
}
