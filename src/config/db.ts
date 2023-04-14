import mongoose, { connect } from 'mongoose'

function connects() {
    return connect('mongodb://localhost:27017/user')
        .then(() => {
            console.log("Connected to db");
        }).catch((err: any) => {
            console.log(err)
        })
}

export default connects;