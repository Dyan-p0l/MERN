import User  from "../models/Users.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({message: 'Incorrect password'});
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        name: user.name,
        email: user.email,
        _id: user._id,
      }
    });

};

export default loginUser;