module.exports = [
"[project]/src/pages/cell-map-designer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-solid-svg-icons [external] (@fortawesome/free-solid-svg-icons, esm_import, [project]/node_modules/@fortawesome/free-solid-svg-icons)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$29$__ = __turbopack_context__.i("[externals]/yet-another-react-lightbox [external] (yet-another-react-lightbox, esm_import, [project]/node_modules/yet-another-react-lightbox)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__ = __turbopack_context__.i("[externals]/@fortawesome/react-fontawesome [external] (@fortawesome/react-fontawesome, cjs, [project]/node_modules/@fortawesome/react-fontawesome)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__ = __turbopack_context__.i("[externals]/@fortawesome/free-brands-svg-icons [external] (@fortawesome/free-brands-svg-icons, esm_import, [project]/node_modules/@fortawesome/free-brands-svg-icons)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const images = [
    '/images/Cell-Map-Designer/1.PNG',
    '/images/Cell-Map-Designer/2.PNG'
];
const slides = images.map((src)=>({
        src
    }));
const CellMapDesigner = ()=>{
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
                    children: "Cell Map Designer"
                }, void 0, false, {
                    fileName: "[project]/src/pages/cell-map-designer.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: [
                        "Cell Map Designer è uno strumento online che permette la rappresentazione grafica di celle telefoniche e relative aree di copertura unitamente a punti di interesse.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 24,
                            columnNumber: 185
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Permette di inserire, modificare ed eliminare celle telefoniche la cui posizione è nota. Dispone di uno strumento righello per misurare le distanze.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 25,
                            columnNumber: 169
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Lo strumento consente l’importazione di più celle telefoniche tramite il caricamento di file CSV, e l’importazione ed esportazione di celle e punti di interesse tramite file GeoJSON.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 26,
                            columnNumber: 203
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Supporta l’export anche di file KML e l’importazione di overlay KMZ per la compatibilità con Google Earth.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 27,
                            columnNumber: 127
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Puoi personalizzare le icone dei punti di interesse (PoI) grazie alla libreria TomSelect e gestire le icone direttamente dalla sidebar, che ora è ridimensionabile.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 28,
                            columnNumber: 184
                        }, ("TURBOPACK compile-time value", void 0)),
                        "È possibile mostrare/nascondere celle e overlay, gestire più overlay contemporaneamente e visualizzare una tabella PoI con calcolo automatico delle aree poligonali.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 29,
                            columnNumber: 185
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Il layout è completamente responsive e sono state aggiunte numerose icone e un logo personalizzato.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 30,
                            columnNumber: 120
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Tra i miglioramenti recenti: importazione multipla di overlay, fix per la tabella PoI, ottimizzazione della gestione immagini, e pulsanti migliorati.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 31,
                            columnNumber: 170
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Il progetto è in continua evoluzione: consulta il ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "https://github.com/walker93/CellMap/blob/main/CHANGELOG.md",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "changelog"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 32,
                            columnNumber: 71
                        }, ("TURBOPACK compile-time value", void 0)),
                        " per tutte le novità."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/cell-map-designer.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        margin: '2rem 0',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "button",
                            href: "https://alexcortinovis.tech/cellmapdesigner/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$29$__["faPlay"],
                                    style: {
                                        marginRight: 8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/cell-map-designer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Provalo ora"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "button",
                            href: "https://github.com/walker93/CellMap",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                marginLeft: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$react$2d$fontawesome__$5b$external$5d$__$2840$fortawesome$2f$react$2d$fontawesome$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$externals$5d2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons__$5b$external$5d$__$2840$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$29$__["faGithub"],
                                    style: {
                                        marginRight: 8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/cell-map-designer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Vedi codice sorgente su GitHub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/cell-map-designer.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/cell-map-designer.tsx",
                    lineNumber: 34,
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
                            gap: '1rem'
                        },
                        children: images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: src,
                                alt: `Screenshot Cell Map Designer ${idx + 1}`,
                                style: {
                                    width: 320,
                                    borderRadius: 8,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    cursor: 'pointer'
                                },
                                onClick: ()=>{
                                    setPhotoIndex(idx);
                                    setLightboxOpen(true);
                                }
                            }, src, false, {
                                fileName: "[project]/src/pages/cell-map-designer.tsx",
                                lineNumber: 45,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/cell-map-designer.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/cell-map-designer.tsx",
                    lineNumber: 42,
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
                    fileName: "[project]/src/pages/cell-map-designer.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/cell-map-designer.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/pages/cell-map-designer.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CellMapDesigner;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b53a13d3._.js.map