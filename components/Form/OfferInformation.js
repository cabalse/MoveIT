export default function OfferInformation(props) {
  return (
    <div className="offerInformation">
      <div className="row">
        <div className="twelve columns">
          <div className="price">{props.preview.data.price}</div>
          <div className="distance">{props.preview.data.distance}</div>
          <div className="info">
            <div className="period">{props.preview.data.info.period}</div>
            <div className="contact">
              {props.preview.data.info.contact.text}
              <a href={"mailto:" + props.preview.data.info.contact.email}>
                {props.preview.data.info.contact.linkText}
              </a>
            </div>
            <div className="offerLink">
              {props.preview.data.info.offerLink.text}
              <a href={props.preview.data.info.offerLink.url}>
                {props.preview.data.info.offerLink.linkText}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row buttonRow">
        <div className="twelve columns buttonColumn">
          <button className="button u-pull-right" type="submit">
            Godkänn offert
          </button>
        </div>
      </div>
    </div>
  );
}
