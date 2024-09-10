import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'





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

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next()
    }
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPassCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model('User', userSchema)