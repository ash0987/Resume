console.log("running")

let arr=document.getElementById('use').getElementsByTagName('li')
console.log(arr)
for (i = 0; i < 5 ;i++ ){
    let elem=arr[i]
    elem.addEventListener('click',()=>{
        elem1=document.getElementById(elem.innerText.toLowerCase())
        y=elem1.offsetTop
        window.scrollTo(0,y)
        console.log(elem1)
    })
}