var value1 ;
var value2 ;
var operation = "add";
function setText(value){
    var textbox = document.getElementById('textbox');
    var text = textbox.value;
    console.log(text);
    text = text + value;
    textbox.value = text;
    console.log(textbox.value);
}

function clr(){
    document.getElementById('textbox').value=""
}

function add(){
    window.value1 = document.getElementById('textbox').value;
    console.log('add');
    window.operation="add";
    clr();

}
function sub(){
    window.value1 = document.getElementById('textbox').value;
    console.log('sub');
    window.operation="sub";
    clr();

}
function mul(){
    window.value1 = document.getElementById('textbox').value;
    console.log('mul');
    window.operation="mul";
    clr();

}
function div(){
    window.value1 = document.getElementById('textbox').value;
    console.log('div');
    window.operation="div";
    clr();

}

function result(){
    var textbox = document.getElementById('textbox');
    if(window.value1==='0' && window.value2==='0')
    {
        window.alert('Enter numbers')
        textbox.value = ""

    }
    else{
        window.value2 = document.getElementById('textbox').value;
        if(window.value2==''){
            window.alert('enter 2nd number')
        }
        else{
            if(operation==='add'){
                textbox.value = parseFloat(window.value1) + parseFloat(window.value2);
            }
            if(operation==='sub'){
                textbox.value = parseFloat(window.value1) - parseFloat(window.value2);
            }
            if(operation==='mul'){
                textbox.value = parseFloat(window.value1) * parseFloat(window.value2);
            }
            if(operation==='div'){
                textbox.value = parseFloat(window.value1) / parseFloat(window.value2);
            }
        }
    }
    
}