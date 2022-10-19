import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value, id, type, name, label, variant, onChange} = this.props;
    return (
      <div className="input-field">
        <label>
          {label}
          <input
            id={id}
            type={type}
            name={name}
            variant={variant}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}

export default InputField;
