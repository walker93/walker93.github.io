module.exports = [
"[project]/src/pages/forensic-imap-downloader.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$29$__ = __turbopack_context__.i("[externals]/yet-another-react-lightbox [external] (yet-another-react-lightbox, esm_import, [project]/node_modules/yet-another-react-lightbox)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, cjs, [project]/node_modules/@fortawesome/react-fontawesome)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-brands-svg-icons [external] (@fortawesome/free-brands-svg-icons, esm_import, [project]/node_modules/@fortawesome/free-brands-svg-icons)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const images = [
    '/images/Forensic-IMAP-Downloader/1.JPG',
    '/images/Forensic-IMAP-Downloader/2.JPG',
    '/images/Forensic-IMAP-Downloader/3.JPG',
    '/images/Forensic-IMAP-Downloader/4.JPG',
    '/images/Forensic-IMAP-Downloader/5.JPG',
    '/images/Forensic-IMAP-Downloader/6.JPG',
    '/images/Forensic-IMAP-Downloader/7.JPG',
    '/images/Forensic-IMAP-Downloader/8.JPG'
];
const slides = images.map((src)=>({
        src
    }));
const ForensicImapDownloader = ()=>{
    const [lightboxOpen, setLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [photoIndex, setPhotoIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 1080,
            margin: '0 auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                padding: '1rem 2rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    children: "Forensic IMAP Downloader"
                }, void 0, false, {
                    fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: [
                        "Forensic IMAP Downloader è un programma che permette il download di e-mail da server IMAP in modo forense.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                            lineNumber: 27,
                            columnNumber: 127
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Permette di impostare filtri e di scaricare solamente le e-mail di interesse, supporta download simultanei e offre la possibilità di interrompere e riprendere il download.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                            lineNumber: 28,
                            columnNumber: 192
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Al termine inserisce i file scaricati in un archivio .zip e ne calcola l’HASH SHA-1.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                            lineNumber: 29,
                            columnNumber: 105
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Tutti i passaggi sono inoltre dettagliati all’interno di un report finale.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                            lineNumber: 30,
                            columnNumber: 95
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        margin: '2rem 0',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        className: "button",
                        href: "https://github.com/walker93/Forensic-Imap-Downloader",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__["faGithub"],
                                style: {
                                    marginRight: 8
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Vedi codice sorgente su GitHub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        margin: '2rem 0'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        },
                        children: images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: src,
                                alt: `Screenshot Forensic IMAP Downloader ${idx + 1}`,
                                style: {
                                    width: 320,
                                    borderRadius: 8,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    marginBottom: '1rem'
                                },
                                onClick: ()=>{
                                    setPhotoIndex(idx);
                                    setLightboxOpen(true);
                                }
                            }, src, false, {
                                fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                                lineNumber: 40,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$29$__["default"], {
                    open: lightboxOpen,
                    close: ()=>setLightboxOpen(false),
                    slides: slides,
                    index: photoIndex,
                    on: {
                        view: ({ index })=>setPhotoIndex(index ?? 0)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/pages/forensic-imap-downloader.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ForensicImapDownloader;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__47482489._.js.map