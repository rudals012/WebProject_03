// main.js
/* 탑버튼 */
const topBtn = document.querySelector(".footer_inner>.btn_top");

topBtn.addEventListener("click" , e => {
    e.preventDefault();
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
});

/* 주메뉴 */
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll("nav.gnb>ul>li");
const blur = document.querySelector("#blur");

for(let i=0;i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener("mouseover" , e => {
        e.preventDefault();
        e.currentTarget.classList.add("on");
        var ht = e.currentTarget.children[1].offsetHeight;
        headerWrap.style.height = 64 + ht + 'px';
        blur.classList.add("active");

    });
    gnbMenu[i].addEventListener("mouseout" , e => {
        e.preventDefault();
        e.currentTarget.classList.remove("on");
        headerWrap.style.height = '64px';
        blur.classList.remove("active");
    });  
}

// 통합검색
const btnSrch = document.querySelector(".btn_srch");
const srchWrap = document.querySelector(".srch_wrap");
const lnlmall = document.querySelector("dl.topMenu>dd:first-of-type>a img");

btnSrch.addEventListener("click" , e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    srchWrap.classList.toggle("on");
    lnlmall.classList.toggle("on");
    blur.classList.toggle("active");
    mobBtn.classList.toggle("on");
    header.classList.toggle("on");

    if(e.currentTarget.classList.contains('on')){
        e.currentTarget.children[0].setAttribute('title', '검색입력서식 닫기');
    }else{
        e.currentTarget.children[0].setAttribute('title', '검색입력서식 열기');
    }
});

// family stie버튼 클릭 시
const familySite = document.querySelector(".family_site");
familySite.addEventListener("click" , e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
});

// 모바일 - 카피라이트 클릭 시
const footerAddress = document.querySelector(".footer_address");
footerAddress.addEventListener("click" , e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
});

// 모바일 - sitemap 클릭 시
const siteMap = document.querySelectorAll(".sitemap>ul>li");
for(let i=0;i<siteMap.length;i++){
    siteMap[i].addEventListener("click" , e => {
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
    });
}

// 모바일 - 햄버거 메뉴 클릭시
const mobBtn = document.querySelector(".mobBtn");
const mob = document.querySelector(".mob");
const header = document.querySelector("#header");
const mobBtnClose = document.querySelector(".mobBtn_close");

mobBtn.addEventListener("click" , e => {
    e.preventDefault();
    mob.classList.add("on");
    header.style.display = "none";
    mobBtn.style.opacity = 0;
    blur.classList.add("active");
});

mobBtnClose.addEventListener("click" , e => {
    e.preventDefault();
    mob.classList.remove("on");
    header.style.display = "block";
    mobBtn.style.opacity = 1;
    blur.classList.remove("active");
});

// 모바일 - gnb 메뉴 드롭다운시
const mobGnbDepth1 = document.querySelectorAll(".mob_gnb>ul>li"); 
const mobGnbDepth2 = document.querySelectorAll(".mob_gnb>ul>li>ul>li");

for(let i=0;i<mobGnbDepth1.length;i++){
    mobGnbDepth1[i].addEventListener("click" , e => {
        e.preventDefault();
        mobGnbDepth1.forEach(item =>{
            item.classList.remove("on");
        })
        e.currentTarget.classList.toggle("on"); 
    });
}

for(let i=0;i<mobGnbDepth2.length;i++){
    mobGnbDepth2[i].addEventListener("click" , e => {
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
    });
}

// 탑메뉴
const topMenu = document.querySelector("dl.topMenu>dd:nth-of-type(2)");
topMenu.addEventListener("click" , e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
})

// Lounge 배너 작동
const btnPrev = document.querySelector(".btn_prev");
const btnNext = document.querySelector(".btn_next");
const bnnLounge = document.querySelector(".lounge_slide>ul");
const bnnList = document.querySelectorAll(".lounge_slide>ul>li"); //li:3
const scrollBar = document.querySelector(".slide_swiper>.slide_roll>span");
const currentPage = document.querySelector(".current_page");
const lastPage = document.querySelector(".last_page");
let loungeW = document.querySelector(".lounge_slide>ul>li").offsetWidth;
console.log(loungeW);
let lastNum2 = bnnList.length-1;

// next버튼
btnNext.addEventListener("click" , e => {
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum2){bnnNum = 0;}
    bnnLounge.style.left = `${-bnnNum * (loungeW + 60)}px`;
    currentPage.innerText = bnnNum + 1;
    scrollBar.style.width = `${(bnnNum+1) * 33.33}%`;
});

// prev버튼
btnPrev.addEventListener("click" , e => {
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum = lastNum2;
    bnnLounge.style.left = `${-bnnNum * (loungeW + 60)}px`;
    currentPage.innerText = bnnNum + 1;
    scrollBar.style.width = `${(bnnNum+1) * 33.33}%`;
});

/* 메인배너 */
// 윈도우 높이값을 가져와서 #container .banner_frame>section 높이값으로 지정
// 윈도우 resize가 되도 동일하게 적용
// 라운지 배너 resize
let bgContents = document.querySelectorAll("#container>section.bg_resize");
let bnnW = document.querySelector("section.main_banner").offsetWidth;
let secW = document.querySelectorAll("#container>section").offsetWidth;
let devHeight = window.innerHeight;

window.addEventListener("resize" , () => {
    secW = document.querySelectorAll("#container>section").offsetWidth;
    devHeight = window.innerHeight;
    loungeW = document.querySelector(".lounge_slide>ul>li").offsetWidth;
});

for(let i=0;i<bgContents.length;i++){
    bgContents[i].style.height = devHeight + "px";
}

let activation = (index,list) => {
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}

let sections = document.querySelectorAll("#container>section"); 
sections[0].classList.add("on");
console.log(sections);

// 롤링버튼 클릭
const bnnFrame = document.querySelector(".banner_frame");
const bnnRoll = document.querySelectorAll(".banner_rolling>ul>li");
const bnnSections = document.querySelectorAll(".banner_frame>section");
console.log(bnnSections);
let bnnNum = 0;
let lastNum = bnnSections.length-1; 
console.log()

for(let i=0;i<bnnRoll.length;i++){
    bnnRoll[i].addEventListener("click" , e => {
        e.preventDefault();
        activation(i,bnnRoll);
        bnnFrame.style.left = `${-i*bnnW}px`;
    });
}

// 오토배너 작동
let autoBanner = () => {
    bnnNum++;
    if(bnnNum>lastNum){bnnNum=0;}
    activation(bnnNum,bnnRoll);
    bnnFrame.style.left = `${-bnnNum*bnnW}px`;
    
    autoBnn = setTimeout(autoBanner,5000);
}
let autoBnn = setTimeout(autoBanner,5000);

// ESG 배너 작동
const esgList = document.querySelectorAll(".esg_banner>ul>li");
const esgBgImgs = document.querySelectorAll(".bg>img"); 

for(let i=0;i<esgList.length;i++){
    esgList[i].addEventListener("mouseover" , e => {
        e.preventDefault();
        activation(i,esgList);
        activation(i,esgBgImgs);

    });
    
}

// 윙배너
const btnWing = document.querySelector("a.btn_wing");

window.addEventListener("scroll", e => {
    let scroll = document.querySelector("html").scrollTop;

    //윙배너
    if(scroll >= 0){
        btnWing.classList.add("ab");
    }

    for(let i=0;i<sections.length;i++){
        if(scroll >= (i*devHeight-200) && scroll < (i+1)*devHeight-200){
            sections[i].classList.add("on");
        }
    }
});















