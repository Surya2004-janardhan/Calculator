const textvalue = document.getElementById('textvalue');
// textvalue.value="clear this shit"
function clearDisplay(){
    textvalue.value='';
}

function deleteone(){
    // const du = textvalue.value;
    textvalue.value=textvalue.value.slice(0,-1);
}
function result(){

    try{
    textvalue.value=eval(textvalue.value)
    }
    catch(error){
        textvalue.value="Error"
    }
}
function gointo(element){
    textvalue.value=textvalue.value+element;
}