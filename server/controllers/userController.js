import UserModel from "../models/userModel.js";


export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await UserModel.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


