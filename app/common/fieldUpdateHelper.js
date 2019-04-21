import $ from 'jQuery';

export function handleRadioButtonChange(evt) {
    let data = {},
        radios = document.getElementsByName(evt.target.name);

    for (let i = 0; i < radios.length; i++) {
        let section = evt.target.closest('.role');

        data[radios[i].id] = {
            value: radios[i].checked,
            label: radios[i].labels[0].textContent,
            id: radios[i].id,
            type: 'radio',
            title: $(section).siblings('.title').text()
        }
    }

    this.props.handleFormUpdate(data);
}

export function handleCheckBoxChange(evt) {
    let section = evt.target.closest('.role');

    this.props.handleFormUpdate({
        [evt.target.id]: {
            value: evt.target.checked,
            label: evt.target.labels[0].textContent || evt.target.labels[0].title,
            id: evt.target.id,
            type: 'checkbox',
            title: $(section).siblings('.title').text()
        }
    });
}

export function handleInputChange(evt) {
    let section = evt.target.closest('.role');

    this.props.handleFormUpdate({
        [evt.target.id]: {
            value: evt.target.value,
            label: evt.target.labels[0].textContent || evt.target.labels[0].title,
            id: evt.target.id,
            type: 'textfield',
            title: $(section).siblings('.title').text()
        }
    });
}