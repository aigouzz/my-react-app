export function handleChange(e) {
    let tag = e.target;
    let value = tag.type === 'checkbox' ? tag.checked : tag.value;
    let name = tag.name;
    this.setState({
        [name]: value,
    });
}