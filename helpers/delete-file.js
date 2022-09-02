const fs = require('fs');

const deleteFile =  (path) => {
    let result = {message: "success", status: 200};
    try{
        fs.accessSync(path); // check if file exists
        fs.unlink(path, (err) => { // delete file
            if (err) throw err;
        });
        return result; // send success if deleted
    }catch(e){
        console.log("An error occured", e);
        result.message = e?.message; // track any error;
        result.status = 500;
        return result;
    }
};

module.exports = deleteFile;