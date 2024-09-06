import mongoose, { Schema } from 'mongoose';


const workspaceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    marketplace: [
        {
            type: Schema.Types.ObjectId,
            ref: "App"
        }
    ],
    files: [
        {
            type: Schema.Types.ObjectId,
            ref: "File"
        }
    ],
}, { timestamps: true })

export const Workspace = mongoose.model('Workspace', workspaceSchema)