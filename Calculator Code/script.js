document.querySelector(".buttons").onclick=function(){
   let oper=["+","-","/","*","."];
   let target=event.target
    let value = ""
    let input = document.querySelector("#exp");
   if(target.className =="number"){
    
     if(input.value =="0"){
        input.value=value;
         input.value+=target.innerHTML;
         }
    else{
        input.value+=target.innerHTML
    }
    }else if(target.className=="operation"){
        let exp=input.value
        let lastChar=exp[exp.length-1]   
        value=target.innerHTML;
        if(oper.indexOf(lastChar)!=-1){
            exp=exp.replace(/.$/,value);
            input.value=exp;
        } else{
            input.value+=value;
        }
    }else if(target.className=="calculation"){
        
        let result=eval(input.value);
        input.value=result;

    } else if(target.className=="clear"){
        input.value="0"
    }else if(target.className=="clear_one"){
        input.value=input.value.substring(0,input.value.length-1);
        if(input.value.length==0){
            input.value="0";
        }
    }
    
} 


