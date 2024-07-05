

let submitButton = document.getElementById('submitButton')
let meaning = document.getElementById('word')
let input = document.getElementById('input')
let clearAll = document.getElementById('clearAll')
var phonetic = document.getElementById('Example')
var meaning_1 = document.getElementById('meaning1')
let Definition_1 = document.getElementById('Definition')
let voice1 = document.getElementById('voice')
let loading_wrapper = document.getElementById('wrappper')



var inputVariable
input.addEventListener('input', function (e) {
    inputVariable = e.target.value


})


function clear(){
    inputVariable
}
input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        if (inputVariable !== undefined && inputVariable !== null && inputVariable !== '') {
            getdatafromBackend(inputVariable)
            getfromBackend()
        } else {
            alert('Input a Word')
        }

    }


})


function clear() {
    if (inputVariable !== undefined && inputVariable !== null && inputVariable !== '') {
        meaning.innerText = ''
        input.value = ''
        phonetic.innerText = ''
        Definition_1.innerText = ''
        voice1.src = ''
    } else {
        alert('Nothing to clear')
    } {

    }
}

clearAll.addEventListener('click', clear)

let loading ;


function loader(){
    loading = true
    console.log(loading)
    if(loading){
        loading_wrapper.className= 'show'
    }
   
}
function unloader(){
    loading = false;
    console.log(loading)
    if(loading===false){
        loading_wrapper.className= 'hide'
    }

}


submitButton.addEventListener('click', function () {
    if (inputVariable !== undefined && inputVariable !== null && inputVariable !== '') {
        clear()
        loader()
        fetcher(inputVariable)
        
    } else {
        alert('Input a Word')
    }

})



const fetcher=async(inputVariable)=>{


    try{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputVariable}`)
    
        if(!response.ok){
            throw new Error(response.status)
        }
    const responsedata = await response.json()
        word.append(responsedata[0].word)
        Definition_1.append(responsedata[0].meanings[0].definitions[0].definition)
        phonetic.append(responsedata[0].phonetic)
         voice1.src =responsedata[0].phonetics[0].audio
         
         unloader()
        
    
    }catch(e){
        if(e.message==='404'){
            alert('word not found !')
            unloader()
        }
     
    }
    
}





