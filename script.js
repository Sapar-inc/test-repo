let desktop = [
    {
        name:"Folder 1",
        folders: [
                {name:"SubFolder 1"},
                {name:"SubFolder 2"},
                {name:"SubFolder 3"},
                ]
    },
    {
        name:"Folder 3",
        folders: [
                {name:"SubFolder 7"},
                {name:"SubFolder 8"},
                {name:"SubFolder 9"},
                ]
    },
]

function showParentFolderName(subfolderName){
    for(let i = 0; i < desktop.length; i++){
        for(let k = 0; k < desktop[i].folders.length;k++){
            if(subfolderName == desktop[i].folders[k].name){
                console.log(desktop[i].name)
            }
    }
}
}
showParentFolderName("SubFolder 9")

// console.log(desktop[0].folders.length)