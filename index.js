var op1=null;
var op2=null;
var op=null;
var res=0;
document.getElementById('keypad').onclick = function(event){
    var c=event.target;
    var b=event.target.className;
    if(c.id=='keypad'||c.id=='row1'||c.id=='row2'||c.id=='row3') return;
    c=c.innerText;
    if(c=='AC')
    {
        document.getElementById('output-screen').innerText=0;
        op1=null;
        op2=null;
        op=null;
    }
    else if(op1==null)
    {
        if(b!='btn'&&b!='btn0')
        {
            document.getElementById('output-screen').innerText="Please first enter number";
        }
        else 
        {
            op1=c;
            document.getElementById('output-screen').innerText=op1;
        }
    }
    else if(b!='btn'&&b!='btn0'&&c!='=')
    {
        if(c=='+/-')
        {
            op1=-op1;
            document.getElementById('output-screen').innerText=op1;
        }
        else 
        {
            op=c;
            document.getElementById('output-screen').innerText=op1+op;
        }
    }
    else if(c!='=')
    {
        if(op!=null)
        {
            if(op2==null) op2=c;
            else
            op2=op2+c;
            document.getElementById('output-screen').innerText=op1+op+op2;
        }
        else 
        {
            op1=op1+c;
            document.getElementById('output-screen').innerText=op1;
        }
        
    }
    else 
    {
        res=eval(op1+op+op2);
        document.getElementById('output-screen').innerText=res;
        op1=res;
        op2=null;
        op=null;
    }
}
