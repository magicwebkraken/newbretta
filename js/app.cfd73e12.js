(function (e) {
    function a(a) {
        for (var t, s, i = a[0], p = a[1], d = a[2], m = 0, l = []; m < i.length; m++) s = i[m], Object.prototype.hasOwnProperty.call(o, s) && o[s] && l.push(o[s][0]), o[s] = 0;
        for (t in p) Object.prototype.hasOwnProperty.call(p, t) && (e[t] = p[t]);
        c && c(a);
        while (l.length) l.shift()();
        return n.push.apply(n, d || []), r()
    }

    function r() {
        for (var e, a = 0; a < n.length; a++) {
            for (var r = n[a], t = !0, i = 1; i < r.length; i++) {
                var p = r[i];
                0 !== o[p] && (t = !1)
            }
            t && (n.splice(a--, 1), e = s(s.s = r[0]))
        }
        return e
    }
    var t = {},
        o = {
            app: 0
        },
        n = [];

    function s(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }
    s.m = e, s.c = t, s.d = function (e, a, r) {
        s.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: r
        })
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, a) {
        if (1 & a && (e = s(e)), 8 & a) return e;
        if (4 & a && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (s.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var t in e) s.d(r, t, function (a) {
                return e[a]
            }.bind(null, t));
        return r
    }, s.n = function (e) {
        var a = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(a, "a", a), a
    }, s.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, s.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        p = i.push.bind(i);
    i.push = a, i = i.slice();
    for (var d = 0; d < i.length; d++) a(i[d]);
    var c = p;
    n.push([0, "chunk-vendors"]), r()
})({
    0: function (e, a, r) {
        e.exports = r("56d7")
    },
    "0825": function (e) {
        e.exports = JSON.parse('{"intro.enter":"Inserisci","header.menu.about_us":"Informazioni su di noi","header.menu.tokenomics":"Tokenomics","header.menu.roadmap":"Roadmap","header.menu.swap":"Scambio","header.menu.gallery":"Galleria","header.menu.whitepaper":"Whitepaper","header.menu.merch":"Merch","header.menu.nft_collection":"Collezione NFT","header.menu.coming_soon":"In arrivo, controlla la roadmap","banner.header":"Benvenuti in $BRETTA: Dove i memers incontrano la criptovaluta!","banner.buttons.buy_now":"Acquista ora","banner.buttons.chart":"Grafico","about.header":"Informazioni su di noi","about.paragraph1":"Presentiamo Bretta - un progetto guidato dalla comunità, che lotta incessantemente per la sua crescita ogni singolo giorno. Insieme, creiamo contenuti freschi, innoviamo nuove idee e coltiviamo la nostra presenza sui social media con dedizione instancabile. Il nostro obiettivo? Presentare ogni appassionato di meme coin a Bretta e raggiungere il nostro primo importante traguardo - superare una capitalizzazione di mercato di 1 trilione sulla rete Solana.","about.paragraph2":"Essendo un progetto guidato dalla comunità, il nostro cammino è segnato da obiettivi ambiziosi e dalla passione che ci spinge in avanti. Ulteriori dettagli sulla nostra visione e i nostri piani sono disponibili nel nostro whitepaper e nella roadmap. Inoltre, beneficiano del supporto e dei preziosi contributi di professionisti esperti nel settore della criptovaluta che collaborano con noi, aiutando a guidare lo sviluppo del nostro progetto.","about.paragraph3":"Unisciti alla nostra missione, unisciti a Bretta - dove insieme stiamo plasmando il futuro della finanza con uno spirito di comunità e innovazione. Inseguendo sogni insieme!","tokenomics.header":"Tokenomics","tokenomics.max_supply":"Offerta massima","tokenomics.symbol":"Simbolo","tokenomics.tax":"Tassa","tokenomics.lp_burnt":"LP Bruciato","tokenomics.lp_burnt.value":"proprietà del contratto rinunciata","tokenomics.token_address":"Indirizzo del token","tokenomics.copied":"copiato negli appunti","roadmap.header":"Roadmap","roadmap.phase1.header":"Fase 1","roadmap.phase1.subtitle":"Fondazione e Lancio","roadmap.phase1.entry1":"Costruire il Team Principale","roadmap.phase1.entry2":"Lanciare il Sito Web","roadmap.phase1.entry3":"Stabilire una Presenza sui Social Media","roadmap.phase1.entry4":"Aggiornare DexScreener e Dextools","roadmap.phase1.entry5":"Inserimento in CMC e CG","roadmap.phase1.entry6":"Collaborare con Gli Influencer","roadmap.phase2.header":"Fase 2","roadmap.phase2.subtitle":"Crescita ed Espansione","roadmap.phase2.entry1":"Marketing Post-Lancio","roadmap.phase2.entry2":"Creare ed Implementare Campagne di Marketing","roadmap.phase2.entry3":"Partnership Strategiche","roadmap.phase2.entry4":"Espansione verso il pubblico asiatico, in particolare nelle comunità cinesi","roadmap.phase2.entry5":"Prima inserzione in un Cex","roadmap.phase2.entry6":"Raggiungere più di 3.000 Titolari","roadmap.phase2.entry7":"Altre Campagne di Marketing","roadmap.phase2.entry8":"Lanciare il Negozio di Merchandising Bretta per Abbigliamento e Gadget","roadmap.phase3.header":"Fase 3","roadmap.phase3.subtitle":"Sostenibilità e Innovazione","roadmap.phase3.entry1":"Formare Alleanze di Partnership","roadmap.phase3.entry2":"Altre Collaborazioni con Gli Influencer","roadmap.phase3.entry3":"Raggiungere più di 5.000 Titolari","roadmap.phase3.entry4":"Espansione sulle Inserzioni di CEX","roadmap.phase3.entry5":"Lancio della Collezione NFT","roadmap.phase3.entry6":"Lanciare un Gioco con Tema Meme di Bretta su iOS e Android","swap.header":"Scambio","swap.how_to_buy":"Come acquistare?","swap.paragraph1":"Scarica il portafoglio Phantom sul browser o sull\'App Store e prendi un po\' di Solana!","swap.paragraph2":"Acquista un po\' di $BRETTA su uno degli scambi menzionati!","swap.paragraph3":"Ora sei pronto! Benvenuto a bordo del prossimo razzo verso la Luna!","gallery.header":"Opere della Comunità","footer.copyright":"Diritto d\'Autore","footer.all_rights_reserved":"Tutti i diritti riservati"}')
    },
    "0d69": function (e, a, r) {},
    "0ee9": function (e, a, r) {},
    "1a7d": function (e, a, r) {
        "use strict";
        r("1deb")
    },
    "1deb": function (e, a, r) {},
    "24ba": function (e, a, r) {
        "use strict";
        r("ad48")
    },
    "259f": function (e, a, r) {
        "use strict";
        r("6108")
    },
    "2dec": function (e, a) {
        e.exports = "data:image/webp;base64,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"
    },
    "32d8": function (e, a, r) {
        e.exports = r.p + "img/swap-image.b7158aeb.png"
    },
    3651: function (e, a, r) {
        e.exports = r.p + "img/telegram.308f7370.webp"
    },
    4544: function (e) {
        e.exports = JSON.parse('{"intro.enter":"प्रवेश करें","header.menu.about_us":"हमारे बारे में","header.menu.tokenomics":"टोकेनॉमिक्स","header.menu.roadmap":"रोडमैप","header.menu.swap":"स्वैप","header.menu.gallery":"गैलरी","header.menu.whitepaper":"व्हाइटपेपर","header.menu.merch":"वस्त्र","header.menu.nft_collection":"एनएफटी संग्रह","header.menu.coming_soon":"जल्द ही आ रहा है, रोडमैप देखें","banner.header":"$BRETTA में आपका स्वागत है: जहां मीमर्स क्रिप्टो से मिलते हैं!","banner.buttons.buy_now":"अभी खरीदें","banner.buttons.chart":"चार्ट","about.header":"हमारे बारे में","about.paragraph1":"ब्रेटा का परिचय - एक समुदाय द्वारा चलाया गया परियोजना, जो हर एक दिन अपने वृद्धि के लिए दिन-रात मेहनत करता है। हम साथ में ताजा सामग्री बनाते हैं, नए विचारों का नवीनीकरण करते हैं, और अविक्षोभी प्रतिष्ठा के साथ हमारी सामाजिक मीडिया पहुंच को पोषण करते हैं। हमारा लक्ष्य? हर मीम सिक्का प्रेमी को ब्रेटा से मिलाना और सोलाना नेटवर्क पर 1 ट्रिलियन मार्केट कैप को पार करना।","about.paragraph2":"एक समुदाय-प्रेरित परियोजना के रूप में, हमारा मार्ग महत्वाकांक्षी लक्ष्यों और हमें आगे बढ़ने पर प्रेरित करने वाले प्रेम से चिह्नित है। हमारे दृष्टिकोण और योजनाओं के बारे में अधिक जानकारी हमारे व्हाइटपेपर और रोडमैप में पाई जा सकती है। साथ ही, हमें क्रिप्टो उद्योग में अनुभवी पेशेवरों के समर्थन और मूल्यवान दर भागीदारी से लाभ होता है जो हमारे साथ सहयोग करते हैं, हमारे परियोजना के विकास का मार्ग दिखाने में मदद करते हैं।","about.paragraph3":"हमारे मिशन में शामिल हों, ब्रेटा में शामिल हों - जहां हम साथ में समुदाय और नवाचार की भावना के साथ वित्त के भविष्य को आकार दे रहे हैं। चलो सपने एक साथ पीछा करें!","tokenomics.header":"टोकेनॉमिक्स","tokenomics.max_supply":"अधिकतम आपूर्ति","tokenomics.symbol":"प्रतीक","tokenomics.tax":"कर","tokenomics.lp_burnt":"एलपी जली","tokenomics.lp_burnt.value":"कोन्ट्रैक्ट स्वामित्व त्याग कर दिया गया","tokenomics.token_address":"टोकन पता","tokenomics.copied":"क्लिपबोर्ड पर कॉपी हो गया","roadmap.header":"रोडमैप","roadmap.phase1.header":"चरण 1","roadmap.phase1.subtitle":"आधार और लॉन्च","roadmap.phase1.entry1":"मुख्य टीम बनाना","roadmap.phase1.entry2":"वेबसाइट जारी करना","roadmap.phase1.entry3":"सोशल मीडिया मौजूदगी स्थापित करना","roadmap.phase1.entry4":"डेक्सस्क्रीनर और डेक्सटूल्स को अपडेट करना","roadmap.phase1.entry5":"सीएमसी और सीजी सूचीबद्ध करना","roadmap.phase1.entry6":"प्रभावकारियों के साथ सहयोग करना","roadmap.phase2.header":"चरण 2","roadmap.phase2.subtitle":"वृद्धि और विस्तार","roadmap.phase2.entry1":"लॉन्च के बाद मार्केटिंग","roadmap.phase2.entry2":"मार्केटिंग योजनाएं बनाना और लागू करना","roadmap.phase2.entry3":"रणनीतिक साझेदारी","roadmap.phase2.entry4":"एशियाई दर्शक, विशेष रूप से चीनी समुदायों के प्रति प्रसारण","roadmap.phase2.entry5":"पहली सीईएक्स सूचीबद्ध करना","roadmap.phase2.entry6":"3,000+ होल्डर्स तक पहुंचना","roadmap.phase2.entry7":"अधिक मार्केटिंग अभियान","roadmap.phase2.entry8":"कपड़े और गैजेट्स के लिये ब्रेटा मर्चेंडाइज स्टोर लॉन्च करना","roadmap.phase3.header":"चरण 3","roadmap.phase3.subtitle":"स्थायित्व और नवाचार","roadmap.phase3.entry1":"साझेदारी गठबंधन बनाना","roadmap.phase3.entry2":"अधिक प्रभावकारी सहयोग","roadmap.phase3.entry3":"+5,000 होल्डर्स तक पहुंचना","roadmap.phase3.entry4":"सीईएक्स सूचीबद्धता पर विस्तार","roadmap.phase3.entry5":"एनएफटी संग्रह लॉन्च","roadmap.phase3.entry6":"आईओएस और एंड्रॉयड पर मीम-थीम्ड ब्रेटा खेल लॉन्च करना","swap.header":"स्वैप","swap.how_to_buy":"कैसे खरीदें?","swap.paragraph1":"ब्राउज़र या ऐपस्टोर पर फैंटम वॉलेट डाउनलोड करें और खुद को कुछ सोलाना प्राप्त करें!","swap.paragraph2":"किसी भी एक्सचेंज पर कुछ $BRETTA खरीदें!","swap.paragraph3":"अब आप तैयार हैं! चंद्रमा के अगले रॉकेट का स्वागत करें!","gallery.header":"समुदाय कला","footer.copyright":"कॉपीराइट","footer.all_rights_reserved":"सभी अधिकार सुरक्षित हैं"}')
    },
    "4eac": function (e, a, r) {
        e.exports = r.p + "media/this-is-bretta.a16ead5c.mp4"
    },
    "56d7": function (e, a, r) {
        "use strict";
        r.r(a);
        var t = r("7a23"),
            o = r("c156"),
            n = r.n(o),
            s = r("dfe2"),
            i = r.n(s);
        const p = {
                key: 0,
                src: n.a
            },
            d = {
                key: 1,
                src: i.a
            };

        function c(e, a, r, o, n, s) {
            const i = Object(t["n"])("Intro"),
                c = Object(t["n"])("Header"),
                m = Object(t["n"])("Banner"),
                l = Object(t["n"])("About"),
                u = Object(t["n"])("Tokenomics"),
                h = Object(t["n"])("Roadmap"),
                b = Object(t["n"])("Swap"),
                y = Object(t["n"])("Gallery"),
                g = Object(t["n"])("Socials"),
                f = Object(t["n"])("Footer");
            return Object(t["j"])(), Object(t["e"])(t["a"], null, [(Object(t["j"])(), Object(t["c"])(i, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(c, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(m, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(l, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(u, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(h, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(b, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(y, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(g, {
                key: n.lang
            })), (Object(t["j"])(), Object(t["c"])(f, {
                key: n.lang
            })), Object(t["f"])("button", {
                onClick: a[0] || (a[0] = e => s.toggleMute()),
                class: "mute"
            }, [n.muted ? Object(t["d"])("", !0) : (Object(t["j"])(), Object(t["e"])("img", p)), n.muted ? (Object(t["j"])(), Object(t["e"])("img", d)) : Object(t["d"])("", !0)])], 64)
        }
        var m = r("db7e"),
            l = r.n(m);
        const u = e => (Object(t["l"])("data-v-789dab64"), e = e(), Object(t["k"])(), e),
            h = u(() => Object(t["f"])("div", {
                class: "image-container"
            }, [Object(t["f"])("img", {
                src: l.a
            })], -1)),
            b = {
                class: "form-container"
            },
            y = Object(t["g"])('<option value="en" data-v-789dab64>English</option><option value="pl" data-v-789dab64>Polski</option><option value="in" data-v-789dab64>हिंदी</option><option value="ae" data-v-789dab64>عربي</option><option value="pt" data-v-789dab64>Português</option><option value="nl" data-v-789dab64>Nederlands</option><option value="de" data-v-789dab64>Deutsch</option><option value="es" data-v-789dab64>Español</option><option value="it" data-v-789dab64>Italiano</option><option value="fr" data-v-789dab64>Français</option><option value="ru" data-v-789dab64>Русский</option><option value="ua" data-v-789dab64>українська</option><option value="tr" data-v-789dab64>Türkçe</option><option value="cn" data-v-789dab64>中国人</option><option value="jp" data-v-789dab64>日本語</option>', 15),
            g = [y];

        function f(e, a, r, o, n, s) {
            return n.skipped ? Object(t["d"])("", !0) : (Object(t["j"])(), Object(t["e"])("div", {
                key: 0,
                id: "intro",
                class: Object(t["i"])({
                    clicked: n.clicked
                })
            }, [h, Object(t["f"])("div", b, [Object(t["q"])(Object(t["f"])("select", {
                "onUpdate:modelValue": a[0] || (a[0] = a => e.$root.lang = a)
            }, g, 512), [
                [t["p"], e.$root.lang]
            ]), Object(t["f"])("button", {
                onClick: a[1] || (a[1] = (...e) => s.onEnterClick && s.onEnterClick(...e)),
                class: Object(t["i"])({
                    clicked: n.clicked
                })
            }, Object(t["o"])(e.t("intro.enter")), 3)])], 2))
        }
        var k = {
                name: "Intro",
                data() {
                    return {
                        clicked: !1,
                        skipped: !1
                    }
                },
                methods: {
                    onEnterClick() {
                        document.querySelector("body").classList.add("initialised"), this.clicked = !0, this.$root.audio.play(), setTimeout(() => {
                            this.skipped = !0
                        }, 200)
                    }
                }
            },
            j = (r("7b01"), r("6b0d")),
            w = r.n(j);
        const v = w()(k, [
            ["render", f],
            ["__scopeId", "data-v-789dab64"]
        ]);
        var O = v;
        const S = {
                id: "header"
            },
            z = {
                class: "container"
            },
            A = {
                href: "#about"
            },
            B = {
                href: "#tokenomics"
            },
            T = {
                href: "#roadmap"
            },
            x = {
                href: "#swap"
            },
            C = {
                href: "#gallery"
            },

            M = {
                class: "coming-soon hidden-xs"
            },
            E = {
                href: "#roadmap"
            },
            L = {
                class: "coming-soon hidden-xs"
            },
            R = {
                href: "#roadmap"
            };

        function D(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("header", S, [Object(t["f"])("div", z, [Object(t["f"])("nav", null, [Object(t["f"])("ul", null, [Object(t["f"])("li", null, [Object(t["f"])("a", A, Object(t["o"])(e.t("header.menu.about_us")), 1)]), Object(t["f"])("li", null, [Object(t["f"])("a", B, Object(t["o"])(e.t("header.menu.tokenomics")), 1)]), Object(t["f"])("li", null, [Object(t["f"])("a", T, Object(t["o"])(e.t("header.menu.roadmap")), 1)]), Object(t["f"])("li", null, [Object(t["f"])("a", x, Object(t["o"])(e.t("header.menu.swap")), 1)]), Object(t["f"])("li", null, [Object(t["f"])("a", C, Object(t["o"])(e.t("header.menu.gallery")), 1)]), Object(t["f"])("li", null, [Object(t["f"])("a", P, Object(t["o"])(e.t("header.menu.whitepaper")), 1)]), Object(t["f"])("li", M, [Object(t["f"])("a", E, Object(t["o"])(e.t("header.menu.merch")), 1)]), Object(t["f"])("li", L, [Object(t["f"])("a", R, Object(t["o"])(e.t("header.menu.nft_collection")), 1)])])])])])
        }
        var G = {
            name: "Header"
        };
        r("d8ed");
        const F = w()(G, [
            ["render", D],
            ["__scopeId", "data-v-9a787f9e"]
        ]);
        var _ = F,
            J = r("ec24"),
            I = r.n(J);
        const U = e => (Object(t["l"])("data-v-34e034a9"), e = e(), Object(t["k"])(), e),
            W = {
                id: "banner"
            },
            N = {
                class: "container text-center"
            },
            Y = U(() => Object(t["f"])("img", {
                src: I.a
            }, null, -1)),
            q = {
                class: "button",
                href: "https://app.uniswap.org/explore/tokens/base/0xComingSoon?inputCurrency=NATIVE",
                target: "_blank"
            },
            K = {
                class: "button",
                href: "https://dexscreener.com/base/0xComingSoon",
                target: "_blank"
            };

        function H(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("section", W, [Object(t["f"])("div", N, [Y, Object(t["f"])("h4", null, Object(t["o"])(e.t("banner.header")), 1), Object(t["f"])("div", null, [Object(t["f"])("a", q, Object(t["o"])(e.t("banner.buttons.buy_now")), 1), Object(t["f"])("a", K, Object(t["o"])(e.t("banner.buttons.chart")), 1)])])])
        }
        var V = {
            name: "Banner"
        };
        r("1a7d");
        const Q = w()(V, [
            ["render", H],
            ["__scopeId", "data-v-34e034a9"]
        ]);
        var X = Q,
            Z = r("4eac"),
            $ = r.n(Z);
        const ee = {
                id: "about"
            },
            ae = {
                class: "container text-center"
            },
            re = Object(t["g"])('<div class="video-container" data-v-9b457bb2><div class="video-background-0" data-v-9b457bb2></div><div class="video-background-1" data-v-9b457bb2></div><div class="video-background-2" data-v-9b457bb2></div><video src="' + $.a + '" muted autoplay loop data-v-9b457bb2></video></div>', 1);

        function te(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("section", ee, [Object(t["f"])("div", ae, [Object(t["f"])("h2", null, Object(t["o"])(e.t("about.header")), 1), Object(t["f"])("p", null, Object(t["o"])(e.t("about.paragraph1")), 1), Object(t["f"])("p", null, Object(t["o"])(e.t("about.paragraph2")), 1), Object(t["f"])("p", null, Object(t["o"])(e.t("about.paragraph3")), 1), re])])
        }
        var oe = {
            name: "About"
        };
        r("ef1b");
        const ne = w()(oe, [
            ["render", te],
            ["__scopeId", "data-v-9b457bb2"]
        ]);
        var se = ne;
        const ie = e => (Object(t["l"])("data-v-4f3d47d4"), e = e(), Object(t["k"])(), e),
            pe = {
                id: "tokenomics"
            },
            de = {
                class: "container text-center"
            },
            ce = ie(() => Object(t["f"])("td", null, "1,000,000,000", -1)),
            me = ie(() => Object(t["f"])("td", null, "$Bretta", -1)),
            le = ie(() => Object(t["f"])("td", null, "0%", -1)),
            ue = {
                class: "copied"
            };

        function he(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("section", pe, [Object(t["f"])("div", de, [Object(t["f"])("h2", null, Object(t["o"])(e.t("tokenomics.header")), 1), Object(t["f"])("table", null, [Object(t["f"])("tr", null, [Object(t["f"])("th", null, [Object(t["f"])("h4", null, Object(t["o"])(e.t("tokenomics.max_supply")), 1)]), Object(t["f"])("th", null, [Object(t["f"])("h4", null, Object(t["o"])(e.t("tokenomics.symbol")), 1)]), Object(t["f"])("th", null, [Object(t["f"])("h4", null, Object(t["o"])(e.t("tokenomics.tax")), 1)]), Object(t["f"])("th", null, [Object(t["f"])("h4", null, Object(t["o"])(e.t("tokenomics.lp_burnt")), 1)])]), Object(t["f"])("tr", null, [ce, me, le, Object(t["f"])("td", null, Object(t["o"])(e.t("tokenomics.lp_burnt.value")), 1)])]), Object(t["f"])("h4", null, Object(t["o"])(e.t("tokenomics.token_address")), 1), Object(t["f"])("input", {
                type: "text",
                id: "token",
                onFocus: a[0] || (a[0] = e => e.target.select()),
                value: "0xComingSoon",
                onClick: a[1] || (a[1] = e => s.copy()),
                readonly: ""
            }, null, 32), Object(t["f"])("small", ue, Object(t["o"])(e.t("tokenomics.copied")), 1)])])
        }
        var be = {
            name: "Tokenomics",
            data() {
                return {
                    copiedTimeout: null
                }
            },
            methods: {
                copy() {
                    document.querySelector("#token").focus(), document.execCommand("copy"), document.querySelector("#token").blur(), document.querySelector(".copied").classList.add("show"), clearTimeout(this.copiedTimeout), this.copiedTimeout = setTimeout(() => {
                        document.querySelector(".copied").classList.remove("show")
                    }, 2e3)
                }
            }
        };
        r("24ba");
        const ye = w()(be, [
            ["render", he],
            ["__scopeId", "data-v-4f3d47d4"]
        ]);
        var ge = ye;
        const fe = {
                id: "roadmap"
            },
            ke = {
                class: "container text-center"
            },
            je = {
                class: "roadmap-phases-container"
            },
            we = {
                class: "checked"
            },
            ve = {
                class: "checked"
            },
            Oe = {
                class: "checked"
            },
            Se = {
                class: "checked"
            };

        function ze(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("section", fe, [Object(t["f"])("div", ke, [Object(t["f"])("h2", null, Object(t["o"])(e.t("roadmap.header")), 1), Object(t["f"])("div", je, [Object(t["f"])("div", null, [Object(t["f"])("h3", null, Object(t["o"])(e.t("roadmap.phase1.header")), 1), Object(t["f"])("h5", null, Object(t["o"])(e.t("roadmap.phase1.subtitle")), 1), Object(t["f"])("ul", null, [Object(t["f"])("li", we, Object(t["o"])(e.t("roadmap.phase1.entry1")), 1), Object(t["f"])("li", ve, Object(t["o"])(e.t("roadmap.phase1.entry2")), 1), Object(t["f"])("li", Oe, Object(t["o"])(e.t("roadmap.phase1.entry3")), 1), Object(t["f"])("li", Se, Object(t["o"])(e.t("roadmap.phase1.entry4")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase1.entry5")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase1.entry6")), 1)])]), Object(t["f"])("div", null, [Object(t["f"])("h3", null, Object(t["o"])(e.t("roadmap.phase2.header")), 1), Object(t["f"])("h5", null, Object(t["o"])(e.t("roadmap.phase2.subtitle")), 1), Object(t["f"])("ul", null, [Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry1")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry2")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry3")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry4")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry5")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry6")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry7")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase2.entry8")), 1)])]), Object(t["f"])("div", null, [Object(t["f"])("h3", null, Object(t["o"])(e.t("roadmap.phase3.header")), 1), Object(t["f"])("h5", null, Object(t["o"])(e.t("roadmap.phase3.subtitle")), 1), Object(t["f"])("ul", null, [Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase3.entry1")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase3.entry2")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase3.entry3")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase3.entry4")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase3.entry5")), 1), Object(t["f"])("li", null, Object(t["o"])(e.t("roadmap.phase3.entry6")), 1)])])])])])
        }
        var Ae = {
            name: "Roadmap"
        };
        r("5937");
        const Be = w()(Ae, [
            ["render", ze],
            ["__scopeId", "data-v-ce578108"]
        ]);
        var Te = Be,
            xe = r("32d8"),
            Ce = r.n(xe),
            Pe = r("e418"),
            Me = r.n(Pe);
        const Ee = e => (Object(t["l"])("data-v-31f9c20d"), e = e(), Object(t["k"])(), e),
            Le = {
                id: "swap"
            },
            Re = {
                class: "container text-center"
            },
            De = Object(t["g"])('<div style="display:flex;justify-content:space-between;align-items:center;" data-v-31f9c20d><div class="image-container" data-v-31f9c20d><img src="' + Ce.a + '" data-v-31f9c20d></div><div class="swap-container" data-v-31f9c20d><div id="integrated-terminal" data-v-31f9c20d></div></div></div>', 1),
            Ge = {
                style: {
                    display: "flex",
                    "justify-content": "space-between",
                    "align-items": "center"
                }
            },
            Fe = {
                style: {
                    width: "75%",
                    margin: "2rem auto"
                }
            },
            _e = {
                class: "how-to-buy-header"
            },
            Je = Ee(() => Object(t["f"])("a", {
                href: "https://phantom.app/",
                target: "_blank"
            }, [Object(t["f"])("img", {
                src: "",
                width: "200",
                style: {
                    "margin-bottom": "1.5rem"
                }
            })], -1)),
            Ie = Ee(() => Object(t["f"])("a", {
                href: "https://brettasolana.com/"
            }, [Object(t["f"])("div", {
                class: "type-bretta"
            }, "$Bretta")], -1)),
            Ue = Ee(() => Object(t["f"])("div", {
                class: "image-container"
            }, [Object(t["f"])("img", {
                src: Me.a
            })], -1));

        function We(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("section", Le, [Object(t["f"])("div", Re, [Object(t["f"])("h2", null, Object(t["o"])(e.t("swap.header")), 1), De, Object(t["f"])("div", Ge, [Object(t["f"])("div", Fe, [Object(t["f"])("h2", _e, Object(t["o"])(e.t("swap.how_to_buy")), 1), Object(t["f"])("p", null, Object(t["o"])(e.t("swap.paragraph1")), 1), Je, Object(t["f"])("p", null, Object(t["o"])(e.t("swap.paragraph2")), 1), Ie, Object(t["f"])("p", null, Object(t["o"])(e.t("swap.paragraph3")), 1)]), Ue])])])
        }
        var Ne = {
            name: "Swap",
            mounted() {
                window.Jupiter.init({
                    displayMode: "integrated",
                    integratedTargetId: "integrated-terminal",
                    endpoint: "https://api.mainnet-beta.solana.com",
                    strictTokenList: !1,
                    formProps: {
                        initialInputMint: "So11111111111111111111111111111111111111112",
                        fixedOutputMint: !0,
                        initialOutputMint: "0xComingSoon"
                    }
                })
            }
        };
        r("c808");
        const Ye = w()(Ne, [
            ["render", We],
            ["__scopeId", "data-v-31f9c20d"]
        ]);
        var qe = Ye;
        const Ke = {
                id: "gallery"
            },
            He = {
                class: "text-center"
            },
            Ve = {
                class: "scrolling-items",
                style: {
                    width: "8600px",
                    "animation-duration": "80s"
                }
            },
            Qe = {
                class: "scrolling-item"
            },
            Xe = ["src"],
            Ze = {
                class: "scrolling-item"
            },
            $e = ["src"];

        function ea(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("section", Ke, [Object(t["f"])("div", null, [Object(t["f"])("h2", He, Object(t["o"])(e.t("gallery.header")), 1), (Object(t["j"])(!0), Object(t["e"])(t["a"], null, Object(t["m"])(n.artworks, (e, a) => (Object(t["j"])(), Object(t["e"])("div", {
                class: "scroll-container",
                key: a
            }, [Object(t["f"])("div", Ve, [Object(t["f"])("div", Qe, [(Object(t["j"])(!0), Object(t["e"])(t["a"], null, Object(t["m"])(e, (e, a) => (Object(t["j"])(), Object(t["e"])("img", {
                src: e,
                key: a,
                draggable: "false",
                height: "200"
            }, null, 8, Xe))), 128))]), Object(t["f"])("div", Ze, [(Object(t["j"])(!0), Object(t["e"])(t["a"], null, Object(t["m"])(e, (e, a) => (Object(t["j"])(), Object(t["e"])("img", {
                src: e,
                key: a,
                draggable: "false",
                height: "200"
            }, null, 8, $e))), 128))])])]))), 128))])])
        }
        var aa = {
            name: "Gallery",
            data() {
                return {
                    artworks: [
                        ["/artworks/010f0b7305fd9ad3089c7e49f717544d.webp", "/artworks/2.jpg", "/artworks/2a9c69015117c6651862bdde13381b2b.webp", "/artworks/3.jpg", "/artworks/379c0ddee3953f8dab1ca4d673edb4c2.webp", "/artworks/6.jpg", "/artworks/3be08b9630398f633c3643e304e7442d.webp", "/artworks/7.jpg", "/artworks/4461435bcb7785e32faeceb5b900c847.webp", "/artworks/8.jpg", "/artworks/586d65949fa42346316fd6b279661b04.webp", "/artworks/9.jpg", "/artworks/8e4f874bd4cfa6126d773a6c41763470.webp", "/artworks/11.jpg", "/artworks/6c612b1ce8924f75f8af6e0144223537.webp", "/artworks/12.jpg", "/artworks/6fcb6487fc0fa7ef58a08f0dfb2bc7b8.webp", "/artworks/13.jpg"],
                        ["/artworks/709f8f051b4fe5c143118e90908ed232.jpg", "/artworks/14.jpg", "/artworks/7b0f3118fdeae66500f52393465ac472.webp", "/artworks/16.jpg", "/artworks/7c20017b481b8c30042b38bd0319e354.webp", "/artworks/23.jpg", "/artworks/8158843b154efa7b9023db97c711334f.webp", "/artworks/18.jpg", "/artworks/875c1fa9f11b4cd990befc8f11bb8bfe.webp", "/artworks/19.jpg", "/artworks/8823bf748805fd0a1da64602d2e9859c.webp", "/artworks/20.jpg", "/artworks/6104fa41741f8c03327a0dc5b72da854.webp", "/artworks/21.jpg", "/artworks/b0f2aa81d7448cbd6e1985efac2f4321.webp", "/artworks/22.jpg", "/artworks/b3b24e50208d3c7002469d7d2c995017.webp", "/artworks/33.jpg"],
                        ["/artworks/b5e4ab817fb659831de44266576d27b0.webp", "/artworks/24.jpg", "/artworks/b69a464df8cda2132666d7c79d6bcf51.webp", "/artworks/25.jpg", "/artworks/cebe5f875510f335099d35e81baa2ecf.webp", "/artworks/26.jpg", "/artworks/e2de9236a6bca37b711c77d14e30bbf5.webp", "/artworks/27.jpg", "/artworks/e4ed7c86b70ad371c48c9393b9033030.webp", "/artworks/28.jpg", "/artworks/e527915b1775cb98b7e2d217a5b21e14.webp", "/artworks/29.jpg", "/artworks/ed3f5ef46ae3ab0a3dcb1fd91123009d.webp", "/artworks/30.jpg", "/artworks/fa84c957dc300648322bfdd54bbb1a66.webp", "/artworks/31.jpg", "/artworks/e527915b1775cb98b7e2d217a5b21e15.png", "/artworks/17.jpg"]
                    ]
                }
            }
        };
        r("b3ab");
        const ra = w()(aa, [
            ["render", ea],
            ["__scopeId", "data-v-9aaf22c8"]
        ]);
        var ta = ra,
            oa = r("3651"),
            na = r.n(oa),
            sa = r("2dec"),
            ia = r.n(sa),
            pa = r("b3f0"),
            da = r.n(pa),
            ca = r("7ee8"),
            ma = r.n(ca),
            la = r("c1b4"),
            ua = r.n(la);
        const ha = Object(t["g"])('<div class="container text-center" data-v-6835b5c3><h5 data-v-6835b5c3></h5><a href="https://t.me/brettaon_base" target="_blank" data-v-6835b5c3><img src="' + na.a + '" data-v-6835b5c3></a><a href="https://x.com/brettaon_base" target="_blank" data-v-6835b5c3><img src="' + ia.a + '" data-v-6835b5c3></a></div>', 1),
            ba = [ha];

        function ya(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("section", null, ba)
        }
        var ga = {
            name: "Socials"
        };
        r("b1dd");
        const fa = w()(ga, [
            ["render", ya],
            ["__scopeId", "data-v-6835b5c3"]
        ]);
        var ka = fa;
        const ja = e => (Object(t["l"])("data-v-6e4edd0f"), e = e(), Object(t["k"])(), e),
            wa = {
                id: "footer"
            },
            va = {
                class: "container text-center"
            },
            Oa = ja(() => Object(t["f"])("span", {
                class: "copyright"
            }, "©", -1));

        function Sa(e, a, r, o, n, s) {
            return Object(t["j"])(), Object(t["e"])("footer", wa, [Object(t["f"])("div", va, [Object(t["h"])(Object(t["o"])(e.t("footer.copyright")) + " ", 1), Oa, Object(t["h"])(" 2026. " + Object(t["o"])(e.t("footer.all_rights_reserved")), 1)])])
        }
        var za = {
            name: "Footer"
        };
        r("259f");
        const Aa = w()(za, [
            ["render", Sa],
            ["__scopeId", "data-v-6e4edd0f"]
        ]);
        var Ba = Aa,
            Ta = {
                components: {
                    Intro: O,
                    Header: _,
                    Banner: X,
                    About: se,
                    Tokenomics: ge,
                    Roadmap: Te,
                    Swap: qe,
                    Gallery: ta,
                    Socials: ka,
                    Footer: Ba
                },
                data() {
                    return {
                        lang: "en",
                        audio: null,
                        muted: !1
                    }
                },
                methods: {
                    toggleMute() {
                        this.muted = !this.muted, this.muted ? this.audio.pause() : (this.audio.load(), this.audio.play())
                    }
                },
                mounted() {
                    this.audio = new Audio("/bretta-bgm.mp3")
                }
            };
        r("c334");
        const xa = w()(Ta, [
            ["render", c]
        ]);
        var Ca = xa,
            Pa = r("89b2"),
            Ma = r("edd4"),
            Ea = r("4544"),
            La = r("a9f1"),
            Ra = r("5d67"),
            Da = r("a625"),
            Ga = r("6ce2"),
            Fa = r("a306"),
            _a = r("0825"),
            Ja = r("f693"),
            Ia = r("7704"),
            Ua = r("94b0"),
            Wa = r("ffeb"),
            Na = r("f4a5"),
            Ya = r("9e97"),
            qa = {
                data() {
                    return {
                        translations: {
                            pl: Pa,
                            en: Ma,
                            in: Ea,
                            ae: La,
                            pt: Ra,
                            nl: Da,
                            de: Ga,
                            es: Fa,
                            it: _a,
                            fr: Ja,
                            ru: Ia,
                            ua: Ua,
                            tr: Wa,
                            cn: Na,
                            jp: Ya
                        }
                    }
                },
                methods: {
                    t: function (e) {
                        return this.translations[this.$root.lang][e]
                    }
                }
            };
        const Ka = Object(t["b"])(Ca);
        Ka.mixin(qa), Ka.mount("#app")
    },
    5937: function (e, a, r) {
        "use strict";
        r("a35d")
    },
    "5d67": function (e) {
        e.exports = JSON.parse('{"intro.enter":"Entrar","header.menu.about_us":"Sobre nós","header.menu.tokenomics":"Tokenômica","header.menu.roadmap":"Roadmap","header.menu.swap":"Troca","header.menu.gallery":"Galeria","header.menu.whitepaper":"Whitepaper","header.menu.merch":"Produtos","header.menu.nft_collection":"Coleção de NFTs","header.menu.coming_soon":"Em breve, consulte o roadmap","banner.header":"Bem-vindo ao $BRETTA: Onde os memers encontram a cripto!","banner.buttons.buy_now":"Compre agora","banner.buttons.chart":"Gráfico","about.header":"Sobre nós","about.paragraph1":"Apresentamos a Bretta - um projeto impulsionado pela comunidade, que se esforça incansavelmente por seu crescimento a cada dia. Juntos, criamos conteúdo fresco, inovamos novas ideias e nutrimos nossa presença nas redes sociais com dedicação inabalável. Nosso objetivo? Apresentar cada entusiasta de criptomoedas meme à Bretta e alcançar nosso primeiro grande marco - ultrapassar uma capitalização de mercado de 1 trilhão na rede Solana.","about.paragraph2":"Como um projeto orientado pela comunidade, nosso caminho é marcado por metas ambiciosas e pela paixão que nos impulsiona para a frente. Mais detalhes sobre nossa visão e planos podem ser encontrados em nosso whitepaper e roadmap. Além disso, beneficiamos do apoio e insights valiosos de profissionais experientes na indústria de criptomoedas que colaboram conosco, ajudando a orientar o desenvolvimento de nosso projeto.","about.paragraph3":"Junte-se à nossa missão, junte-se à Bretta - onde juntos, estamos moldando o futuro das finanças com um espírito de comunidade e inovação. Vamos perseguir sonhos juntos!","tokenomics.header":"Tokenômica","tokenomics.max_supply":"Suprimento máximo","tokenomics.symbol":"Símbolo","tokenomics.tax":"Imposto","tokenomics.lp_burnt":"LP Queimado","tokenomics.lp_burnt.value":"propriedade do contrato renunciada","tokenomics.token_address":"Endereço do Token","tokenomics.copied":"copiado para a área de transferência","roadmap.header":"Roadmap","roadmap.phase1.header":"Fase 1","roadmap.phase1.subtitle":"Fundação e Lançamento","roadmap.phase1.entry1":"Construir a Equipe Principal","roadmap.phase1.entry2":"Lançar o Site","roadmap.phase1.entry3":"Estabelecer Presença nas Redes Sociais","roadmap.phase1.entry4":"Atualizar DexScreener e Dextools","roadmap.phase1.entry5":"Listagem no CMC e CG","roadmap.phase1.entry6":"Colaborar com Influenciadores","roadmap.phase2.header":"Fase 2","roadmap.phase2.subtitle":"Crescimento e Expansão","roadmap.phase2.entry1":"Marketing pós-lançamento","roadmap.phase2.entry2":"Criar e Implementar Campanhas de Marketing","roadmap.phase2.entry3":"Parcerias Estratégicas","roadmap.phase2.entry4":"Expansão para o público asiático, especialmente as comunidades chinesas","roadmap.phase2.entry5":"Primeira listagem em CEX","roadmap.phase2.entry6":"Alcançar mais de 3.000 Detentores","roadmap.phase2.entry7":"Mais Campanhas de Marketing","roadmap.phase2.entry8":"Lançar Loja de Produtos Bretta com Roupas e Gadgets","roadmap.phase3.header":"Fase 3","roadmap.phase3.subtitle":"Sustentabilidade e Inovação","roadmap.phase3.entry1":"Formar Alianças de Parceria","roadmap.phase3.entry2":"Mais Colaborações com Influenciadores","roadmap.phase3.entry3":"Alcançar +5.000 Detentores","roadmap.phase3.entry4":"Expandir em Listagens CEX","roadmap.phase3.entry5":"Lançar Coleção de NFTs","roadmap.phase3.entry6":"Lançar Jogo Bretta Temático de Meme no iOS e Android","swap.header":"Troca","swap.how_to_buy":"Como comprar?","swap.paragraph1":"Baixe a carteira Phantom no navegador ou na App Store e compre um pouco de Solana!","swap.paragraph2":"Compre alguns $BRETTA em qualquer uma das bolsas mencionadas!","swap.paragraph3":"Agora você está pronto! Bem-vindo ao próximo foguete à lua!","gallery.header":"Arte da Comunidade","footer.copyright":"Direitos autorais","footer.all_rights_reserved":"Todos os direitos reservados"}')
    },
    6108: function (e, a, r) {},
    "6ce2": function (e) {
        e.exports = JSON.parse('{"intro.enter":"Eingeben","header.menu.about_us":"Über uns","header.menu.tokenomics":"Tokenomics","header.menu.roadmap":"Fahrplan","header.menu.swap":"Tauschen","header.menu.gallery":"Galerie","header.menu.whitepaper":"Whitepaper","header.menu.merch":"Merch","header.menu.nft_collection":"NFT-Sammlung","header.menu.coming_soon":"Demnächst, überprüfe den Fahrplan","banner.header":"Willkommen bei $BRETTA: Wo Meme-Liebhaber auf Krypto treffen!","banner.buttons.buy_now":"Jetzt kaufen","banner.buttons.chart":"Diagramm","about.header":"Über uns","about.paragraph1":"Wir stellen Bretta vor - ein von der Community getriebenes Projekt, das jeden Tag unermüdlich um sein Wachstum bemüht ist. Gemeinsam gestalten wir frische Inhalte, entwickeln neue Ideen und pflegen unsere Präsenz in sozialen Medien mit unerschütterlicher Hingabe. Unser Ziel? Jeden Meme-Coin-Enthusiasten mit Bretta vertraut zu machen und unseren ersten großen Meilenstein zu erreichen - eine Marktkapitalisierung von über 1 Billion auf dem Solana-Netzwerk zu übertreffen.","about.paragraph2":"Als gemeindegetriebenes Projekt wird unser Weg von ehrgeizigen Zielen und der Leidenschaft geprägt, die uns vorantreibt. Weitere Details zu unserer Vision und unseren Plänen finden Sie in unserem Whitepaper und Fahrplan. Darüber hinaus profitieren wir von der Unterstützung und den wertvollen Erkenntnissen erfahrener Fachleute in der Kryptoindustrie, die mit uns zusammenarbeiten und dazu beitragen, die Entwicklung unseres Projekts voran zu treiben.","about.paragraph3":"Schließe dich unserer Mission an, werde Teil von Bretta - wo wir gemeinsam die Zukunft der Finanzen mit einem Geist der Gemeinschaft und Innovation gestalten. Lass uns gemeinsam Träume verfolgen!","tokenomics.header":"Tokenomics","tokenomics.max_supply":"Maximale Versorgung","tokenomics.symbol":"Symbol","tokenomics.tax":"Steuer","tokenomics.lp_burnt":"LP Verbrannt","tokenomics.lp_burnt.value":"Vertragsübergang aufgegeben","tokenomics.token_address":"Token-Adresse","tokenomics.copied":"In die Zwischenablage kopiert","roadmap.header":"Fahrplan","roadmap.phase1.header":"Phase 1","roadmap.phase1.subtitle":"Grundlage und Start","roadmap.phase1.entry1":"Kern-Team aufbauen","roadmap.phase1.entry2":"Website veröffentlichen","roadmap.phase1.entry3":"Soziale-Medien-Präsenz aufbauen","roadmap.phase1.entry4":"DexScreener und Dextools aktualisieren","roadmap.phase1.entry5":"Listung auf CMC und CG","roadmap.phase1.entry6":"Zusammenarbeit mit Influencern","roadmap.phase2.header":"Phase 2","roadmap.phase2.subtitle":"Wachstum und Expansion","roadmap.phase2.entry1":"Marketing nach dem Start","roadmap.phase2.entry2":"Marketingkampagnen erstellen und umsetzen","roadmap.phase2.entry3":"Strategische Partnerschaften","roadmap.phase2.entry4":"Erweiterung auf das asiatische Publikum, insbesondere chinesische Gemeinden","roadmap.phase2.entry5":"Erste CEX-Listung","roadmap.phase2.entry6":"Erreiche 3.000+ Inhaber","roadmap.phase2.entry7":"Weitere Marketingkampagnen","roadmap.phase2.entry8":"Starten des Bretta-Merchandise-Shops für Kleidung und Gadgets","roadmap.phase3.header":"Phase 3","roadmap.phase3.subtitle":"Nachhaltigkeit und Innovation","roadmap.phase3.entry1":"Bildung von Partnerschaftsallianzen","roadmap.phase3.entry2":"Weitere Influencer-Kollaborationen","roadmap.phase3.entry3":"Erreiche +5.000 Inhaber","roadmap.phase3.entry4":"Erweiterung der CEX-Listungen","roadmap.phase3.entry5":"Start der NFT-Sammlung","roadmap.phase3.entry6":"Start des Meme-Themen-Bretta-Spiels auf iOS und Android","swap.header":"Tauschen","swap.how_to_buy":"Wie kaufen?","swap.paragraph1":"Laden Sie die Phantom Wallet im Browser oder im Appstore herunter und sichern Sie sich etwas Solana!","swap.paragraph2":"Kaufen Sie etwas $BRETTA an einer der genannten Börsen!","swap.paragraph3":"Jetzt sind Sie startklar! Willkommen an Bord der nächsten Rakete zum Mond!","gallery.header":"Community-Kunstwerke","footer.copyright":"Urheberrecht","footer.all_rights_reserved":"Alle Rechte vorbehalten"}')
    },
    7704: function (e) {
        e.exports = JSON.parse('{"intro.enter":"Войти","header.menu.about_us":"О нас","header.menu.tokenomics":"Токеномика","header.menu.roadmap":"Дорожная карта","header.menu.swap":"Обмен","header.menu.gallery":"Галерея","header.menu.whitepaper":"Белая бумага","header.menu.merch":"Товары","header.menu.nft_collection":"Коллекция NFT","header.menu.coming_soon":"Скоро, проверьте дорожную карту","banner.header":"Добро пожаловать в $BRETTA: Где мемеры встречают крипто!","banner.buttons.buy_now":"Купить сейчас","banner.buttons.chart":"График","about.header":"О нас","about.paragraph1":"Представляем вам проект Bretta - инициируемый сообществом, неустанно стремящийся к своему развитию каждый день. Вместе мы создаем свежий контент, разрабатываем новые идеи и развиваем наше присутствие в социальных медиа с несокрушимым усердием. Наша цель? Представить каждому энтузиасту мем-койнов проект Bretta и достичь первого крупного рубежа - превысить рыночную капитализацию в 1 триллион на сети Solana.","about.paragraph2":"Как сообщество-ориентированный проект, наш путь проложен амбициозными целями и страстью, которая толкает нас вперед. Более подробная информация о нашем видении и планах содержится в нашей белой бумаге и дорожной карте. Кроме того, мы получаем поддержку и ценные идеи опытных специалистов в индустрии криптовалют, которые сотрудничают с нами, помогая руководить развитием нашего проекта.","about.paragraph3":"Присоединяйтесь к нашей миссии, присоединяйтесь к Bretta - где вместе мы формируем будущее финансов с духом сообщества и инноваций. Давайте вместе преследуем мечты!","tokenomics.header":"Токеномика","tokenomics.max_supply":"Максимальное предложение","tokenomics.symbol":"Символ","tokenomics.tax":"Налог","tokenomics.lp_burnt":"Сожженный LP","tokenomics.lp_burnt.value":"собственность контракта отозвана","tokenomics.token_address":"Адрес токена","tokenomics.copied":"скопировано в буфер обмена","roadmap.header":"Дорожная карта","roadmap.phase1.header":"Этап 1","roadmap.phase1.subtitle":"Основы и запуск","roadmap.phase1.entry1":"Создать основную команду","roadmap.phase1.entry2":"Выпустить веб-сайт","roadmap.phase1.entry3":"Установить присутствие в социальных медиа","roadmap.phase1.entry4":"Обновить DexScreener и Dextools","roadmap.phase1.entry5":"Листинг в CMC и CG","roadmap.phase1.entry6":"Сотрудничать с инфлюенсерами","roadmap.phase2.header":"Этап 2","roadmap.phase2.subtitle":"Рост и расширение","roadmap.phase2.entry1":"Маркетинг после запуска","roadmap.phase2.entry2":"Создание и реализация маркетинговых кампаний","roadmap.phase2.entry3":"Стратегические партнерства","roadmap.phase2.entry4":"Расширение на азиатских аудиторию, особенно в китайских сообществах","roadmap.phase2.entry5":"Первый листинг на Cex","roadmap.phase2.entry6":"Достичь 3,000+ держателей","roadmap.phase2.entry7":"Дополнительные маркетинговые кампании","roadmap.phase2.entry8":"Запуск магазина товаров Bretta для одежды и гаджетов","roadmap.phase3.header":"Этап 3","roadmap.phase3.subtitle":"Устойчивость и инновации","roadmap.phase3.entry1":"Сформировать партнерские альянсы","roadmap.phase3.entry2":"Больше сотрудничеств с инфлюенсерами","roadmap.phase3.entry3":"Достичь +5,000 держателей","roadmap.phase3.entry4":"Расширение листингов на CEX","roadmap.phase3.entry5":"Запуск коллекции NFT","roadmap.phase3.entry6":"Запуск игры Bretta с мематической тематикой на iOS и Android","swap.header":"Обмен","swap.how_to_buy":"Как купить?","swap.paragraph1":"Скачайте кошелек Phantom в браузере или в App Store и приобретите немного Solana!","swap.paragraph2":"Купите немного $BRETTA на любой из упомянутых бирж!","swap.paragraph3":"Теперь вы готовы! Добро пожаловать на борт следующей ракеты к Луне!","gallery.header":"Художественное сообщество","footer.copyright":"Авторское право","footer.all_rights_reserved":"Все права защищены"}')
    },
    "7b01": function (e, a, r) {
        "use strict";
        r("9e89")
    },
    "7ee8": function (e, a, r) {
        e.exports = r.p + "img/tiktok.ec0f2619.webp"
    },
    8140: function (e, a, r) {},
    "89b2": function (e) {
        e.exports = JSON.parse('{"intro.enter":"Wejdź","header.menu.about_us":"O nas","header.menu.tokenomics":"Tokenomika","header.menu.roadmap":"Roadmap","header.menu.swap":"Wymiana","header.menu.gallery":"Galeria","header.menu.whitepaper":"Biała księga","header.menu.merch":"Towary","header.menu.nft_collection":"Kolekcja NFT","header.menu.coming_soon":"Już wkrótce, sprawdź roadmap","banner.header":"Witaj w $BRETTA: Gdzie memiarze spotykają się z krypto!","banner.buttons.buy_now":"Kup teraz","banner.buttons.chart":"Wykres","about.header":"O nas","about.paragraph1":"Przedstawiamy Bretta - projekt prowadzony przez społeczność, nieustannie dążący do wzrostu każdego dnia. Razem tworzymy świeżą treść, innowacyjne pomysły i rozwijamy naszą obecność w mediach społecznościowych z niewzruszoną oddannością. Naszym celem? Przedstawić każdemu entuzjaście memecoinów Brettę i osiągnąć nasz pierwszy znaczący etap - przekroczyć kapitalizację rynkową na poziomie 1 biliona w sieci Solana.","about.paragraph2":"Jako projekt prowadzony przez społeczność, nasza droga jest wyznaczona ambitnymi celami i pasją, która napędza nas do przodu. Więcej szczegółów na temat naszej wizji i planów znajdziesz w naszej białej księdze oraz na naszej mapie drogowej. Dodatkowo, korzystamy z wsparcia i cennych wskazówek doświadczonych profesjonalistów w branży kryptowalut, którzy współpracują z nami, pomagając kierować rozwojem naszego projektu.","about.paragraph3":"Dołącz do naszej misji, dołącz do Bretty - gdzie razem kształtujemy przyszłość finansów z duchem społeczności i innowacyjności. Spełniajmy marzenia razem!","tokenomics.header":"Tokenomika","tokenomics.max_supply":"Maksymalna ilość","tokenomics.symbol":"Symbol","tokenomics.tax":"Podatek","tokenomics.lp_burnt":"LP Spalone","tokenomics.lp_burnt.value":"przypisanie własności kontraktu","tokenomics.token_address":"Adres tokena","tokenomics.copied":"skopiowanie do schowka","roadmap.header":"Mapa drogowa","roadmap.phase1.header":"Faza 1","roadmap.phase1.subtitle":"Fundamenty i Start","roadmap.phase1.entry1":"Zbududowanie Podstawowego zespołu","roadmap.phase1.entry2":"Wydanie Strony WWW","roadmap.phase1.entry3":"Założenie Social Medii","roadmap.phase1.entry4":"Aktualizacja DexScreener i Dextools","roadmap.phase1.entry5":"Lista CMC i CG","roadmap.phase1.entry6":"Współpraca z Influencerami","roadmap.phase2.header":"Faza 2","roadmap.phase2.subtitle":"Wzrost i Ekspansja","roadmap.phase2.entry1":"Dalszy Marketing","roadmap.phase2.entry2":"Stworzenie i Wdrożenie Kampanii Marketingowych","roadmap.phase2.entry3":"Strategiczne Partnerstwa","roadmap.phase2.entry4":"Rozwinięcie w Azjatyckiej Społeczności, Szczególnie w Chinach","roadmap.phase2.entry5":"Pierwsza Listing CEX","roadmap.phase2.entry6":"Osiągnij 3000+ Posiadaczy","roadmap.phase2.entry7":"Więcej Kampanii Marketingowych","roadmap.phase2.entry8":"Uruchomienie Sklepu z Towarami Bretta z Odzieżą i Gadżetami","roadmap.phase3.header":"Faza 3","roadmap.phase3.subtitle":"Trwałość i Innowacja","roadmap.phase3.entry1":"Utworzenie Sojuszy Partnerskich","roadmap.phase3.entry2":"Więcej Współprac z Influencerami","roadmap.phase3.entry3":"Osiągnęcie 5000+ Holderów","roadmap.phase3.entry4":"Więcej listingów Cex","roadmap.phase3.entry5":"Uruchomienie Kolekcji NFT","roadmap.phase3.entry6":"Wydanie Gry Bretta z Motywem Meme na iOS i Androida","swap.header":"Wymiana","swap.how_to_buy":"Jak kupić?","swap.paragraph1":"Pobierz portfel Phantom w przeglądarce lub w sklepie aplikacji i zaopatrz się w trochę Solany!","swap.paragraph2":"Kup trochę $BRETTA na dowolnej z wymienionych giełd!","swap.paragraph3":"Teraz jesteś gotowy! Witaj na pokładzie kolejnej rakiety na Księżyc!","gallery.header":"Galeria","footer.copyright":"Copyright","footer.all_rights_reserved":"All rights reserved"}')
    },
    "94b0": function (e) {
        e.exports = JSON.parse('{"intro.enter":"Увійти","header.menu.about_us":"Про нас","header.menu.tokenomics":"Токеноміка","header.menu.roadmap":"Дорожня карта","header.menu.swap":"Обмін","header.menu.gallery":"Галерея","header.menu.whitepaper":"Біла книга","header.menu.merch":"Товари","header.menu.nft_collection":"Колекція NFT","header.menu.coming_soon":"Скоро, перевірте дорожню карту","banner.header":"Ласкаво просимо до $BRETTA: де меми зустрічають криптовалюту!","banner.buttons.buy_now":"Придбати зараз","banner.buttons.chart":"Графік","about.header":"Про нас","about.paragraph1":"Представляючи Bretta - проект, який приводиться спільнотою, нещадно прагнучи до її зростання кожен день. Разом ми створюємо новий контент, інноваційні ідеї та розвиваємо нашу присутність у соціальних мережах з невблаганою самовідданістю. Наша мета? Представити кожному прихильнику мем-монет Bretta та досягнути нашого першого великого етапу - перевершити ринкову капіталізацію в 1 трильйон на мережі Solana.","about.paragraph2":"Як проект, який приводиться спільнотою, наш шлях визначений амбіційними цілями та пристрастю, яка веде нас вперед. Додаткові відомості про наші погляди та плани можна знайти у нашій білій книзі та дорожній карті. Крім того, ми користуємося підтримкою та цінними відомостями досвідчених фахівців у криптогалузі, які співпрацюють з нами, допомагаючи керувати розвитком нашого проекту.","about.paragraph3":"Приєднуйтесь до нашої місії, приєднуйтесь до Bretta - де разом ми формуємо майбутнє фінансів з духом спільноти та інновацій. Давайте разом мріяти!","tokenomics.header":"Токеноміка","tokenomics.max_supply":"Максимальний обсяг","tokenomics.symbol":"Символ","tokenomics.tax":"Податок","tokenomics.lp_burnt":"LP спалений","tokenomics.lp_burnt.value":"власність контракту відмовлена","tokenomics.token_address":"Адреса токена","tokenomics.copied":"скопійовано в буфер обміну","roadmap.header":"Дорожня карта","roadmap.phase1.header":"Етап 1","roadmap.phase1.subtitle":"Формування та Запуск","roadmap.phase1.entry1":"Сформувати основний колектив","roadmap.phase1.entry2":"Випустити веб-сайт","roadmap.phase1.entry3":"Встановити присутність у соціальних мережах","roadmap.phase1.entry4":"Оновити DexScreener та Dextools","roadmap.phase1.entry5":"Перелік CMC та CG","roadmap.phase1.entry6":"Співпраця з впливовими особистостями","roadmap.phase2.header":"Етап 2","roadmap.phase2.subtitle":"Зростання та Розширення","roadmap.phase2.entry1":"Маркетинг після запуску","roadmap.phase2.entry2":"Створити та запровадити маркетингові кампанії","roadmap.phase2.entry3":"Стратегічні партнерства","roadmap.phase2.entry4":"Розширення на аудиторію Азії, особливо китайські спільноти","roadmap.phase2.entry5":"Перший листинг на Cex","roadmap.phase2.entry6":"Досягти понад 3,000 власників","roadmap.phase2.entry7":"Більше маркетингових кампаній","roadmap.phase2.entry8":"Запустити магазин товарів Bretta для одягу та гаджетів","roadmap.phase3.header":"Етап 3","roadmap.phase3.subtitle":"Стійкість та Інновації","roadmap.phase3.entry1":"Формування Партнерських Альянсів","roadmap.phase3.entry2":"Більше співпраць з впливовими особистостями","roadmap.phase3.entry3":"Досягти +5,000 власників","roadmap.phase3.entry4":"Розширення лістингів на CEX","roadmap.phase3.entry5":"Запуск Колекції NFT","roadmap.phase3.entry6":"Запустити мем-гру Bretta, присвячену грі на iOS та Android","swap.header":"Обмін","swap.how_to_buy":"Як придбати?","swap.paragraph1":"Завантажте гаманець Phantom у браузері або в App Store та придбайте собі трохи Solana!","swap.paragraph2":"Придбайте деякі $BRETTA на будь-якій з вказаних бірж!","swap.paragraph3":"Тепер ви готові! Ласкаво просимо на наступну ракету до місяця!","gallery.header":"Мистецтво Спільноти","footer.copyright":"Авторське право","footer.all_rights_reserved":"Усі права захищені"}')
    },
    "9e89": function (e, a, r) {},
    "9e97": function (e) {
        e.exports = JSON.parse('{"intro.enter":"入力する","header.menu.about_us":"私たちについて","header.menu.tokenomics":"トークノミクス","header.menu.roadmap":"ロードマップ","header.menu.swap":"交換する","header.menu.gallery":"ギャラリー","header.menu.whitepaper":"ホワイトペーパー","header.menu.merch":"商品","header.menu.nft_collection":"NFTコレクション","header.menu.coming_soon":"近日公開、ロードマップをご確認ください","banner.header":"$BRETTAへようこそ：メマーが仮想通貨と出会う場所！","banner.buttons.buy_now":"今すぐ購入","banner.buttons.chart":"チャート","about.header":"私たちについて","about.paragraph1":"Brettaをご紹介します - コミュニティによって推進され、毎日成長を目指してますから。一緒に新しいコンテンツを作り、新しいアイデアを開発し、熱心にソーシャルメディアで私たちの存在感を育成してきました。私たちの目標は？すべてのミームコイン愛好家にBrettaを紹介し、Solanaネットワークの1兆市場規模を超える最初の重要なマイルストーンを達成すること。","about.paragraph2":"コミュニティ主導のプロジェクトとして、我々の道は野心的な目標と、前進を促進する情熱によって印にされています。私たちのビジョンや計画の詳細については、ホワイトペーパーやロードマップで見ることができます。さらに、私たちは、共同作業してくれる暦年のプロフェッショナルたちのサポートと貴重な洞察を利用しています。彼らは私たちと協力しており、プロジェクトの発展を導くのに役立っています。","about.paragraph3":"私たちのミッションに参加してください、Brettaに参加してください - 一緒に、コミュニティとイノベーションの精神で金融の未来を形作っていきましょう。一緒に夢を追いかけましょう！","tokenomics.header":"トークノミクス","tokenomics.max_supply":"最大供給量","tokenomics.symbol":"シンボル","tokenomics.tax":"税金","tokenomics.lp_burnt":"LP燃焼","tokenomics.lp_burnt.value":"契約所有権放棄","tokenomics.token_address":"トークンアドレス","tokenomics.copied":"クリップボードにコピーされました","roadmap.header":"ロードマップ","roadmap.phase1.header":"フェーズ1","roadmap.phase1.subtitle":"基盤とローンチ","roadmap.phase1.entry1":"コアチームの構築","roadmap.phase1.entry2":"ウェブサイトの公開","roadmap.phase1.entry3":"ソーシャルメディアの存在確立","roadmap.phase1.entry4":"DexScreenerとDextoolsの更新","roadmap.phase1.entry5":"CMCとCGへのリスト掲載","roadmap.phase1.entry6":"インフルエンサーとの協力","roadmap.phase2.header":"フェーズ2","roadmap.phase2.subtitle":"成長と拡大","roadmap.phase2.entry1":"ローンチ後のマーケティング","roadmap.phase2.entry2":"マーケティングキャンペーンの作成と実施","roadmap.phase2.entry3":"戦略的なパートナーシップ","roadmap.phase2.entry4":"アジアの観客、特に中国のコミュニティに拡大","roadmap.phase2.entry5":"最初のCeXリスト掲載","roadmap.phase2.entry6":"3,000人以上のホルダーに到達","roadmap.phase2.entry7":"さらなるマーケティングキャンペーン","roadmap.phase2.entry8":"Brettaの服とガジェットのための商品ストアのローンチ","roadmap.phase3.header":"フェーズ3","roadmap.phase3.subtitle":"持続可能性とイノベーション","roadmap.phase3.entry1":"パートナーシップ提携の形成","roadmap.phase3.entry2":"インフルエンサーとのさらなる協力","roadmap.phase3.entry3":"+5,000人以上のホルダーに到達","roadmap.phase3.entry4":"CeXリスト掲載の拡大","roadmap.phase3.entry5":"NFTコレクションのローンチ","roadmap.phase3.entry6":"iOSとAndroidでメームテーマのBrettaゲームをローンチ","swap.header":"スワップ","swap.how_to_buy":"購入方法","swap.paragraph1":"ブラウザまたはAppStoreでPhantomウォレットをダウンロードし、Solanaを入手してください！","swap.paragraph2":"指定された取引所で$BRETTAを購入してください！","swap.paragraph3":"これで準備完了です！次の月へ向かうロケットへようこそ！","gallery.header":"コミュニティアート","footer.copyright":"著作権","footer.all_rights_reserved":"全著作権所有"}')
    },
    a306: function (e) {
        e.exports = JSON.parse('{"intro.enter":"Ingresar","header.menu.about_us":"Sobre nosotros","header.menu.tokenomics":"Tokenómica","header.menu.roadmap":"Hoja de ruta","header.menu.swap":"Intercambiar","header.menu.gallery":"Galería","header.menu.whitepaper":"Libro blanco","header.menu.merch":"Mercancía","header.menu.nft_collection":"Colección NFT","header.menu.coming_soon":"Próximamente, consulte la hoja de ruta","banner.header":"Bienvenido a $BRETTA: ¡Donde los creadores de memes se encuentran con la criptografía!","banner.buttons.buy_now":"Comprar ahora","banner.buttons.chart":"Gráfico","about.header":"Sobre nosotros","about.paragraph1":"Presentando Bretta, un proyecto impulsado por la comunidad, que trabaja incansablemente por su crecimiento cada día. Juntos creamos contenido fresco, innovamos nuevas ideas y cultivamos nuestra presencia en redes sociales con dedicación inquebrantable. ¿Nuestro objetivo? Presentar a cada entusiasta de las monedas meme a Bretta y alcanzar nuestro primer hito importante: superar una capitalización de mercado de 1 billón en la red Solana.","about.paragraph2":"Como proyecto impulsado por la comunidad, nuestro camino está marcado por objetivos ambiciosos y la pasión que nos impulsa hacia adelante. Más detalles sobre nuestra visión y planes se pueden encontrar en nuestro libro blanco y hoja de ruta. Además, contamos con el apoyo y valiosas ideas de profesionales experimentados en la industria de la criptografía que colaboran con nosotros, ayudando a dirigir el desarrollo de nuestro proyecto.","about.paragraph3":"Únete a nuestra misión, únete a Bretta, donde juntos estamos dando forma al futuro de las finanzas con un espíritu de comunidad e innovación. ¡Vamos a perseguir sueños juntos!","tokenomics.header":"Tokenómica","tokenomics.max_supply":"Oferta máxima","tokenomics.symbol":"Símbolo","tokenomics.tax":"Impuesto","tokenomics.lp_burnt":"LP Quemado","tokenomics.lp_burnt.value":"propiedad del contrato renunciada","tokenomics.token_address":"Dirección del token","tokenomics.copied":"copiado al portapapeles","roadmap.header":"Hoja de ruta","roadmap.phase1.header":"Fase 1","roadmap.phase1.subtitle":"Fundación y lanzamiento","roadmap.phase1.entry1":"Construir el equipo principal","roadmap.phase1.entry2":"Lanzar el sitio web","roadmap.phase1.entry3":"Establecer presencia en redes sociales","roadmap.phase1.entry4":"Actualizar DexScreener y Dextools","roadmap.phase1.entry5":"Listado en CMC y CG","roadmap.phase1.entry6":"Colaborar con influencers","roadmap.phase2.header":"Fase 2","roadmap.phase2.subtitle":"Crecimiento y expansión","roadmap.phase2.entry1":"Marketing posterior al lanzamiento","roadmap.phase2.entry2":"Crear e implementar campañas de marketing","roadmap.phase2.entry3":"Alianzas estratégicas","roadmap.phase2.entry4":"Expandirse a la audiencia asiática, especialmente a las comunidades chinas","roadmap.phase2.entry5":"Primer listado en un CEX","roadmap.phase2.entry6":"Alcanzar más de 3,000 titulares","roadmap.phase2.entry7":"Más campañas de marketing","roadmap.phase2.entry8":"Lanzar tienda de mercancía Bretta con ropa y gadgets","roadmap.phase3.header":"Fase 3","roadmap.phase3.subtitle":"Sostenibilidad e innovación","roadmap.phase3.entry1":"Formar alianzas de colaboración","roadmap.phase3.entry2":"Más colaboraciones con influencers","roadmap.phase3.entry3":"Alcanzar más de 5,000 titulares","roadmap.phase3.entry4":"Expandir los listados en CEX","roadmap.phase3.entry5":"Lanzamiento de colección NFT","roadmap.phase3.entry6":"Lanzar juego Bretta con temática de memes en iOS y Android","swap.header":"Intercambiar","swap.how_to_buy":"¿Cómo comprar?","swap.paragraph1":"¡Descarga la billetera Phantom en tu navegador o en la tienda de aplicaciones y obtén un poco de Solana!","swap.paragraph2":"¡Compra algunos $BRETTA en cualquiera de los intercambios mencionados!","swap.paragraph3":"¡Ahora estás listo! ¡Bienvenido a bordo del próximo cohete a la luna!","gallery.header":"Arte de la comunidad","footer.copyright":"Derechos de autor","footer.all_rights_reserved":"Todos los derechos reservados"}')
    },
    a35d: function (e, a, r) {},
    a625: function (e) {
        e.exports = JSON.parse('{"intro.enter":"Invoeren","header.menu.about_us":"Over ons","header.menu.tokenomics":"Tokenomics","header.menu.roadmap":"Roadmap","header.menu.swap":"Wisselen","header.menu.gallery":"Galerij","header.menu.whitepaper":"Whitepaper","header.menu.merch":"Merchandise","header.menu.nft_collection":"NFT-collectie","header.menu.coming_soon":"Binnenkort beschikbaar, controleer de roadmap","banner.header":"Welkom bij $BRETTA: waar memers de cryptowereld ontmoeten!","banner.buttons.buy_now":"Nu kopen","banner.buttons.chart":"Grafiek","about.header":"Over ons","about.paragraph1":"Maak kennis met Bretta - een project gedreven door de gemeenschap, die dag in dag uit streeft naar groei. Samen creëren we nieuwe inhoud, innoveren we nieuwe ideeën en koesteren we onze aanwezigheid op sociale media met onwankelbare toewijding. Ons doel? Elke meme coin liefhebber introduceren bij Bretta en ons eerste grote mijlpaal bereiken - een marktkapitalisatie van meer dan 1 biljoen op het Solana-netwerk overtreffen.","about.paragraph2":"Als een op gemeenschap gericht project wordt onze weg gemarkeerd door ambitieuze doelen en de passie die ons vooruit drijft. Meer details over onze visie en plannen zijn te vinden in ons whitepaper en roadmap. Daarnaast profiteren we van de steun en waardevolle inzichten van ervaren professionals in de crypto-industrie die met ons samenwerken en helpen bij de ontwikkeling van ons project.","about.paragraph3":"Sluit je aan bij onze missie, sluit je aan bij Bretta - waar we samen de toekomst van financiën vormgeven met een geest van gemeenschap en innovatie. Laten we samen dromen najagen!","tokenomics.header":"Tokenomics","tokenomics.max_supply":"Maximale levering","tokenomics.symbol":"Symbool","tokenomics.tax":"Belasting","tokenomics.lp_burnt":"LP Verbrand","tokenomics.lp_burnt.value":"contracteigendom opgegeven","tokenomics.token_address":"Token Adres","tokenomics.copied":"gekopieerd naar klembord","roadmap.header":"Roadmap","roadmap.phase1.header":"Fase 1","roadmap.phase1.subtitle":"Fundament en lancering","roadmap.phase1.entry1":"Bouw het kernteam","roadmap.phase1.entry2":"Lanceer de website","roadmap.phase1.entry3":"Vestig aanwezigheid op sociale media","roadmap.phase1.entry4":"Update DexScreener en Dextools","roadmap.phase1.entry5":"CMC- en CG-notering","roadmap.phase1.entry6":"Samenwerken met influencers","roadmap.phase2.header":"Fase 2","roadmap.phase2.subtitle":"Groei en expansie","roadmap.phase2.entry1":"Marketing na lancering","roadmap.phase2.entry2":"Creëren en implementeren van marketingcampagnes","roadmap.phase2.entry3":"Strategische partnerschappen","roadmap.phase2.entry4":"Uitbreiden naar het Aziatische publiek, vooral Chinese gemeenschappen","roadmap.phase2.entry5":"Eerste CEX-notering","roadmap.phase2.entry6":"Bereik 3.000+ Houders","roadmap.phase2.entry7":"Meer Marketingcampagnes","roadmap.phase2.entry8":"Start Bretta Merchandise Store voor kleding en gadgets","roadmap.phase3.header":"Fase 3","roadmap.phase3.subtitle":"Duurzaamheid en innovatie","roadmap.phase3.entry1":"Vorm Partnerschap Allianties","roadmap.phase3.entry2":"Meer samenwerkingen met influencers","roadmap.phase3.entry3":"Bereik +5.000 Houders","roadmap.phase3.entry4":"Uitbreiden op CEX-noteringen","roadmap.phase3.entry5":"Lancering van NFT-collectie","roadmap.phase3.entry6":"Lancering van Meme-Themed Bretta Game op iOS en Android","swap.header":"Wisselen","swap.how_to_buy":"Hoe te kopen?","swap.paragraph1":"Download Phantom wallet op de browser of in de appstore en koop wat Solana!","swap.paragraph2":"Koop wat $BRETTA op een van de genoemde beurzen!","swap.paragraph3":"Nu ben je helemaal gereed! Welkom aan boord van de volgende raket naar de maan!","gallery.header":"Gemeenschapskunst","footer.copyright":"Auteursrecht","footer.all_rights_reserved":"Alle rechten voorbehouden"}')
    },
    a9f1: function (e) {
        e.exports = JSON.parse('{"intro.enter":"أدخل","header.menu.about_us":"من نحن","header.menu.tokenomics":"اقتصاد رمزي","header.menu.roadmap":"خريطة طريق","header.menu.swap":"تبديل","header.menu.gallery":"معرض الصور","header.menu.whitepaper":"ورقة بيضاء","header.menu.merch":"منتجات تذكارية","header.menu.nft_collection":"مجموعة NFT","header.menu.coming_soon":"قريبًا، تحقق من الخريطة الزمنية","banner.header":"مرحبًا بك في رمز $BRETTA: حيث يلتقي الميمرز بالعملات المشفرة!","banner.buttons.buy_now":"اشترِ الآن","banner.buttons.chart":"رسم بياني","about.header":"من نحن","about.paragraph1":"نقدم لكم بريتا - مشروع يدفعها المجتمع، يسعى بلا كلل إلى نموه كل يوم. معًا، نقوم بتجسيد محتوى جديد، نبتكر أفكارًا جديدة، ونعزز وجودنا على وسائل التواصل الاجتماعي بتفانٍ لا يتزعزع. هدفنا؟ أن نقدم كل عاشق للعملات الميمية إلى بريتا ونحقق أول إنجاز رئيسي لنا - تجاوز الحد الأولي للقيمة السوقية بنحو تريليون دولار على شبكة سولانا.","about.paragraph2":"بوصفه مشروعًا مدفوعًا من قبل المجتمع، يتخلل طريقنا أهداف طموحة والعاطفة التي تدفعنا للأمام. يمكن العثور على مزيد من التفاصيل حول رؤيتنا وخططنا في ورقة البيضاء والخريطة الزمنية. بالإضافة إلى ذلك، نستفيد من دعم وتحليلات قيمة من المحترفين ذوي الخبرة في صناعة العملات المشفرة الذين يتعاونون معنا، للمساعدة في توجيه تطور مشروعنا.","about.paragraph3":"انضم إلى مهمتنا، انضم إلى بريتا - حيث نشكل معًا مستقبل المال بروح مجتمعية وابتكار. دعنا نحقق الأحلام معًا!","tokenomics.header":"اقتصاد رمزي","tokenomics.max_supply":"العرض الأقصى","tokenomics.symbol":"الرمز","tokenomics.tax":"ضريبة","tokenomics.lp_burnt":"تم حرق LP","tokenomics.lp_burnt.value":"التضمين الاستشاري ألغي","tokenomics.token_address":"عنوان الرمز","tokenomics.copied":"نسخ إلى الحافظة","roadmap.header":"خريطة طريق","roadmap.phase1.header":"المرحلة 1","roadmap.phase1.subtitle":"الأسس والإطلاق","roadmap.phase1.entry1":"بناء الفريق الأساسي","roadmap.phase1.entry2":"إصدار الموقع الإلكتروني","roadmap.phase1.entry3":"إنشاء وجود على وسائل التواصل الاجتماعي","roadmap.phase1.entry4":"تحديث DexScreener وDextools","roadmap.phase1.entry5":"قائمة CMC و CG","roadmap.phase1.entry6":"التعاون مع المؤثرين","roadmap.phase2.header":"المرحلة 2","roadmap.phase2.subtitle":"النمو والتوسع","roadmap.phase2.entry1":"تسويق ما بعد الإطلاق","roadmap.phase2.entry2":"إنشاء وتنفيذ حملات تسويقية","roadmap.phase2.entry3":"شراكات استراتيجية","roadmap.phase2.entry4":"التوسع في الجمهور الآسيوي، خاصة المجتمعات الصينية","roadmap.phase2.entry5":"أول قائمة Cex","roadmap.phase2.entry6":"الوصول إلى أكثر من 3،000 حائز","roadmap.phase2.entry7":"المزيد من الحملات التسويقية","roadmap.phase2.entry8":"إطلاق متجر بريتا للمنتجات التذكارية للملابس والأدوات","roadmap.phase3.header":"المرحلة 3","roadmap.phase3.subtitle":"الاستدامة والابتكار","roadmap.phase3.entry1":"تكوين تحالفات شراكة","roadmap.phase3.entry2":"المزيد من التعاون مع المؤثرين","roadmap.phase3.entry3":"الوصول إلى أكثر من 5،000 حائز","roadmap.phase3.entry4":"التوسع في قوائم CEX","roadmap.phase3.entry5":"إطلاق مجموعة NFT","roadmap.phase3.entry6":"إطلاق لعبة بريتا مستوحاة من الميمز على نظامي iOS و Android","swap.header":"تبديل","swap.how_to_buy":"كيف تشتري؟","swap.paragraph1":"قم بتنزيل محفظة Phantom على المتصفح أو على متجر التطبيقات واحصل على بعض السولانا!","swap.paragraph2":"اشترِ بعض $BRETTA على أي من التبادلات المذكورة!","swap.paragraph3":"الآن أنت جاهز تمامًا! مرحبًا على متن الصاروخ التالي إلى القمر!","gallery.header":"فنون المجتمع","footer.copyright":"حقوق النشر","footer.all_rights_reserved":"كل الحقوق محفوظة"}')
    },
    ad48: function (e, a, r) {},
    b1dd: function (e, a, r) {
        "use strict";
        r("0d69")
    },
    b3ab: function (e, a, r) {
        "use strict";
        r("0ee9")
    },
    b3f0: function (e, a) {
        e.exports = "data:image/webp;base64,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"
    },
    b566: function (e, a, r) {},
    b978: function (e, a, r) {},
    c156: function (e, a) {
        e.exports = "data:image/webp;base64,UklGRhYEAABXRUJQVlA4TAoEAAAvMEAJEGcGN7Zt18nSe/LeqwDlaoB2qYceyCDy8L69vw04sm2btsbl+7ZDduD3P/gdcPwjG9d+cCTbVq2sd/1+wV1iivkPh4jQ3a7tC8eBIEdKqdVq9Vm8ecGJ+EL8R/gMDyP2PlsRXYT3DKPWqAlgmM9/BBMEArog6NAIIhnQoJIwCYNOo+e7GMlWo9Hgn5iUQ9I1iL6iYGhUEGmGh0EbVenHnlpq5uhHkzBt+t/juivRLxRvy1kkRf8K+yP60rq2Rfgh/VSz6kJ0Q21Dt47ftoVvXurGR7/wbBbpdwoKfn4b/n4bar3w7IsFelOwXmE4DpFJjG6Xj/o5QuPxdlbu/u9eH3Qv+4mfxS+pD8t6mT17GWgyvmR8vUeIFLPG2DJD64wt0pegN3DuabOeUFFerrjUUBX8qChejoLoZCcY0Vn3ccrePE5Z9W8+vhhtoTV+S9EbDw8LwY5uNohW21+8CraWfCP5ktf/o9aK9w9qvCn10/3s4/z67CleHxx3gu3K/XlZMBbpWiMsfPj6uS+drUkhM9Jv97YSPbES/cRib136V9bJeqhPPl4eLcdgCIaRxRrgbbKgTDGCIZQMytVC7k8WMIQUYpo5WlyYB8ZziOYQqSPFJEVTbEQKUmjDIevAGuynFjTQVDA9BikIQQwiEIIQIhKJ6ZSUmMiYyFRT0sH3LgMmQSSNQh2NGG3Wv3r7XXKb/99fR+0HT/ygCVXr62b9fP5wcTftNJ4vvyeP+7NDSLS17diU5x7btm3bqMn+/ecm2/Zk27a+/uyayUf18fneI4joPyO3bSPRnc6x62T+QOws7iexcWx944kbEMl54AWAfIHcRyW8lJAuzqKzwMd/DwUavAx8bpgn0PqbQFQTGXH22fjW3gFiZpARxzEkDnDtfAukjCFDrlNALK85tr2GV66FjNHSK0CWhXns3gU24qDBS/Aq1rl9m38Nq/Jbgl+JnXhoxT2ENOsch04Cq4gMbehRL3W3hHyV2RcBjyZfG8jYnOvqzacFVxE6VbH6OZJHkTY8yLSSnD3wKlMM4X07mUHrb8G3U7H8ATLUPrSZQ2ueIE15zbqAvxPEcJ1B+GSScxJhU0TQndl+8YbEOYxPLYrjwsy/hj8T1cNFTBLCsU9CIcnmPkLCONkueJWa4joiIXKaYtVT9Sgr7sP/x7AqI902A5oBAutVMz6Bdx3apWrjlT2W0R38VkuKlY8RP55UbctdD7RJGk3cz8p9Gj5dpM2SXlU23QaipzNo15/K+dSX3QC+NPJsf4bgVnYtDKrj2PEKfuXcantOQkCl3dDM8/yHyH1Igm+R3bBb97PazB9m7zN45Vn4JZpfFHM2cpkpu98f85gr7BBGr0b6VpDQLPw/UmPnIQ=="
    },
    c1b4: function (e, a, r) {
        e.exports = r.p + "img/instagram.b1f71c61.webp"
    },
    c334: function (e, a, r) {
        "use strict";
        r("b566")
    },
    c808: function (e, a, r) {
        "use strict";
        r("8140")
    },
    d8ed: function (e, a, r) {
        "use strict";
        r("b978")
    },
    db7e: function (e, a, r) {
        e.exports = r.p + "img/bretta-intro.7f85d932.png"
    },
    dfe2: function (e, a) {
        e.exports = "data:image/webp;base64,UklGRooDAABXRUJQVlA4TH0DAAAvMEAJEBcFO5Jt1Uq/6/e5P/gjDZKHPNzdnWuHNOBIsq26aTEzK2aFbG/fW6FMzPTsurZt01nvPMV2GlAHKTdtpA//2ebTeZBr21rWHH7B3X3IUAugKebUQwXaAR2wGLkTT379/pcA/v/jfxRiUFDgDH+BAglC4I+AQIlIJyJgEGSJ3oIAAniDBDsJvHBEwAoBia5YUZRRuEK0h68X9OiseaAgWt/x3CCE2IpehvaxC74DlXrrxurn5627Oak2fD7+zipeonmK9p34KfC6NeH4IarKeVSeTwcnjKFBBFP720fymf5+fOXPr3ndCT99qdx5fVd/vhAqUHjy4m9DwNeF4FeoONxKTviMaDy+8RzdcxhCssQgpE5BmYIimU0CDYwyDr8b3h343tam6njVsnrOyxLPi5X0ME10mCaW5N1kG91obUDm155SI12kSCdsxw67vuQ+Pm9Pb2sUdMUxkhhGnkAJecmTqfAgZUXTnBGPb66TJ91wlkiFYVjE7C1iIWSsOGJlCSsM8SiKhoC0cTYZm5QNKaKYaATkvAQ0ri4ZFu863TpepcEUD7g/vz4/7eCDffqz2gVBtbXt+hpYf5nS5KA3ZlQYTXeng2Hvu3PaW4bzY6fXvscny8NOd7EvuYnlpFg9fPXXd5/DMSTatm3szdmx8TO2bdv6jThNrdRmaiO1lUft1fefJ4jovwO3bRyJTrZdv5vLI8hy5teIN56eAvftCKelZjuAi4wWG2zIteErn7laIOtzCaPpauDx9k9Go2XAwy1iNPIKuL9BjAYLgesrxMfTm4+4y0FSMP3s8Rf8FLv54XdvpbyxIfmclwwm3x/Rmflwwif9HJpkHCUyqUfaMdVUFZ7t068awK3k0TaZDTiRelrTuBai7w7cWCc1Fnj61ZqsBO5EiVqRc4gsUytpR9NC9mHr5OoSNV4hdcx0lfgC2I0SF/K0OSE1HxorBRLOEBP1hYCkHQbavvdJvE7sdL0b9XSp66ATcWdjM1Ulv6qmfhQj5Zu86PdO+g30LZW0nj0tNqiJu7Jq1ii1Zq093SfydL90Q82tZaMO183/rVRf3t0wiSz8lTL0Gniwabz820e6/AmQIRPlwJMDmn862yzMPMiK5upsSD/u5USLTTYknvdyIk+7E3GXghpsQ/HqPxXf2H1epGAc7GAlz8jEL8Sa2Y97p7zWEAA="
    },
    e418: function (e, a, r) {
        e.exports = r.p + "img/how-to-buy-image.ad78f169.png"
    },
    ec24: function (e, a, r) {
        e.exports = r.p + "img/banner.7c431099.png"
    },
    ed6a: function (e, a, r) {},
    edd4: function (e) {
        e.exports = JSON.parse('{"intro.enter":"Enter","header.menu.about_us":"About us","header.menu.tokenomics":"Tokenomics","header.menu.roadmap":"Roadmap","header.menu.swap":"Swap","header.menu.gallery":"Gallery","header.menu.whitepaper":"Whitepaper","header.menu.merch":"Merch","header.menu.nft_collection":"NFT Collection","header.menu.coming_soon":"Coming soon, check roadmap","banner.header":"Welcome to $BRETTA: Where memers meet crypto!","banner.buttons.buy_now":"Buy now","banner.buttons.chart":"Chart","about.header":"About us","about.paragraph1":"Introducing Bretta - a project driven by the community, tirelessly striving for its growth every single day. Together, we craft fresh content, innovate new ideas, and nurture our social media presence with unwavering dedication. Our aim? To introduce every meme coin enthusiast to Bretta and achieve our first major milestone - surpassing a 1 trillion market cap on the Base network.","about.paragraph2":"As a community-driven project, our path is marked by ambitious goals and the passion that propels us forward. More details about our vision and plans can be found in our whitepaper and roadmap. Additionally, we benefit from the support and valuable insights of seasoned professionals in the crypto industry who collaborate with us, helping to steer our project\'s development.","about.paragraph3":"Join our mission, join Bretta - where together, we\'re shaping the future of finance with a spirit of community and innovation. Let\'s chase dreams together!","tokenomics.header":"Tokenomics","tokenomics.max_supply":"Max supply","tokenomics.symbol":"Symbol","tokenomics.tax":"Tax","tokenomics.lp_burnt":"LP Locked","tokenomics.lp_burnt.value":"contract ownership renounced","tokenomics.token_address":"Token Address","tokenomics.copied":"copied to clipboard","roadmap.header":"Roadmap","roadmap.phase1.header":"Phase 1","roadmap.phase1.subtitle":"Foundation and Launch","roadmap.phase1.entry1":"Build the Core Team","roadmap.phase1.entry2":"Release the Website","roadmap.phase1.entry3":"Establish Social Media Presence","roadmap.phase1.entry4":"Update DexScreener and Dextools","roadmap.phase1.entry5":"CMC and CG Listing","roadmap.phase1.entry6":"Collaborate with Influencers","roadmap.phase2.header":"Phase 2","roadmap.phase2.subtitle":"Growth and Expansion","roadmap.phase2.entry1":"Post-Launch marketing","roadmap.phase2.entry2":"Create and Implement Marketing Campaigns","roadmap.phase2.entry3":"Strategic partnerships","roadmap.phase2.entry4":"Expand to the Asian audience, especially Chinese communities","roadmap.phase2.entry5":"First Cex listing","roadmap.phase2.entry6":"Reach 3,000+ Holders","roadmap.phase2.entry7":"More Marketing Campaigns","roadmap.phase2.entry8":"Launch Bretta Merchandise Store for Clothing and Gadgets","roadmap.phase3.header":"Phase 3","roadmap.phase3.subtitle":"Sustainability and Innovation","roadmap.phase3.entry1":"Form Partnership Alliances","roadmap.phase3.entry2":"More Influencer Collaborations","roadmap.phase3.entry3":"Reach +5,000 Holders","roadmap.phase3.entry4":"Expand on CEX Listings","roadmap.phase3.entry5":"NFT Collection Launch","roadmap.phase3.entry6":"Launch Meme-Themed Bretta Game on iOS and Android","swap.header":"Swap","swap.how_to_buy":"How to buy?","swap.paragraph1":"Download META wallet on browser or on the appstore and get yourself some Base ETH!","swap.paragraph2":"Buy some $BRETTA on any of the exchanges mentioned!","swap.paragraph3":"Now you are all set! Welcome aboard the next rocket to the moon!","gallery.header":"Community Arts","footer.copyright":"Copyright","footer.all_rights_reserved":"All rights reserved"}')
    },
    ef1b: function (e, a, r) {
        "use strict";
        r("ed6a")
    },
    f4a5: function (e) {
        e.exports = JSON.parse('{"intro.enter":"输入","header.menu.about_us":"关于我们","header.menu.tokenomics":"代币经济","header.menu.roadmap":"路线图","header.menu.swap":"交换","header.menu.gallery":"画廊","header.menu.whitepaper":"白皮书","header.menu.merch":"商品","header.menu.nft_collection":"NFT收藏","header.menu.coming_soon":"即将推出，请查看路线图","banner.header":"欢迎来到 $BRETTA：MEMER与加密货币的交汇之地！","banner.buttons.buy_now":"立即购买","banner.buttons.chart":"图表","about.header":"关于我们","about.paragraph1":"介绍Bretta - 一个由社区驱动的项目，每一天都在不懈努力促进其增长。我们共同创作新鲜内容，创新新思路，并以坚定的决心培养我们的社交媒体存在。我们的目标？向每个模因币爱好者介绍Bretta，实现我们的第一个重要里程碑 - 在Solana网络上市值超过1万亿美元。","about.paragraph2":"作为一个社区驱动的项目，我们的道路充满了雄心勃勃的目标和推动我们前进的激情。关于我们的愿景和计划的更多细节可以在我们的白皮书和路线图中找到。此外，我们还受益于与我们合作的加密货币行业的资深专业人士的支持和宝贵见解，他们帮助引导我们项目的发展。","about.paragraph3":"加入我们的使命，加入Bretta - 在这里，我们共同塑造金融未来，带着社区和创新精神。让我们一起追逐梦想吧！","tokenomics.header":"代币经济","tokenomics.max_supply":"最大供应量","tokenomics.symbol":"符号","tokenomics.tax":"税","tokenomics.lp_burnt":"LP销毁","tokenomics.lp_burnt.value":"合约所有权已放弃","tokenomics.token_address":"代币地址","tokenomics.copied":"已复制到剪贴板","roadmap.header":"路线图","roadmap.phase1.header":"第一阶段","roadmap.phase1.subtitle":"基石和启动","roadmap.phase1.entry1":"建立核心团队","roadmap.phase1.entry2":"发布网站","roadmap.phase1.entry3":"建立社交媒体存在","roadmap.phase1.entry4":"更新DexScreener和Dextools","roadmap.phase1.entry5":"CMC和CG上市","roadmap.phase1.entry6":"与意见领袖合作","roadmap.phase2.header":"第二阶段","roadmap.phase2.subtitle":"增长和扩展","roadmap.phase2.entry1":"发布后营销","roadmap.phase2.entry2":"制定并实施营销活动","roadmap.phase2.entry3":"战略合作伙伴关系","roadmap.phase2.entry4":"扩展到亚洲受众，特别是中国社区","roadmap.phase2.entry5":"首次中心交易所上市","roadmap.phase2.entry6":"达到3,000+持有者","roadmap.phase2.entry7":"更多营销活动","roadmap.phase2.entry8":"为服装和小工具发布Bretta商品店","roadmap.phase3.header":"第三阶段","roadmap.phase3.subtitle":"可持续性和创新","roadmap.phase3.entry1":"建立合作联盟","roadmap.phase3.entry2":"更多意见领袖合作","roadmap.phase3.entry3":"达到+5,000持有者","roadmap.phase3.entry4":"扩展中心交易所上市","roadmap.phase3.entry5":"NFT收藏品发布","roadmap.phase3.entry6":"在iOS和Android上发布以模因为主题的Bretta游戏","swap.header":"交换","swap.how_to_buy":"如何购买？","swap.paragraph1":"在浏览器或应用商店下载Phantom钱包，并获取一些Solana！","swap.paragraph2":"在任何提到的交易所购买一些$BRETTA！","swap.paragraph3":"现在您已准备就绪！欢迎登上下一架飞往月球的火箭！","gallery.header":"社区艺术品","footer.copyright":"版权","footer.all_rights_reserved":"保留所有权利"}')
    },
    f693: function (e) {
        e.exports = JSON.parse('{"intro.enter":"Entrer","header.menu.about_us":"À propos de nous","header.menu.tokenomics":"Tokenomie","header.menu.roadmap":"Feuille de route","header.menu.swap":"Échanger","header.menu.gallery":"Galerie","header.menu.whitepaper":"Livre blanc","header.menu.merch":"Marchandise","header.menu.nft_collection":"Collection NFT","header.menu.coming_soon":"Bientôt disponible, vérifiez la feuille de route","banner.header":"Bienvenue sur $BRETTA : Où les créateurs de mèmes rencontrent la cryptomonnaie !","banner.buttons.buy_now":"Acheter maintenant","banner.buttons.chart":"Graphique","about.header":"À propos de nous","about.paragraph1":"Nous vous présentons Bretta - un projet porté par la communauté, œuvrant sans relâche pour sa croissance chaque jour. Ensemble, nous créons du contenu frais, innovons de nouvelles idées et cultivons notre présence sur les réseaux sociaux avec une dédicaution inébranlable. Notre objectif ? Présenter chaque passionné de cryptomonnaie mème à Bretta et atteindre notre premier jalon majeur - dépasser une capitalisation boursière de 1 trillion sur le réseau Solana.","about.paragraph2":"En tant que projet piloté par la communauté, notre chemin est marqué par des objectifs ambitieux et la passion qui nous propulse en avant. Plus de détails sur notre vision et nos plans sont disponibles dans notre livre blanc et notre feuille de route. De plus, nous bénéficions du soutien et des précieuses idées de professionnels chevronnés de l\'industrie de la cryptomonnaie qui collaborent avec nous, aidant à orienter le développement de notre projet.","about.paragraph3":"Rejoignez notre mission, rejoignez Bretta - où ensemble, nous façonnons l\'avenir de la finance avec un esprit de communauté et d\'innovation. Poursuivons nos rêves ensemble!","tokenomics.header":"Tokenomie","tokenomics.max_supply":"Offre maximale","tokenomics.symbol":"Symbole","tokenomics.tax":"Taxe","tokenomics.lp_burnt":"LP Brûlé","tokenomics.lp_burnt.value":"propriété du contrat abandonnée","tokenomics.token_address":"Adresse du jeton","tokenomics.copied":"copié dans le presse-papiers","roadmap.header":"Feuille de route","roadmap.phase1.header":"Phase 1","roadmap.phase1.subtitle":"Fondation et Lancement","roadmap.phase1.entry1":"Constituer l\'équipe centrale","roadmap.phase1.entry2":"Lancer le site web","roadmap.phase1.entry3":"Établir une présence sur les réseaux sociaux","roadmap.phase1.entry4":"Mise à jour de DexScreener et Dextools","roadmap.phase1.entry5":"Inscription sur CMC et CG","roadmap.phase1.entry6":"Collaborer avec des influenceurs","roadmap.phase2.header":"Phase 2","roadmap.phase2.subtitle":"Croissance et Expansion","roadmap.phase2.entry1":"Marketing post-lancement","roadmap.phase2.entry2":"Créer et mettre en œuvre des campagnes de marketing","roadmap.phase2.entry3":"Partenariats stratégiques","roadmap.phase2.entry4":"Expansion vers le public asiatique, en particulier les communautés chinoises","roadmap.phase2.entry5":"Première inscription sur une bourse centralisée","roadmap.phase2.entry6":"Atteindre plus de 3 000 détenteurs","roadmap.phase2.entry7":"Plus de campagnes de marketing","roadmap.phase2.entry8":"Lancer la boutique de marchandises Bretta pour vêtements et gadgets","roadmap.phase3.header":"Phase 3","roadmap.phase3.subtitle":"Durabilité et Innovation","roadmap.phase3.entry1":"Former des alliances de partenariat","roadmap.phase3.entry2":"Plus de collaborations avec des influenceurs","roadmap.phase3.entry3":"Atteindre plus de 5 000 détenteurs","roadmap.phase3.entry4":"Élargir les inscriptions sur des bourses centralisées","roadmap.phase3.entry5":"Lancement de la collection NFT","roadmap.phase3.entry6":"Lancer un jeu Bretta à thème mème sur iOS et Android","swap.header":"Échanger","swap.how_to_buy":"Comment acheter ?","swap.paragraph1":"Téléchargez le portefeuille Phantom sur votre navigateur ou sur l\'App Store et procurez-vous quelques Solana !","swap.paragraph2":"Achetez des $BRETTA sur l\'une des bourses mentionnées !","swap.paragraph3":"Maintenant, vous êtes prêt ! Bienvenue à bord du prochain rocket pour la lune !","gallery.header":"Arts de la communauté","footer.copyright":"Droits d\'auteur","footer.all_rights_reserved":"Tous droits réservés"}')
    },
    ffeb: function (e) {
        e.exports = JSON.parse('{"intro.enter":"Giriş","header.menu.about_us":"Hakkımızda","header.menu.tokenomics":"Tokenomikler","header.menu.roadmap":"Yol Haritası","header.menu.swap":"Değiş Tokuş","header.menu.gallery":"Galeri","header.menu.whitepaper":"Beyaz Kağıt","header.menu.merch":"Ürünler","header.menu.nft_collection":"NFT Koleksiyonu","header.menu.coming_soon":"Yakında gelecek, yol haritasına göz atın","banner.header":"$BRETTA\'ya Hoş Geldiniz: Meme severlerin kripto ile buluştuğu yer!","banner.buttons.buy_now":"Şimdi Satın Al","banner.buttons.chart":"Grafik","about.header":"Hakkımızda","about.paragraph1":"Bretta\'yı tanıtıyoruz - topluluk tarafından yönlendirilen, büyümesi için her gün gayretle çalışan bir proje. Birlikte taze içerikler oluşturuyor, yeni fikirler geliştiriyor ve sosyal medya varlığımızı kararlılıkla besliyoruz. Amacımız? Her meme coin meraklısını Bretta ile tanıştırmak ve Solana ağındaki 1 trilyon dolarlık piyasa değeri aşma hedefimize ulaşmaktır.","about.paragraph2":"Topluluk odaklı bir proje olarak, yolculuğumuz iddialı hedefler ve bizi ileriye iten tutku ile işaretlenmiştir. Vizyonumuz ve planlarımızla ilgili daha fazla ayrıntıyı, beyaz kağıdımızda ve yol haritamızda bulabilirsiniz. Ayrıca, kripto endüstrisinde deneyimli profesyonellerden aldığımız destek ve değerli görüşlerle işbirliği yaparak projemizin gelişimine yön vermemize yardımcı oluyoruz.","about.paragraph3":"Misyonumuza katılın, Bretta\'ya katılın - birlikte, toplum ve yenilik ruhuyla finansın geleceğini şekillendiriyoruz. Birlikte hayallerin peşinden koşalım!","tokenomics.header":"Tokenomikler","tokenomics.max_supply":"Maksimum Arz","tokenomics.symbol":"Sembol","tokenomics.tax":"Vergi","tokenomics.lp_burnt":"LP Yakıldı","tokenomics.lp_burnt.value":"sözleşme sahipliği terk edildi","tokenomics.token_address":"Token Adresi","tokenomics.copied":"panoya kopyalandı","roadmap.header":"Yol Haritası","roadmap.phase1.header":"Faz 1","roadmap.phase1.subtitle":"Temel ve Başlangıç","roadmap.phase1.entry1":"Çekirdek Ekibi Oluştur","roadmap.phase1.entry2":"Web Sitesini Yayınlama","roadmap.phase1.entry3":"Sosyal Medya Varlığını Kurma","roadmap.phase1.entry4":"DexScreener ve Dextools\'u Güncelleme","roadmap.phase1.entry5":"CMC ve CG Listesi","roadmap.phase1.entry6":"Etkileyicilerle İşbirliği","roadmap.phase2.header":"Faz 2","roadmap.phase2.subtitle":"Büyüme ve Genişleme","roadmap.phase2.entry1":"Lansman Sonrası Pazarlama","roadmap.phase2.entry2":"Pazarlama Kampanyaları Oluşturma ve Uygulama","roadmap.phase2.entry3":"Stratejik Ortaklıklar","roadmap.phase2.entry4":"Özellikle Çin toplulukları olmak üzere Asya izleyicisine genişleme","roadmap.phase2.entry5":"İlk Cex listeleme","roadmap.phase2.entry6":"3,000+ Sahibine Ulaşma","roadmap.phase2.entry7":"Daha Fazla Pazarlama Kampanyası","roadmap.phase2.entry8":"Bretta Giyim ve Gadget\'lar için Mağaza Açma","roadmap.phase3.header":"Faz 3","roadmap.phase3.subtitle":"Sürdürülebilirlik ve İnovasyon","roadmap.phase3.entry1":"Ortaklık İttifakları Oluşturma","roadmap.phase3.entry2":"Daha Fazla Etkileyici İşbirlikleri","roadmap.phase3.entry3":"+5,000 Sahibine Ulaşma","roadmap.phase3.entry4":"CEX Listelerinde Genişleme","roadmap.phase3.entry5":"NFT Koleksiyonu Lansmanı","roadmap.phase3.entry6":"iOS ve Android\'de Meme Temalı Bretta Oyunu Başlatma","swap.header":"Değiş Tokuş","swap.how_to_buy":"Nasıl satın alabilirim?","swap.paragraph1":"Tarayıcıda veya uygulama mağazasında Phantom cüzdanını indirin ve kendinize bir miktar Solana alın!","swap.paragraph2":"Yukarıda belirtilen herhangi bir borsada biraz $BRETTA alın!","swap.paragraph3":"Şimdi hazırsınız! Ay\'a doğru yolculuğa hoş geldiniz!","gallery.header":"Topluluk Sanatları","footer.copyright":"Telif Hakkı","footer.all_rights_reserved":"Tüm hakları saklıdır"}')
    }
});
//# sourceMappingURL=app.cfd73e12.js.map