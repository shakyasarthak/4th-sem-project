import {Schema, model, models} from 'mongoose';

const studentSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const studentModel = models.Student || model('Student', studentSchema);

export default studentModel;