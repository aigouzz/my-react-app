let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let _ = require('lodash')
let port = process.env.NODE_ENV === 'production' ? 3002 : 3001

app.use(bodyParser.urlencoded({
    extended: false,
}))

app.use(bodyParser.json())

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'content-type, with-credentials');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    if(req.method.toLowerCase() === 'options') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/home/search', (req, res) => {
    console.log(req.query);
    const resArray = [
        {
            id: 2001,
            title: '你是一切-郑源'
        },
        {
            id: 2002,
            title: '演员-薛之谦'
        },
        {
            id: 2003,
            title: '夜曲-周杰伦'
        },
        {
            id: 2004,
            title: '泡沫-邓紫棋'
        },
        {
            id: 2005,
            title: '冻结-林俊杰'
        }
    ];
    let random = Math.floor(Math.random() * resArray.length);
    random = random === 0 ? 1 : random;
    let json = {
        message: '收到了，ok',
        list: _.shuffle(resArray).slice(0, random)
    }
    res.send(JSON.stringify(json))
});
app.post('/home/page', (req, res) => {
    console.log(req.body)
    let result = {
        message: '请求homepage成功',
        list: [
            {
                id: 1001,
                title: '体育',
                href: '/sport'
            },
            {
                id: 1002,
                title: '新闻',
                href: '/news'
            },
            {
                id: 1003,
                title: '时尚',
                href: '/fashion'
            },
        ],
    };
    res.send(JSON.stringify(result));
})

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`启动成功，地址:http://127.0.0.1:${port}`)
    }
})