export default function FormPageLayout(props) {
  return (
    <div className={props.class}>
      <div className="container">
        <div className="row">
          <div className="title">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
