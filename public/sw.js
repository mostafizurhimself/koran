if(!self.define){let i,e={};const t=(t,a)=>(t=new URL(t+".js",a).href,e[t]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=t,i.onload=e,document.head.appendChild(i)}else i=t,importScripts(t),e()})).then((()=>{let i=e[t];if(!i)throw new Error(`Module ${t} didn’t register its module`);return i})));self.define=(a,n)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let c={};const o=i=>t(i,s),r={module:{uri:s},exports:c,require:o};e[s]=Promise.all(a.map((i=>r[i]||o(i)))).then((i=>(n(...i),c)))}}define(["./workbox-5f5b08d6"],(function(i){"use strict";importScripts(),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/_next/static/O_zVviJgYiPsfe3zVzjg5/_buildManifest.js",revision:"206c4b55726ba87801af02f9f0dc00b9"},{url:"/_next/static/O_zVviJgYiPsfe3zVzjg5/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/O_zVviJgYiPsfe3zVzjg5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-1f6b0cdd606c3be8.js",revision:"1f6b0cdd606c3be8"},{url:"/_next/static/chunks/120-f5dcb4c3597eb718.js",revision:"f5dcb4c3597eb718"},{url:"/_next/static/chunks/282-fbd89a4902e7d99f.js",revision:"fbd89a4902e7d99f"},{url:"/_next/static/chunks/581-4c1dbe1c873c8ce8.js",revision:"4c1dbe1c873c8ce8"},{url:"/_next/static/chunks/615-bc4266ca2a8e9b4b.js",revision:"bc4266ca2a8e9b4b"},{url:"/_next/static/chunks/632cba62-6a0283dd979fedd9.js",revision:"6a0283dd979fedd9"},{url:"/_next/static/chunks/913-bb69dccb29d5b938.js",revision:"bb69dccb29d5b938"},{url:"/_next/static/chunks/d64684d8-097d89439f7618f5.js",revision:"097d89439f7618f5"},{url:"/_next/static/chunks/d7eeaac4-de468e9bdc48891e.js",revision:"de468e9bdc48891e"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-e380ed469c5a0a07.js",revision:"e380ed469c5a0a07"},{url:"/_next/static/chunks/pages/_app-79cd86c3984b5227.js",revision:"79cd86c3984b5227"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/dashboard-f48f43342ad64b68.js",revision:"f48f43342ad64b68"},{url:"/_next/static/chunks/pages/index-c69548cadb4cfaff.js",revision:"c69548cadb4cfaff"},{url:"/_next/static/chunks/pages/settings-a2014ec0c12131dd.js",revision:"a2014ec0c12131dd"},{url:"/_next/static/chunks/pages/surah/%5Bnumber%5D-2427a0aa0893ef0e.js",revision:"2427a0aa0893ef0e"},{url:"/_next/static/chunks/pages/surah/%5Bnumber%5D/%5Beditions%5D-e50c831dbed7c62d.js",revision:"e50c831dbed7c62d"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/36f453e2ffa98097.css",revision:"36f453e2ffa98097"},{url:"/_next/static/css/c4e9cca15b52f6c5.css",revision:"c4e9cca15b52f6c5"},{url:"/_next/static/media/poppins-v20-latin-100.429fbaf7.svg",revision:"429fbaf7"},{url:"/_next/static/media/poppins-v20-latin-100.6cef1467.ttf",revision:"6cef1467"},{url:"/_next/static/media/poppins-v20-latin-100.7a78f1ce.woff2",revision:"7a78f1ce"},{url:"/_next/static/media/poppins-v20-latin-100.97176af2.eot",revision:"97176af2"},{url:"/_next/static/media/poppins-v20-latin-100.9ccb63d4.woff",revision:"9ccb63d4"},{url:"/_next/static/media/poppins-v20-latin-100italic.4c0c4fba.svg",revision:"4c0c4fba"},{url:"/_next/static/media/poppins-v20-latin-100italic.8d08d3b5.woff",revision:"8d08d3b5"},{url:"/_next/static/media/poppins-v20-latin-100italic.94fce579.ttf",revision:"94fce579"},{url:"/_next/static/media/poppins-v20-latin-100italic.9d47007c.woff2",revision:"9d47007c"},{url:"/_next/static/media/poppins-v20-latin-100italic.cbb19044.eot",revision:"cbb19044"},{url:"/_next/static/media/poppins-v20-latin-200.30be7726.svg",revision:"30be7726"},{url:"/_next/static/media/poppins-v20-latin-200.6e79ea70.woff",revision:"6e79ea70"},{url:"/_next/static/media/poppins-v20-latin-200.8b587a6c.ttf",revision:"8b587a6c"},{url:"/_next/static/media/poppins-v20-latin-200.a47b7d77.eot",revision:"a47b7d77"},{url:"/_next/static/media/poppins-v20-latin-200.d36a2a2b.woff2",revision:"d36a2a2b"},{url:"/_next/static/media/poppins-v20-latin-200italic.18b11e8a.ttf",revision:"18b11e8a"},{url:"/_next/static/media/poppins-v20-latin-200italic.35cfa273.svg",revision:"35cfa273"},{url:"/_next/static/media/poppins-v20-latin-200italic.bf03e4b8.eot",revision:"bf03e4b8"},{url:"/_next/static/media/poppins-v20-latin-200italic.ca421fdf.woff2",revision:"ca421fdf"},{url:"/_next/static/media/poppins-v20-latin-200italic.ee8f0b16.woff",revision:"ee8f0b16"},{url:"/_next/static/media/poppins-v20-latin-300.4d535f38.ttf",revision:"4d535f38"},{url:"/_next/static/media/poppins-v20-latin-300.622fd3d0.woff",revision:"622fd3d0"},{url:"/_next/static/media/poppins-v20-latin-300.72d5eba8.eot",revision:"72d5eba8"},{url:"/_next/static/media/poppins-v20-latin-300.9545b757.svg",revision:"9545b757"},{url:"/_next/static/media/poppins-v20-latin-300.c0455185.woff2",revision:"c0455185"},{url:"/_next/static/media/poppins-v20-latin-300italic.25a4feab.woff2",revision:"25a4feab"},{url:"/_next/static/media/poppins-v20-latin-300italic.45a3509f.svg",revision:"45a3509f"},{url:"/_next/static/media/poppins-v20-latin-300italic.a429a575.ttf",revision:"a429a575"},{url:"/_next/static/media/poppins-v20-latin-300italic.d705bc10.eot",revision:"d705bc10"},{url:"/_next/static/media/poppins-v20-latin-300italic.fc52851a.woff",revision:"fc52851a"},{url:"/_next/static/media/poppins-v20-latin-500.3d12429a.eot",revision:"3d12429a"},{url:"/_next/static/media/poppins-v20-latin-500.65a74e37.ttf",revision:"65a74e37"},{url:"/_next/static/media/poppins-v20-latin-500.7777133e.woff2",revision:"7777133e"},{url:"/_next/static/media/poppins-v20-latin-500.8e0c5c70.svg",revision:"8e0c5c70"},{url:"/_next/static/media/poppins-v20-latin-500.c470b7dc.woff",revision:"c470b7dc"},{url:"/_next/static/media/poppins-v20-latin-500italic.3aef388b.ttf",revision:"3aef388b"},{url:"/_next/static/media/poppins-v20-latin-500italic.b301c6b6.woff",revision:"b301c6b6"},{url:"/_next/static/media/poppins-v20-latin-500italic.c990b883.svg",revision:"c990b883"},{url:"/_next/static/media/poppins-v20-latin-500italic.ddd7bd64.woff2",revision:"ddd7bd64"},{url:"/_next/static/media/poppins-v20-latin-500italic.f6c05b00.eot",revision:"f6c05b00"},{url:"/_next/static/media/poppins-v20-latin-600.003b7050.eot",revision:"003b7050"},{url:"/_next/static/media/poppins-v20-latin-600.82fd56be.ttf",revision:"82fd56be"},{url:"/_next/static/media/poppins-v20-latin-600.bcc8b08c.woff",revision:"bcc8b08c"},{url:"/_next/static/media/poppins-v20-latin-600.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-v20-latin-600.e8484a10.svg",revision:"e8484a10"},{url:"/_next/static/media/poppins-v20-latin-600italic.033e7287.ttf",revision:"033e7287"},{url:"/_next/static/media/poppins-v20-latin-600italic.6f37d7ee.eot",revision:"6f37d7ee"},{url:"/_next/static/media/poppins-v20-latin-600italic.7cf643a9.woff",revision:"7cf643a9"},{url:"/_next/static/media/poppins-v20-latin-600italic.89455e86.svg",revision:"89455e86"},{url:"/_next/static/media/poppins-v20-latin-600italic.9c1560f5.woff2",revision:"9c1560f5"},{url:"/_next/static/media/poppins-v20-latin-700.77ae7268.ttf",revision:"77ae7268"},{url:"/_next/static/media/poppins-v20-latin-700.7869fcb4.eot",revision:"7869fcb4"},{url:"/_next/static/media/poppins-v20-latin-700.9a881e2a.woff2",revision:"9a881e2a"},{url:"/_next/static/media/poppins-v20-latin-700.9be4fa06.woff",revision:"9be4fa06"},{url:"/_next/static/media/poppins-v20-latin-700.b8c6abcb.svg",revision:"b8c6abcb"},{url:"/_next/static/media/poppins-v20-latin-700italic.0804e595.woff",revision:"0804e595"},{url:"/_next/static/media/poppins-v20-latin-700italic.6630cc0f.svg",revision:"6630cc0f"},{url:"/_next/static/media/poppins-v20-latin-700italic.689148d8.ttf",revision:"689148d8"},{url:"/_next/static/media/poppins-v20-latin-700italic.b5492b52.woff2",revision:"b5492b52"},{url:"/_next/static/media/poppins-v20-latin-700italic.e770cd15.eot",revision:"e770cd15"},{url:"/_next/static/media/poppins-v20-latin-800.0fa2a6e8.woff",revision:"0fa2a6e8"},{url:"/_next/static/media/poppins-v20-latin-800.376dd8dc.woff2",revision:"376dd8dc"},{url:"/_next/static/media/poppins-v20-latin-800.40c2dd55.eot",revision:"40c2dd55"},{url:"/_next/static/media/poppins-v20-latin-800.5b015672.ttf",revision:"5b015672"},{url:"/_next/static/media/poppins-v20-latin-800.6df8050a.svg",revision:"6df8050a"},{url:"/_next/static/media/poppins-v20-latin-800italic.27ce3b4d.svg",revision:"27ce3b4d"},{url:"/_next/static/media/poppins-v20-latin-800italic.305ae4d8.woff",revision:"305ae4d8"},{url:"/_next/static/media/poppins-v20-latin-800italic.7b7a65d2.eot",revision:"7b7a65d2"},{url:"/_next/static/media/poppins-v20-latin-800italic.aae01cce.woff2",revision:"aae01cce"},{url:"/_next/static/media/poppins-v20-latin-800italic.b2f7f071.ttf",revision:"b2f7f071"},{url:"/_next/static/media/poppins-v20-latin-900.259cc769.woff",revision:"259cc769"},{url:"/_next/static/media/poppins-v20-latin-900.4a909520.svg",revision:"4a909520"},{url:"/_next/static/media/poppins-v20-latin-900.bd427f25.woff2",revision:"bd427f25"},{url:"/_next/static/media/poppins-v20-latin-900.d581b137.eot",revision:"d581b137"},{url:"/_next/static/media/poppins-v20-latin-900.f472207c.ttf",revision:"f472207c"},{url:"/_next/static/media/poppins-v20-latin-900italic.13aec53b.eot",revision:"13aec53b"},{url:"/_next/static/media/poppins-v20-latin-900italic.21001ea9.svg",revision:"21001ea9"},{url:"/_next/static/media/poppins-v20-latin-900italic.870d50f6.ttf",revision:"870d50f6"},{url:"/_next/static/media/poppins-v20-latin-900italic.a26954ea.woff",revision:"a26954ea"},{url:"/_next/static/media/poppins-v20-latin-900italic.c5fa9915.woff2",revision:"c5fa9915"},{url:"/_next/static/media/poppins-v20-latin-italic.0576f4f4.woff2",revision:"0576f4f4"},{url:"/_next/static/media/poppins-v20-latin-italic.2026f79b.eot",revision:"2026f79b"},{url:"/_next/static/media/poppins-v20-latin-italic.3667e6d7.ttf",revision:"3667e6d7"},{url:"/_next/static/media/poppins-v20-latin-italic.40c25785.svg",revision:"40c25785"},{url:"/_next/static/media/poppins-v20-latin-italic.7964f696.woff",revision:"7964f696"},{url:"/_next/static/media/poppins-v20-latin-regular.4f1ebfc5.ttf",revision:"4f1ebfc5"},{url:"/_next/static/media/poppins-v20-latin-regular.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-v20-latin-regular.9529b5ca.eot",revision:"9529b5ca"},{url:"/_next/static/media/poppins-v20-latin-regular.9c06012e.svg",revision:"9c06012e"},{url:"/_next/static/media/poppins-v20-latin-regular.cc7a20fd.woff",revision:"cc7a20fd"},{url:"/data/surahs.json",revision:"046d5fe677e94768c3c37f19445f35a8"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-launchericon-144-144.png",revision:"ce129194dc75f1abde91689596661bfe"},{url:"/icons/android-launchericon-192-192.png",revision:"9d654af71b134fa04a3896c86fb1ac5c"},{url:"/icons/android-launchericon-48-48.png",revision:"7cc0ab453d0bcbe2bf5c400bd46bea07"},{url:"/icons/android-launchericon-512-512.png",revision:"d9588fbac670aede32928275cd0cc7a4"},{url:"/icons/android-launchericon-72-72.png",revision:"f4976a2d066206bcb32e18eb97cd9879"},{url:"/icons/android-launchericon-96-96.png",revision:"f7b38dc781a9b8149b375f81704e3bcb"},{url:"/icons/apple-touch-icon.png",revision:"d9588fbac670aede32928275cd0cc7a4"},{url:"/manifest.json",revision:"03307eaa8e1499bb46c4133378b7d158"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),i.cleanupOutdatedCaches(),i.registerRoute("/",new i.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:i,response:e,event:t,state:a})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),i.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new i.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),i.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new i.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),i.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new i.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),i.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new i.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new i.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\/_next\/image\?url=.+$/i,new i.StaleWhileRevalidate({cacheName:"next-image",plugins:[new i.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:mp3|wav|ogg)$/i,new i.CacheFirst({cacheName:"static-audio-assets",plugins:[new i.RangeRequestsPlugin,new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:mp4)$/i,new i.CacheFirst({cacheName:"static-video-assets",plugins:[new i.RangeRequestsPlugin,new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:js)$/i,new i.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:css|less)$/i,new i.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new i.StaleWhileRevalidate({cacheName:"next-data",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute(/\.(?:json|xml|csv)$/i,new i.NetworkFirst({cacheName:"static-data-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute((({url:i})=>{if(!(self.origin===i.origin))return!1;const e=i.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new i.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),i.registerRoute((({url:i})=>{if(!(self.origin===i.origin))return!1;return!i.pathname.startsWith("/api/")}),new i.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),i.registerRoute((({url:i})=>!(self.origin===i.origin)),new i.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));