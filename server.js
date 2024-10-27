const express = require('express')
var axios = require("axios")
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});



app.get('/searchword', (req, res) => {
    // res.send('Hello World!')
    console.log(req.query)

    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/theme/',
        params: { entry: req.query.entry },
        headers: {
            'x-rapidapi-key': 'ccc920a011mshbbfd509501c758cp116731jsn9023124c2ea6',
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });

    // let response = {}
    // response.data = {
    //     entry: 'bye',
    //     request: 'bye',
    //     response: 'bye',
    //     theme: [
    //       'after', 'following',
    //       'next',  'close',
    //       'end',   'stop',
    //       'hello', 'welcome',
    //       'hi'
    //     ],
    //     version: '7.5.7',
    //     author: 'twinword inc.',
    //     email: 'help@twinword.com',
    //     result_code: '200',
    //     result_msg: 'Success'
    //   }
})

app.listen(port, () => {
    console.log(`App listening on port ${port} - http://localhost:3000`)
})