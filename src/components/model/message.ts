import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
    fname: {
        type: String,
        required: [true, 'First name is required'],
    },
    lname: {
        type: String,
        required: [true, 'First name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true, // Ensure email is unique
        lowercase: true, // Convert email to lowercase
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Email format validation
    },
    contact: {
        type: String,
        required: [true, 'Contact is required'],
        trim: true,
        validate: {
            validator: function (value: any) {
                // Check if the value is a number
                return /^[0-9]+$/.test(value);
            },
            message: 'Contact must contain only numbers',
        },
        minlength: [11, 'Contact must be exactly 11 digits'],
        maxlength: [11, 'Contact must be exactly 11 digits'],
    },
    company: {
        type: String,
        required: [false, 'Company is required'],
        trim: true,
        unique: true, // Ensure username is unique
    },
    role: {
        type: String,
        required: [false, 'Blog name is required'],
        trim: true,
    },
    product: {
        type: String,
        required: [true, 'Blog category is required'],
        trim: true,
    },
    project: {
        type: String,
        required: [true, 'Blog description is required'],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
