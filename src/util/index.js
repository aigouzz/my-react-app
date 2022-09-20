
export function handleChange (e) {
    let tag = e.target;
    let value = tag.type === 'checkbox' ? tag.checked : tag.value;
    let name = tag.name;
    this.props.onChange({
        name,
        value,
        title: this.props.list.title
    });
}

export function extractObject (obj) {
    let res = '';
    for (let i in obj) {
        if (res) {
            res += `&${i}=${obj[i]}`;
        } else {
            res = `${i}=${obj[i]}`;
        }
    }
    return res;
}

export function checkForm (data) {
    let reg1 = /^\w+$/g;
    if (data.user.value.match(reg1) && data.opinion.value.match(reg1) && data.isCheck.value) {
        return true;
    } else {
        return false;
    }
}

export function checkLogin (data) {
    let nameReg = /^\w{4,10}$/g;
    let passwordReg = /^\w{6,20}$/g;
    if (data.username.match(nameReg) && data.password.match(passwordReg)) {
        return true;
    } else {
        return false;
    }
}

export function debounce (fn, wait = 600) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.aaply(this, arguments);
        }, wait);
    }
}

export function throttle (fn, wait = 600) {
    let last = 0;
    // let timer = null;
    return function (...args) {
        let now = +new Date();
        let times = now - last;
        if (times > wait) {
            last = now;
            fn.apply(this, args);
        }
        // if(!timer) {
        //     timer = setTimeout(() => {
        //         fn.apply(this, args);
        //         timer = null;
        //     }, wait);
        // }
        // return false;
    }
}