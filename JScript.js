var activeBtn = "";
var btn1Txt = `
<p class="para">
This is the first button. <br>
Contains instructions about this test task. <br> 
Press button2 for more information. <br>
</p>
`;

var btn2Txt = `
<p class="para">
You presed the second button. <br>
If you press the button again, you can see that the content is collapsable. <br>
Try pressing button 3 for even more information. <br>
</p>
`;

var btn3Txt = `
<p class="para">
You presed the third button. <br>
You can see that the tabs are collapsable,
but you can also notice, <br>
that the <br> height  <br> is  <br> adjusted <br> accordingly <br> to <br> it's <br> content. <br>
That's pretty cool. Click on button 4 to see something else. 
</p>
`;
var btn4Txt = `
<p class="para">
Button Number 4 <br>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1024px-Left_side_of_Flying_Pigeon.jpg'>
This is just an image of a bicycle. <br>
This also, is the last tab. <br> 
End of review. <br>
<i>(Hover on image)</i>
</p>
`;

function showContent(id){
    var SelectedId = id;
    
    if(activeBtn==SelectedId)
    {   //same button pressed - hide it + reset btn colors and remove content
        clearActiveButton(activeBtn); 
        activeBtn = "";
    }
    else
    {   //first time click on button or first time click on other button
        if(activeBtn!="" && activeBtn!=SelectedId) {
            clearActiveButton(activeBtn);
            activeBtn="";
        }
        switch (SelectedId) {
            case "b1":
                fillContent(SelectedId,"#003366","white",btn1Txt);
            break;
            case "b2":
                fillContent(SelectedId,"#003366","white",btn2Txt);
            break;
            case "b3":
                fillContent(SelectedId,"#003366","white",btn3Txt);
            break;
            case "b4":
                fillContent(SelectedId,"#003366","white",btn4Txt);
            break;
          }
    }
}

function fillContent(currID,backcolor,forecolor,btntxt,height){
    document.getElementById(currID).style.backgroundColor = backcolor;
    document.getElementById(currID).style.color = forecolor;
    document.getElementById("content").style.backgroundColor = backcolor;
    document.getElementById("content").style.color = forecolor;
    document.getElementById("content").style.height = "fit-content";
    document.getElementById("content").style.transition = "0.5s";
    document.getElementById("content").innerHTML = btntxt;   
    activeBtn = currID;    
}

function clearActiveButton(act)
{
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").style.backgroundColor = "";
    document.getElementById("content").style.color = ""; 
    document.getElementById("content").style.height = "";
    document.getElementById("content").style.transition = "0.5s";
    document.getElementById(act).style.backgroundColor = "";
    document.getElementById(act).style.color = "";
}