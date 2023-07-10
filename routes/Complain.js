const express= require ("express")
const router = express.Router();
const {createComplain} = require("../controller/Complain");
const multer  = require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'complaints/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = file.originalname.split('.').pop();
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
    },
  });
  const uploads = multer({ storage: storage });





// router.get('/getSub',getAllSub)
router.post('/createComplain',uploads.single('file'),createComplain)
// router.delete('/deleteSub/:id',deleteSub)
// router.put('/updateSub/:id',updateSub)



module.exports = router;