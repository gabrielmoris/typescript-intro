interface Artist {
    name: string;
    category: "artist";
}

interface Album {
    name: string;
    artistName: string;
    category: "album";
}

const artists: Artist[] = [
    {
        name: "Madonna",
        category: "artist",
    },
    {
        name: "Led Zeppelin",
        category: "artist",
    },
    {
        name: "Earth, Wind, and Fire",
        category: "artist",
    },
];

let albums: Album[] = [
    {
        name: "Like a Virgin",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Like a Prayer",
        artistName: "Madonna",
        category: "album",
    },
    {
        name: "Houses of the Holy",
        artistName: "Led Zeppelin",
        category: "album",
    },
    {
        name: "In Through the Out Door",
        artistName: "Led Zeppelin",
        category: "album",
    },
];
//FIRST EXERCISE
function extractName(obj: { name: string }): string {
    return obj.name;
}
//SECOND EXERCISE
function getAlbumsByArtistName(nameOfArtist: string): Album[] {
    let array: Album[] = [];
    for (let l = 0; l < albums.length; l++) {
        if (nameOfArtist === albums[l].artistName) {
            array.push(albums[l]);
        }
    }
    return array;
}
//THIRD EXERCISE
function getArtistAndAlbumsByArtistName(string: string): (Album | Artist)[] {
    let array: (Album | Artist)[] = [];
    for (let j = 0; j < artists.length; j++) {
        if (string === artists[j].name) {
            array.push(artists[j]);
        }
    }
    for (let k = 0; k < albums.length; k++) {
        if(string===albums[k].artistName){
            array.push(albums[k]);
        }
    }
    return array;
}
//FOURTH EXERCISE

function getArtistWithAlbumNames(arg:(Album|Artist)[]): object{
    let newObj:{name:string, category:"artist", albumNames:string[]}={name:"",category:"artist", albumNames:[]}
    arg.forEach((e)=>{
        if (e.category==="artist"){
            newObj.name = e.name;
        }else{
            newObj.albumNames.push(e.name)
        }
    })
    return newObj
}
//BONUS
// function extractNames(arg1:any,arg2:any):string[]{
//     let arr:[]=[]
//     if(typeof arg1 === typeof arg2){

//         return arr
//     }else{
//         return
        
//     }
// }
//SOLUTION
for (let i = 0; i < artists.length; i++) {
    getAlbumsByArtistName(extractName(artists[i]));
}
