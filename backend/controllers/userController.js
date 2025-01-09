import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  //   res.json({ msg: 'login API working' });

  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: 'User does not exist' });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
      return;
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
      return;
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
    return;
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking if user already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      res.json({ success: false, message: 'User already exists' });
      return;
    }

    // validating email format and password
    if (!validator.isEmail(email)) {
      res.json({ success: false, message: 'Please enter a valid email' });
      return;
    }
    if (password.length < 8) {
      res.json({ success: false, message: 'Please enter a string password' });
      return;
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: 'invalid credentials' });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
