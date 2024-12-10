var c=0
var lists = document.querySelector(".lists")
function add(){
    var dep=Number(document.querySelector(".deposit").value)
    var Ac_num =Number(document.querySelector(".Ac_num").value)
    var list1 = document.createElement("div")
    c=c+dep
    list1.innerHTML=`<span>No.</span><span>${Ac_num}</span><span>${dep}</span><span>${c}</span>`
    lists.appendChild(list1)
    var val0 = document.querySelector(".Amount0")
    var val1 = document.querySelector(".Amount1")
    var val2 = document.querySelector(".Amount2")
    var val3 = document.querySelector(".Amount3")
    val0.innerHTML=c
    val1.innerHTML=c
    val2.innerHTML=c
    val3.innerHTML=c
    
}

function sub(){
    var wth =Number(document.querySelector(".Withdraw").value)
        var Ac_num =Number(document.querySelector(".Ac_num").value)
    var list2 = document.createElement("div")
    c=c-wth
    list2.innerHTML=`<span>No.</span><span>${Ac_num}</span><span>${wth}</span><span>${c}</span>`
    lists.appendChild(list2)
    var val0 = document.querySelector(".Amount0")
    var val1 = document.querySelector(".Amount1")
    var val2 = document.querySelector(".Amount2")
    var val3 = document.querySelector(".Amount3")
    val0.innerHTML=c
    val1.innerHTML=c
    val2.innerHTML=c
    val3.innerHTML=c
}

