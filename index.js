const pageIndex = document.getElementById('indexPage')
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const page3 = document.getElementById('page3')
const page4 = document.getElementById('page4')
const pageSuccess = document.getElementById('pageSuccess')

/*-------------- BT START --------------*/
function success(){
    page1.style.display = "flex"
    pageIndex.style.display = "none"
}

function back1(){
    pageIndex.style.display =  "flex"
    page1.style.display = "none"
}

function next(){
    pageSuccess.style.display = "flex"
    page1.style.display = "none"
}

function back2(){
    pageIndex.style.display = "none"
    page1.style.display = "flex"
    pageSuccess.style.display = "none"
}
/*-------------- BT END ---------------*/

/*-------------- TERSERAH START --------------*/
function dangger(){
    pageIndex.style.display = "none"
    page2.style.display = "flex"
}

function  back3(){
    page2.style.display = "none"
    pageIndex.style.display = "flex"
}

function terserah(){
    page3.style.display = "flex"
    page2.style.display = "none"
}

function back4(){
    page3.style.display = "none"
    page2.style.display = "flex"
}

function iyah(){
    page4.style.display = "flex"
    page3.style.display = "none"
}

function back5(){
    page3.style.display = "flex"
    page4.style.display = "none"
}