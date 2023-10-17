import UserModel from "~/server/models/User";

export default defineEventHandler(async(event) => {
    try {
        const users = await UserModel.find();
        return users
    } catch (error) {
        console.log(error);
    }
})