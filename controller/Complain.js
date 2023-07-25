const Complain= require("../models/Complain");
const createComplain = async (req, res) => {
  let file = req.file.filename
    try {
      const { email, complainumber, category, complainttype,nature,details,finalstatus,regdate,subcategory,state,notprocess,process,closed,updated,fullName } = req.body;
  
      // Check if the state already exists
    //   const existingState = await State.findOne({ name });
    //   if (existingState) {
    //     return res.status(400).send({ error: 'State already exists' });
    //   }
  
      const kuch = new Complain({email, complainumber, category, complainttype,nature,details,finalstatus,regdate,subcategory,state,file,notprocess,process,closed,updated,fullName });
      await kuch.save();
      res.status(201).send(
        {
          "state": state,
          "message": "Comlaint Successfully Created"
        }
      );
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const complaintswithEmail = async(req,res) =>{
    const { email } = req.query;
  
    try {
      const user = await Complain.find({ email: { $regex: email, $options: 'i' } });
      ;
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          status: "Failed",
          message: "User not found",
        });
      }
    } catch (error) {
      console.log(error); // Log the error for debugging
      res.status(500).json({
        status: "Failed",
        message: "Unable to fetch user data",
      });
    }
  
  }

  const allComplains = async(req,res) =>{
    try {
      // Retrieve all complaints from the database
      const complaints = await Complain.find();
      res.json(complaints);
    } catch (error) {
      console.error('Error fetching complaints:', error);
      res.status(500).json({ error: 'Internal server error' });
    }

  }

  const counting  = async(req,res) =>{
    try {
      const { email, notprocess } = req.body;
  
      // Find the user by email
      const user = await Complain.findOne({ email });
  
      if (!user) {
        return res.status(404).json({
          status: 'failed',
          message: 'User not found',
        });
      }
  
      // Update the user's data based on the received form data
      user.notprocess = notprocess;
      
      
      // Add more fields as needed
  
      // Save the updated user
      await user.save();
  
      return res.status(200).json({
        status: 'success',
        message: 'Data updated successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'failed',
        message: 'Internal server error',
      });
    }

  }

  const countingProcess  = async(req,res) =>{
    try {
      const { email, process, notprocess} = req.body;
  
      // Find the user by email
      const user = await Complain.findOne({ email });
  
      if (!user) {
        return res.status(404).json({
          status: 'failed',
          message: 'User not found',
        });
      }
  
      // Update the user's data based on the received form data
      user.notprocess = notprocess;
      user.process = process;
      
      
      
      // Add more fields as needed
  
      // Save the updated user
      await user.save();
  
      return res.status(200).json({
        status: 'success',
        message: 'Data updated successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'failed',
        message: 'Internal server error',
      });
    }

  }


  const countingClose  = async(req,res) =>{
    try {
      const { email, process, closed} = req.body;
  
      // Find the user by email
      const user = await Complain.findOne({ email });
  
      if (!user) {
        return res.status(404).json({
          status: 'failed',
          message: 'User not found',
        });
      }
  
      // Update the user's data based on the received form data
      user.closed = closed;
      user.process = process;
      
      
      
      // Add more fields as needed
  
      // Save the updated user
      await user.save();
  
      return res.status(200).json({
        status: 'success',
        message: 'Data updated successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'failed',
        message: 'Internal server error',
      });
    }

  }

  const updatewithnumber  = async(req,res) =>{
    try {
      const { complainumber,updated,finalstatus } = req.body;
  
      // Find the user by email
      const user = await Complain.findOne({ complainumber });
  
      if (!user) {
        return res.status(404).json({
          status: 'failed',
          message: 'User not found',
        });
      }
  
      // Update the user's data based on the received form data
      user.updated = updated;
      user.finalstatus = finalstatus
      
      
      // Add more fields as needed
  
      // Save the updated user
      await user.save();
  
      return res.status(200).json({
        status: 'success',
        message: 'Data updated successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'failed',
        message: 'Internal server error',
      });
    }

  }
  

  module.exports = {createComplain,complaintswithEmail,counting,allComplains,countingProcess,updatewithnumber,countingClose};