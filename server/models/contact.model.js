import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Inquiry", "Sales"]
    },
    query: {
        type: String,
        required: true,
    },
    attachment: {
        type: String
    }
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact