const express = require('express');
const deleteFile = require('./helpers/delete-file');
const PORT = 9000;
const app = express();

app.get('/', (req, res) => {
    const _delete = deleteFile('./assets/hello.txt'); // delete file
    const status = _delete.status || 500;
    const message  = _delete.message || "Something went wrong ⚡️";

    res.status(status).send({message});
});

app.listen(PORT, () => {
console.log('Server running***** at port: ' + PORT);
});

