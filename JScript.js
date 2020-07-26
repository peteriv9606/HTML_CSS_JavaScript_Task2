var activeBtn = "";

function showC(paraid){
    //check if same button is clicked and if so - stop function execution
    if(activeBtn == paraid){
        document.getElementById(paraid).style.display = "none";
        activeBtn = "";
        return 0;
    }
    //hide all paragraphs - do this to hide previously selected paragraph, if not clicked on the same one
    var i=1;
    while(document.getElementById('p'+i))
    {
        document.getElementById('p'+i).style.display = "none";
        i++;
    }
    //make desired paragraph visible, or if no paragraph is existing - display an error message
    if(document.getElementById(paraid)){
        activeBtn = paraid;
        document.getElementById(paraid).style.display = "block";
    }else
    alert("No paragraph to show!");
}

function addTab(){
    var i=1;
    while(document.getElementById('p'+i))
    {
        i++;
        if(!document.getElementById('p'+i)){
            alert("a"+ i + " - not existing\n"+"p"+ i + " - not existing"); 
        }
    }
    //document.getElementById("customTab").id = ""
}