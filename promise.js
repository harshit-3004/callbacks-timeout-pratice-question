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
    },1000)
   
}

function addItem(newItem){
    return new Promise(
        (resolve,reject) =>{
            setTimeout(() =>{
                items.push(newItem);
                let flag = true;
                if(flag){
                    resolve();
                }
                else{
                    reject("problem present");
                }
            },5000)

        }
    )
    
    
}
getItems();
addItem({stuName : "Chirag", rollNo : 13 , course : "CAM"}).then(getItems).catch(err=>console.log(err));
