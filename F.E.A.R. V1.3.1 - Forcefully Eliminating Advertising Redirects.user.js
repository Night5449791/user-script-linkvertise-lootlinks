//  ███████╗███████╗    █████╗    ██████╗
//  ██╔════╝██╔════╝   ██╔══██╗   ██╔══██╗
//  █████╗  █████╗     ███████║   ██████╔╝
//  ██╔══╝  ██╔══╝     ██╔══██║   ██╔══██╗
//  ██║██╗  ███████╗██╗██║  ██║██╗██║  ██║
//  ╚═╝╚═╝  ╚══════╝╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
// Forcefully Eliminating Advertising Redirects
// by iWoozy_Real - OPEN SOURCE - V1.3.1
// Discord Server : https://discord.gg/uxCB83JG86
// "Un tabaco no hace que un sapo que vuelva un capo y un revolver no hace que un muchacho se haga un macho" - Canserbero


// ==UserScript==
// @name         F.E.A.R. V1.3.1 | Forcefully Eliminating Advertising Redirects
// @namespace    iWoozie
// @version      1.3.1
// @description  Bypass AdLinks
// @run-at       document-end
// @license      MIT
// @match        *://linkvertise.com/*
// @match        *://*.*/s?*
// @match        *://bstlar.com/*
// @match        *://cuty.app/*
// @match        *://cuty.me/*
// @match        *://cety.app/*
// @match        *://keyrblx.com/*
// @match        *://mobile.codex.lol/*
// @match        *://pandadevelopment.net/getkey*
// @exclude      *://tria.ge/*
// @exclude      *://*.google.*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @author       iWoozy_real

// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js
// @resource     toastrCSS https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css
// @downloadURL  https://iwoozie.baby/install/userscript/u.user.js
// @updateURL    https://iwoozie.baby/install/userscript/u.user.js
// @homepageURL  https://iwoozie.baby
// @supportURL   https://discord.gg/uxCB83JG86

// ==/UserScript==
function uuid4(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{let r=Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16)});}
const CONFIG = {
    waitingTime: 5,
    apiEndpoint: 'https://iwoozie.kys.gay/api/free/bypass',
    apiKey:"TRW_XXX-XXX-XXX-XXX",
    uuid:uuid4()
};

const ClientSideConfig = {
    keyrblx:true, // Enable KeyRBLX Clientside bypass
    Pandadev:true, //Enable Pandadev Clientside bypass
    Luarmor:true, // Enable Luarmor Clientside bypass
    Codex:true, // Enable Codex clientside bypass
};

// Utility functions
const gt = (length = 10) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const isUrl = (input) => {
    try {
        new URL(input.includes('http') ? input : "https://" + input);
        return true;
    } catch {
        return false;
    }
};

// Initialize toastr for notifications
const toastrCSS = GM_getResourceText('toastrCSS');
document.head.appendChild(Object.assign(document.createElement('style'), {textContent: toastrCSS}));

const notify = {
    success: (message) => toastr.success(message, 'Success', {timeOut: 3000}),
    error: (message) => toastr.error(message, 'Error', {timeOut: 3000}),
    info: (message) => toastr.info(message, 'Info', {timeOut: 5000})
};

// =====================================================================================================================================================
const addParamToUrl = (url, key, value) => (u => (u.searchParams.append(key, value), u.toString()))(new URL(url.includes('http') ? url : `https://${url}`));let hwid=new URLSearchParams(window.location.search).get('hwid')
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}


class KeyRBLX { static getKey() { if (document.body.innerHTML.includes('You successfully got')) { console.log('🔑 You got the key!'); return; } (function() { document.body.innerHTML = ""; if (document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')) return; const script = document.createElement('script'); script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'; script.async = true; script.defer = true; const container = document.createElement('div'); container.id = 'cloudflare-turnstile'; script.onload = async function() { turnstile.render('#cloudflare-turnstile', { sitekey: '0x4AAAAAAAOYhbMkXdQ4Qa2k', theme: 'light', callback: async function(token) { const data = await (await fetch(`https://iwoozie.baby/api/challenger/keyrblx?u=t&turnstile=${token}&name=${window.location.pathname.split('/')[2]}&hwid=${hwid}`)).json(); const newdata = await (await fetch(`https://iwoozie.baby/api/free/bypass?u=t&url=${encodeURIComponent(data.result)}`)).json(); document.body.innerHTML = `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #1f1f1f; color: #fff; font-size: 24px; font-family: 'Arial', sans-serif; animation: fadeIn 1s;"><div style="text-align: center; padding: 20px; border: 2px solid #00bcd4; border-radius: 10px; background-color: #333; box-shadow: 0 4px 10px rgba(0, 188, 212, 0.5); animation: zoomIn 1s;"><h1 style="font-size: 36px; animation: slideInFromTop 1s;">Captcha completed</h1><p style="font-size: 18px; animation: fadeIn 2s;">Waiting 15s to skip to another checkpoint...</p><div id="timer" style="font-weight: bold; font-size: 30px; animation: pulse 1.5s infinite;">15</div></div></div>`; let countdown = 15; const timerElement = document.getElementById('timer'); const interval = setInterval(() => { countdown--; timerElement.innerText = countdown; if (countdown <= 0) { clearInterval(interval); location.href = `https://linkvertise.com?iwantreferrer=${encodeURIComponent(addParamToUrl(newdata.result, 'hwid', hwid))}`; } }, 1000); } }); }; document.head.appendChild(script); document.body.appendChild(container); })(); const style = document.createElement('style'); style.innerHTML = `@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } } @keyframes zoomIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } } @keyframes slideInFromTop { 0% { transform: translateY(-50px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } } @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }`; document.head.appendChild(style); } }
async function codex(){let session;while(!session){session=localStorage.getItem("android-session");await sleep(1000)}if(document?.getElementsByTagName('a')?.length&&document.getElementsByTagName('a')[0].innerHTML.includes('Get started')){document.getElementsByTagName('a')[0].click()}async function getStages(){let response=await fetch('https://api.codex.lol/v1/stage/stages',{method:'GET',headers:{'Android-Session':session}});let data=await response.json();if(data.success){if(data.authenticated){return[]}return data.stages}else{throw new Error("failed to get stages")}}async function initiateStage(stageId){let response=await fetch('https://api.codex.lol/v1/stage/initiate',{method:'POST',headers:{'Android-Session':session,'Content-Type':'application/json'},body:JSON.stringify({stageId})});let data=await response.json();if(data.success){return data.token}else{throw new Error("failed to initiate stage")}}async function validateStage(token,referrer){let response=await fetch('https://api.codex.lol/v1/stage/validate',{method:'POST',headers:{'Android-Session':session,'Content-Type':'application/json','Task-Referrer':referrer},body:JSON.stringify({token})});let data=await response.json();if(data.success){return data.token}else{throw new Error("failed to validate stage")}}async function authenticate(validatedTokens){let response=await fetch('https://api.codex.lol/v1/stage/authenticate',{method:'POST',headers:{'Android-Session':session,'Content-Type':'application/json'},body:JSON.stringify({tokens:validatedTokens})});let data=await response.json();if(data.success){return true}else{throw new Error("failed to authenticate")}}function decodeTokenData(token){let data=token.split(".")[1];data=atob(data);return JSON.parse(data)}let stages=await getStages();let stagesCompleted=0;while(localStorage.getItem(stages[stagesCompleted])&&stagesCompleted<stages.length){stagesCompleted+=1}if(stagesCompleted==stages.length){return}let validatedTokens=[];try{while(stagesCompleted<stages.length){let stageId=stages[stagesCompleted].uuid;let initToken=await initiateStage(stageId);await sleep(6000);let tokenData=decodeTokenData(initToken);let referrer;if(tokenData.link.includes('loot-links')){referrer='https://loot-links.com/'}else if(tokenData.link.includes('loot-link')){referrer='https://loot-link.com/'}else{referrer='https://linkvertise.com/'}let validatedToken=await validateStage(initToken,referrer);validatedTokens.push({uuid:stageId,token:validatedToken});console.log(`${stagesCompleted+1}/${stages.length } stages completed`,5000);await sleep(1500);stagesCompleted+=1}if(authenticate(validatedTokens)){console.log('byp done');await sleep(3000);location.reload()}}catch(e){console.error(e)}}
    class pandadevelopment{static getKey(){'use strict';
    const CONFIG={
      WAIT_INTERVAL:5000,
      COUNTDOWN_SECONDS:15,
      RECAPTCHA_SITEKEY:'6Lc851gqAAAAABd8lcfE3XQSqb0HI9HFYMMsSNf0',
      TURNSTILE_SITEKEY:'0x4AAAAAAATNbYDshSYTz6bF',
      LINKVERTISE_BASE_URL:'https://linkvertise.com'
    };const wait=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));function createRedirectHTML(){document.body.innerHTML=`<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #1f1f1f; color: #fff; font-size: 24px; font-family: 'Arial', sans-serif; animation: fadeIn 1s;"><div style="text-align: center; padding: 20px; border: 2px solid #00bcd4; border-radius: 10px; background-color: #333; box-shadow: 0 4px 10px rgba(0, 188, 212, 0.5); animation: zoomIn 1s;"><h1 style="font-size: 36px; animation: slideInFromTop 1s;">Captcha completed</h1><p style="font-size: 18px; animation: fadeIn 2s;">Waiting ${CONFIG.COUNTDOWN_SECONDS }s to skip to another checkpoint...</p><div id="timer" style="font-weight: bold; font-size: 30px; animation: pulse 1.5s infinite;">${CONFIG.COUNTDOWN_SECONDS }</div></div></div>`}function startCountdown(data){let countdown=CONFIG.COUNTDOWN_SECONDS;const timerElement=document.getElementById('timer');const interval=setInterval(()=>{countdown-=1;timerElement.innerText=countdown;if(countdown<=0){clearInterval(interval);location.href=`${CONFIG.LINKVERTISE_BASE_URL }?iwantreferrer=${encodeURIComponent(data)}`}},1000)}async function bypass(){if(!location.href.includes("&provider=linkvertise")){location.href+="&provider=linkvertise";return}if(!location.href.includes("&checkpoints=6")){location.href+="&checkpoints=6";return}await wait(CONFIG.WAIT_INTERVAL);const captchaType=detectCaptchaType();const captchaResu=await handleCaptcha(captchaType);let daIrrealPaylo;if(captchaType==="turnstile"){daIrrealPaylo=`hwid=${ new URLSearchParams(window.location.search).get('hwid')}&service=${ new URLSearchParams(window.location.search).get('service')}&mode=REDIRECT&serviceCheckpoints=3&title=${ new URLSearchParams(window.location.search).get('service')}&tier_id=2&numberOfTasks=1&theme=3&background=&token=${ new URLSearchParams(window.location.search).get('sessiontoken')}&provider=linkvertise&cf-turnstile-response=${ captchaResu }`}else if(captchaType==="recaptcha"){daIrrealPaylo=`hwid=${ new URLSearchParams(window.location.search).get('hwid')}&service=${ new URLSearchParams(window.location.search).get('service')}&mode=REDIRECT&serviceCheckpoints=3&title=${ new URLSearchParams(window.location.search).get('service')}&tier_id=2&numberOfTasks=1&theme=3&background=&token=${ new URLSearchParams(window.location.search).get('sessiontoken')}&provider=linkvertise&g-recaptcha-response=${ captchaResu }`}else{daIrrealPaylo=`hwid=${ new URLSearchParams(window.location.search).get('hwid')}&service=${ new URLSearchParams(window.location.search).get('service')}&mode=REDIRECT&serviceCheckpoints=3&title=${ new URLSearchParams(window.location.search).get('service')}&tier_id=2&numberOfTasks=1&theme=3&background=&token=${ new URLSearchParams(window.location.search).get('sessiontoken')}&provider=linkvertise`}GM_xmlhttpRequest({method:"POST",url:`https://pandadevelopment.net/getkey/proceed?service=${ new URLSearchParams(window.location.search).get('service')}`,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Content-Type":"application/x-www-form-urlencoded","Referer":location.href},data:daIrrealPaylo,onload:(response)=>{fetch("https://iwoozie.baby/api/free/bypass?u=t&url="+encodeURIComponent(response.finalUrl)).then(response=>response.json()).then(data=>{createRedirectHTML();startCountdown(data.result)})},onerror:(error)=>console.error('Error:',error)})}function detectCaptchaType(){if(document.body.innerHTML.includes("reCAPTCHA")){return 'recaptcha'}if(document.body.innerHTML.includes("Captcha verified!")){return 'turnstile'}return 'unknown'}async function handleCaptcha(type){document.head.innerHTML="";document.body.innerHTML="";let response="";switch(type){case 'recaptcha':loadRecaptcha();response=await waitForCaptchaResponse("recaptcha");break;case 'turnstile':loadTurnstile();response=await waitForCaptchaResponse("turnstile");break}return response}function loadRecaptcha(){const script=createScript('https://www.google.com/recaptcha/api.js');script.onload=()=>{const div=document.createElement("div");div.classList.add("g-recaptcha");div.setAttribute("data-sitekey",CONFIG.RECAPTCHA_SITEKEY);document.body.appendChild(div)}}function loadTurnstile(){const script=createScript('https://challenges.cloudflare.com/turnstile/v0/api.js');script.onload=()=>{const div=document.createElement("div");div.classList.add("cf-turnstile");div.setAttribute("data-sitekey",CONFIG.TURNSTILE_SITEKEY);document.body.appendChild(div);turnstile.render(document.querySelector(".cf-turnstile"))}}function createScript(src){const script=document.createElement("script");script.src=src;script.async=true;script.defer=true;document.head.appendChild(script);return script}async function waitForCaptchaResponse(type){let response="";while(!response){try{response=type==='recaptcha'?grecaptcha.getResponse():turnstile.getResponse();await wait(1000)}catch{await wait(1000)}}return response}bypass()}}
// =====================================================================================================================================================


async function start() {
	const referrer = new URLSearchParams(window.location.search).get('iwantreferrer');
	if (referrer) {
		location.href = decodeURIComponent(referrer)
		return
	}
    if (document.title.includes('Just a moment...') || document.title.includes('Just a second...') || document.body.innerHTML.includes("Congratulations you got the key")){
      notify.info("Please solve the bot challenge to proceed")
      return
    }
    if (location.origin.includes("keyrblx")) {
        await sleep(2000);
        if (ClientSideConfig.keyrblx){
			notify.info("KeyRBLX bypass started..")
			KeyRBLX.getKey()
		}
        return;
    }
    if (location.origin.includes("codex")) {
        await sleep(2000);
        if (ClientSideConfig.Codex) {
			notify.info("CodeX bypass started..")
			codex()
		};
        return;
    }
    if (location.origin.includes("pandadevelopment.net")) {
        await sleep(2000);
        if (ClientSideConfig.Pandadev){
			notify.info("Pandadevelopment bypass started 💔..")
			pandadevelopment.getKey()
		};
        return;
    }
    document.open();
    document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>F.E.A.R & RIP.LINKVERTISE.LOL</title>
            <style>
                *{margin:0;padding:0;box-sizing:border-box;font-family:Arial, sans-serif}body{background-color:#121212;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:20px}.logo{width:80px;margin-bottom:20px;transition:transform 0.3s ease}.logo:hover{transform:scale(1.1)}.status-message{margin:10px 0;opacity:0.9;transition:opacity 0.3s ease}.status-message.error{color:#ff4444}.progress-container{width:90%;max-width:600px;height:4px;background:#2e2e2e;border-radius:2px;overflow:hidden;margin:15px 0;position:relative}.progress-bar{width:50%;height:100%;background:linear-gradient(90deg, #ff8c00, #ffa500);animation:progress 2s infinite ease-in-out;border-radius:2px;box-shadow:0 0 10px rgba(255, 140, 0, 0.3)}@keyframes progress{0%{transform:translateX(-100%)}50%{transform:translateX(50%)}100%{transform:translateX(200%)}}.info-text{font-size:12px;color:#888;margin-top:20px;transition:color 0.3s ease}.info-link{color:orange;text-decoration:none;transition:color 0.3s ease, transform 0.3s ease;display:inline-block}.info-link:hover{color:#ffd700;transform:translateY(-1px)}.log-container{margin-top:15px;width:90%;max-width:600px;overflow:hidden}.log-entry{font-size:14px;color:#aaa;margin:5px 0;opacity:0;transform:translateY(10px);animation:fadeInUp 0.5s forwards}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}
            </style>
        </head>
        <body>
            <img src="https://rip.linkvertise.lol/favicon.ico" alt="Logo" class="logo">
            <p id="statusMessage" class="status-message">Processing your link...</p>
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
            <div class="log-container"></div>
            <p class="info-text">
                If you are an adlink owner, please check
                <a href="https://discord.gg/hFvQQ9DaFJ" target="_blank" class="info-link">this Discord server</a>
                for an anti-bypass solution, 100% secure & private.
            </p>

            <script>
                class LinkProcessor {
                    constructor() {
                        this.statusMessage = document.getElementById('statusMessage');
                        this.logContainer = document.querySelector('.log-container');
                    }

                    addLogEntry(message) {
                        let entry = document.createElement('div');
                        entry.className = 'log-entry';
                        entry.textContent = message;
                        this.logContainer.appendChild(entry);
                    }

                    setError(message) {
                        this.statusMessage.classList.add('error');
                        this.statusMessage.textContent = message;
                    }

                    async processLink() {
                        try {
                            this.addLogEntry("Waiting ${CONFIG.waitingTime} seconds...");
                            await new Promise(resolve => setTimeout(resolve, ${CONFIG.waitingTime*1000}));
                            this.addLogEntry("Contacting API...");
                            const response = await fetch("${CONFIG.apiEndpoint}?uuid=${CONFIG.uuid}&url="+encodeURIComponent(location.href),{headers:{'x-api-key':"${CONFIG.apiKey}"}});
                            const data = await response.json();
                            this.addLogEntry("Bypass done! Result: " + data.result);

                            if (data.success) {
                                //document.head.innerHTML = "<meta http-equiv='refresh' content='0;url=" + data.result + "'>";
                                location.href=data.result
                            } else {
                                this.setError("Error processing link");
                                this.addLogEntry("Error bypassing, response from API: " + data.result);
                            }
                        } catch (error) {
                            this.setError("An error occurred");
                            this.addLogEntry("Error: " + error.message);
                        }
                    }
                }

                setTimeout(() => {
                    const processor = new LinkProcessor();
                    processor.processLink();
                }, 1500);
            </script>
        </body>
        </html>
    `);
    document.close();
}

start();