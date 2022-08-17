module.exports = (err, req, res, next) => {
    console.log("Error: ", err);
    if(err){
        return res.status(500).send(err);
    }
    next();
}