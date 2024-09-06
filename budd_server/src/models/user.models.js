import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    ownedWorkspaces: [ 
        {
            type: Schema.Types.ObjectId,
            ref: "Workspace"
        },
    ],
    memberWorkspaces: [ 
        {
            type: Schema.Types.ObjectId,
            ref: "Workspace"
        },
    ],
    avatar: {
        type: String,
    },
    refreshToken: {
        type: String,
        unique: true,
    },
    org_profession: {
        type: String
    },
    org_company: {
        type: String
    },
    social_signup: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

userSchema.pre('save')

export const User = mongoose.model('User', userSchema)