import { db, defaultContent } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Initialize Lucide Icons
lucide.createIcons();

// Elements reference
const els = {
    homeHeadline: document.getElementById('fb-home-headline'),
    homeSubheadline: document.getElementById('fb-home-subheadline'),
    homeVersion: document.getElementById('fb-home-version'),
    homeStat1: document.getElementById('fb-home-stat1'),
    homeStat2: document.getElementById('fb-home-stat2'),
    homeStat3: document.getElementById('fb-home-stat3'),
    homeInfo1Title: document.getElementById('fb-home-info1-title'),
    homeInfo1Desc: document.getElementById('fb-home-info1-desc'),
    homeInfo2Title: document.getElementById('fb-home-info2-title'),
    homeInfo2Desc: document.getElementById('fb-home-info2-desc'),
    homeInfo3Title: document.getElementById('fb-home-info3-title'),
    homeInfo3Desc: document.getElementById('fb-home-info3-desc'),
    homeInfo4Title: document.getElementById('fb-home-info4-title'),
    homeInfo4Desc: document.getElementById('fb-home-info4-desc'),
    homeInfo5Title: document.getElementById('fb-home-info5-title'),
    homeInfo5Desc: document.getElementById('fb-home-info5-desc'),
    
    // About
    aboutFounderName: document.getElementById('fb-about-founderName'),
    aboutFounderTitle: document.getElementById('fb-about-founderTitle'),
    aboutFounderBio1: document.getElementById('fb-about-founderBio1'),
    aboutFounderBio2: document.getElementById('fb-about-founderBio2'),
    aboutMission: document.getElementById('fb-about-mission'),
    aboutTotalMembers: document.getElementById('fb-about-totalMembers'),
    aboutMaleExperts: document.getElementById('fb-about-maleExperts'),
    aboutFemaleExperts: document.getElementById('fb-about-femaleExperts'),
    aboutContactNumber: document.getElementById('fb-about-contactNumber'),
    aboutWaLink: document.getElementById('fb-about-waLink'),
    
    f1Title: document.getElementById('fb-f1-title'),
    f1Desc: document.getElementById('fb-f1-desc'),
    f2Title: document.getElementById('fb-f2-title'),
    f2Desc: document.getElementById('fb-f2-desc'),
    f3Title: document.getElementById('fb-f3-title'),
    f3Desc: document.getElementById('fb-f3-desc'),
    f4Title: document.getElementById('fb-f4-title'),
    f4Desc: document.getElementById('fb-f4-desc'),
    f5Title: document.getElementById('fb-f5-title'),
    f5Desc: document.getElementById('fb-f5-desc'),
    f6Title: document.getElementById('fb-f6-title'),
    f6Desc: document.getElementById('fb-f6-desc'),
    f7Title: document.getElementById('fb-f7-title'),
    f7Desc: document.getElementById('fb-f7-desc'),
    f8Title: document.getElementById('fb-f8-title'),
    f8Desc: document.getElementById('fb-f8-desc'),

    previewVideo: document.getElementById('fb-preview-video'),

    purPriceMonthly: document.getElementById('fb-pur-price-monthly'),
    purPriceLifetime: document.getElementById('fb-pur-price-lifetime'),
    purPriceSource: document.getElementById('fb-pur-price-source'),
    purEpNum: document.getElementById('fb-pur-ep-num'),
    purEpName: document.getElementById('fb-pur-ep-name'),
    purWaNum: document.getElementById('fb-pur-wa-num'),
    purWaLink: document.getElementById('fb-pur-wa-link')
};

// Sync Data from Firebase
const websiteRef = ref(db, 'website_content');
onValue(websiteRef, (snapshot) => {
    const data = snapshot.val() || defaultContent;

    // Home
    if(els.homeHeadline) els.homeHeadline.innerHTML = data.home?.headline || defaultContent.home.headline;
    if(els.homeSubheadline) els.homeSubheadline.innerText = data.home?.subheadline || defaultContent.home.subheadline;
    if(els.homeVersion) els.homeVersion.innerText = data.home?.versionBadge || defaultContent.home.versionBadge;
    if(els.homeStat1) els.homeStat1.innerText = data.home?.stat1 || defaultContent.home.stat1;
    if(els.homeStat2) els.homeStat2.innerText = data.home?.stat2 || defaultContent.home.stat2;
    if(els.homeStat3) els.homeStat3.innerText = data.home?.stat3 || defaultContent.home.stat3;
    
    if(els.homeInfo1Title) els.homeInfo1Title.innerText = data.home?.info1_title || defaultContent.home.info1_title;
    if(els.homeInfo1Desc) els.homeInfo1Desc.innerText = data.home?.info1_desc || defaultContent.home.info1_desc;
    if(els.homeInfo2Title) els.homeInfo2Title.innerText = data.home?.info2_title || defaultContent.home.info2_title;
    if(els.homeInfo2Desc) els.homeInfo2Desc.innerText = data.home?.info2_desc || defaultContent.home.info2_desc;
    if(els.homeInfo3Title) els.homeInfo3Title.innerText = data.home?.info3_title || defaultContent.home.info3_title;
    if(els.homeInfo3Desc) els.homeInfo3Desc.innerText = data.home?.info3_desc || defaultContent.home.info3_desc;
    if(els.homeInfo4Title) els.homeInfo4Title.innerText = data.home?.info4_title || defaultContent.home.info4_title;
    if(els.homeInfo4Desc) els.homeInfo4Desc.innerText = data.home?.info4_desc || defaultContent.home.info4_desc;
    if(els.homeInfo5Title) els.homeInfo5Title.innerText = data.home?.info5_title || defaultContent.home.info5_title;
    if(els.homeInfo5Desc) els.homeInfo5Desc.innerText = data.home?.info5_desc || defaultContent.home.info5_desc;

    // About
    if(els.aboutFounderName) els.aboutFounderName.innerText = data.about?.founderName || defaultContent.about.founderName;
    if(els.aboutFounderTitle) els.aboutFounderTitle.innerText = data.about?.founderTitle || defaultContent.about.founderTitle;
    if(els.aboutFounderBio1) els.aboutFounderBio1.innerHTML = data.about?.founderBio1 || defaultContent.about.founderBio1;
    if(els.aboutFounderBio2) els.aboutFounderBio2.innerHTML = data.about?.founderBio2 || defaultContent.about.founderBio2;
    if(els.aboutMission) els.aboutMission.innerHTML = data.about?.missionStatement || defaultContent.about.missionStatement;
    if(els.aboutTotalMembers) els.aboutTotalMembers.innerText = data.about?.totalMembers || defaultContent.about.totalMembers;
    if(els.aboutMaleExperts) els.aboutMaleExperts.innerText = data.about?.maleExperts || defaultContent.about.maleExperts;
    if(els.aboutFemaleExperts) els.aboutFemaleExperts.innerText = data.about?.femaleExperts || defaultContent.about.femaleExperts;
    if(els.aboutContactNumber) els.aboutContactNumber.innerText = data.about?.contactNumber || defaultContent.about.contactNumber;
    if(els.aboutWaLink) {
        let waNum = (data.about?.contactNumber || defaultContent.about.contactNumber).replace(/\s|\+/g, '');
        if(waNum.startsWith('0')) waNum = '92' + waNum.substring(1);
        els.aboutWaLink.href = `https://wa.me/${waNum}?text=Hello%20Muzamil!`;
    }

    // Features
    if(els.f1Title) els.f1Title.innerText = data.features?.feature1_title || defaultContent.features.feature1_title;
    if(els.f1Desc) els.f1Desc.innerText = data.features?.feature1_desc || defaultContent.features.feature1_desc;
    if(els.f2Title) els.f2Title.innerText = data.features?.feature2_title || defaultContent.features.feature2_title;
    if(els.f2Desc) els.f2Desc.innerText = data.features?.feature2_desc || defaultContent.features.feature2_desc;
    if(els.f3Title) els.f3Title.innerText = data.features?.feature3_title || defaultContent.features.feature3_title;
    if(els.f3Desc) els.f3Desc.innerText = data.features?.feature3_desc || defaultContent.features.feature3_desc;
    if(els.f4Title) els.f4Title.innerText = data.features?.feature4_title || defaultContent.features.feature4_title;
    if(els.f4Desc) els.f4Desc.innerText = data.features?.feature4_desc || defaultContent.features.feature4_desc;
    if(els.f5Title) els.f5Title.innerText = data.features?.feature5_title || defaultContent.features.feature5_title;
    if(els.f5Desc) els.f5Desc.innerText = data.features?.feature5_desc || defaultContent.features.feature5_desc;
    if(els.f6Title) els.f6Title.innerText = data.features?.feature6_title || defaultContent.features.feature6_title;
    if(els.f6Desc) els.f6Desc.innerText = data.features?.feature6_desc || defaultContent.features.feature6_desc;
    if(els.f7Title) els.f7Title.innerText = data.features?.feature7_title || defaultContent.features.feature7_title;
    if(els.f7Desc) els.f7Desc.innerText = data.features?.feature7_desc || defaultContent.features.feature7_desc;
    if(els.f8Title) els.f8Title.innerText = data.features?.feature8_title || defaultContent.features.feature8_title;
    if(els.f8Desc) els.f8Desc.innerText = data.features?.feature8_desc || defaultContent.features.feature8_desc;

    // Preview
    if(els.previewVideo) {
        let url = data.preview?.videoUrl || defaultContent.preview.videoUrl;
        if(url) els.previewVideo.src = url;
    }

    // Purchase
    if(els.purPriceMonthly) els.purPriceMonthly.innerHTML = (data.purchase?.price_monthly || defaultContent.purchase.price_monthly) + ' <span class="price-period">/ month</span>';
    if(els.purPriceLifetime) els.purPriceLifetime.innerHTML = (data.purchase?.price_lifetime || defaultContent.purchase.price_lifetime) + ' <span class="price-period">/ one-time</span>';
    if(els.purPriceSource) els.purPriceSource.innerHTML = (data.purchase?.price_sourcecode || defaultContent.purchase.price_sourcecode);
    
    if(els.purEpNum) els.purEpNum.innerText = data.purchase?.easypaisa_number || defaultContent.purchase.easypaisa_number;
    if(els.purEpName) els.purEpName.innerText = data.purchase?.easypaisa_name || defaultContent.purchase.easypaisa_name;
    if(els.purWaNum) els.purWaNum.innerText = data.purchase?.whatsapp_number || defaultContent.purchase.whatsapp_number;
    if(els.purWaLink) {
        let waNum = (data.purchase?.whatsapp_number || defaultContent.purchase.whatsapp_number).replace(/\s/g, '');
        // Convert local format 03... to international +923...
        if(waNum.startsWith('0')) waNum = '92' + waNum.substring(1);
        els.purWaLink.href = `https://wa.me/${waNum}?text=I%20want%20to%20buy%20Qadri%20AI%20Lifetime%20License`;
    }

    // SEO Updates
    const title = data.seo?.title || defaultContent.seo.title;
    const desc = data.seo?.description || defaultContent.seo.description;
    const keywords = data.seo?.keywords || defaultContent.seo.keywords;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", () => { setTimeout(reveal, 100); });

// Parallax effect on mouse move for background glows
document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.bg-glow');
    if(glows.length > 0) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        if(glows[0]) glows[0].style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        if(glows[1]) glows[1].style.transform = `translate(${x * -50}px, ${y * -50}px)`;
    }
});

// Terminal Typing Effect
const terminalLines = [
    "Initializing Qadri AI Core System...",
    "Loading Ahl-e-Sunnat Knowledge Base: OK",
    "Mounting Sentinel Security Modules...",
    "Bypassing standard firewall limits... [SUCCESS]",
    "Executing subagent_network.sh...",
    "Subagent 1: Memory sync complete.",
    "Subagent 2: Threat detection online.",
    "Connecting to Master Server... Connection Established.",
    "System Ready. Awaiting user input..."
];

const terminalOutput = document.getElementById("terminal-output");
let currentLine = 0;
let currentChar = 0;

function typeTerminal() {
    if(!terminalOutput) return;
    
    if(currentLine < terminalLines.length) {
        if(currentChar === 0) {
            terminalOutput.innerHTML += "<div><span class='text-emerald-500/70'>$</span> <span id='line-" + currentLine + "'></span></div>";
        }
        
        const lineElement = document.getElementById("line-" + currentLine);
        lineElement.innerHTML += terminalLines[currentLine].charAt(currentChar);
        currentChar++;
        
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        
        if(currentChar < terminalLines[currentLine].length) {
            setTimeout(typeTerminal, Math.random() * 50 + 20); // Random typing speed
        } else {
            currentLine++;
            currentChar = 0;
            setTimeout(typeTerminal, Math.random() * 800 + 400); // Pause between lines
        }
    } else {
        terminalOutput.innerHTML += "<div class='mt-4 text-cyan-400 blink'>_</div>";
    }
}

if(terminalOutput) {
    setTimeout(typeTerminal, 1000);
}
