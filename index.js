let express = require('express');
let app = express();
let path = require('path');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'/ideate.html'));
});
app.listen(3000);