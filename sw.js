/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/12/hello-world/index.html","5422d42a081321a1eddd90ccbd5ce938"],["/2017/02/hexo-blog-install/index.html","61eb639e054be4556e524195f3232d9c"],["/2017/02/setup/index.html","e564e545502dbd47206fb4592e0bb5f9"],["/2017/03/css-note/index.html","7bc13e4df360405899613e770091ee28"],["/2017/03/enhance-efficiency/index.html","fae434218ed8e194e6e80b2fe03f2bba"],["/2017/03/google-hack/index.html","42d5f3024ef9515de6fb51282496dce4"],["/2017/03/html-note/index.html","096b2ad2cd16fd8e5e3cbf613c2d180b"],["/2017/03/learn-method/index.html","b81a9b4108e8c120de383825594516d2"],["/2017/03/linux-question-solve/index.html","cdef4bdc050a082f8f663323e909e419"],["/2017/03/seo-note/index.html","1a6ec80a2278c198a5b1b6f0e384644d"],["/2017/04/css-3d/index.html","939eeb6ad7f39aafc7433887cc90d5a8"],["/2017/04/fcc-note-1/index.html","04d434d76dc2221770833375c372ff54"],["/2017/04/html-store/index.html","0af542acb2e7b473dd897de5aa9dd5cd"],["/2017/04/js-chess/index.html","a5a5fa09851cd46950256b74d25c2e25"],["/2017/04/kali-linux-install/index.html","287fc1431ab2ff019e1a9d6225be04a8"],["/2017/05/fcc-note-2/index.html","9a2370704634451322d24893659c7de9"],["/2017/05/js-algorithms-1/index.html","420d7585fddd615a9c229d1efc2fa1e3"],["/2017/07/js-algorithms-2/index.html","387e53a1fe1b4b9e17bc5adffa03305d"],["/2017/07/mongo-note/index.html","08a8f15b9b7bc3cdf39cae564e0c20fd"],["/2017/09/mapreduce-note/index.html","ae23a38b4142f8de9cce7c37878a54f6"],["/2017/12/js-lunbo/index.html","b97d725f2472a4423ecfa0667668926b"],["/404.html","4c6d2934783e7b3afc9ec811ee89d348"],["/about/index.html","a528e03d29fc7d23b01b30a395773402"],["/archives/index.html","99845ab610a21496b3189ac14822d31b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_3NWlza1HUZ.html","6c8b19ba7bfe0792e2b0d2496aa2bb47"],["/categories/Linux/index.html","f50bc39d151d91bd8cea1b079348eb32"],["/categories/blog/index.html","6711143b1bc7e62554c662d9b9b5f3fa"],["/categories/index.html","83d126b459c6a22cdb28112ea7f574ef"],["/categories/web/index.html","7c6ae8536426312b5cbbdd20e35d1249"],["/categories/web前端/index.html","635d56a346462bf894b948c286eee167"],["/categories/大数据/index.html","88d0bee4a8be6860fb12e0b90a601fb9"],["/categories/数据库/index.html","23ddca95294d7e63be552bc88a809d90"],["/categories/方法/index.html","23525b1cb83f933fac57e1d781294a58"],["/categories/方法论/index.html","d56f8b32f93854bf6d4756bd978885e8"],["/css/main.css","dcd1fd97c9fd1e80f8e190b0c403fe0d"],["/fonts/ComicNeue-Angular-Bold-Oblique.eot","40788a0a7b51a92389dad8b159492cb8"],["/fonts/ComicNeue-Angular-Bold-Oblique.ttf","7afa6bfc716544b765ad5d7bd61aa390"],["/fonts/ComicNeue-Angular-Bold-Oblique.woff","6c33764ad65ce89edd41147ec0f3541c"],["/fonts/ComicNeue-Angular-Bold-Oblique.woff2","31c870940de1afec23fc652600966664"],["/fonts/ComicNeue-Angular-Bold.eot","97bfd2726c48f293231900ed552e5fd9"],["/fonts/ComicNeue-Angular-Bold.ttf","3b3e96b257325929065b67d0b418b975"],["/fonts/ComicNeue-Angular-Bold.woff","fdfdec9d0b7dfa91fbe11dc2ec50473d"],["/fonts/ComicNeue-Angular-Bold.woff2","c58b01776b2adea50f334750eae72767"],["/fonts/ComicNeue-Angular-Light-Oblique.eot","d6047d25084572d7df4f0de2096b6703"],["/fonts/ComicNeue-Angular-Light-Oblique.ttf","4c9956b9278836ef07a7a806f45b264a"],["/fonts/ComicNeue-Angular-Light-Oblique.woff","4bf616657aa13c10ad173b7b738f2bab"],["/fonts/ComicNeue-Angular-Light-Oblique.woff2","3c074df0239e43a1f33f53483e4bc6bf"],["/fonts/ComicNeue-Angular-Light.eot","008b2822ea0c1c160df2b5ea2991a438"],["/fonts/ComicNeue-Angular-Light.ttf","43c1e8a3968b7fbdc2d98d1ca5dee684"],["/fonts/ComicNeue-Angular-Light.woff","34d7b4224ea5bbd30e4a3fbe8cc8a5e0"],["/fonts/ComicNeue-Angular-Light.woff2","f368a66f957ac4eb4e7f71fbfbbdb101"],["/fonts/ComicNeue-Angular-Regular-Oblique.eot","3e8299e59ae27259e71248832f99786c"],["/fonts/ComicNeue-Angular-Regular-Oblique.ttf","099285f76101ec3291f80cccdca21bdb"],["/fonts/ComicNeue-Angular-Regular-Oblique.woff","00f0e24953b6d6e71ca0891f974bfbdf"],["/fonts/ComicNeue-Angular-Regular-Oblique.woff2","808aab8b0462213b283ab1c0fea3c1d3"],["/fonts/ComicNeue-Angular-Regular.eot","3c6797b44cf639f15d940d5321a49a29"],["/fonts/ComicNeue-Angular-Regular.ttf","96e329b344475cfedef1867f8e002bee"],["/fonts/ComicNeue-Angular-Regular.woff","dec91b007193eb99bfb669e023356495"],["/fonts/ComicNeue-Angular-Regular.woff2","7b8d6bcdc8cb7acdb218aa5e314ac135"],["/fonts/ComicNeue-Bold-Oblique.eot","9623a2602e23e010df808efd573ded50"],["/fonts/ComicNeue-Bold-Oblique.ttf","6a2b4e115cc960db3e5fde8d95e82b6d"],["/fonts/ComicNeue-Bold-Oblique.woff","933e67b18c88f48694adcf02e9340a57"],["/fonts/ComicNeue-Bold-Oblique.woff2","65fd4add501504ffe42281c7c7f0b892"],["/fonts/ComicNeue-Bold.eot","a89b0d636179e835f1038cc1e7b11682"],["/fonts/ComicNeue-Bold.ttf","bb59dfb0d7fa8a0c9b7d431f94ff3d6d"],["/fonts/ComicNeue-Bold.woff","df4f1f0b09e7dcbf110e77a1a5ad936d"],["/fonts/ComicNeue-Bold.woff2","d8a5434f588f9e0f80e095907e6455d0"],["/fonts/ComicNeue-Light-Oblique.eot","3aed4284b4bf38f4ab7709f69a752ae2"],["/fonts/ComicNeue-Light-Oblique.ttf","805069ddfd6bdf57e01089ca90bb866f"],["/fonts/ComicNeue-Light-Oblique.woff","3b44b933104258988d9b125b71ac502f"],["/fonts/ComicNeue-Light-Oblique.woff2","5fcb8adbe863b29fb8f8695aae420e04"],["/fonts/ComicNeue-Light.eot","0e04ebae206c1fe27867e13405072635"],["/fonts/ComicNeue-Light.ttf","27219ea5f3a25dbf3a05903f34ed5bd6"],["/fonts/ComicNeue-Light.woff","780c9f200bbdd3ba13ac9464921ecabf"],["/fonts/ComicNeue-Light.woff2","1b00e4ccf3ff437d92a6958ca0660a73"],["/fonts/ComicNeue-Regular-Oblique.eot","07244e74afacb190403cc2028d56f2ab"],["/fonts/ComicNeue-Regular-Oblique.ttf","b0e3f8f6249f0bb895cd2f96fffee6cd"],["/fonts/ComicNeue-Regular-Oblique.woff","79cbff272c3231694b9d1dd44f8f38fc"],["/fonts/ComicNeue-Regular-Oblique.woff2","00110028a3c3c5fb1e3691d4de42a9ed"],["/fonts/ComicNeue-Regular.eot","3f916f08fa680d8e9ed4d8eaa4614629"],["/fonts/ComicNeue-Regular.ttf","c7823c53863f1386e0154142369242d6"],["/fonts/ComicNeue-Regular.woff","0689422546d69a1a7cffeff379ab42a0"],["/fonts/ComicNeue-Regular.woff2","884ec2a2c477fc7a6681218180011ac1"],["/fonts/font.css","b75a0621de61aaa3198b86ef16dae212"],["/guestbook/index.html","b4c8038ecd574246586738b70c159a39"],["/images/QRcode.svg","dbcc882694b4c7e7ea444fcc7b6fc7d4"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/html-store/H51.jpg","9eb4ba5a95500c05af31d8e4213787f6"],["/images/html-store/H52.jpg","c9c9297860cb29f7669db0e0cf9ba516"],["/images/html-store/IndexedSQL.jpg","f6dd110a59bd9a9dc17cb782b5cf9bec"],["/images/icons/icon-128x128.png","e3b73bed589b8668cfb22689844cad91"],["/images/icons/icon-144x144.png","7d513e9d4c40c932e19003746fb449db"],["/images/icons/icon-152x152.png","041aaec9f001927a2ea2a9f02d266a8a"],["/images/icons/icon-72x72.png","901bddfccbbd720d9ada030274e90289"],["/images/icons/icon-96x96.png","1dce7fa7ee0ad689648b4e094697c317"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/mr-learn/HDFS.png","8dee230ff560ed8a446cdb201bb6776c"],["/images/mr-learn/MR1.png","bc0c135f5a655e2532c5de84d1c416ea"],["/images/mr-learn/MR10.png","5cb62d578f308a9e1cd74e9544714b42"],["/images/mr-learn/MR11.png","17a3469c9a7cf581bf108db879dbb98b"],["/images/mr-learn/MR12.png","40b01a18ab6a7cc7a9ace2a9f5934ced"],["/images/mr-learn/MR13.png","b1e59d1e062c9cb5102f96379cb219c7"],["/images/mr-learn/MR14.png","a9ceb9fe7be41e5d57400206871155da"],["/images/mr-learn/MR2.png","0dd9ae2e313b0b44e827ec2aa5b96522"],["/images/mr-learn/MR3.png","194aa203b5a98b43bea5b7c5935fe7ed"],["/images/mr-learn/MR4.png","cf17816d4bec8d2081cd66b339af4898"],["/images/mr-learn/MR5.png","a58cb9ee79cbad883e0585faa0996759"],["/images/mr-learn/MR6.png","2c642ab26af26511608f4ac6f1ad8691"],["/images/mr-learn/MR7.png","90336274950eaf68e8e709e31eb80a69"],["/images/mr-learn/MR8.png","9768f908cbae4cd0a2ed9a67984b5c3f"],["/images/mr-learn/MR9.png","a6de7726e7f92f7582f07a84b10432ae"],["/images/mr-learn/WordCount.png","0c0a5fc91489244c7beced3d8e135403"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/images/wepay.svg","2e7265f61e62c0ce3af3e4b4713601ca"],["/index.html","cc59d5ba1a891f4e654d99e7d92664fc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","2708836bda412255d3ea76ac79159da0"],["/page/3/index.html","02e43f64864ce6cb0a1e6611ded56338"],["/sw-register.js","a4769d20444737b2c92bb546130bb6e8"],["/tags/CSS/index.html","98bead0c7ab2df5f6662033e062e292f"],["/tags/FreeCodeCamp/index.html","86778067fe2664a1425139bf7bc13e05"],["/tags/HTML/index.html","6504f0d2dd1d1e594c6e52b18d240b5b"],["/tags/JavaScript/index.html","148480af5e7157488f658b75ccc46129"],["/tags/Linux/index.html","29912648d6d789958ad1bf5ca00f90f7"],["/tags/MapReduce/index.html","283b20263284f50613438b70108fec39"],["/tags/MongoDB/index.html","2db9edd0f7c6634df17768bd3707cec5"],["/tags/blog/index.html","7a23aac357000196c9e437ea93c16248"],["/tags/index.html","5d49124dacdbf2e7a0784b55316d581c"],["/tags/kali/index.html","cd00313e6f7808ff13426fffb3ba0d05"],["/tags/seo/index.html","bc07ea3cdd6e7c4080608ead515b2347"],["/tags/搜索技巧/index.html","bb227f8da7809fef2132886933deaa49"],["/tags/方法/index.html","bbf06d7c20101ca00aef894c777636a7"],["/tags/方法论/index.html","3e6e5c3c0b59234744d23d5453a9493d"],["/tags/计算机基础知识/index.html","97619c38b4f44ab2c3b10a0a266257f1"],["/top/index.html","46495e8b83517a52c9ac3a81c56f27d1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
