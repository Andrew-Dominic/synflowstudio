const fs = require('fs');
let html = fs.readFileSync('D:/SYNFLOW/index.html', 'utf8');

const order = [
    { id: 'cakehouse', src: 'assets/cakehouse.png', url: 'https://cake-house-teal.vercel.app/', name: 'Cake House' },
    { id: 'rmchri', src: 'assets/rmchri.png', url: 'https://rmchri.in/', name: 'RMCHRI' },
    { id: 'letsfame', src: 'assets/letsfame.png', url: 'https://letsfame-9ffe.vercel.app/', name: 'Letsfame' },
    { id: 'yatra', src: 'assets/yatra.png', url: 'https://rityatra26.vercel.app/', name: 'RIT Yatra 26' },
    { id: 'kpss', src: 'assets/kpss.png', url: 'https://kpsspainting.com.au/', name: 'KPSS Painting' },
    { id: 'dentist', src: 'assets/dentist.png', url: 'https://template1-lac-delta.vercel.app/', name: 'Dentist Template' },
    { id: 'gamethon', src: 'assets/gamethon.png', url: 'https://gamethon26.vercel.app/', name: 'Gamethon' }
];

// Rebuild marquee inner HTML
let marqueeContent = '';
for (const item of order) {
    marqueeContent += `
                                    <div
                                        class="w-[320px] h-[360px] bg-white rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-200/60 flex flex-col overflow-hidden shrink-0">
                                        <div
                                            class="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2 shrink-0">
                                            <div class="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                            <div class="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                            <div class="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                        </div>
                                        <img src="${item.src}"
                                            class="w-full flex-1 object-cover object-top" alt="${item.name}" loading="lazy" decoding="async" width="320" height="360">
                                    </div>`;
}
marqueeContent = `
                                <!-- First Set -->
                                <div class="flex gap-6 pr-6 shrink-0">${marqueeContent}
                                </div>
                                <!-- Duplicated Set for Seamless Loop -->
                                <div class="flex gap-6 pr-6 shrink-0">${marqueeContent}
                                </div>`;

// Replace marquee content
html = html.replace(/(<div class="flex animate-scroll-left w-max items-center h-full">)[\s\S]*?(<\/div>\s*<\/div>\s*<!-- Gradient overlay to fade bottom so text is readable -->)/, `$1${marqueeContent}\n                            $2`);

// Rebuild Portfolio Modal inner HTML
let modalContent = '';
for (let i = 0; i < order.length; i++) {
    const item = order[i];
    modalContent += `
                <!-- Browser Tab ${i + 1} -->
                <div
                    class="bg-white rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden flex flex-col h-[600px] xl:h-[750px] transform hover:-translate-y-2 transition duration-500 gsap-modal-fade-up">
                    <div
                        class="bg-gray-100 h-14 border-b border-gray-200 flex items-center px-4 shrink-0 shadow-sm relative z-10">
                        <div class="flex gap-2.5">
                            <div class="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                            <div class="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
                            <div class="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
                        </div>
                        <div
                            class="bg-white mx-4 flex-1 h-8 rounded-md border border-gray-200 flex items-center px-3 text-xs text-gray-500 font-medium font-sans shadow-inner">
                            <i class="ph-bold ph-lock-key text-gray-400 mr-2 text-[10px]"></i>
                            ${item.url.replace('https://', '')}
                        </div>
                    </div>
                    <div class="relative flex-1 w-full bg-white group">
                        <iframe src="${item.url}" loading="lazy" class="w-full h-full border-none bg-white pointer-events-none"
                            title="${item.name}"></iframe>
                        <a href="${item.url}" target="_blank" class="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors duration-300 cursor-pointer">
                            <div class="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform lg:translate-y-4 lg:group-hover:translate-y-0 bg-white text-dark px-6 py-3 rounded-xl font-bold shadow-2xl transition-all duration-300 flex items-center gap-2">
                                Visit Live Site <i class="ph-bold ph-arrow-up-right"></i>
                            </div>
                        </a>
                    </div>
                </div>\n`;
}

// Replace modal content
html = html.replace(/(<!-- Browser Grid -->\s*<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto pb-24">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<!-- Scripts for Initialization -->)/, `$1\n${modalContent}            $2`);

fs.writeFileSync('D:/SYNFLOW/index.html', html);
console.log('Reordered successfully.');
