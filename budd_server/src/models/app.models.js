import mongoose, { Schema } from 'mongoose';

const appSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    isConnected: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export const App = mongoose.model('App', appSchema)