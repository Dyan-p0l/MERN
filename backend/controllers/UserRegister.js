import User from '../models/Users.js';
import bcrypt from 'bcrypt';

const registerUser = async (req, res) => {
    const {email, name, password} = req.body;

    try{

        const emailExist = await User.findOne({email});

        if (!email || !name || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (emailExist) return res.status(400).json({message: 'User already exists'});

        const newUser = new User({
            email,
            name,
            password
        });

        await newUser.save();
        
        return res.status(201).json({message: 'User registered successfully', 
            user: {
                name: newUser.name, 
                email: newUser.email, 
                _id: newUser._id
            }
        });
        
    }catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export default registerUser;