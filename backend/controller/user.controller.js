import User from "../model/use.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "user already exists" })
        }
        const hashPassword = await bcryptjs.hash(password, 10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        })
        await createdUser.save()
        res.status(201).json({
            message: "user created succesfully ", user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            }
        });
    } catch (error) {
        console.log("error : " + error.message);
        res.status(500).json({ message: "internal server error" });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Check if the password matches
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Send success response
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
        console.log("error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}