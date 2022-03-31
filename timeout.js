var items=[
    {
        stuName : "Harshit",
        rollNo : 11,
        course : "FSD",
    },
    {
        stuName : "Rohan",
        rollNo : 12,
        course : "CAD"
    },
    ]
    


function getItems(){
    setTimeout(() =>{
        items.forEach((student) =>{
        console.log(student);
    })
    },5000)
   
}

function addItem(newItem){
    setTimeout(() =>{
        items.push(newItem);
    },1000)
    
}
getItems();
addItem({stuName : "Chirag", rollNo : 13 , course : "CAM"});
