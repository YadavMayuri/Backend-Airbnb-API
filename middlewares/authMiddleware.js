import Users from "../modals/UsersModal.js"
import encrypt from "encryptjs";


export const registrationCheck = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name) return res.send("Name is required - middleware");
        if (!email) return res.send("Email is requierd - middleware");
        if (!password) return res.send("Password is requierd - middleware");

        if (password.length < 8) {
            return res.send("Password length is less than 8 !")
        }

        const response = await Users.find({ email: email }).exec();
        console.log(response, "response")
        if (response.length) {
            return res.send("Email already exist or You are already resgistered!");
        }
        next();

    } catch (error) {
        return res.send(error)
    }
}



export const CheckvalidUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email) return res.send("email is requierd! - middleware");
        if (!password) return res.send("password is requierd! - middleware");
        const user = await Users.find({ email }).exec();
        var secretkey = 'ios';
       
        var decipherPassword = encrypt.decrypt(user[0].password, secretkey, 256);
    
        if (decipherPassword == password) {
            next();
        } else {
            return res.send("Password not matched. - Middleware")
        }


    } catch (error) {
        res.send(error)
    }
}