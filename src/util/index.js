export function handleChange(e) {
    let tag = e.target;
    let value = tag.type === 'checkbox' ? tag.checked : tag.value;
    this.setState({
        value,
    });
}