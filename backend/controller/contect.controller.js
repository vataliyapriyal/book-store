import Contact from "../model/contect.model.js";

export const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const createdContact = new Contact({
            name: name,
            email: email,
            message: message
        });
        await createdContact.save();
        res.status(201).json({
            message: "Message sent successfully", contact: {
                _id: createdContact._id,
                name: createdContact.name,
                email: createdContact.email
            }
        });
    } catch (error) {
        console.log("error : " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
