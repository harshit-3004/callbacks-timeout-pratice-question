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
    items.forEach((student) =>{
        console.log(student);
    })
}

function addItem(newItem,callback){
    items.push(newItem);
    getItems();
}

addItem({stuName : "Chirag", rollNo : 13 , course : "CAM"},getItems);
