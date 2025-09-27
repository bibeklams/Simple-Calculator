const express=require('express');
const app=express();
const port=3001;

app.set('view engine','ejs');
app.set('views ','views');

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  res.render('index',{result:null});
});
app.post('/calculator',(req,res)=>{
  const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    const operator=req.body.operator;
    let result;
    switch(operator){
      case '+':
        result=num1+num2;
        break;
        case '-':
          result=num1-num2;
          break;
           case '*':
          result=num1*num2;
          break;
           case '/':
          result=num1/num2;
          break;
          default:
            result='Invalid Number';
    }
    res.render('index',{result:result});
});
app.listen(port,()=>{
  console.log(`server is running at http:localhost:${port}`);
});