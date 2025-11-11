const {StatusCodes} = require("http-status-codes")

const info = (req, resp) => {
    return resp.status(StatusCodes.OK).json({
        success:true,
        msg: "running nicely",

    })
}
module.exports = {
    info
};