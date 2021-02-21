export default function Section(props) {
  return (
    <div className="row">
      <div className="header">
        {!props.preview || (props.preview && !props.preview.show) ? (
          <div className="indicator">
            <span>{props.indicator}</span>
          </div>
        ) : null}
        <div className="u-center-vert">{props.title}</div>
      </div>
    </div>
  );
}
