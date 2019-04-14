export function handleRadioButtonChange(evt) {
    let data = {},
        radios = document.getElementsByName(evt.target.name);

    for (let i = 0; i < radios.length; i++) {
        data[radios[i].id] = radios[i].checked
    }

    this.props.handleFormUpdate(data);
}

export function handleCheckBoxChange(evt) {
    this.props.handleFormUpdate({[evt.target.id]: evt.target.checked});
}

export function handleInputChange(evt) {
    this.props.handleFormUpdate({[evt.target.id]: evt.target.value});
}