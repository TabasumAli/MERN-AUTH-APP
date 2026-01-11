import jwt from 'jsonwebtoken';
import 'dotenv/config.js';
// export const userAuth = async (req, res, next) => {
//     const { token } = req.cookies;
//     if (!token) {
//         return res.status(401).json({ message: 'Authentication token missing' });
//     }
//     try {
//         const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
//         if (tokenDecoded.id) {
//             req.body.userId = tokenDecoded.id;
//         } else {
//             return res.status(401).json({ message: 'User is not Authorized!' });
//         }
//         next();

//     }
//     catch (error) {
//         console.log(error.message);
//         return res.status(401).json({ message: error.message });
//         return res.status(401).json({ message: 'Invalid authentication token' });
//     }

// };



export const userAuth = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: 'Authentication token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.id) {
            return res.status(401).json({ message: 'User is not authorized' });
        }

        // ✅ attach user to request safely
        req.user = { id: decoded.id };

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid authentication token' });
    }
};
