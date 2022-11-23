// sub.js
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

// 윙배너
const btnWing = document.querySelector("a.btn_wing");

window.addEventListener("scroll", e => {
    let scroll = document.querySelector("html").scrollTop;

    //윙배너
    if(scroll >= 0){
        btnWing.classList.add("ab");
    }

    for(let i=0;i<sections.length;i++){
        if(scroll >= (i*devHeight) && scroll < (i+1)*devHeight){
            sections[i].classList.add("on");
        }
    }
});

// sub2 - 경영정보 tab
const manageTab = document.querySelectorAll(".manage_tab>li");

for(let i=0;i<manageTab.length;i++){
    manageTab[i].addEventListener("click" , e => {
        e.preventDefault();
        manageTab.forEach(item => {
            item.classList.remove("on");
        });
        manageTab[i].classList.add("on");
    });
};

// sub1 - 문의하기-약관동의 드롭다운
const btnDropdown = document.querySelector(".agree_check>.agree_dropdown");
const agreeContent = document.querySelector(".agree_content");

btnDropdown.addEventListener("click" , e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    agreeContent.classList.toggle("on");
});

// sub1 - 자주찾는 질문 tab/드롭다운
const faqTab = document.querySelectorAll(".faq_tab>li");
const faqList = document.querySelectorAll(".faq_list>li");

for(let i=0;i<faqTab.length;i++){
    faqTab[i].addEventListener("click" , e => {
        e.preventDefault();
        faqTab.forEach(item => {
            item.classList.remove("on");
        });
        faqTab[i].classList.add("on");
    });
};

for(let i=0;i<faqList.length;i++){
    faqList[i].addEventListener("click" , e => {
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
    });
};
