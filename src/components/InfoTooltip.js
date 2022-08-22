function InfoTooltip(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <img className="popup__notify-success"></img>
        <h2 className="popup__notify-title"></h2>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
  );
}

export default InfoTooltip;