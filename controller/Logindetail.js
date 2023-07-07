const State = require("../models/Logindetail");
const createLogindetail = async (req, res) => {
    try {
      const { email, logintime, logouttime, status } = req.body;
  
      // Check if the state already exists
    //   const existingState = await State.findOne({ name });
    //   if (existingState) {
    //     return res.status(400).send({ error: 'State already exists' });
    //   }
  
      const state = new State({ email, logintime, logouttime, status });
      await state.save();
      res.status(201).send(
        {
          "state": state,
          "message": "Login Detail Added Successfully"
        }
      );
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const getAllLoginDetails = async (req, res) => {
    try {
      const states = await State.find();
      res.send({
        "login": states,
        "message": "Login Detail Fetch Successfully"
  
      })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const updateStateByEmail = async (req, res) => {
    try {
      const { email, logouttime } = req.body;
  
      // Find the state by email
      const state = await State.findOne({ email });
      if (!state) {
        return res.status(404).send({ error: 'State not found' });
      }
  
      // Update the fields
      
    
      state.logouttime= logouttime;
  
      // Save the updated state
      await state.save();
  
      res.status(200).send({
        state,
        message: 'State updated successfully',
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  

  module.exports = { createLogindetail,getAllLoginDetails,updateStateByEmail};