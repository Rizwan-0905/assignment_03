const mongoose = require("mongoose")

const EducationSchema = mongoose.Schema(
    {
        institute: {
            type: String,
            required: true,
            trim: true

        },
        Start: {
            type: Number,
            min: 1960,
            required:true
        },
        End: {
            type: Number,
            min: 1960,
            required:true
        },
        Grade: {
            type: Number,
            min:0
        }
    }

)

module.exports=mongoose.model('Education',EducationSchema)