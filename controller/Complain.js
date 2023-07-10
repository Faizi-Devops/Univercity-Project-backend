const Complain= require("../models/Complain");
const createComplain = async (req, res) => {
  let file = req.file.filename
    try {
      const { email, complainumber, category, complainttype,nature,details,finalstatus,regdate,subcategory,state,notprocess,process,closed,updated } = req.body;
  
      // Check if the state already exists
    //   const existingState = await State.findOne({ name });
    //   if (existingState) {
    //     return res.status(400).send({ error: 'State already exists' });
    //   }
  
      const kuch = new Complain({email, complainumber, category, complainttype,nature,details,finalstatus,regdate,subcategory,state,file,notprocess,process,closed,updated });
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

  module.exports = {createComplain};