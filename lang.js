<script>
// Create this as lang.js file
const translations = {
hi: {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI Salah",about:"About",contact:"Contact",hero_title:"Har Ghar Ka Health Saathi, Ab Aapke Gaon Me",hero_desc:"20000+ Gharelu Nuskhe, AI Doctor Salah, aur Health Calculator - Sab kuch ek jagah, bilkul free.",ask_ai:"AI Se Pucho",read_blog:"Blog Padho",f1_t:"20000+ Jawab Wala AI",f1_d:"Offline bhi kaam karega",f2_t:"Health Calculator",f2_d:"BMI, BMR sab kuch",f3_t:"Gharelu Nuskhe",f3_d:"Dadi maa ke nuskhe",footer:"© 2026 SwasthyaSalah - Owner: Shrawan Yadav, Kondagaon, Chhattisgarh | Email: shrawanyadav3076@gmail.com"},
en: {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI Advice",about:"About",contact:"Contact",hero_title:"Health Partner For Every Home, Now In Your Village",hero_desc:"20000+ Home Remedies, AI Doctor Advice, and Health Calculator - All in one place, absolutely free.",ask_ai:"Ask AI",read_blog:"Read Blog",f1_t:"AI with 20000+ Answers",f1_d:"Works offline too",f2_t:"Health Calculator",f2_d:"BMI, BMR and more",f3_t:"Home Remedies",f3_d:"Grandma's remedies",footer:"© 2026 SwasthyaSalah - Owner: Shrawan Yadav, Kondagaon, Chhattisgarh | Email: shrawanyadav3076@gmail.com"},
mr: {brand:"SwasthyaSalah",home:"मुख्यपृष्ठ",blog:"ब्लॉग",calculator:"कॅल्क्युलेटर",chatbot:"AI सल्ला",about:"आमच्याबद्दल",contact:"संपर्क",hero_title:"प्रत्येक घराचा आरोग्य सोबती",hero_desc:"20000+ घरगुती उपाय, AI डॉक्टर सल्ला",ask_ai:"AI ला विचारा",read_blog:"ब्लॉग वाचा",f1_t:"20000+ उत्तरे असलेला AI",f1_d:"ऑफलाइन देखील",f2_t:"आरोग्य कॅल्क्युलेटर",f2_d:"BMI, BMR",f3_t:"घरगुती उपाय",f3_d:"आजीचे उपाय",footer:"© 2026 SwasthyaSalah"},
// Add same for other languages
te: {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI సలహా",about:"About",contact:"Contact",hero_title:"ప్రతి ఇంటికి ఆరోగ్య సహచరుడు",hero_desc:"20000+ ఇంటి చిట్కాలు",ask_ai:"AI ని అడగండి",read_blog:"బ్లాగ్ చదవండి",f1_t:"20000+ సమాధానాలు",f1_d:"ఆఫ్‌లైన్‌లో కూడా",f2_t:"హెల్త్ కాలిక్యులేటర్",f2_d:"BMI, BMR",f3_t:"ఇంటి చిట్కాలు",f3_d:"అమ్మమ్మ చిట్కాలు",footer:"© 2026 SwasthyaSalah"},
gu: {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI સલાહ",about:"About",contact:"Contact",hero_title:"દરેક ઘરનો હેલ્થ સાથી",hero_desc:"20000+ ઘરેલું ઉપચાર",ask_ai:"AI ને પૂછો",read_blog:"બ્લોગ વાંચો",f1_t:"20000+ જવાબ વાળું AI",f1_d:"ઓફલાઇન પણ",f2_t:"હેલ્થ કેલ્ક્યુલેટર",f2_d:"BMI, BMR",f3_t:"ઘરેલું ઉપચાર",f3_d:"દાદી માં ના નુસખા",footer:"© 2026 SwasthyaSalah"},
or: {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI ପରାମର୍ଶ",about:"About",contact:"Contact",hero_title:"ପ୍ରତ୍ୟେକ ଘରର ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ",hero_desc:"20000+ ଘରୋଇ ଉପଚାର",ask_ai:"AI କୁ ପଚାର",read_blog:"ବ୍ଲଗ୍ ପଢ",f1_t:"20000+ ଉତ୍ତର ଥିବା AI",f1_d:"ଅଫଲାଇନ୍ ମଧ୍ୟ",f2_t:"ସ୍ୱାସ୍ଥ୍ୟ କାଲକୁଲେଟର",f2_d:"BMI, BMR",f3_t:"ଘରୋଇ ଉପଚାର",f3_d:"ଜେଜେମା ଉପଚାର",footer:"© 2026 SwasthyaSalah"},
ne: {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI सल्लाह",about:"About",contact:"Contact",hero_title:"हर घरको स्वास्थ्य साथी",hero_desc:"20000+ घरेलु उपाय",ask_ai:"AI लाई सोध्नुहोस्",read_blog:"ब्लग पढ्नुहोस्",f1_t:"20000+ जवाफ भएको AI",f1_d:"अफलाइन पनि",f2_t:"स्वास्थ्य क्याल्कुलेटर",f2_d:"BMI, BMR",f3_t:"घरेलु उपाय",f3_d:"हजुरआमाको उपाय",footer:"© 2026 SwasthyaSalah"},
"en-US": {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI Advice",about:"About",contact:"Contact",hero_title:"Health Partner For Every Home",hero_desc:"20000+ Home Remedies, AI Doctor Advice",ask_ai:"Ask AI",read_blog:"Read Blog",f1_t:"AI with 20000+ Answers",f1_d:"Works offline",f2_t:"Health Calculator",f2_d:"BMI, BMR",f3_t:"Home Remedies",f3_d:"Grandma remedies",footer:"© 2026 SwasthyaSalah"},
zh: {brand:"SwasthyaSalah",home:"Home",blog:"Blog",calculator:"Calculator",chatbot:"AI Advice",about:"About",contact:"Contact",hero_title:"Every Home Health Partner",hero_desc:"20000+ Home Remedies",ask_ai:"Ask AI",read_blog:"Read Blog",f1_t:"AI with 20000+ Answers",f1_d:"Offline",f2_t:"Health Calculator",f2_d:"BMI",f3_t:"Remedies",f3_d:"Home tips",footer:"© 2026 SwasthyaSalah"}
};

document.getElementById('langSelect')?.addEventListener('change', (e)=>{
 const lang = e.target.value;
 const t = translations[lang] || translations['hi'];
 document.querySelectorAll('[data-translate]').forEach(el=>{
   const key = el.getAttribute('data-translate');
   if(t[key]) el.innerText = t[key];
 });
 localStorage.setItem('lang', lang);
});
window.addEventListener('load', ()=>{
 const saved = localStorage.getItem('lang') || 'hi';
 document.getElementById('langSelect').value = saved;
 document.getElementById('langSelect').dispatchEvent(new Event('change'));
});
</script>
