export function handleChange(e) {
    let tag = e.target;
    let value = tag.type === 'checkbox' ? tag.checked : tag.value;
    let name = tag.name;
    this.setState({
        [name]: value,
    });
}

export function extractObject(obj) {
    let res = '';
    for(let i in obj) {
        if(res) {
            res += `&${i}=${obj[i]}`;
        } else {
            res = `${i}=${obj[i]}`;
        }
    }
    return res;
}