import mongoose, { Schema } from 'mongoose';

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    description: {
        type: String,
        trim: true,
    },
    metadata: {
        original_name: {
            type: String,
            required: true
        },
        mime_type: {
            type: String,
            required: true,
        },
        upload_date: {
            type: Date,
            default: Date.now 
        }
    },
    file_type: {
        type: String,
        required: true,
        enum: ['image', 'video', 'audio', 'document', 'spreadsheet', 'presentation', 'code', 'archive']
    },
    file_size: {
        type: Number,
        required: true,
        min: 1,
        validate: {
            validator: function(v) {
                return v <= 10*1024*1024;
            },
            message: props => `${props.value} exceeds the file size limit of 10MB!`
        },
    },
    download_link: { // cloudinary link
        type: String
    },
    isPartOf: {
        type: Schema.Types.ObjectId,
        ref: 'Workspace',
        required: true
    },

}, { timestamps: true })

export const File = mongoose.model('File', fileSchema)