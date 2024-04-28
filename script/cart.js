let data = JSON.parse(localStorage.getItem("valuee"))

let container = document.getElementById("container")
function display(data){

    data.forEach(function(ele,i){
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
        btn.textContent = "remove"
        btn.addEventListener("click", function(ele,i){
            remove()
        })
        first.append(div,p1,p2,p3,p4 , btn)
        container.append(first)

    })
    
}



function remove(ele,i){
    ele.splice(i,1)
}


display(data)




        

    




