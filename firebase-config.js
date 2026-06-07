import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onValue, set, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNSyB1y2eluAVnMM41Ny9_BdwVIVtC_Sw",
    authDomain: "qadri-ai-admin.firebaseapp.com",
    projectId: "qadri-ai-admin",
    storageBucket: "qadri-ai-admin.firebasestorage.app",
    messagingSenderId: "417843725429",
    appId: "1:417843725429:web:c0b14d264f427271dde43c",
    databaseURL: "https://qadri-ai-admin-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Default Content Fallbacks
export const defaultContent = {
    home: {
        headline: "The <span class='gradient-text'>Ultimate</span> Desktop Assistant",
        subheadline: "Unleash the power of an intelligent, offline AI built specifically for your Windows environment. Safe, secure, and blazingly fast.",
        versionBadge: "v1.0.115 RELEASED",
        stat1: "100% Offline Capable",
        stat2: "Windows Compatible",
        stat3: "Free Updates",
        info1_title: "Authentic Deeni Knowledge",
        info1_desc: "Qadri AI is trained strictly on the authentic teachings of Ahl-e-Sunnat wal Jamaat. It can provide accurate answers regarding Quran, Hadith, Fiqh, and Masail without any deviation.",
        info2_title: "Cyber Sentinel Console",
        info2_desc: "Experience a fully simulated hacker terminal. Run powerful cyber-security tools and commands locally, learning ethical hacking in a safe, immersive matrix-style environment.",
        info3_title: "Advanced Voice Control",
        info3_desc: "Control your entire PC hands-free. Just speak to Qadri AI, and it will execute commands, search files, open programs, and fetch information instantly.",
        info4_title: "Autonomous Background Agents",
        info4_desc: "Give Qadri AI a complex task, and its subagents will quietly work in the background, researching and compiling data while you focus on other important work.",
        info5_title: "100% Offline & Private File Vault",
        info5_desc: "Your privacy is our top priority. Qadri AI operates entirely offline on your local Windows machine. It features a military-grade encrypted File Vault where you can hide your personal documents, software, and sensitive data with zero risk of tracking or data leaks."
    },
    about: {
        founderName: "Muhammad Muzamil Qadri",
        founderTitle: "CEO, Founder & Lead Developer",
        founderBio1: "Hailing from Lahore, Pakistan, Muhammad Muzamil is a veteran software engineer with over 10 years of programming experience. At just 26 years of age, he has accomplished remarkable feats in the IT industry, cementing his reputation as a visionary developer.",
        founderBio2: "His journey includes creating widely recognized applications such as Pak Chat (2019)—available on the Amazon Appstore—and Qadri Downloader. Through the Qadri Project, he has continuously pushed the boundaries of what local developers can achieve on the global stage.",
        contactNumber: "+92 313 4012039",
        missionStatement: "The primary purpose behind the creation of Qadri AI is to serve humanity by providing a dual-purpose intelligence engine. It is meticulously engineered to assist users in their Dunyawi (worldly) tasks—such as coding, cybersecurity, and automation—while simultaneously offering authentic Deeni (religious) knowledge based on the teachings of the Ahl-e-Sunnat wal Jamaat.",
        totalMembers: "10",
        maleExperts: "08",
        femaleExperts: "02"
    },
    features: {
        feature1_title: "Islamic Scholar Mode",
        feature1_desc: "Authentic Ahl-e-Sunnat wal Jamaat guidance. Instantly search Quran, Hadith, Fiqh, and Tasawwuf with deep context.",
        feature2_title: "Sentinel Console",
        feature2_desc: "A futuristic hacker-style terminal. Run advanced simulated cyber tools like Nmap, Sqlmap, and MSFConsole.",
        feature3_title: "Matrix Visuals",
        feature3_desc: "Toggle the 'Matrix Mode' for an immersive, sci-fi aesthetic. Real-time telemetry and system monitoring built-in.",
        feature4_title: "Voice Commands",
        feature4_desc: "Hands-free interaction. Speak to your AI natively and let it perform tasks across your Windows operating system.",
        feature5_title: "Global Broadcasting",
        feature5_desc: "Instantly receive important alerts, updates, and news from the administrators directly inside the desktop environment.",
        feature6_title: "Secure File Vault",
        feature6_desc: "Encrypt and securely store your private documents and sensitive software files locally with zero tracking.",
        feature7_title: "Autonomous Agents",
        feature7_desc: "Delegate complex, multi-step operations to intelligent background subagents that work autonomously to save your time.",
        feature8_title: "Live Chat Support",
        feature8_desc: "Face an issue? Connect with the Qadri AI team instantly through the built-in encrypted live chat interface."
    },
    preview: {
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    purchase: {
        price_monthly: "Rs. 500",
        price_lifetime: "Rs. 8,000",
        price_sourcecode: "Contact for Price",
        easypaisa_number: "0349 7831816",
        easypaisa_name: "Muhammad Muzamil Qadri",
        whatsapp_number: "03134012039"
    },
    seo: {
        title: "Qadri AI - The Ultimate Desktop Assistant",
        description: "An advanced hybrid AI desktop assistant featuring authentic Ahl-e-Sunnat guidance, powerful cybersecurity simulations, and an unparalleled futuristic interface.",
        keywords: "qadri ai, qadri, qadri.ai, qadri.com, qadri.org, muzamil qadri, desktop assistant, artificial intelligence, islamic ai, ahl e sunnat ai, cyber security simulator, smart desktop, ai software, qadri tech, qadri admin"
    }
};
