import { db, defaultContent } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Initialize Lucide Icons
lucide.createIcons();

// Elements reference
const els = {
    homeHeadline: document.getElementById('fb-home-headline'),
    homeSubheadline: document.getElementById('fb-home-subheadline'),
    
    f1Title: document.getElementById('fb-f1-title'),
    f1Desc: document.getElementById('fb-f1-desc'),
    f2Title: document.getElementById('fb-f2-title'),
    f2Desc: document.getElementById('fb-f2-desc'),
    f3Title: document.getElementById('fb-f3-title'),
    f3Desc: document.getElementById('fb-f3-desc'),
    f4Title: document.getElementById('fb-f4-title'),
    f4Desc: document.getElementById('fb-f4-desc'),

    previewVideo: document.getElementById('fb-preview-video'),

    purPrice: document.getElementById('fb-pur-price'),
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

    // Features
    if(els.f1Title) els.f1Title.innerText = data.features?.feature1_title || defaultContent.features.feature1_title;
    if(els.f1Desc) els.f1Desc.innerText = data.features?.feature1_desc || defaultContent.features.feature1_desc;
    if(els.f2Title) els.f2Title.innerText = data.features?.feature2_title || defaultContent.features.feature2_title;
    if(els.f2Desc) els.f2Desc.innerText = data.features?.feature2_desc || defaultContent.features.feature2_desc;
    if(els.f3Title) els.f3Title.innerText = data.features?.feature3_title || defaultContent.features.feature3_title;
    if(els.f3Desc) els.f3Desc.innerText = data.features?.feature3_desc || defaultContent.features.feature3_desc;
    if(els.f4Title) els.f4Title.innerText = data.features?.feature4_title || defaultContent.features.feature4_title;
    if(els.f4Desc) els.f4Desc.innerText = data.features?.feature4_desc || defaultContent.features.feature4_desc;

    // Preview
    if(els.previewVideo) {
        let url = data.preview?.videoUrl || defaultContent.preview.videoUrl;
        if(url) els.previewVideo.src = url;
    }

    // Purchase
    if(els.purPrice) els.purPrice.innerHTML = (data.purchase?.price || defaultContent.purchase.price) + ' <span class="price-period">/ one-time</span>';
    if(els.purEpNum) els.purEpNum.innerText = data.purchase?.easypaisa_number || defaultContent.purchase.easypaisa_number;
    if(els.purEpName) els.purEpName.innerText = data.purchase?.easypaisa_name || defaultContent.purchase.easypaisa_name;
    if(els.purWaNum) els.purWaNum.innerText = data.purchase?.whatsapp_number || defaultContent.purchase.whatsapp_number;
    if(els.purWaLink) {
        let waNum = (data.purchase?.whatsapp_number || defaultContent.purchase.whatsapp_number).replace(/\s/g, '');
        // Convert local format 03... to international +923...
        if(waNum.startsWith('0')) waNum = '92' + waNum.substring(1);
        els.purWaLink.href = `https://wa.me/${waNum}?text=I%20want%20to%20buy%20Qadri%20AI%20Lifetime%20License`;
    }
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
