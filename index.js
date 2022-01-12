const express = require('express')
const path = require('path')
const app = express()

//app.use(express.static(__dirname + '/dist'));
app.use("/dist", express.static('./dist/'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/example', 'waveRecorder.html'))
    //res.sendFile('example/waveRecorder.html')
)
app.listen(3000, () => console.log('Example app listening on port 3000!'))