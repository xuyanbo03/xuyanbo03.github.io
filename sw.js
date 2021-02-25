/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","edde4bb4d71411184b85b3964625c1e1"],["/about/index.html","1fbc2b35dcedb36baf074358dcbff85e"],["/archives/index.html","c5b8ed964dddb295c38e48482e0cf39b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_3NWlza1HUZ.html","6083c2b30a8f7b5d44a0ca23f74b63c4"],["/categories/Java/index.html","081df3251a17035b8f5932b427c5eb9f"],["/categories/Linux/index.html","5afcc1604322df5c22bdb5cbd9486b25"],["/categories/blog/index.html","22b24cd24368113b85e9c3d9adea56aa"],["/categories/index.html","18712c6ff4693fa9792e2f6abd5f959b"],["/categories/web/index.html","f3b2b141a0f8dfa9afd72b7c35421088"],["/categories/web前端/index.html","0a544f201b62ab919df703fc7bc72e70"],["/categories/前端/index.html","689ae7fc408a8190823e8f41a71b91c6"],["/categories/大数据/index.html","af0423a767dd3b0becc4274e9be5215f"],["/categories/工具/index.html","fc8a3e6965a7176ff499bb0473c249b2"],["/categories/数据库/index.html","e263b433902d4c1ed4f4c7ae6e02dea1"],["/categories/方法论/index.html","5d96da51a1ab0f377cf1c9c9920791be"],["/categories/算法/index.html","dd77eef24e8b1de4a317c5994eed9a98"],["/css/main.css","3c0fd1a25937f7778de9c82ac69988a8"],["/fonts/ComicNeue-Angular-Bold-Oblique.eot","40788a0a7b51a92389dad8b159492cb8"],["/fonts/ComicNeue-Angular-Bold-Oblique.ttf","7afa6bfc716544b765ad5d7bd61aa390"],["/fonts/ComicNeue-Angular-Bold-Oblique.woff","6c33764ad65ce89edd41147ec0f3541c"],["/fonts/ComicNeue-Angular-Bold.eot","97bfd2726c48f293231900ed552e5fd9"],["/fonts/ComicNeue-Angular-Bold.ttf","3b3e96b257325929065b67d0b418b975"],["/fonts/ComicNeue-Angular-Bold.woff","fdfdec9d0b7dfa91fbe11dc2ec50473d"],["/fonts/ComicNeue-Angular-Light-Oblique.eot","d6047d25084572d7df4f0de2096b6703"],["/fonts/ComicNeue-Angular-Light-Oblique.ttf","4c9956b9278836ef07a7a806f45b264a"],["/fonts/ComicNeue-Angular-Light-Oblique.woff","4bf616657aa13c10ad173b7b738f2bab"],["/fonts/ComicNeue-Angular-Light.eot","008b2822ea0c1c160df2b5ea2991a438"],["/fonts/ComicNeue-Angular-Light.ttf","43c1e8a3968b7fbdc2d98d1ca5dee684"],["/fonts/ComicNeue-Angular-Light.woff","34d7b4224ea5bbd30e4a3fbe8cc8a5e0"],["/fonts/ComicNeue-Angular-Regular-Oblique.eot","3e8299e59ae27259e71248832f99786c"],["/fonts/ComicNeue-Angular-Regular-Oblique.ttf","099285f76101ec3291f80cccdca21bdb"],["/fonts/ComicNeue-Angular-Regular-Oblique.woff","00f0e24953b6d6e71ca0891f974bfbdf"],["/fonts/ComicNeue-Angular-Regular.eot","3c6797b44cf639f15d940d5321a49a29"],["/fonts/ComicNeue-Angular-Regular.ttf","96e329b344475cfedef1867f8e002bee"],["/fonts/ComicNeue-Angular-Regular.woff","dec91b007193eb99bfb669e023356495"],["/fonts/ComicNeue-Bold-Oblique.eot","9623a2602e23e010df808efd573ded50"],["/fonts/ComicNeue-Bold-Oblique.ttf","6a2b4e115cc960db3e5fde8d95e82b6d"],["/fonts/ComicNeue-Bold-Oblique.woff","933e67b18c88f48694adcf02e9340a57"],["/fonts/ComicNeue-Bold.eot","a89b0d636179e835f1038cc1e7b11682"],["/fonts/ComicNeue-Bold.ttf","bb59dfb0d7fa8a0c9b7d431f94ff3d6d"],["/fonts/ComicNeue-Bold.woff","df4f1f0b09e7dcbf110e77a1a5ad936d"],["/fonts/ComicNeue-Light-Oblique.eot","3aed4284b4bf38f4ab7709f69a752ae2"],["/fonts/ComicNeue-Light-Oblique.ttf","805069ddfd6bdf57e01089ca90bb866f"],["/fonts/ComicNeue-Light-Oblique.woff","3b44b933104258988d9b125b71ac502f"],["/fonts/ComicNeue-Light.eot","0e04ebae206c1fe27867e13405072635"],["/fonts/ComicNeue-Light.ttf","27219ea5f3a25dbf3a05903f34ed5bd6"],["/fonts/ComicNeue-Light.woff","780c9f200bbdd3ba13ac9464921ecabf"],["/fonts/ComicNeue-Regular-Oblique.eot","07244e74afacb190403cc2028d56f2ab"],["/fonts/ComicNeue-Regular-Oblique.ttf","b0e3f8f6249f0bb895cd2f96fffee6cd"],["/fonts/ComicNeue-Regular-Oblique.woff","79cbff272c3231694b9d1dd44f8f38fc"],["/fonts/ComicNeue-Regular.eot","3f916f08fa680d8e9ed4d8eaa4614629"],["/fonts/ComicNeue-Regular.ttf","c7823c53863f1386e0154142369242d6"],["/fonts/ComicNeue-Regular.woff","0689422546d69a1a7cffeff379ab42a0"],["/fonts/font.css","b75a0621de61aaa3198b86ef16dae212"],["/guestbook/index.html","61bfdcbcbc0971a7e3bb25430050e276"],["/images/Docker和K8S容器监控/1596177920787.png","e61f3be9e52248009d2f0000c5883fc8"],["/images/Docker和K8S容器监控/1596179129619.png","e164a1cacfd6843d971fa132776e81e8"],["/images/HBase-HA/clip_image002-1591461382734.jpg","933e5022c3a4f5be54b69dea499b8558"],["/images/HBase-HA/clip_image004-1591461382734.jpg","a00611f8f06c35e41b31d483f5970439"],["/images/HBase-HA/clip_image006-1591461382734.jpg","1bdf05fbfdc9b30409296ff766194db1"],["/images/HBase-HA/clip_image008-1591461382734.jpg","6e574a567fe65483d1ac560056a15050"],["/images/HBase-HA/clip_image010-1591461382734.jpg","5c7b27cb2de9e9207982c722d3fc8f45"],["/images/HBase-HA/clip_image012-1591461382734.jpg","18415bc33e5438894881f52f40f32b3a"],["/images/HBase-HA/clip_image014-1591461382734.jpg","8bb21a14bb263d944bfe24607ae33688"],["/images/HBase-HA/clip_image016-1591461382735.jpg","bc366681122d5a4972860d86c2275550"],["/images/HBase-HA/clip_image018-1591461382735.jpg","d74ae8bae9709bf933e2622201472c5d"],["/images/HBase-HA/clip_image020-1591461382735.jpg","087aac4bea3fe836e8e24c1f6e3680bd"],["/images/HBase-HA/clip_image022-1591461382735.jpg","352ff3105eb2b90d908f5f6b1443745b"],["/images/HBase-HA/clip_image024-1591461382735.jpg","c23a517745f22c59c6e0fc8446b0e447"],["/images/HBase-HA/clip_image026-1591461382735.jpg","c9248afedde50633bc781c4ed00abe5c"],["/images/HBase-HA/clip_image028-1591461382735.jpg","8f362210039d903d431854cda04bb375"],["/images/HBase-HA/clip_image030-1591461382735.jpg","0ed47ca279357189cfb9ec38ca4fa6b8"],["/images/HBase-HA/clip_image032-1591461382735.jpg","598c3558b8dc5e79b92f1c17de9162c7"],["/images/QRcode.svg","dbcc882694b4c7e7ea444fcc7b6fc7d4"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/es/es1.png","91fb15e343381b412947734c448c2de5"],["/images/es/es2.png","f985815b4f5c09399973e9e83986c8f6"],["/images/es/es3.png","f0db8ad81237e187bf8306db5bf33e40"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/h5-audio/1.webAudio-API.jpg","f1e9945bde46ee636eacd129857a5fa7"],["/images/h5-audio/2.AudioContext.jpg","cf62f9e59d6e97663a2c023ce2470f47"],["/images/h5-audio/3.GainNode.jpg","2f2ff1fade2dac6fafc17d9a2119b05c"],["/images/h5-audio/4.AudioBufferSourceNode.jpg","2ca1951f40c770452501e5383bfcffe8"],["/images/h5-audio/5.AnalyserNode.jpg","fdd6b7ba1e84d0b83576bc2216a1582b"],["/images/html-store/H51.jpg","9eb4ba5a95500c05af31d8e4213787f6"],["/images/html-store/H52.jpg","c9c9297860cb29f7669db0e0cf9ba516"],["/images/html-store/IndexedSQL.jpg","f6dd110a59bd9a9dc17cb782b5cf9bec"],["/images/icons/icon-128x128.png","e3b73bed589b8668cfb22689844cad91"],["/images/icons/icon-144x144.png","7d513e9d4c40c932e19003746fb449db"],["/images/icons/icon-152x152.png","041aaec9f001927a2ea2a9f02d266a8a"],["/images/icons/icon-72x72.png","901bddfccbbd720d9ada030274e90289"],["/images/icons/icon-96x96.png","1dce7fa7ee0ad689648b4e094697c317"],["/images/js数据结构与算法1/1595052302829.png","f9dac692e1208920fe210fc9171b73a8"],["/images/js数据结构与算法1/1595053505788.png","f7ea71ba5c4b76cf42d7d394e4e618ce"],["/images/js数据结构与算法1/1595053659661.png","b58a2905e1e8e4c8da5dc54099f60204"],["/images/js数据结构与算法1/1595053814196.png","1a474e59ef9228047f1d4dee234ab206"],["/images/js数据结构与算法1/1595054114155.png","b3e3a41e4d80c4546db339b1badc7c23"],["/images/js数据结构与算法1/1595054159709.png","914bd532d7281150f6cee45f49c42a25"],["/images/js数据结构与算法1/1595061903035.png","e88ac10face3302526ceff0f68374224"],["/images/js数据结构与算法1/1595062001664.png","48dac897690980f6f28d1d19e20d2343"],["/images/js数据结构与算法1/1595064780983.png","8cdd1eceab8d2a03b52e157c787b67dd"],["/images/js数据结构与算法1/1595064910440.png","c51248f0ae79570a34ef4e73d6d7edca"],["/images/js数据结构与算法1/1595064937011.png","e4c2444acfc5b916ba60cbf81f7009b8"],["/images/js数据结构与算法1/1595065003973.png","8ad18238bd92c6df61d17e5f8134aaa2"],["/images/js数据结构与算法1/1595065020710.png","ad200576b72c4037bdf6faf2606b2d8b"],["/images/js数据结构与算法2/1595068515953.png","e12664158b08571e81895f809805e7b3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/mr-learn/HDFS.png","8dee230ff560ed8a446cdb201bb6776c"],["/images/mr-learn/MR1.png","bc0c135f5a655e2532c5de84d1c416ea"],["/images/mr-learn/MR10.png","5cb62d578f308a9e1cd74e9544714b42"],["/images/mr-learn/MR11.png","17a3469c9a7cf581bf108db879dbb98b"],["/images/mr-learn/MR12.png","40b01a18ab6a7cc7a9ace2a9f5934ced"],["/images/mr-learn/MR13.png","b1e59d1e062c9cb5102f96379cb219c7"],["/images/mr-learn/MR14.png","a9ceb9fe7be41e5d57400206871155da"],["/images/mr-learn/MR2.png","0dd9ae2e313b0b44e827ec2aa5b96522"],["/images/mr-learn/MR3.png","194aa203b5a98b43bea5b7c5935fe7ed"],["/images/mr-learn/MR4.png","cf17816d4bec8d2081cd66b339af4898"],["/images/mr-learn/MR5.png","a58cb9ee79cbad883e0585faa0996759"],["/images/mr-learn/MR6.png","2c642ab26af26511608f4ac6f1ad8691"],["/images/mr-learn/MR7.png","90336274950eaf68e8e709e31eb80a69"],["/images/mr-learn/MR8.png","9768f908cbae4cd0a2ed9a67984b5c3f"],["/images/mr-learn/MR9.png","a6de7726e7f92f7582f07a84b10432ae"],["/images/mr-learn/WordCount.png","0c0a5fc91489244c7beced3d8e135403"],["/images/mysql/base_sql.jpg","8b82bfa1d1f0a49d414fe1bf1c007aad"],["/images/mysql/mysql_char.jpg","9cb9cf51260af18a5bc696d11591c4b2"],["/images/mysql/mysql_data.jpg","646c53e376d5fb4a4d0511b0cfdf2f69"],["/images/mysql/mysql_float.jpg","7c3643254124a8ae456876c6de51e592"],["/images/mysql/mysql_int.jpg","f9088c1ebedee43f5c102c053accc726"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/temp/论文带读1/1585928401863.png","a6ab54bceeca40e973a54f3b58d6a144"],["/images/transformer/clip_image001.png","c7738d797556a13036a87907b78b58af"],["/images/transformer/clip_image002.png","08fd424d14f4ef271ab4939000b9aec3"],["/images/transformer/clip_image003.png","87b416d9aa12d900dc88182619fa9bbc"],["/images/transformer/clip_image004.jpg","2248ac50ed69d74678dd1959350b97c6"],["/images/transformer/clip_image005.png","7df4372b8fa78480e67807fd2243ac98"],["/images/transformer/clip_image006.jpg","10f394426819d7aca709312645df0c6d"],["/images/transformer/clip_image007.png","a1adbbe3f3c5cd63b982ec1db75505f2"],["/images/transformer/clip_image008.jpg","1aaff575ae86d1a2399cd4c42a0b4048"],["/images/transformer/clip_image009.png","e62c47665726f524616b0dfbb2c99198"],["/images/transformer/clip_image010.jpg","d798730234114cb90b3dcf34089ef960"],["/images/transformer/clip_image011.png","3b76d5d994c8ed87985bb9981e750c06"],["/images/transformer/clip_image012.jpg","aa88f6c69d6cfbf8916c69f5990e7b77"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/images/wepay.svg","2e7265f61e62c0ce3af3e4b4713601ca"],["/images/使用Docker搭建Ray集群/cpu-ray1-htop.png","c3cc375899e89161bdb485daff13ddf6"],["/images/使用Docker搭建Ray集群/ppo-status.png","4bfe5a7c85763b48619b71f10adb5a4a"],["/images/使用Docker搭建Ray集群/ppo状态.png","7ecf38e813ae63804eb8d9152be73dce"],["/index.html","0d7a4a231b662eeacbc0241fbb69d122"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","50f1dc9a2b731ee7559c071fef062c3e"],["/page/3/index.html","a91fc1b3ea9c60748409f38fec767f87"],["/page/4/index.html","3f10d200dc463f2da7fbe8293239de25"],["/posts/101d1957/index.html","5d65da103e6b33c9a9fe017fbc3658f1"],["/posts/13b6b7c2/index.html","55490184a6fcefd53e4ebc00cc2f3ae1"],["/posts/143a0a72/index.html","0689c6b1915d0161e247537e53cd2202"],["/posts/194a5065/index.html","2bb5e478c9d7566aee83345eef293703"],["/posts/1d6a9c79/index.html","5c1f6474afa627a187fa0864545ccadf"],["/posts/1fad2db9/index.html","730ee9230c1bbbb20630e63425fa735a"],["/posts/4370e84d/index.html","ddee8f913d80b15a64f4bc021ab9e9dd"],["/posts/440e5582/index.html","fa0ed793214152bbfa582dd1d64bca96"],["/posts/4a17b156/index.html","5377fb846bd441c6425dc46cf008b413"],["/posts/6021eb27/index.html","da119042975a4b8c164265d85cf08d2c"],["/posts/62e0a87a/index.html","627e0f0734c4613f9906be3ac42a87b5"],["/posts/6bfb34d8/index.html","dd6177c244f4b963d54330766f01912c"],["/posts/6eadcfba/index.html","6afe2cc1209f73e131de00f9904608c7"],["/posts/742c7f0a/index.html","81390509e285cfd25852b7144d9741ec"],["/posts/75c6e52f/index.html","beaa511057a21e06e3c23764575641fc"],["/posts/7a7093e6/index.html","f93863aadba4cb3b0234ff691c8f951d"],["/posts/86ceb8f1/index.html","902cf705f1ed2dad3f8ef60eda2027ba"],["/posts/8786024c/index.html","5ea1e470e29627f84840da84ff34c723"],["/posts/8c3b0bac/index.html","7e0146b1db8a705c1c70f481ad946625"],["/posts/948e1c93/index.html","cb8207c8e27658a625eb9b22a40343c8"],["/posts/a5b005af/index.html","669af98c7cd2f311b564fec825d9e95a"],["/posts/a79c8cf7/index.html","a4a1c130ead4a97b4a8ebf83d61e865a"],["/posts/bb07c3a7/index.html","726a36e06cf89ea1fe1b8503be440374"],["/posts/bce46d0d/index.html","2db147823be0716bdd328028a315cc82"],["/posts/c0d60af6/index.html","a5577829167203259ac051cdee184a78"],["/posts/c1c013be/index.html","86189b44f2910af710087a7e2726abcf"],["/posts/c96b08bc/index.html","c3a30830804b9d7c014ee38574ccae94"],["/posts/cf0c10bf/index.html","5e143a9d5c6732815288dafffb23d2d3"],["/posts/d24e8921/index.html","7d2e913346cc1a4574b733bca2080ab5"],["/posts/db1de468/index.html","7fcb917fdef6a209b899f1e14ad80407"],["/posts/dd22b276/index.html","a4a99086de159e81e68ea2361ea7eaf9"],["/posts/e20ef482/index.html","b3a6837dba07e90424cfcf484922cb58"],["/posts/e6939326/index.html","7a3d2d86fbc55c32c3f1a336ed91f7ae"],["/posts/e913391a/index.html","fcf0096eeb930cb3648bf875ea33cb63"],["/posts/fd5cbc55/index.html","b8310eda988f293f2878ef3f8d5e583b"],["/sw-register.js","7d44241c8196673c242c0128a1a30778"],["/tags/CSS/index.html","6e6cc0cfcb9107d506001c71d070ef0c"],["/tags/Docker/index.html","4ff32aabcb503960e52ba6156d8c383f"],["/tags/ELK/index.html","7d5dbbb8e5057f56da846a137c32e47d"],["/tags/FreeCodeCamp/index.html","b81abc7db069959c96305526afa3b602"],["/tags/HTML/index.html","92fa4ae94d4619a2aeb98c8ea7719a58"],["/tags/HTML5/index.html","1635d8d2d4194e0eb46a5229a91c42c7"],["/tags/Hadoop/index.html","a3876d32031d80a0907cb91547c7c5f2"],["/tags/Java/index.html","da79c2e5f22e4a5c813272d9e38344e9"],["/tags/JavaScript/index.html","0ce4e3b8bc80669107b6f8501f50ee99"],["/tags/Linux/index.html","69c7c7079c3250af18e376691db17406"],["/tags/Mac/index.html","f2aadd37e26dda82a497a48d35c51679"],["/tags/MapReduce/index.html","f94e6753d9815f3225be3c2c27f23526"],["/tags/MongoDB/index.html","b26e783b4b8ff7acbf618551e6573881"],["/tags/MySQL/index.html","94c0a70538364d279f79a5e0be019046"],["/tags/NLP/index.html","52423beb17c9bc7d38905f752e566dc7"],["/tags/Ray/index.html","836d26058d5972042fbaf7d04b16c521"],["/tags/Windons/index.html","3878c49382bfd6fc5c21ed055f932c3f"],["/tags/blog/index.html","784fe3722ca9206b27ad1ba1075a040a"],["/tags/index.html","adcc722a7440be6b83c7f5d920612180"],["/tags/kali/index.html","52c5327c0a89dea100383ab04863ca9f"],["/tags/seo/index.html","f9801b145d2f7d60828b98c7d4b38f2a"],["/tags/搜索技巧/index.html","6025c37f322f32c7397b7191a79b3f08"],["/tags/方法论/index.html","1929fa59339512599451be56096c1b4b"],["/tags/算法/index.html","8e7d4e186f7225dbe7c44a03f361e853"],["/tags/计算机基础知识/index.html","72f50780701cbec17d461e50b8ab08ff"],["/tags/面试/index.html","f07e1207a058087842d9b0328c2169fc"],["/top/index.html","0e68989a0c889fb3181b4ed54edd06b8"]];
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
