import React from "react";

class GeneralInfoOverview extends React.Component {
  render() {
    const {name, email, phone} = this.props;
    return (
      <div className="general-info-overview">
        <div id="name-display">{name}</div>
        <div id="email-display">{email}</div>
        <div id="phone-display">{phone}</div>
      </div>
    );
  }
}

export default GeneralInfoOverview;
