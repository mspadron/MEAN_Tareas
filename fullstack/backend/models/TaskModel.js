import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required: [true, "Complete este campo"]
        },
        description: {
            type:String,
            required: [true, "Complete este campo"]
        },
        dueDate: {
            type:Date,
            required: [true, "Complete este campo"]
        },
        status: {
            type:Boolean,
            required: [true, "Complete este campo"]
        }

    },
    {
        timestamps:true,
        versionKey: false
    }
);

export const TaskModel = mongoose.model("Task", taskSchema)