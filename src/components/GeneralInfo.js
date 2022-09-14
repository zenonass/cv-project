import InputField from "./InputField";
import React from "react";
import GeneralInfoOverview from "./GeneralInfoOverview";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleNameChange(value) {
    this.setState({name: value});
  }

  handleEmailChange(value) {
    this.setState({email: value});
  }

  handlePhoneChange(value) {
    this.setState({phone: value});
  }


  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="general-info">
          <InputField id="name" label="Name:" type="text" value={name} onInputChange={this.handleNameChange} />
          <InputField id="email" label="Email:" type="text" value={email} onInputChange={this.handleEmailChange} />
          <InputField id="phone" label="Phone:" type="text" value={phone} onInputChange={this.handlePhoneChange} />
          <GeneralInfoOverview name={name} email={email} phone={phone} />
      </div>
    );
  }
}


export default GeneralInfo;
