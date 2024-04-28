async function data(gett){
    let url  = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${gett}`)
    let res = await url.json()
    console.log(res.data)
    display(res.data)

}

data()
let conatin = document.getElementById("container")
let arrr = JSON.parse(localStorage.getItem("valuee")) || []


function display(arr){
    conatin.innerHTML = ""
    arr.forEach(function(ele,i){
    

        let first = document.createElement("div")
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.image
        div.append(img)

        let p1 = document.createElement("p")
        p1.textContent = ele.title

        let p2 = document.createElement("p")
        p2.textContent = ele.category

        let p3 = document.createElement("p")
        p3.textContent = ele.brand

        let p4 = document.createElement("p")
        p4.textContent = ele.price

        let btn = document.createElement("button")
        btn.textContent = "Add to cart"

        btn.addEventListener("click",function(elee,i){
            localdata(ele,i)
        })


      
        first.append(div,p1,p2,p3,p4, btn)
        conatin.append(first)

    })
}

let filter = document.getElementById("filter")
filter.addEventListener("change",function(el){
    data(el.target.value)
})

function localdata(ele,i){
    arrr.push(ele)
    console.log(arrr)

    localStorage.setItem("valuee", JSON.stringify(arrr))

}


