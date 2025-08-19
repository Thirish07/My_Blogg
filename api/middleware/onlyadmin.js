// import jwt from 'jsonwebtoken'
// export const onlyadmin = async (req, res, next) => {
//     try {
//         const token = req.cookies.access_token
//         if (!token) {
//             return next(403, 'Unathorized')
//         }
//         const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
//         if (decodeToken.role === 'admin') {
//             req.user = decodeToken
//             next()
//         } else {
//             return next(403, 'Unathorized')
//         }
//     } catch (error) {
//         next(500, error.message)
//     }
// }

// import jwt from 'jsonwebtoken'

// export const onlyadmin = async (req, res, next) => {
//     try {
//         let token = req.cookies?.access_token;

//         // also check Authorization header
//         if (!token && req.headers.authorization) {
//             token = req.headers.authorization.split(" ")[1];
//         }

//         if (!token) {
//             return res.status(403).json({ message: "Unauthorized - No token provided" });
//         }

//         const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

//         if (decodeToken.role === 'admin') {
//             req.user = decodeToken;
//             next();
//         } else {
//             return res.status(403).json({ message: "Unauthorized - Admin only" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
import jwt from 'jsonwebtoken';

export const onlyadmin = (req, res, next) => {
    try {
        // 1️⃣ Get token from cookie
        let token = req.cookies?.access_token;

        // 2️⃣ If not in cookie, check Authorization header
        if (!token && req.headers.authorization) {
            // Expect header: "Authorization: Bearer <token>"
            token = req.headers.authorization.split(" ")[1];
        }

        // 3️⃣ If no token at all, block request
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        // 4️⃣ Verify token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // 5️⃣ Check if user is admin
        if (decodedToken.role !== 'admin') {
            return res.status(403).json({ message: "Unauthorized - Admin only" });
        }

        // 6️⃣ Attach user info to request and continue
        req.user = decodedToken;
        next();

    } catch (error) {
        // Handle invalid or expired token
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired, please login again" });
        }
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        }

        // Generic server error
        res.status(500).json({ message: error.message });
    }
};
