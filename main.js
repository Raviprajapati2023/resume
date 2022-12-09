function AddNewWeField(){
    // console.log('Namaste World')
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter your work exp')
    let weOb = document.getElementById('we');
    let weAddButton = document.getElementById('weAddButton');
    weOb.insertBefore(newNode,weAddButton)
}

function AddacadQualification(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Write your acadmic Qualification");
    let aqOb = document.getElementById('aq');
    let aqAddButton = document.getElementById('aqAddButton');
    aqOb.insertBefore(newNode,aqAddButton) ; 
}

//cv generate
function generateCV(){
    
    let nameField = document.getElementById('nameField').value ;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField ;

    // Direct Method
    document.getElementById('nameT2').innerHTML = nameField ;

    // let phone =  document.getElementById('phone').value ;
    // let contact1 = document.getElementById('contact1') ;
    // contact1.innerHTML = phone
    document.getElementById('contact1').innerHTML = document.getElementById('phone').value ;
    //address
    
    document.getElementById('addressT').innerHTML =  document.getElementById('Address').value ;
    document.getElementById('linkT').innerHTML =  document.getElementById('lField').value ;
    document.getElementById('instaT').innerHTML =  document.getElementById('inField').value ;

    // Objective set
    document.getElementById('objectTem').innerHTML =  document.getElementById('objectiveField').value ;

    // Work Experience
    let wes = document.getElementsByClassName('weField');

    let str =  "";
    for(let e of wes ){

        str = str+`<li>${e.value}</li>`
    }
    document.getElementById('weT').innerHTML = str ;

    // Acadmic Qualification 
    let eqs = document.getElementsByClassName('eqField') ;
    let str1 = "";
    for(let ed of eqs){
        str1 = str1+`<li>${ed.value}</li>` ;
    }

document.getElementById('aqT').innerHTML = str1 ;

// Code for setting Img
// let file = document.getElementById('imgField').files[0]
// console.log(file)
// let reader = new FileReader() ;
// reader.readAsDataURL(file) ;
// console.log(reader.result) ;

// set the image to template
// reader.onloadend = function(){
//     document.getElementById('imgTemplate').src =  reader.result ;
// }


document.getElementById('cvForm').style.display = 'none';
document.getElementById('cvTemplate').style.display = 'block';
}

// Printing Logic 

function printCV(){
    window.print
}