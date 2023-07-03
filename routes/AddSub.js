const express= require ("express")
const router = express.Router();
const {getAllSub, createSub,deleteSub,updateSub} = require("../controller/AddSub.js");









router.get('/getSub',getAllSub)
router.post('/addSub',createSub)
router.delete('/deleteSub/:id',deleteSub)
router.put('/updateSub/:id',updateSub)



module.exports = router;