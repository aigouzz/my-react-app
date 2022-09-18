
export function handleChange(e) {
    let tag = e.target;
    let value = tag.type === 'checkbox' ? tag.checked : tag.value;
    let name = tag.name;
    this.props.onChange({
        name,
        value,
        title: this.props.list.title
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

export function checkForm(data) {
    let reg1 = /^\w+$/g;
    if(data.user.value.match(reg1) && data.opinion.value.match(reg1) && data.isCheck.value) {
        return true;
    } else {
        return false;
    }
}

export function checkLogin(data) {
    let nameReg = /^\w{4,10}$/g;
    let passwordReg = /^\w{6,20}$/g;
    if(data.username.match(nameReg) && data.password.match(passwordReg)) {
        return true;
    } else {
        return false;
    }
}