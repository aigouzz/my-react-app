let express = require('express')
let app = express()
let bodyParser = require('body-parser')

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
    let json = {
        status: 200,
        message: '收到了，ok',
        data: {
            type: 'get',
            name: 'success'
        }
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

app.listen('3001', (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`启动成功，地址:http://127.0.0.1:3001`)
    }
})