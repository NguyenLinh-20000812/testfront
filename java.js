
// js cho chuyển động hình ảnh
const imgPosition=document.querySelectorAll(".nav-contain img")
    const imgContainer=document.querySelector('.nav-contain')
    const naviItem=document.querySelectorAll(".navi")
    let imgnumber=imgPosition.length
    let index=0 
    imgPosition.forEach(function(image,index){
        image.style.left=index*100+"%"
        naviItem[index].addEventListener("click",function(){
            nav (index)
        })
    })
    function imgSlide(){
        index++;
        if(index>=imgnumber){  // n sẽ quay lại hình đầu
            index=0
        }
        nav(index)
    
    }
    function nav(index){
        imgContainer.style.left="-" +index*100+"%"  // chạy hình 
        const naviActive=document.querySelector('.active')
        naviActive.classList.remove('active')
        naviItem[index].classList.add("active")// chạy dấu chấm đen theo hình 
    }
    setInterval(imgSlide,5000)

    // js cho header khi cuộn
const header=document.querySelector("header")
window.addEventListener("scroll",function(){
     X = window.pageYOffset
    if(X>0){header.classList.add("active")}
    else{
        header.classList.remove("active")
    }
})
// product
const baoquan=document.querySelector(".baoquan")
const chitiet=document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".infor-chitiet").style.display="none"
        document.querySelector(".infor-baoquan").style.display="block"
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".infor-chitiet").style.display="block"
        document.querySelector(".infor-baoquan").style.display="none"
    })
}
const button=document.querySelector(".infor")
if (button){
    button.addEventListener("click",function(){
        document.querySelector(".infor-big").classList.toggle("activeB")
    })
}
// hiệu ứng hình ảnh
const bigImg=document.querySelector(".product-contain-left-imgbig img")
const smallImg=document.querySelectorAll(".product-contain-left-imgsmall img")
smallImg.forEach(function(imgItem,X){
imgItem.addEventListener("click",function(){
    bigImg.src=imgItem.src
})
})