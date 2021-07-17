const img = document.querySelector("#img")
const input = document.querySelector("#img-input")

// initiaize File reader
const fileReader = new FileReader;
//fires off when image gets rendered
fileReader.onload = (e)=>{
    img.src = e.target.result
}

input.addEventListener('change',(e)=>{
    let fileList = e.target.files
    //check if file is selected or not)
    if(fileList.length === 1){
        let file = fileList[0]
        //star reading selected image
        fileReader.readAsDataURL(file)
    }else{
        img.src = "/default.jpg"
    }
})