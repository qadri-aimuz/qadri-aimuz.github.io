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
        headline: "The Next Generation of Desktop Intelligence",
        subheadline: "An advanced hybrid AI desktop assistant featuring authentic Ahl-e-Sunnat guidance, powerful cybersecurity simulations, and an unparalleled futuristic interface."
    },
    features: {
        feature1_title: "Islamic Scholar Mode",
        feature1_desc: "Authentic Ahl-e-Sunnat wal Jamaat guidance. Instantly search Quran, Hadith, Fiqh, and Tasawwuf with deep context.",
        feature2_title: "Sentinel Console",
        feature2_desc: "A futuristic hacker-style terminal. Run advanced simulated cyber tools like Nmap, Sqlmap, and MSFConsole.",
        feature3_title: "Matrix Visuals",
        feature3_desc: "Toggle the 'Matrix Mode' for an immersive, sci-fi aesthetic. Real-time telemetry and system monitoring built-in.",
        feature4_title: "Voice Commands",
        feature4_desc: "Hands-free interaction. Speak to your AI natively and let it perform tasks across your Windows operating system."
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
