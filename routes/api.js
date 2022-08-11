__path = process.cwd()
//var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "HIRUWA ( ANONY )"
var neoxr = "yntkts"
var zeks = "administrator"
var zeks2 = "apivinz"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
const ditzz = require('ditzzlabs')
const bodyParser = require('body-parser')
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { TiktokDownloader } = require('../lib/tiktok.js')
var baiscopelk = require('../lib/baiscopelk.js');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa,
  igDownloader
} = require("./../lib/anjay");

var {
  igStalk,
  igDownloader
} = require("./../lib/utils/igdown");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var {
  fbDownloader,
  fbdown2
} = require('./../lib/utils/fbdl');

//var TiktokDownloader = require('./../lib/tiktokdl');

var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE
/*
* @Pesan Error
*/
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Contact owner to get api key wa.me/94771039631'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notgcname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcname'
        },
    notgcicon: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcicon'
        },
    notpp: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer pp'
        },
    notbg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer bg'
        },
    notmemberCount: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer memberCount'
        },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406, 
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Contact owner to get api key wa.me/94771039631'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: '404 ERROR'
    }
}

/*
Akhir Pesan Error
*/

//router.use(favicon(__path + "/views/favicon.ico"));

function _0x1a0f87(_0x4aeb84,_0x315981,_0x288b3c,_0x1475f2){return _0x2bf5(_0x315981-0x308,_0x288b3c);}(function(_0x547444,_0x359bda){const _0x59d698=_0x547444();function _0x537a48(_0x35cea9,_0x29a37a,_0x551e6f,_0x4b5a7d){return _0x2bf5(_0x4b5a7d-'\x30\x78\x31\x62\x30',_0x35cea9);}function _0x364b32(_0x45dc33,_0x336d1c,_0x3eac37,_0x5d298f){return _0x2bf5(_0x3eac37-'\x30\x78\x33\x62\x30',_0x5d298f);}while(!![]){try{const _0x267163=-parseInt(_0x364b32('\x30\x78\x34\x39\x63','\x30\x78\x34\x39\x66','\x30\x78\x34\x38\x38','\x30\x78\x34\x39\x33'))/(-0x1ab1+0x4*-0x547+-0x1a6*-0x1d)+-parseInt(_0x537a48(0x27a,'\x30\x78\x32\x39\x37','\x30\x78\x32\x38\x38','\x30\x78\x32\x38\x39'))/(-0x1085*0x1+0x8*0x17b+-0x6d*-0xb)+-parseInt(_0x364b32('\x30\x78\x34\x38\x63',0x4b7,'\x30\x78\x34\x39\x66','\x30\x78\x34\x38\x63'))/(-0x59*0x3b+0x1693*0x1+0x7*-0x4b)*(-parseInt(_0x537a48('\x30\x78\x32\x36\x37',0x285,'\x30\x78\x32\x37\x35',0x27b))/(-0x26*-0x5+-0x2e*-0x1c+-0x2*0x2e1))+-parseInt(_0x364b32(0x46f,0x493,0x485,0x48f))/(0x20fb+-0x1c07+-0x4ef)*(-parseInt(_0x537a48(0x28e,0x2b3,0x28e,'\x30\x78\x32\x61\x33'))/(-0xfc8+-0xe18+0x1*0x1de6))+parseInt(_0x364b32('\x30\x78\x34\x39\x30',0x490,'\x30\x78\x34\x39\x36','\x30\x78\x34\x61\x62'))/(0x88a+-0x44*-0x3+0x1*-0x94f)*(-parseInt(_0x364b32('\x30\x78\x34\x37\x61',0x49f,0x487,0x48c))/(0x23b+0x1a88+-0x1cbb))+parseInt(_0x364b32(0x47f,'\x30\x78\x34\x36\x37','\x30\x78\x34\x37\x65',0x471))/(0x495*0x1+0xc7a+-0x1106)+-parseInt(_0x364b32(0x4bc,0x491,0x4a8,0x4b1))/(-0x1105*-0x2+0x169d*0x1+-0x389d*0x1);if(_0x267163===_0x359bda)break;else _0x59d698['push'](_0x59d698['shift']());}catch(_0xc97ba4){_0x59d698['push'](_0x59d698['shift']());}}}(_0x2c0c,0x1*0x890a9+0x1e450+-0x3d31f));const _0x2d19d2=(function(){let _0x35557a=!![];return function(_0x16cf9c,_0x2256ec){const _0x5855f3={};_0x5855f3['\x45\x78\x59\x66\x79']=function(_0x1b90ab,_0x5398f3){return _0x1b90ab===_0x5398f3;};const _0x2bdccd=_0x5855f3,_0x3e1d6c=_0x35557a?function(){function _0x1a9ce6(_0x532914,_0x1709e4,_0x16a889,_0x285a7e){return _0x2bf5(_0x285a7e- -0x1e6,_0x16a889);}function _0x378df4(_0x52a904,_0x56918e,_0x44701e,_0x2e4b12){return _0x2bf5(_0x52a904-'\x30\x78\x33\x62\x36',_0x56918e);}if(_0x2256ec){if(_0x2bdccd[_0x1a9ce6(-0x111,-'\x30\x78\x31\x32\x38',-0x105,-0x112)](_0x1a9ce6(-'\x30\x78\x65\x63',-0xfe,-'\x30\x78\x66\x61',-'\x30\x78\x66\x30'),_0x1a9ce6(-0xe4,-'\x30\x78\x65\x66',-'\x30\x78\x31\x30\x33',-0xf0))){const _0x356c84=_0x2256ec['\x61\x70\x70\x6c\x79'](_0x16cf9c,arguments);return _0x2256ec=null,_0x356c84;}else _0x13ff40=_0x562a27;}}:function(){};return _0x35557a=![],_0x3e1d6c;};}()),_0x311465=_0x2d19d2(this,function(){function _0x266f29(_0x14744b,_0x5a8615,_0x516ba0,_0x3457b0){return _0x2bf5(_0x3457b0- -0x399,_0x5a8615);}const _0x3cc6cc={};_0x3cc6cc[_0x11aecf(-0x313,-0x314,-'\x30\x78\x33\x32\x30',-'\x30\x78\x33\x31\x65')]=_0x266f29(-0x2d3,-0x2ca,-0x2bb,-'\x30\x78\x32\x63\x39')+'\x2b\x24';const _0x515085=_0x3cc6cc;function _0x11aecf(_0x2e08d4,_0x5a0617,_0x8b19ea,_0x5bbfea){return _0x2bf5(_0x5a0617- -'\x30\x78\x33\x65\x37',_0x2e08d4);}return _0x311465[_0x11aecf(-0x2ea,-'\x30\x78\x32\x66\x35',-0x2f4,-0x300)]()['\x73\x65\x61\x72\x63\x68'](_0x515085[_0x266f29(-0x2b0,-0x2bc,-0x2dc,-0x2c6)])['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x266f29(-0x2c1,-'\x30\x78\x32\x63\x39',-'\x30\x78\x32\x61\x62',-'\x30\x78\x32\x62\x64')+'\x72'](_0x311465)[_0x11aecf(-'\x30\x78\x32\x64\x65',-'\x30\x78\x32\x66\x30',-'\x30\x78\x32\x64\x62',-0x2eb)](_0x515085['\x75\x70\x54\x58\x69']);});_0x311465();function _0x2bf5(_0x311465,_0x2d19d2){const _0x2c0c2e=_0x2c0c();return _0x2bf5=function(_0x2bf558,_0x1db0c3){_0x2bf558=_0x2bf558-(0x2465*0x1+0x23ce+0xb5*-0x65);let _0x5e457b=_0x2c0c2e[_0x2bf558];return _0x5e457b;},_0x2bf5(_0x311465,_0x2d19d2);}function _0x2c0c(){const _0x2ee2e5=['\x32\x37\x39\x31\x32\x55\x55\x67\x73\x6b\x78','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x6c\x6f\x67','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x61\x70\x70\x6c\x79','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x4d\x42\x68\x77\x52','\x4d\x50\x48\x51\x4d','\x6e\x72\x50\x7a\x53','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x71\x48\x6e\x4c\x62','\x74\x61\x62\x6c\x65','\x48\x4e\x48\x63\x47','\x31\x36\x33\x39\x30\x34\x33\x79\x73\x62\x78\x4e\x77','\x43\x43\x74\x63\x55','\x62\x4c\x50\x77\x46','\x74\x72\x65\x78','\x67\x6c\x4a\x4c\x54','\x65\x72\x72\x6f\x72','\x62\x69\x6e\x64','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x68\x69\x72\x75\x77\x61','\x31\x32\x37\x38\x37\x35\x73\x58\x59\x55\x61\x4f','\x77\x61\x72\x6e','\x63\x67\x58\x4a\x66','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x32\x31\x31\x32\x47\x54\x6e\x72\x66\x75','\x6c\x65\x6e\x67\x74\x68','\x76\x49\x70','\x76\x65\x7a\x70\x65','\x73\x65\x61\x72\x63\x68','\x37\x37\x38\x38\x37\x31\x30\x73\x70\x6a\x73\x65\x54','\x4b\x6a\x50\x6c\x42','\x65\x6a\x7a\x4c\x4d','\x35\x36\x49\x67\x51\x5a\x79\x4c','\x5a\x74\x66\x6e\x41','\x63\x6f\x6e\x73\x6f\x6c\x65','\x36\x31\x32\x36\x38\x35\x38\x69\x4e\x63\x71\x59\x54','\x74\x72\x61\x63\x65','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x69\x6e\x66\x6f','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x75\x70\x54\x58\x69','\x45\x78\x59\x66\x79','\x34\x31\x39\x35\x61\x45\x63\x4e\x75\x54','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x38\x52\x48\x6c\x72\x49\x42','\x31\x31\x31\x32\x31\x34\x56\x4d\x61\x68\x4f\x4d'];_0x2c0c=function(){return _0x2ee2e5;};return _0x2c0c();}const _0x4e17d3=(function(){let _0xb23b85=!![];return function(_0x1184d4,_0xc94078){const _0x22fa53=_0xb23b85?function(){function _0x71363(_0x4b9c34,_0x10db9e,_0x41d5b5,_0xc1d9a0){return _0x2bf5(_0x10db9e- -0x368,_0x4b9c34);}if(_0xc94078){const _0x39bbe6=_0xc94078[_0x71363(-'\x30\x78\x32\x37\x61',-0x28b,-0x27d,-'\x30\x78\x32\x38\x39')](_0x1184d4,arguments);return _0xc94078=null,_0x39bbe6;}}:function(){};return _0xb23b85=![],_0x22fa53;};}()),_0x5f16d6=_0x4e17d3(this,function(){const _0x100377={'\x48\x4e\x48\x63\x47':function(_0xac87ba,_0x2fd8b9){return _0xac87ba(_0x2fd8b9);},'\x4d\x50\x48\x51\x4d':function(_0x393498,_0x5d62b9){return _0x393498+_0x5d62b9;},'\x5a\x74\x66\x6e\x41':_0x3904ee(-0x25c,-'\x30\x78\x32\x34\x62',-0x24c,-'\x30\x78\x32\x35\x33')+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x4d\x42\x68\x77\x52':_0x2cf7c7(0x426,0x41f,'\x30\x78\x34\x31\x35','\x30\x78\x34\x31\x31')+_0x3904ee(-0x257,-0x25a,-0x259,-'\x30\x78\x32\x35\x37')+_0x2cf7c7('\x30\x78\x34\x32\x61','\x30\x78\x34\x32\x36','\x30\x78\x34\x33\x61',0x424)+'\x20\x29','\x67\x6c\x4a\x4c\x54':function(_0x24a32d,_0x680071){return _0x24a32d===_0x680071;},'\x62\x4c\x50\x77\x46':_0x3904ee(-'\x30\x78\x32\x32\x66',-'\x30\x78\x32\x34\x31',-0x22c,-'\x30\x78\x32\x34\x34'),'\x65\x4d\x71\x64\x48':function(_0x109970){return _0x109970();},'\x65\x6a\x7a\x4c\x4d':_0x3904ee(-0x26e,-'\x30\x78\x32\x34\x63',-'\x30\x78\x32\x36\x33',-'\x30\x78\x32\x35\x61'),'\x6e\x54\x61\x77\x79':_0x3904ee(-0x24b,-0x24c,-'\x30\x78\x32\x33\x37',-'\x30\x78\x32\x34\x35'),'\x71\x48\x6e\x4c\x62':_0x2cf7c7(0x425,0x432,'\x30\x78\x34\x33\x62','\x30\x78\x34\x33\x34'),'\x73\x57\x44\x70\x45':_0x2cf7c7('\x30\x78\x34\x32\x65',0x424,0x41a,'\x30\x78\x34\x33\x30')},_0x447723=function(){function _0x2cf549(_0x303a88,_0x2f0f01,_0x4a4e84,_0x5b924a){return _0x3904ee(_0x2f0f01,_0x2f0f01-'\x30\x78\x31\x38\x36',_0x4a4e84-0x156,_0x4a4e84-0xb1);}const _0xa8c9b6={'\x43\x43\x74\x63\x55':function(_0x2a2c78,_0x399bd9){return _0x100377['\x48\x4e\x48\x63\x47'](_0x2a2c78,_0x399bd9);},'\x6e\x72\x50\x7a\x53':function(_0x5e4ebe,_0x360e6b){function _0x4054d6(_0x129103,_0x2894c1,_0x457075,_0x25a33a){return _0x2bf5(_0x457075- -'\x30\x78\x33\x34\x64',_0x25a33a);}return _0x100377[_0x4054d6(-0x278,-0x281,-0x26d,-0x25a)](_0x5e4ebe,_0x360e6b);},'\x4b\x6a\x50\x6c\x42':_0x100377[_0x2cf549(-'\x30\x78\x31\x63\x38',-'\x30\x78\x31\x63\x35',-'\x30\x78\x31\x62\x38',-0x1ca)],'\x62\x75\x6e\x75\x44':_0x100377[_0x2cf549(-0x1b7,-'\x30\x78\x31\x38\x66',-'\x30\x78\x31\x61\x35',-0x19c)]};function _0xa28cbf(_0xae3398,_0x5a840d,_0x2b9686,_0x4e2d0b){return _0x3904ee(_0xae3398,_0x5a840d-0x23,_0x2b9686-0xfc,_0x5a840d-0x1a7);}if(_0x100377[_0xa28cbf(-0xb7,-'\x30\x78\x61\x34',-0x8c,-0xb1)](_0x100377[_0xa28cbf(-0xa0,-0xa6,-0x9e,-'\x30\x78\x61\x30')],_0x100377[_0x2cf549(-'\x30\x78\x31\x38\x64',-0x1b2,-0x19c,-0x18b)])){let _0x2ec321;try{_0x2ec321=_0x100377[_0x2cf549(-0x1a1,-'\x30\x78\x31\x61\x62',-0x19f,-0x1a4)](Function,_0x100377[_0x2cf549(-0x1ba,-0x1a1,-0x1a4,-0x1a6)](_0x100377['\x4d\x50\x48\x51\x4d'](_0xa28cbf(-'\x30\x78\x39\x38',-0xac,-'\x30\x78\x61\x65',-'\x30\x78\x39\x36')+_0x2cf549(-'\x30\x78\x31\x61\x39',-'\x30\x78\x31\x39\x39',-'\x30\x78\x31\x39\x37',-0x18e),_0x100377[_0x2cf549(-0x19d,-'\x30\x78\x31\x61\x63',-0x1a5,-'\x30\x78\x31\x39\x32')]),'\x29\x3b'))();}catch(_0x451c4f){_0x2ec321=window;}return _0x2ec321;}else{let _0x1b36a8;try{_0x1b36a8=_0xa8c9b6[_0x2cf549(-'\x30\x78\x31\x39\x65',-'\x30\x78\x31\x39\x62',-0x19d,-0x1a7)](_0x562dae,_0xa8c9b6[_0xa28cbf(-0xb7,-'\x30\x78\x61\x64',-'\x30\x78\x61\x33',-'\x30\x78\x61\x39')](_0xa8c9b6[_0xa28cbf(-'\x30\x78\x38\x61',-'\x30\x78\x39\x35',-0x98,-0x7e)]+_0xa8c9b6['\x62\x75\x6e\x75\x44'],'\x29\x3b'))();}catch(_0x3d18b7){_0x1b36a8=_0x1ffe79;}return _0x1b36a8;}},_0x56b556=_0x100377['\x65\x4d\x71\x64\x48'](_0x447723),_0x5b6852=_0x56b556['\x63\x6f\x6e\x73\x6f\x6c\x65']=_0x56b556[_0x3904ee(-'\x30\x78\x32\x37\x32',-0x27d,-'\x30\x78\x32\x37\x62',-'\x30\x78\x32\x36\x38')]||{},_0x1e211a=[_0x100377[_0x3904ee(-0x26c,-0x253,-'\x30\x78\x32\x35\x37',-'\x30\x78\x32\x36\x62')],_0x100377['\x6e\x54\x61\x77\x79'],_0x100377[_0x2cf7c7(0x437,'\x30\x78\x34\x32\x31','\x30\x78\x34\x34\x32','\x30\x78\x34\x31\x66')],_0x2cf7c7('\x30\x78\x34\x33\x66',0x443,0x42f,'\x30\x78\x34\x33\x66'),_0x100377['\x73\x57\x44\x70\x45'],_0x2cf7c7('\x30\x78\x34\x33\x38',0x43b,'\x30\x78\x34\x33\x31','\x30\x78\x34\x33\x32'),_0x2cf7c7(0x423,'\x30\x78\x34\x31\x39',0x438,'\x30\x78\x34\x33\x61')];function _0x3904ee(_0x572920,_0x2f0850,_0x4c9829,_0x160f45){return _0x2bf5(_0x160f45- -'\x30\x78\x33\x33\x35',_0x572920);}function _0x2cf7c7(_0x540630,_0x203050,_0x5a1095,_0x4b4a19){return _0x2bf5(_0x540630-'\x30\x78\x33\x35\x34',_0x203050);}for(let _0x12b7df=0x1*-0x659+-0xb1+-0x11*-0x6a;_0x12b7df<_0x1e211a[_0x3904ee(-'\x30\x78\x32\x34\x31',-'\x30\x78\x32\x34\x33',-0x23d,-'\x30\x78\x32\x34\x31')];_0x12b7df++){const _0x27d3f2=_0x4e17d3[_0x2cf7c7(0x430,'\x30\x78\x34\x32\x36','\x30\x78\x34\x32\x34',0x41d)+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x3904ee(-'\x30\x78\x32\x33\x65',-'\x30\x78\x32\x33\x65',-'\x30\x78\x32\x35\x34',-'\x30\x78\x32\x34\x39')](_0x4e17d3),_0x493c8e=_0x1e211a[_0x12b7df],_0x1836e6=_0x5b6852[_0x493c8e]||_0x27d3f2;_0x27d3f2['\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f']=_0x4e17d3[_0x3904ee(-0x23b,-'\x30\x78\x32\x35\x64',-'\x30\x78\x32\x34\x35',-'\x30\x78\x32\x34\x39')](_0x4e17d3),_0x27d3f2[_0x3904ee(-'\x30\x78\x32\x33\x63',-0x235,-0x249,-0x243)]=_0x1836e6[_0x2cf7c7(0x446,0x432,'\x30\x78\x34\x33\x63','\x30\x78\x34\x35\x38')][_0x3904ee(-'\x30\x78\x32\x33\x61',-'\x30\x78\x32\x33\x61',-0x253,-'\x30\x78\x32\x34\x39')](_0x1836e6),_0x5b6852[_0x493c8e]=_0x27d3f2;}});function _0x25efe4(_0x8d21b6,_0x183018,_0x1960fa,_0xc24fe){return _0x2bf5(_0x1960fa-'\x30\x78\x32\x32\x61',_0x183018);}_0x5f16d6();const listkey=[_0x1a0f87(0x40c,0x3f6,'\x30\x78\x33\x66\x33',0x3f0),_0x1a0f87('\x30\x78\x34\x30\x30','\x30\x78\x33\x66\x31','\x30\x78\x33\x66\x34',0x3df),_0x1a0f87(0x3e9,'\x30\x78\x33\x66\x64',0x3fb,0x3f1)];


router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

 (function(_0x16a36e,_0x359ddd){function _0x452c30(_0x6007d3,_0x21dc60,_0x235963,_0x674fec){return _0x3cbc(_0x6007d3-'\x30\x78\x31\x32\x62',_0x235963);}function _0x4b505e(_0x3266b4,_0x2e603c,_0x242be2,_0x3311fa){return _0x3cbc(_0x242be2- -'\x30\x78\x32\x32\x30',_0x3311fa);}function _0x11db2d(_0x43d7c9,_0x22af8a,_0x435c58,_0x500b80){return _0x3cbc(_0x435c58- -'\x30\x78\x32\x65\x62',_0x22af8a);}function _0x542269(_0x1bc4d0,_0x1b69eb,_0x48500e,_0xb8eee2){return _0x3cbc(_0x1bc4d0-'\x30\x78\x32\x37\x39',_0x1b69eb);}function _0x3db7d3(_0x2266de,_0x4a002e,_0x359aa1,_0x52d0e3){return _0x3cbc(_0x2266de-0x1b9,_0x4a002e);}var _0x82a8e9=_0x16a36e();function _0x27e35a(_0x48eb9d,_0x59d0e1,_0x39a106,_0x993506){return _0x3cbc(_0x48eb9d-'\x30\x78\x31\x30\x30',_0x993506);}function _0x47c539(_0x5e0fdb,_0x1f4176,_0x4431c9,_0x492d82){return _0x3cbc(_0x1f4176-'\x30\x78\x64',_0x492d82);}function _0x1ad103(_0x5bc6a7,_0x252a84,_0x2aff21,_0x486b9f){return _0x3cbc(_0x252a84-'\x30\x78\x31\x62',_0x5bc6a7);}function _0x127a46(_0x23d616,_0x29040e,_0xff20e8,_0x902059){return _0x3cbc(_0x902059- -0x1f0,_0x23d616);}while(!![]){try{var _0x59b685=parseInt(_0x27e35a('\x30\x78\x32\x38\x30',0x2a1,0x298,'\x30\x78\x32\x37\x65'))/(0xa2e+-0x3*-0x303+-0x1336)+-parseInt(_0x47c539(0x17e,0x16a,'\x30\x78\x31\x39\x30','\x30\x78\x31\x35\x36'))/(0x6a4+0x2088+0x45a*-0x9)+parseInt(_0x3db7d3(0x341,0x357,0x349,'\x30\x78\x33\x31\x38'))/(-0x2705+0x1*-0x2555+-0xad*-0x71)+-parseInt(_0x127a46(-0x69,-0x8d,-'\x30\x78\x38\x62',-'\x30\x78\x39\x32'))/(0x1cd6+-0x804+-0x14ce)*(parseInt(_0x27e35a('\x30\x78\x32\x34\x38',0x24b,'\x30\x78\x32\x33\x33','\x30\x78\x32\x35\x31'))/(0x48*0x25+0x14f*-0x6+-0x289))+parseInt(_0x47c539(0x164,0x15a,0x149,0x154))/(-0x9dc+-0x190*0xd+0x5*0x60a)*(-parseInt(_0x542269(0x3db,0x3ea,'\x30\x78\x33\x63\x65','\x30\x78\x33\x62\x37'))/(-0x1648+-0x2291+-0x5*-0xb60))+parseInt(_0x1ad103('\x30\x78\x31\x39\x66','\x30\x78\x31\x37\x35','\x30\x78\x31\x38\x33',0x187))/(0x43f*-0x2+-0x1b74+-0x23fa*-0x1)*(-parseInt(_0x3db7d3(0x329,'\x30\x78\x33\x31\x34','\x30\x78\x33\x32\x34','\x30\x78\x33\x33\x62'))/(-0x7*-0x50e+0xb2*0x2f+-0x1*0x4407))+parseInt(_0x1ad103('\x30\x78\x31\x34\x62',0x160,0x134,0x186))/(0x3*-0x223+-0xc01+0x4*0x49d);if(_0x59b685===_0x359ddd)break;else _0x82a8e9['push'](_0x82a8e9['shift']());}catch(_0x4579bd){_0x82a8e9['push'](_0x82a8e9['shift']());}}}(_0x2f08,-0x5c8c9+0x1*-0xe6deb+0x1bcf20));function _0x2f08(){var _0x3657b4=['\x31\x36\x34\x34\x37\x39\x32\x65\x48\x72\x6b\x48\x45','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x69\x50\x63\x61\x63','\x33\x39\x35\x39\x38\x36\x75\x4a\x74\x61\x46\x4e','\x33\x36\x35\x36\x39\x30\x34\x4a\x58\x7a\x4c\x63\x78','\x51\x6d\x4e\x4d\x75','\x74\x72\x61\x63\x65','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x36\x38\x34\x34\x34\x36\x68\x6f\x57\x75\x56\x44','\x66\x6f\x72\x6d\x61\x74\x74\x65\x64\x53','\x74\x61\x62\x6c\x65','\x75\x72\x6c','\x6a\x73\x6f\x6e','\x4f\x6b\x42\x58\x7a','\x50\x50\x45\x74\x65','\x4d\x4b\x41\x6d\x75','\x67\x56\x59\x76\x76','\x76\x69\x64\x65\x6f','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x6e\x62\x5a\x6b\x73','\x65\x72\x72\x6f\x72','\x61\x75\x64\x53\x69\x7a\x65','\x31\x38\x54\x6b\x63\x66\x6b\x43','\x4e\x65\x78\x6a\x46','\x69\x7a\x65','\x73\x65\x61\x72\x63\x68','\x61\x75\x64\x69\x6f','\x51\x6f\x44\x64\x59','\x6d\x65\x64\x69\x61','\x77\x61\x72\x6e','\x4e\x4e\x42\x63\x78','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x76\x69\x64\x53\x69\x7a\x65','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x74\x68\x75\x6d\x62','\x74\x4b\x67\x4a\x4d','\x74\x68\x65\x6e','\x6d\x73\x67','\x35\x34\x38\x33\x30\x33\x7a\x72\x50\x57\x75\x58','\x6c\x6f\x67','\x69\x47\x64\x6a\x76','\x7a\x56\x70\x4f\x44','\x73\x74\x61\x74\x75\x73','\x61\x70\x70\x6c\x79','\x69\x4b\x62\x41\x65','\x7a\x42\x6b\x47\x45','\x32\x39\x37\x38\x35\x35\x39\x6b\x56\x6e\x73\x6d\x68','\x62\x69\x6e\x64','\x69\x6e\x66\x6f','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x58\x67\x6c\x5a\x66','\x6b\x5a\x54\x4d\x4f','\x4c\x6c\x4c\x53\x45','\x77\x42\x57\x5a\x75','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x63\x61\x74\x63\x68','\x64\x61\x74\x61','\x70\x65\x74\x64\x5a','\x6a\x61\x74\x51\x6a','\x70\x61\x72\x61\x6d\x73','\x74\x69\x6b\x74\x6f\x6b','\x57\x71\x53\x51\x54','\x63\x72\x65\x61\x74\x6f\x72','\x77\x76\x4f\x71\x49','\x4d\x56\x62\x42\x58','\x73\x70\x6c\x69\x74','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x31\x30\x36\x36\x37\x30\x31\x30\x53\x46\x42\x73\x41\x66','\x4c\x5a\x68\x59\x4e','\x32\x30\x30','\x35\x66\x69\x55\x59\x41\x4d','\x58\x55\x77\x4d\x4c','\x61\x71\x5a\x56\x4a','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x44\x4f\x56\x56\x4b','\x33\x36\x77\x4c\x6b\x55\x55\x62','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x6c\x65\x6e\x67\x74\x68','\x63\x6f\x6e\x73\x6f\x6c\x65','\x62\x74\x56\x4d\x41','\x54\x58\x66\x65\x67','\x74\x69\x74\x6c\x65','\x49\x73\x68\x4f\x45','\x4a\x52\x5a\x53\x6f','\x6f\x6e\x51\x6b\x4b','\x50\x71\x79\x7a\x43','\x5a\x4f\x73\x6a\x77','\x4e\x4d\x72\x6c\x78'];_0x2f08=function(){return _0x3657b4;};return _0x2f08();}var _0x504240=(function(){var _0x524691={};function _0x153391(_0xb82860,_0x5cb9f7,_0x570c43,_0x180026){return _0x3cbc(_0x180026-'\x30\x78\x33\x35\x63',_0x5cb9f7);}_0x524691[_0x26e68e(0x283,0x284,0x26e,0x264)]=function(_0x1e8455,_0xc04461){return _0x1e8455!==_0xc04461;};function _0x49520d(_0x32c881,_0x358e86,_0x4f2713,_0xf475b0){return _0x3cbc(_0x358e86- -0x373,_0x32c881);}_0x524691[_0x26e68e('\x30\x78\x32\x32\x36',0x21a,0x23d,0x21e)]=_0x49520d(-0x1fe,-0x21f,-0x201,-0x214);function _0x26e68e(_0x4bb8b6,_0x4e47be,_0x2d5dbf,_0x3d02c8){return _0x3cbc(_0x2d5dbf-0xe8,_0x3d02c8);}_0x524691[_0x356299(-0x226,-'\x30\x78\x32\x34\x62',-0x20f,-'\x30\x78\x32\x32\x61')]='\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29'+'\x2b\x24';var _0x433e9b=_0x524691;function _0x356299(_0x534030,_0x25694d,_0x56fbe1,_0x1e4dc6){return _0x3cbc(_0x534030- -0x370,_0x1e4dc6);}var _0xe33df5=!![];return function(_0x376638,_0x5ab375){function _0x2e2bdc(_0x560987,_0x21d945,_0x456934,_0x151e2c){return _0x49520d(_0x560987,_0x21d945-'\x30\x78\x63\x63',_0x456934-'\x30\x78\x31\x30\x30',_0x151e2c-'\x30\x78\x33\x34');}var _0x4279c5={};_0x4279c5[_0x2e2bdc(-'\x30\x78\x31\x33\x62',-'\x30\x78\x31\x35\x31',-'\x30\x78\x31\x37\x63',-0x12d)]=_0x433e9b[_0x4ce072(-0x20c,-0x1ec,-0x202,-0x1eb)];var _0x53b7c1=_0x4279c5,_0x1de7fd=_0xe33df5?function(){function _0x22cff5(_0x59d564,_0x4be5dd,_0x4ed7db,_0x53d717){return _0x2e2bdc(_0x59d564,_0x53d717-0x55e,_0x4ed7db-0x164,_0x53d717-0xa1);}function _0x16293b(_0xb84410,_0x3917e8,_0x48c715,_0x41e6fc){return _0x2e2bdc(_0x3917e8,_0x41e6fc-0x430,_0x48c715-'\x30\x78\x31\x30\x31',_0x41e6fc-'\x30\x78\x31\x39\x33');}function _0x5e465f(_0x9eb7f4,_0x485af5,_0x309133,_0x4ad665){return _0x2e2bdc(_0x309133,_0x9eb7f4-'\x30\x78\x36\x33\x33',_0x309133-0x26,_0x4ad665-'\x30\x78\x31\x33\x36');}function _0x126ee4(_0x1162b6,_0x5be50b,_0x5ac275,_0x21c94c){return _0x2e2bdc(_0x1162b6,_0x5be50b-'\x30\x78\x32\x38\x36',_0x5ac275-0xc5,_0x21c94c-'\x30\x78\x31\x63\x37');}function _0x49e114(_0x2bd3fc,_0x5de520,_0x1c5a9e,_0x3a7237){return _0x4ce072(_0x2bd3fc,_0x5de520-'\x30\x78\x31\x63\x64',_0x1c5a9e-'\x30\x78\x39\x63',_0x3a7237- -0x89);}function _0x3a3c50(_0x161b30,_0x49e5da,_0x1f4b5c,_0x13e4cc){return _0x4ce072(_0x161b30,_0x49e5da-'\x30\x78\x31\x62\x38',_0x1f4b5c-0x1d5,_0x1f4b5c-'\x30\x78\x31\x30\x36');}function _0x421d9f(_0x4a504c,_0x10f242,_0x352e3a,_0x29af8e){return _0x4ce072(_0x352e3a,_0x10f242-'\x30\x78\x62\x33',_0x352e3a-'\x30\x78\x65\x33',_0x29af8e-'\x30\x78\x35\x64\x62');}function _0x5043a5(_0x466c39,_0x3a396c,_0x5ecb5a,_0x34106f){return _0x2e2bdc(_0x3a396c,_0x466c39-0x125,_0x5ecb5a-'\x30\x78\x61\x34',_0x34106f-'\x30\x78\x33\x39');}function _0x41ab0f(_0x55f295,_0x492691,_0x5e9767,_0x40a1f6){return _0x2e2bdc(_0x5e9767,_0x40a1f6-0x401,_0x5e9767-'\x30\x78\x31\x32\x33',_0x40a1f6-'\x30\x78\x62\x39');}if(_0x5ab375){if(_0x433e9b[_0x421d9f('\x30\x78\x34\x31\x62','\x30\x78\x34\x31\x65','\x30\x78\x34\x30\x32','\x30\x78\x34\x32\x63')](_0x433e9b[_0x5e465f(0x4e1,'\x30\x78\x34\x63\x30','\x30\x78\x34\x66\x64',0x4d8)],_0x433e9b[_0x49e114(-0x28e,-0x257,-0x26a,-'\x30\x78\x32\x36\x39')]))return _0x588b5b[_0x22cff5('\x30\x78\x34\x31\x31','\x30\x78\x33\x66\x35',0x432,0x418)]()[_0x421d9f(0x40a,0x41f,'\x30\x78\x34\x34\x33','\x30\x78\x34\x31\x39')](_0x53b7c1[_0x22cff5(0x410,'\x30\x78\x34\x32\x37',0x409,0x40d)])[_0x421d9f(0x3f0,0x3fe,0x3fa,'\x30\x78\x34\x30\x37')]()[_0x5e465f('\x30\x78\x34\x64\x37',0x4dc,0x4c7,0x4b6)+'\x72'](_0x6ae76e)[_0x41ab0f('\x30\x78\x32\x63\x35',0x2f8,0x2be,'\x30\x78\x32\x63\x64')]('\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29'+'\x2b\x24');else{var _0x294de5=_0x5ab375[_0x16293b(0x2e3,0x2ed,0x327,'\x30\x78\x33\x30\x65')](_0x376638,arguments);return _0x5ab375=null,_0x294de5;}}}:function(){};_0xe33df5=![];function _0x4ce072(_0x1a2a55,_0xd56e28,_0xc1aee5,_0xec342){return _0x26e68e(_0x1a2a55-0x181,_0xd56e28-'\x30\x78\x31\x33\x63',_0xec342- -0x41d,_0x1a2a55);}return _0x1de7fd;};}()),_0x512b5d=_0x504240(this,function(){var _0x20890f={};_0x20890f[_0x36557e('\x30\x78\x33\x38\x33','\x30\x78\x33\x37\x63',0x358,'\x30\x78\x33\x39\x66')]=_0x2c84f2(-'\x30\x78\x32\x32\x30',-0x234,-0x224,-0x202)+'\x2b\x24';function _0x2c84f2(_0x5aad10,_0x3b6f42,_0x16c3e1,_0x1695d8){return _0x3cbc(_0x5aad10- -'\x30\x78\x33\x36\x65',_0x1695d8);}function _0x4616ec(_0x1c8f8b,_0x59370e,_0x354f38,_0x1bd676){return _0x3cbc(_0x59370e-'\x30\x78\x33\x63\x37',_0x354f38);}function _0x1069a7(_0x484067,_0xe1ebd,_0xcaf5b,_0x6fbec0){return _0x3cbc(_0x6fbec0-0x31b,_0xcaf5b);}function _0x36557e(_0x505f0f,_0x124669,_0x2d5886,_0x596cfa){return _0x3cbc(_0x505f0f-'\x30\x78\x32\x34\x38',_0x2d5886);}var _0x49bb0d=_0x20890f;function _0x28777e(_0x1e3bd9,_0x4a3444,_0x4ce301,_0x1b7e79){return _0x3cbc(_0x4ce301-0xe8,_0x4a3444);}function _0x1889de(_0x1e0151,_0x5b3098,_0x1cf448,_0x217502){return _0x3cbc(_0x217502- -'\x30\x78\x37\x64',_0x1e0151);}function _0x314985(_0x29a60f,_0x4bfe1f,_0x4ca300,_0x5b0773){return _0x3cbc(_0x4bfe1f- -'\x30\x78\x33\x61\x62',_0x29a60f);}return _0x512b5d['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x36557e('\x30\x78\x33\x62\x62','\x30\x78\x33\x39\x35','\x30\x78\x33\x39\x32','\x30\x78\x33\x62\x31')](_0x49bb0d[_0x1889de('\x30\x78\x62\x39','\x30\x78\x62\x30',0xbf,'\x30\x78\x62\x65')])['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x2c84f2(-0x223,-'\x30\x78\x32\x34\x33',-0x23d,-0x213)+'\x72'](_0x512b5d)[_0x36557e('\x30\x78\x33\x62\x62',0x3c6,0x39d,0x3cb)](_0x2c84f2(-'\x30\x78\x32\x32\x30',-0x247,-'\x30\x78\x32\x32\x64',-0x240)+'\x2b\x24');});function _0x3cbc(_0x5083fd,_0x512b5d){var _0x504240=_0x2f08();return _0x3cbc=function(_0x2f08f3,_0x3cbcbf){_0x2f08f3=_0x2f08f3-(-0xdee+-0x69+-0x10*-0xf9);var _0xc7c32b=_0x504240[_0x2f08f3];return _0xc7c32b;},_0x3cbc(_0x5083fd,_0x512b5d);}_0x512b5d();var _0x4e8025=(function(){var _0x98c08e={};_0x98c08e['\x50\x71\x79\x7a\x43']='\x32\x7c\x33\x7c\x35\x7c\x34\x7c\x30\x7c'+'\x31',_0x98c08e['\x4c\x5a\x68\x59\x4e']=_0x282e75(-'\x30\x78\x31\x65\x66',-0x1d7,-'\x30\x78\x32\x31\x38',-'\x30\x78\x31\x65\x62');function _0xabeea5(_0x2dfe10,_0x5a2e9c,_0x23da23,_0x18ef7a){return _0x3cbc(_0x5a2e9c-'\x30\x78\x33\x30\x61',_0x23da23);}_0x98c08e[_0x282e75(-'\x30\x78\x31\x66\x31',-'\x30\x78\x31\x65\x37',-0x1f3,-0x20a)]='\x43\x6d\x48\x68\x45',_0x98c08e[_0x7a0a69(0xc2,'\x30\x78\x39\x63','\x30\x78\x39\x38','\x30\x78\x64\x63')]=function(_0x2b165f,_0x24a3fa){return _0x2b165f===_0x24a3fa;},_0x98c08e['\x67\x56\x59\x76\x76']='\x7a\x70\x70\x48\x55';function _0x185f73(_0x4fdeed,_0x6751dd,_0x252bb2,_0x46d8bc){return _0x3cbc(_0x46d8bc- -'\x30\x78\x34\x66',_0x6751dd);}function _0x282e75(_0x6339,_0x366881,_0x144c3a,_0x53f338){return _0x3cbc(_0x6339- -0x37d,_0x144c3a);}_0x98c08e[_0x7a0a69(0xde,'\x30\x78\x62\x39','\x30\x78\x65\x30','\x30\x78\x65\x61')]='\x50\x59\x6f\x6f\x6e';function _0x7a0a69(_0x390fb9,_0x553411,_0xbdb45e,_0x4abb6b){return _0x3cbc(_0x390fb9- -0x7a,_0x553411);}var _0x127811=_0x98c08e,_0x4acdc7=!![];return function(_0x2a3377,_0x2497cf){var _0x3c32e4={};function _0x1ca6e7(_0x19d473,_0x3d3c02,_0x12bb90,_0x579594){return _0x185f73(_0x19d473-0x194,_0x3d3c02,_0x12bb90-0xa8,_0x19d473- -0x306);}function _0x591459(_0x23346b,_0x4b8889,_0x4e39d4,_0x11ca89){return _0x282e75(_0x4b8889-0x739,_0x4b8889-0x10,_0x4e39d4,_0x11ca89-0xa4);}function _0x2bd40d(_0xf9cfb3,_0x2a43f4,_0x2f0c2f,_0x5235a3){return _0x282e75(_0x2a43f4-0x33e,_0x2a43f4-'\x30\x78\x61\x37',_0x2f0c2f,_0x5235a3-0x170);}_0x3c32e4[_0x1ca6e7(-0x1dd,-'\x30\x78\x31\x66\x31',-'\x30\x78\x32\x30\x37',-0x1dc)]=_0x127811[_0x1ca6e7(-0x1fe,-0x204,-'\x30\x78\x31\x66\x65',-0x20f)],_0x3c32e4[_0x21cc4c('\x30\x78\x33\x32\x34','\x30\x78\x32\x65\x36','\x30\x78\x33\x30\x63','\x30\x78\x32\x66\x62')]=_0x127811[_0x51fab8(0x128,'\x30\x78\x31\x30\x65',0x103,'\x30\x78\x31\x30\x31')];function _0x5e0e9f(_0x5cc43,_0x4c81ef,_0x4e0f58,_0x55130c){return _0x185f73(_0x5cc43-'\x30\x78\x35\x65',_0x4e0f58,_0x4e0f58-'\x30\x78\x39\x32',_0x5cc43-0x361);}function _0x51fab8(_0xabb7b6,_0x13e278,_0x18af3e,_0x548dfe){return _0x7a0a69(_0x18af3e-'\x30\x78\x33\x37',_0x548dfe,_0x18af3e-0xa3,_0x548dfe-0x18c);}_0x3c32e4[_0x138b59('\x30\x78\x33\x37\x61','\x30\x78\x33\x61\x30','\x30\x78\x33\x63\x33',0x389)]=_0x127811[_0x138b59('\x30\x78\x33\x63\x38',0x3c5,0x3b5,0x399)];function _0x5c06ec(_0x2c02c6,_0x549e2e,_0x166581,_0x52b41c){return _0x7a0a69(_0x2c02c6-'\x30\x78\x32\x64\x64',_0x549e2e,_0x166581-'\x30\x78\x39\x32',_0x52b41c-'\x30\x78\x31\x39\x62');}var _0x1fd6a3=_0x3c32e4;function _0x21cc4c(_0x25887c,_0x455f02,_0x432a98,_0x1ec7b2){return _0xabeea5(_0x25887c-0x1cb,_0x1ec7b2- -0x158,_0x455f02,_0x1ec7b2-0x1b6);}function _0x138b59(_0x5642db,_0x3be715,_0x4c4e91,_0x1f7788){return _0x7a0a69(_0x3be715-'\x30\x78\x32\x62\x33',_0x4c4e91,_0x4c4e91-0x1db,_0x1f7788-0x1a7);}function _0x4595a5(_0xecebc6,_0x5dd193,_0x459ae0,_0x2d269f){return _0x185f73(_0xecebc6-0x15e,_0x5dd193,_0x459ae0-'\x30\x78\x37\x38',_0x459ae0-0x27e);}if(_0x127811[_0x138b59('\x30\x78\x33\x36\x66',0x375,0x350,'\x30\x78\x33\x34\x62')](_0x127811[_0x21cc4c('\x30\x78\x33\x30\x64',0x309,0x320,0x31c)],_0x127811[_0x5e0e9f('\x30\x78\x34\x36\x61',0x486,0x468,0x493)])){var _0x4c5539={};_0x4c5539[_0x2bd40d(0x11e,'\x30\x78\x31\x34\x35','\x30\x78\x31\x32\x33',0x121)]=!![],_0x4c5539[_0x5e0e9f('\x30\x78\x34\x34\x63',0x42e,'\x30\x78\x34\x37\x33','\x30\x78\x34\x33\x38')]=_0x2f9ead,_0x1c0ddb['\x6a\x73\x6f\x6e'](_0x4c5539);}else{var _0x3a3a6f=_0x4acdc7?function(){var _0x5a9328={};_0x5a9328[_0x4c12a0('\x30\x78\x33\x33\x32','\x30\x78\x33\x34\x38',0x312,0x325)]=_0x1fd6a3[_0x582dfa(0x119,0x119,0x13c,'\x30\x78\x31\x31\x65')];function _0x4c12a0(_0x33584c,_0x1a7cd8,_0x24c515,_0x138c96){return _0x138b59(_0x33584c-0x1b7,_0x138c96- -0x91,_0x1a7cd8,_0x138c96-0x12);}function _0x582dfa(_0x57cee2,_0x3af67b,_0x499813,_0x3c091d){return _0x4595a5(_0x57cee2-0x8b,_0x3c091d,_0x499813- -'\x30\x78\x32\x36\x62',_0x3c091d-0x68);}function _0x4d0173(_0x1894af,_0x1c1f1,_0x1e6cee,_0x42335e){return _0x5c06ec(_0x1894af- -0x315,_0x1c1f1,_0x1e6cee-'\x30\x78\x31\x37\x32',_0x42335e-'\x30\x78\x31\x62');}function _0x2496d6(_0x58fe93,_0x1127f0,_0x1f38c5,_0x4d7d94){return _0x138b59(_0x58fe93-0x28,_0x1f38c5- -0x2db,_0x1127f0,_0x4d7d94-0x1d9);}function _0xb50c90(_0x5e72a5,_0x447862,_0x5e4128,_0x38e943){return _0x2bd40d(_0x5e72a5-0xcd,_0x5e4128-'\x30\x78\x31\x30\x30',_0x447862,_0x38e943-0x11c);}function _0x5cc4e9(_0x229f57,_0x8df86c,_0x1047c6,_0x32ff62){return _0x138b59(_0x229f57-'\x30\x78\x32\x65',_0x32ff62- -'\x30\x78\x39\x35',_0x1047c6,_0x32ff62-'\x30\x78\x31\x37\x36');}var _0x155463=_0x5a9328;function _0x5741b9(_0x1400fe,_0x237c8c,_0x431a8d,_0x432b5e){return _0x591459(_0x1400fe-0x127,_0x431a8d- -0x18b,_0x432b5e,_0x432b5e-'\x30\x78\x66\x39');}function _0x20a336(_0x3c5807,_0x2fac31,_0x3e04f0,_0x3f349a){return _0x2bd40d(_0x3c5807-0x138,_0x3c5807- -'\x30\x78\x32\x32\x37',_0x3f349a,_0x3f349a-'\x30\x78\x31\x39\x62');}function _0xcea0d6(_0x498035,_0x458999,_0x1aa274,_0x170b3b){return _0x138b59(_0x498035-'\x30\x78\x31\x35\x38',_0x458999- -'\x30\x78\x36\x61',_0x498035,_0x170b3b-0x12e);}if(_0x1fd6a3['\x58\x55\x77\x4d\x4c']!==_0x1fd6a3['\x4f\x6b\x42\x58\x7a']){if(_0x2497cf){var _0xeb5a5c=_0x2497cf['\x61\x70\x70\x6c\x79'](_0x2a3377,arguments);return _0x2497cf=null,_0xeb5a5c;}}else{var _0x29736c=_0x155463[_0x20a336(-'\x30\x78\x65\x39',-'\x30\x78\x31\x30\x35',-'\x30\x78\x66\x66',-'\x30\x78\x31\x31\x33')][_0xcea0d6('\x30\x78\x33\x33\x34',0x312,'\x30\x78\x33\x33\x31',0x30e)]('\x7c'),_0xb34151=-0x1*0xbed+-0xca3*-0x1+-0x5b*0x2;while(!![]){switch(_0x29736c[_0xb34151++]){case'\x30':_0x555e24['\x74\x6f\x53\x74\x72\x69\x6e\x67']=_0x2d32d9['\x74\x6f\x53\x74\x72\x69\x6e\x67'][_0x582dfa(0x15f,'\x30\x78\x31\x33\x34','\x30\x78\x31\x34\x64',0x148)](_0x2d32d9);continue;case'\x31':_0x2b6d59[_0x4499cd]=_0x555e24;continue;case'\x32':var _0x555e24=_0x546349['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'][_0x20a336(-0x10b,-0x121,-0xed,-0xfa)][_0xcea0d6('\x30\x78\x33\x38\x31',0x358,'\x30\x78\x33\x34\x32','\x30\x78\x33\x37\x65')](_0x2b84eb);continue;case'\x33':var _0x4499cd=_0x43587[_0x4f2eca];continue;case'\x34':_0x555e24[_0x5741b9('\x30\x78\x33\x62\x66',0x3a9,0x3bc,'\x30\x78\x33\x64\x61')]=_0x54b4aa[_0x5741b9(0x393,'\x30\x78\x33\x62\x30',0x3ba,0x3cb)](_0x2d8f59);continue;case'\x35':var _0x2d32d9=_0x582b06[_0x4499cd]||_0x555e24;continue;}break;}}}:function(){};return _0x4acdc7=![],_0x3a3a6f;}};}()),_0x2e027f=_0x4e8025(this,function(){var _0x5bf175={'\x4e\x4d\x72\x6c\x78':function(_0x300282,_0x5ebbc7){return _0x300282(_0x5ebbc7);},'\x50\x50\x45\x74\x65':function(_0x2cd24a,_0x3429cb){return _0x2cd24a+_0x3429cb;},'\x4e\x65\x78\x6a\x46':_0x853679('\x30\x78\x31\x31\x32','\x30\x78\x31\x32\x32','\x30\x78\x65\x38',0x120)+_0x54aa86(-'\x30\x78\x32\x36\x35',-0x248,-0x27c,-'\x30\x78\x32\x35\x61'),'\x57\x71\x53\x51\x54':'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75'+_0x12596c('\x30\x78\x32\x34\x66','\x30\x78\x32\x34\x65',0x27a,'\x30\x78\x32\x35\x38')+_0x12596c('\x30\x78\x32\x35\x65','\x30\x78\x32\x35\x38','\x30\x78\x32\x38\x35',0x253)+'\x20\x29','\x7a\x56\x70\x4f\x44':function(_0x27b41d){return _0x27b41d();},'\x4d\x56\x62\x42\x58':function(_0x584f9e,_0x194396){return _0x584f9e===_0x194396;},'\x54\x58\x66\x65\x67':'\x44\x57\x4d\x6c\x58','\x6b\x5a\x54\x4d\x4f':_0x54aa86(-0x222,-'\x30\x78\x32\x33\x64',-'\x30\x78\x32\x30\x64',-0x235),'\x53\x6a\x71\x78\x4a':function(_0x61a721,_0x2cea4b){return _0x61a721+_0x2cea4b;},'\x6e\x62\x5a\x6b\x73':function(_0x372f3b,_0x1b8246){return _0x372f3b+_0x1b8246;},'\x52\x64\x54\x65\x78':_0x853679(0xf9,0x105,0xfb,0xdd),'\x6a\x4f\x55\x54\x48':_0x2e20b7(-0x16a,-'\x30\x78\x31\x37\x35',-'\x30\x78\x31\x38\x63',-'\x30\x78\x31\x36\x61'),'\x78\x79\x58\x42\x4d':_0x4e8d43(0x30e,0x2f4,0x317,0x2f1),'\x51\x6d\x4e\x4d\x75':_0x2e20b7(-'\x30\x78\x31\x39\x30',-'\x30\x78\x31\x62\x37',-0x18e,-'\x30\x78\x31\x39\x35'),'\x51\x6f\x44\x64\x59':_0x237ed4(-0x168,-'\x30\x78\x31\x36\x34',-'\x30\x78\x31\x35\x61',-'\x30\x78\x31\x34\x64'),'\x69\x50\x63\x61\x63':function(_0x2a489b,_0x2ae894){return _0x2a489b<_0x2ae894;},'\x44\x4f\x56\x56\x4b':_0x28aea6(0x15d,'\x30\x78\x31\x36\x38','\x30\x78\x31\x34\x36',0x163)};function _0x12596c(_0x459eb0,_0x49efb9,_0x20bb94,_0x432900){return _0x3cbc(_0x459eb0-0xe3,_0x49efb9);}function _0x237ed4(_0x447226,_0x3623da,_0x4e2833,_0x44279a){return _0x3cbc(_0x4e2833- -'\x30\x78\x32\x62\x61',_0x447226);}function _0x2e20b7(_0x53620e,_0x21b80f,_0x451b02,_0x55f44c){return _0x3cbc(_0x53620e- -0x2f4,_0x55f44c);}var _0x508055;try{if(_0x5bf175[_0x362eb6(0x34c,'\x30\x78\x33\x32\x33','\x30\x78\x33\x32\x31',0x32e)](_0x5bf175[_0x54aa86(-'\x30\x78\x32\x33\x35',-'\x30\x78\x32\x33\x62',-0x25c,-0x24c)],_0x5bf175[_0x54aa86(-'\x30\x78\x32\x32\x33',-'\x30\x78\x32\x31\x34',-'\x30\x78\x31\x66\x66',-'\x30\x78\x32\x31\x31')])){var _0x44d2c0=_0x5bf175[_0x362eb6('\x30\x78\x33\x32\x31',0x312,0x338,'\x30\x78\x33\x33\x34')](_0x148c73,_0x5bf175[_0x853679('\x30\x78\x65\x61',0xf9,'\x30\x78\x65\x63','\x30\x78\x65\x61')](_0x5bf175[_0x54aa86(-'\x30\x78\x32\x33\x63',-'\x30\x78\x32\x32\x37',-'\x30\x78\x32\x34\x30',-0x22d)]+_0x5bf175[_0x54aa86(-0x279,-'\x30\x78\x32\x34\x65',-0x27c,-0x25f)],'\x29\x3b'));_0x293173=_0x5bf175[_0x362eb6(0x361,'\x30\x78\x33\x35\x63',0x362,0x339)](_0x44d2c0);}else{var _0x2785f8=Function(_0x5bf175['\x53\x6a\x71\x78\x4a'](_0x5bf175[_0x2e20b7(-0x187,-0x16f,-'\x30\x78\x31\x38\x36',-0x194)](_0x5bf175[_0x237ed4(-0x174,-0x15f,-0x149,-'\x30\x78\x31\x34\x65')],_0x5bf175['\x57\x71\x53\x51\x54']),'\x29\x3b'));_0x508055=_0x2785f8();}}catch(_0x5698c4){_0x508055=window;}function _0x3dac4a(_0x13707d,_0x1c5ab0,_0x354844,_0xb5b91d){return _0x3cbc(_0x1c5ab0-'\x30\x78\x31\x36\x38',_0x354844);}function _0x4e8d43(_0x5e81d0,_0x3a9e8c,_0x538528,_0xbee695){return _0x3cbc(_0x3a9e8c-'\x30\x78\x31\x38\x36',_0x538528);}var _0x5c62a0=_0x508055[_0x853679(0xd2,'\x30\x78\x65\x61','\x30\x78\x64\x65',0xd3)]=_0x508055[_0x362eb6(0x331,'\x30\x78\x33\x34\x66',0x32f,0x33e)]||{},_0x369d93=[_0x3dac4a(0x2c5,'\x30\x78\x32\x65\x39','\x30\x78\x32\x65\x35',0x2e4),_0x5bf175['\x52\x64\x54\x65\x78'],_0x5bf175['\x6a\x4f\x55\x54\x48'],_0x5bf175['\x78\x79\x58\x42\x4d'],_0x2e20b7(-'\x30\x78\x31\x37\x62',-'\x30\x78\x31\x39\x36',-0x160,-0x162),_0x5bf175[_0x237ed4(-0x162,-'\x30\x78\x31\x34\x37',-'\x30\x78\x31\x35\x62',-0x155)],_0x5bf175[_0x3dac4a('\x30\x78\x32\x63\x33','\x30\x78\x32\x64\x64',0x2f8,0x2ec)]];function _0x28aea6(_0xba282e,_0x221ee4,_0x5d8209,_0x3ce0f3){return _0x3cbc(_0x3ce0f3-'\x30\x78\x31\x32',_0x221ee4);}function _0x853679(_0x4a97f4,_0x4504bc,_0x124c9e,_0x2df899){return _0x3cbc(_0x4a97f4- -'\x30\x78\x37\x65',_0x2df899);}function _0x54aa86(_0x45bd5b,_0xd13f35,_0x4fe383,_0x501051){return _0x3cbc(_0x501051- -'\x30\x78\x33\x39\x65',_0x45bd5b);}function _0x362eb6(_0x4180c6,_0x560c70,_0x340dcb,_0x5d58d4){return _0x3cbc(_0x340dcb-0x1df,_0x5d58d4);}for(var _0xff0470=0x4fd*0x4+0x1268+-0x265c*0x1;_0x5bf175[_0x2e20b7(-'\x30\x78\x31\x39\x38',-0x17a,-'\x30\x78\x31\x61\x61',-'\x30\x78\x31\x37\x65')](_0xff0470,_0x369d93[_0x2e20b7(-'\x30\x78\x31\x61\x35',-0x1a9,-0x194,-0x1c4)]);_0xff0470++){if(_0x5bf175[_0x237ed4(-0x16d,-0x17a,-0x16e,-'\x30\x78\x31\x34\x63')]===_0x5bf175[_0x28aea6(0x136,0x169,0x187,0x15e)]){var _0x53ad9e=('\x31\x7c\x32\x7c\x35\x7c\x30\x7c\x34\x7c'+'\x33')[_0x28aea6(0x146,'\x30\x78\x31\x33\x66',0x136,'\x30\x78\x31\x35\x35')]('\x7c'),_0x1cbd0b=0x295*-0x1+-0x12e7+-0x64*-0x37;while(!![]){switch(_0x53ad9e[_0x1cbd0b++]){case'\x30':_0x25d448['\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f']=_0x4e8025[_0x2e20b7(-'\x30\x78\x31\x36\x62',-'\x30\x78\x31\x35\x64',-'\x30\x78\x31\x34\x64',-0x149)](_0x4e8025);continue;case'\x31':var _0x25d448=_0x4e8025['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x362eb6(0x383,'\x30\x78\x33\x35\x63',0x368,'\x30\x78\x33\x34\x39')](_0x4e8025);continue;case'\x32':var _0xc27f23=_0x369d93[_0xff0470];continue;case'\x33':_0x5c62a0[_0xc27f23]=_0x25d448;continue;case'\x34':_0x25d448[_0x237ed4(-'\x30\x78\x31\x37\x31',-'\x30\x78\x31\x33\x34',-'\x30\x78\x31\x35\x39',-0x15c)]=_0x3222de['\x74\x6f\x53\x74\x72\x69\x6e\x67'][_0x12596c('\x30\x78\x32\x36\x63','\x30\x78\x32\x36\x37','\x30\x78\x32\x38\x31',0x250)](_0x3222de);continue;case'\x35':var _0x3222de=_0x5c62a0[_0xc27f23]||_0x25d448;continue;}break;}}else{_0x2770b6[_0x2e20b7(-'\x30\x78\x31\x37\x33',-0x167,-'\x30\x78\x31\x37\x30',-0x158)](_0x32537f);var _0xdd98ab={};_0xdd98ab[_0x853679(0x106,0xec,0x110,0xe3)]=![],_0xdd98ab[_0x853679(0x101,0x11a,'\x30\x78\x66\x63',0xe9)]=_0x2b5aa6,_0x4a73d5[_0x3dac4a('\x30\x78\x32\x63\x64','\x30\x78\x32\x63\x65',0x2c7,'\x30\x78\x32\x62\x63')](_0xdd98ab);}}});_0x2e027f(),router['\x67\x65\x74']('\x2f\x74\x6b',async(_0x18644d,_0x1135f7,_0x1fc12a)=>{function _0x170735(_0x4e8bc2,_0x1536e2,_0x51f844,_0x3eaf55){return _0x3cbc(_0x4e8bc2-0x2b7,_0x1536e2);}var _0x4e791a={};_0x4e791a[_0xd3783b('\x30\x78\x31\x32\x32','\x30\x78\x31\x34\x39','\x30\x78\x31\x31\x65','\x30\x78\x31\x30\x34')]=_0x170735(0x439,0x45b,'\x30\x78\x34\x33\x33',0x413);function _0x4d7d10(_0xa00a96,_0x4c3396,_0x86a349,_0x59bdfd){return _0x3cbc(_0x4c3396-'\x30\x78\x63\x39',_0x86a349);}_0x4e791a[_0xd3783b('\x30\x78\x31\x37\x30',0x154,0x18a,'\x30\x78\x31\x36\x62')]=_0x4d7d10(0x249,'\x30\x78\x32\x35\x30',0x26d,'\x30\x78\x32\x36\x30');function _0xd3783b(_0x37a0ad,_0x222675,_0x37474b,_0xa5387){return _0x3cbc(_0x37a0ad- -'\x30\x78\x31\x66',_0x37474b);}function _0x155dd9(_0x57b6be,_0x1bfc17,_0x2127f8,_0x4538ef){return _0x3cbc(_0x57b6be- -'\x30\x78\x33\x37\x39',_0x2127f8);}function _0x58461d(_0x50aac0,_0x36ef86,_0x3b71b8,_0x4741f3){return _0x3cbc(_0x50aac0-'\x30\x78\x32\x34\x31',_0x4741f3);}var _0x2fcee4=_0x4e791a;function _0x7d5fd8(_0x3f4b5f,_0x45c37f,_0x4045a8,_0x39c414){return _0x3cbc(_0x4045a8-'\x30\x78\x32\x63\x66',_0x45c37f);}function _0x276d67(_0x130a13,_0x1e8a97,_0x2b9286,_0x14c652){return _0x3cbc(_0x14c652- -'\x30\x78\x31\x61\x39',_0x130a13);}function _0x9153ee(_0x823528,_0x1e7b93,_0x380965,_0x5d744f){return _0x3cbc(_0x380965-'\x30\x78\x32\x33\x63',_0x1e7b93);}function _0x3b8d0f(_0x5bf59b,_0x281512,_0x2901de,_0x3fcde9){return _0x3cbc(_0x281512- -0x26e,_0x2901de);}var _0x4a7d01=_0x18644d['\x71\x75\x65\x72\x79'][_0x4d7d10(0x239,0x22e,'\x30\x78\x32\x34\x62',0x235)];if(!_0x4a7d01)_0x2fcee4[_0x7d5fd8('\x30\x78\x34\x30\x37','\x30\x78\x34\x32\x65','\x30\x78\x34\x31\x30',0x43a)]===_0x2fcee4[_0x7d5fd8(0x446,'\x30\x78\x34\x37\x63','\x30\x78\x34\x35\x65',0x44f)]?_0x59bba5=_0x5750e5:_0x1135f7[_0x276d67(-'\x30\x78\x34\x66',-'\x30\x78\x33\x64',-'\x30\x78\x32\x34',-0x43)](errnya);else{var _0x12b0f8=await ditzz['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x65\x72'][_0x3b8d0f(-'\x30\x78\x31\x31\x38',-'\x30\x78\x31\x33\x30',-'\x30\x78\x31\x34\x61',-'\x30\x78\x31\x30\x38')](_0x4a7d01),_0x5d4ed9={};_0x5d4ed9[_0x58461d(0x3c5,0x3bd,'\x30\x78\x33\x62\x61','\x30\x78\x33\x64\x65')]=_0xd3783b('\x30\x78\x31\x32\x38','\x30\x78\x31\x32\x35','\x30\x78\x31\x31\x34','\x30\x78\x31\x30\x61'),_0x5d4ed9[_0x9153ee('\x30\x78\x33\x37\x35',0x392,0x37c,0x3a2)]=''+creator,_0x5d4ed9[_0x7d5fd8(0x445,'\x30\x78\x34\x31\x34',0x422,0x43a)]=_0x12b0f8[_0x3b8d0f(-'\x30\x78\x31\x33\x66',-0x11b,-0x138,-'\x30\x78\x31\x30\x38')],_0x5d4ed9[_0xd3783b(0x15d,'\x30\x78\x31\x37\x31','\x30\x78\x31\x35\x37',0x179)]=_0x12b0f8['\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c'],_0x5d4ed9[_0x170735(0x426,0x44d,'\x30\x78\x34\x34\x62','\x30\x78\x34\x30\x37')]=_0x12b0f8['\x6d\x65\x64\x69\x61'][-0x3*0x1f7+0x656*-0x1+0x1*0xc3d]['\x66\x6f\x72\x6d\x61\x74\x74\x65\x64\x53'+_0xd3783b('\x30\x78\x31\x35\x33',0x151,0x17d,'\x30\x78\x31\x35\x32')],_0x5d4ed9[_0x4d7d10('\x30\x78\x32\x33\x35','\x30\x78\x32\x34\x33','\x30\x78\x32\x33\x32',0x223)]=_0x12b0f8[_0x7d5fd8('\x30\x78\x34\x32\x30','\x30\x78\x34\x34\x61',0x445,0x42a)][-0x1*0x21e6+0xb78+-0x1*-0x166f][_0xd3783b(0x144,0x126,'\x30\x78\x31\x32\x36',0x16f)+_0x155dd9(-'\x30\x78\x32\x30\x37',-'\x30\x78\x32\x33\x31',-0x229,-0x1f2)],_0x5d4ed9[_0x170735(0x422,0x407,0x40d,'\x30\x78\x34\x31\x39')]=_0x12b0f8['\x6d\x65\x64\x69\x61'][-0x1bf1+0x514+-0x16de*-0x1][_0xd3783b('\x30\x78\x31\x34\x36','\x30\x78\x31\x36\x32','\x30\x78\x31\x32\x36','\x30\x78\x31\x36\x66')],_0x5d4ed9[_0xd3783b('\x30\x78\x31\x35\x35',0x13e,'\x30\x78\x31\x32\x39',0x167)]=_0x12b0f8[_0x276d67(-'\x30\x78\x33\x31',-'\x30\x78\x35\x64',-0x55,-0x33)][0x2*0xd1+0x1b82+-0x1d22][_0x9153ee('\x30\x78\x33\x37\x61',0x378,'\x30\x78\x33\x61\x31',0x391)];var _0x40e67e=_0x5d4ed9;_0x1135f7['\x6a\x73\x6f\x6e'](_0x40e67e);}}),router['\x67\x65\x74']('\x2f\x73\x65\x61\x72\x63\x68\x2f\x3a\x6b'+'\x65\x79\x77\x6f\x72\x64',async(_0x1ae6e,_0x1ac147)=>{function _0x33bc6e(_0x47919a,_0x37cd83,_0x4b11bd,_0x589b2e){return _0x3cbc(_0x47919a- -0x315,_0x4b11bd);}function _0x50a170(_0x182972,_0x3bbb9c,_0x1e86e7,_0x165fd1){return _0x3cbc(_0x165fd1- -0x201,_0x1e86e7);}function _0x49e96e(_0x54b48c,_0x56cd81,_0x39b13f,_0x1b1c67){return _0x3cbc(_0x56cd81-'\x30\x78\x31\x66\x39',_0x1b1c67);}baiscopelk['\x73\x65\x61\x72\x63\x68'](_0x1ae6e[_0x50a170(-0xe6,-0xe8,-0xa8,-'\x30\x78\x63\x34')]['\x6b\x65\x79\x77\x6f\x72\x64']||'')[_0x50a170(-0x69,-0x63,-'\x30\x78\x38\x34',-'\x30\x78\x38\x33')](_0x55f87c=>{var _0x5b47dc={};_0x5b47dc['\x73\x74\x61\x74\x75\x73']=!![];function _0x11b5a6(_0x4d91eb,_0x3704d1,_0x2bd6bf,_0x92a294){return _0x50a170(_0x4d91eb-'\x30\x78\x31\x31\x35',_0x3704d1-0x28,_0x92a294,_0x4d91eb- -'\x30\x78\x63\x31');}_0x5b47dc[_0x4b324a(-'\x30\x78\x31\x34\x38',-0x160,-0x17b,-'\x30\x78\x31\x37\x31')]=_0x55f87c;function _0x4b324a(_0x2958ee,_0x1b8566,_0x162026,_0x50aa62){return _0x33bc6e(_0x1b8566-'\x30\x78\x37\x62',_0x1b8566-0x1b3,_0x50aa62,_0x50aa62-0x64);}_0x1ac147[_0x11b5a6(-'\x30\x78\x31\x35\x63',-'\x30\x78\x31\x37\x37',-0x141,-'\x30\x78\x31\x33\x34')](_0x5b47dc);})[_0x50a170(-0xb1,-'\x30\x78\x63\x61',-'\x30\x78\x61\x31',-0xc8)](_0x81375b=>{function _0xbde527(_0x13ae9f,_0x5b4181,_0x10f77d,_0x58ee7e){return _0x50a170(_0x13ae9f-'\x30\x78\x32\x38',_0x5b4181-0x139,_0x5b4181,_0x10f77d- -'\x30\x78\x62\x31');}console['\x6c\x6f\x67'](_0x81375b);var _0x20cf35={};_0x20cf35[_0xbde527(-0x14f,-0x105,-0x12e,-'\x30\x78\x31\x34\x62')]=![],_0x20cf35['\x6d\x73\x67']=_0x81375b;function _0x317184(_0x1ab199,_0x4c1f0a,_0x41c519,_0xe2969b){return _0x49e96e(_0x1ab199-'\x30\x78\x31\x34\x37',_0x41c519- -0x1d4,_0x41c519-'\x30\x78\x34',_0x1ab199);}_0x1ac147[_0x317184('\x30\x78\x31\x61\x32',0x19c,0x18b,0x168)](_0x20cf35);});});


router.get('/game/family100', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/family100.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkalimat', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkalimat.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkata', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkata.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakjenaka', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var pertanyaan = JSON.parse(
            fs.readFileSync(__path + '/data/tebakjenaka.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...pertanyaan[~~(Math.random() * pertanyaan.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakkimia', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var nama = JSON.parse(
            fs.readFileSync(__path + '/data/tebakkimia.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...nama[~~(Math.random() * nama.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebaklirik', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var question = JSON.parse(
            fs.readFileSync(__path + '/data/tebaklirik.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...question[~~(Math.random() * question.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakchara', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var name = JSON.parse(
            fs.readFileSync(__path + '/data/tebakchara.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...name[~~(Math.random() * name.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebaktebakan', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var soal = JSON.parse(
            fs.readFileSync(__path + '/data/tebaktebakan.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...soal[~~(Math.random() * soal.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/game/tebakbendera', async (req, res, next) => {
    var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
        var bendera = JSON.parse(
            fs.readFileSync(__path + '/data/tebakbendera.json')
        )
        res
          .status(200)
          .json({
              code: 200,
              success: true,
              ...bendera[~~(Math.random() * bendera.length)]
          })
    } else {
        res.json(loghandler.invalidKey)
    }
})

router.get('/music/joox', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
  Joox(query)
  .then((result) => {
  res.json(result)
    res.json(result)
  });
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/music/spotify', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  if(!apikey) return res.json(loghandler.notparam)
  if(!query) return res.json(loghandler.notquery)
  
  if(listkey.includes(apikey)){
  fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/spotify?apikey=alpin1&q=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})
router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/yt/playmp3", async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});

router.get("/yt/playmp4", async(req, res, next) => {

    const query = req.query.query;

    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
      res.json(loghandler.invalidKey)
      }
});


router.get('/yt/search', async(req, res, next) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if(!query) return res.json(loghandler.notquery)
    if(!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});

router.get('/download/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     TiktokDownloader(`${url}`)
        .then(data => {
        var result = data.result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
               result
             })
         })
         .catch((error) => {
            res.json(error);
        });
      } else {
     res.json(loghandler.invalidKey)
     }
});

router.get('/download/ig', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igDownloader(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/ig2', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igdl(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/stickerline', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/stickerline?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/smule', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://mnazria.herokuapp.com/api/smule?link=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/joox3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/joox?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/joox2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://mnazria.herokuapp.com/api/jooxnich?search=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.lirik;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/apkdl', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-download?dl_url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/apk', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/apk-search?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/googleimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://nzcha-apii.herokuapp.com/googleimage?q=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/mediafire', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-json-reysekha.herokuapp.com/api/mediafire/?url=${url}&apikey=Yuzzu`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/github', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://free-restapii.herokuapp.com/docs/githubstalk?username=${username}&apikey=LoliKillers`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/ig', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/igstalk?username=${username}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/wallpaperflare', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://hadi-api.herokuapp.com/api/wallpaperflare?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/ytmp32', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/ytaudio?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/ytmp42', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/ytvid?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.getVideo;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/shoppe', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/shopee?apikey=reyterganz&q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/zodiak', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://revita.herokuapp.com/api/primbon/zodiaku?mimpi=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/artimimpi', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/primbon/tafsirmimpi?mimpi=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/primbon/artinama', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/primbon/artinama?name=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/unplash', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/unsplash?apikey=apivinz&q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/sticker', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api.zeks.me/api/searchsticker?apikey=reyterganz&q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.sticker;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/xnxx', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/twittervid', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twvid?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.getVideo;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/twitterimg', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/twimg?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.images;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/xvideo', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/pornhub', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/pornhub/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.res;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/pinterest', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/pinterest?q=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/igtv', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/igtv?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/tiktok3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://tiktokd.herokuapp.com/tiktok?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.link;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/tiktok2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aqulzz.herokuapp.com/tiktok?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/facebook2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-xcoders.xyz/api/download/fb?url=${url}&apikey=UW8wc3KPy0`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/facebook', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://api-xcoders.xyz/api/download/fb?url=${url}&apikey=UW8wc3KPy0`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.data.url;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/fb2', async (req, res, next) => {

        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       FB(url)
       .then((data) => {
         res.json({
           status: true,
           code: 200,
           creator: `${creator}`,
           title: data.title,
           desc: data.deskripsi,
           durasi: data.durasi,
           thumb: data.thumbnail,
           result: data.hd
         })
       });
} else {
res.json(loghandler.invalidKey)
}
});

router.get('/downloader/fb', async (req, res, next) => {

  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
       fbDownloader(`${url}`)
       .then((result) => {
            res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/stalk/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        username = req.query.username

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
   } else {
       res.json(loghandler.invalidKey)
   }
})

router.get('/stalk/ig2', async(req, res, next) => {
  const username = req.query.username;
  const apikey = req.query.apikey;
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  igStalk(username)
    .then((result) => {
      res.json({
        status : true,
        code: 200,
        creator : `${creator}`,
        result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});


router.get('/stalk/npm', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/faktaunik', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/faktaunik`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/katabijak', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/katabijak`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/pantun', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
        if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/pantun`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/fancytext', async (req, res, next) => {
        var Apikey = req.query.apikey
             text = req.query.text 
  
	if(!Apikey) return res.json(loghandler.notparam)
        if(!text) return res.json(loghandler.nottext)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${text}`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/quotes', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://kocakz.herokuapp.com/api/random/text/quotes`))
        .then(response => response.json())
        .then(hasil => {
        var result = hasil.result;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/jadwal-bioskop', async(req, res, next) => {
var Apikey = req.query.apikey

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.json({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/short/tinyurl', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   } else {
res.json(loghandler.invalidKey)
}
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		Apikey = req.query.apikey;
		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
	} else {
res.json(loghandler.invalidKey)
}
});

router.get('/tools/wpuser', async(req, res, next) => {
  const link = req.query.url;
  const apikey = req.query.apikey;
  
  if(!link) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    WPUser(link)
    .then((data) => {
      res.json(data)
    })
} else {
  res.json(loghandler.invalidKey)
};
});

router.get('/info/cuaca', async(req, res, next) => {
  const apikey = req.query.apikey;
  const kota = req.query.kota;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!kota) return res.json({status: false, code: 406, message: 'masukkan parameter kota'})
  if(listkey.includes(apikey)) {
    Cuaca(kota)
    .then((data) => {
      res.json(data)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})
router.get('/info/gempa', async (req, res, next) => {
	        var Apikey = req.query.apikey

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		Apikey = req.query.apikey;

		if (!Apikey) return res.json(loghandler.notparam)
		if (listkey.includes(Apikey)){
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/hadits', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/quran', async (req, res, next) => {
        var Apikey = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/wirid', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})
router.get('/muslim/jadwalshalat', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/search/image', async(req, res, next) => {
  const apikey = req.query.apikey;
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
  } else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/nsfw/ahegao', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ahegao = JSON.parse(fs.readFileSync(__path +'/data/ahegao.json'));
  const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
  data = await fetch(randahegao).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ahegao.jpeg', data)
  res.sendFile(__path +'/tmp/ahegao.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/ass', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ass = JSON.parse(fs.readFileSync(__path +'/data/ass.json'));
  const randass = ass[Math.floor(Math.random() * ass.length)];
  data = await fetch(randass).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ass.jpeg', data)
  res.sendFile(__path +'/tmp/ass.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/bdsm', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const bdsm = JSON.parse(fs.readFileSync(__path +'/data/bdsm.json'));
  const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];
  data = await fetch(randbdsm).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bdsm.jpeg', data)
  res.sendFile(__path +'/tmp/bdsm.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/blowjob', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const blowjob = JSON.parse(fs.readFileSync(__path +'/data/blowjob.json'));
  const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];
  data = await fetch(randblowjob).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blowjob.jpeg', data)
  res.sendFile(__path +'/tmp/blowjob.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/cuckold', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cuckold = JSON.parse(fs.readFileSync(__path +'/data/cuckold.json'));
  const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];
  data = await fetch(randcuckold).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cuckold.jpeg', data)
  res.sendFile(__path +'/tmp/cuckold.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/cum', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cum = JSON.parse(fs.readFileSync(__path +'/data/cum.json'));
  const randcum = cum[Math.floor(Math.random() * cum.length)];
  data = await fetch(randcum).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cum.jpeg', data)
  res.sendFile(__path +'/tmp/cum.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/ero', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ero = JSON.parse(fs.readFileSync(__path +'/data/ero.json'));
  const randero = ero[Math.floor(Math.random() * ero.length)];
  data = await fetch(randero).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ero.jpeg', data)
  res.sendFile(__path +'/tmp/ero.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/femdom', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const femdom = JSON.parse(fs.readFileSync(__path +'/data/femdom.json'));
  const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];
  data = await fetch(randfemdom).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/femdom.jpeg', data)
  res.sendFile(__path +'/tmp/femdom.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/foot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const foot = JSON.parse(fs.readFileSync(__path +'/data/foot.json'));
  const randfoot = foot[Math.floor(Math.random() * foot.length)];
  data = await fetch(randfoot).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/foot.jpeg', data)
  res.sendFile(__path +'/tmp/foot.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/gangbang', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gangbang = JSON.parse(fs.readFileSync(__path +'/data/gangbang.json'));
  const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];
  data = await fetch(randgangbang).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gangbang.jpeg', data)
  res.sendFile(__path +'/tmp/gangbang.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/glasses', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const glasses = JSON.parse(fs.readFileSync(__path +'/data/glasses.json'));
  const randglasses = glasses[Math.floor(Math.random() * glasses.length)];
  data = await fetch(randglasses).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/glasses.jpeg', data)
  res.sendFile(__path +'/tmp/glasses.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/hentai', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const hentai = JSON.parse(fs.readFileSync(__path +'/data/hentai.json'));
  const randhentai = hentai[Math.floor(Math.random() * hentai.length)];
  data = await fetch(randhentai).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hentai.jpeg', data)
  res.sendFile(__path +'/tmp/hentai.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/gifs', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gifs = JSON.parse(fs.readFileSync(__path +'/data/gifs.json'));
  const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
  data = await fetch(randgifs).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gifs.jpeg', data)
  res.sendFile(__path +'/tmp/gifs.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/jahy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jahy = JSON.parse(fs.readFileSync(__path +'/data/jahy.json'));
  const randjahy = jahy[Math.floor(Math.random() * jahy.length)];
  data = await fetch(randjahy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jahy.jpeg', data)
  res.sendFile(__path +'/tmp/jahy.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/manga', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const manga = JSON.parse(fs.readFileSync(__path +'/data/manga.json'));
  const randmanga = manga[Math.floor(Math.random() * manga.length)];
  data = await fetch(randmanga).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/manga.jpeg', data)
  res.sendFile(__path +'/tmp/manga.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/masturbation', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const masturbation = JSON.parse(fs.readFileSync(__path +'/data/masturbation.json'));
  const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];
  data = await fetch(randmasturbation).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/masturbation.jpeg', data)
  res.sendFile(__path +'/tmp/masturbation.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/neko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const neko = JSON.parse(fs.readFileSync(__path +'/data/neko.json'));
  const randneko = neko[Math.floor(Math.random() * neko.length)];
  data = await fetch(randneko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neko.jpeg', data)
  res.sendFile(__path +'/tmp/neko.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/orgy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const orgy = JSON.parse(fs.readFileSync(__path +'/data/orgy.json'));
  const randorgy = orgy[Math.floor(Math.random() * orgy.length)];
  data = await fetch(randorgy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/orgy.jpeg', data)
  res.sendFile(__path +'/tmp/orgy.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/panties', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const panties = JSON.parse(fs.readFileSync(__path +'/data/panties.json'));
  const randpanties = panties[Math.floor(Math.random() * panties.length)];
  data = await fetch(randpanties).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/panties.jpeg', data)
  res.sendFile(__path +'/tmp/panties.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/pussy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pussy = JSON.parse(fs.readFileSync(__path +'/data/pussy.json'));
  const randpussy = pussy[Math.floor(Math.random() * pussy.length)];
  data = await fetch(randpussy).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pussy.jpeg', data)
  res.sendFile(__path +'/tmp/pussy.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/neko2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const neko2 = JSON.parse(fs.readFileSync(__path +'/data/neko2.json'));
  const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];
  data = await fetch(randneko2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/neko2.jpeg', data)
  res.sendFile(__path +'/tmp/neko2.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/tentacles', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tentacles = JSON.parse(fs.readFileSync(__path +'/data/tentacles.json'));
  const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];
  data = await fetch(randtentacles).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tentacles.jpeg', data)
  res.sendFile(__path +'/tmp/tentacles.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/thighs', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const thighs = JSON.parse(fs.readFileSync(__path +'/data/thighs.json'));
  const randthighs = thighs[Math.floor(Math.random() * thighs.length)];
  data = await fetch(randthighs).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/thighs.jpeg', data)
  res.sendFile(__path +'/tmp/thighs.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/yuri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yuri = JSON.parse(fs.readFileSync(__path +'/data/yuri.json'));
  const randyuri = yuri[Math.floor(Math.random() * yuri.length)];
  data = await fetch(randyuri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuri.jpeg', data)
  res.sendFile(__path +'/tmp/yuri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/nsfw/zettai', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const zettai = JSON.parse(fs.readFileSync(__path +'/data/zettai.json'));
  const randzettai = zettai[Math.floor(Math.random() * zettai.length)];
  data = await fetch(randzettai).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/zettai.jpeg', data)
  res.sendFile(__path +'/tmp/zettai.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/keneki', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const keneki = JSON.parse(fs.readFileSync(__path +'/data/keneki.json'));
  const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];
  data = await fetch(randkeneki).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/keneki.jpeg', data)
  res.sendFile(__path +'/tmp/keneki.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/megumin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const megumin = JSON.parse(fs.readFileSync(__path +'/data/megumin.json'));
  const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];
  data = await fetch(randmegumin).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/megumin.jpeg', data)
  res.sendFile(__path +'/tmp/megumin.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/yotsuba', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yotsuba = JSON.parse(fs.readFileSync(__path +'/data/yotsuba.json'));
  const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
  data = await fetch(randyotsuba).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yotsuba.jpeg', data)
  res.sendFile(__path +'/tmp/yotsuba.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shinomiya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shinomiya = JSON.parse(fs.readFileSync(__path +'/data/shinomiya.json'));
  const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];
  data = await fetch(randshinomiya).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shinomiya.jpeg', data)
  res.sendFile(__path +'/tmp/shinomiya.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/yumeko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yumeko = JSON.parse(fs.readFileSync(__path +'/data/yumeko.json'));
  const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
  data = await fetch(randyumeko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yumeko.jpeg', data)
  res.sendFile(__path +'/tmp/yumeko.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/tejina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tejina = JSON.parse(fs.readFileSync(__path +'/data/tejina.json'));
  const randtejina = tejina[Math.floor(Math.random() * tejina.length)];
  data = await fetch(randtejina).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tejina.jpeg', data)
  res.sendFile(__path +'/tmp/tejina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/chiho', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const chiho = JSON.parse(fs.readFileSync(__path +'/data/chiho.json'));
  const randchiho = chiho[Math.floor(Math.random() * chiho.length)];
  data = await fetch(randchiho).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/chiho.jpeg', data)
  res.sendFile(__path +'/tmp/chiho.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cyberspace = JSON.parse(fs.readFileSync(__path +'/data/CyberSpace.json'));
  const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
  data = await fetch(randcyberspace).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cyberspace.jpeg', data)
  res.sendFile(__path +'/tmp/cyberspace.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/gaming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gaming = JSON.parse(fs.readFileSync(__path +'/data/GameWallp.json'));
  const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
  data = await fetch(randgaming).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gaming.jpeg', data)
  res.sendFile(__path +'/tmp/gaming.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/islami', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const islami = JSON.parse(fs.readFileSync(__path +'/data/Islamic.json'));
  const randislami = islami[Math.floor(Math.random() * islami.length)];
  data = await fetch(randislami).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/islami.jpeg', data)
  res.sendFile(__path +'/tmp/islami.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/programing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const programing = JSON.parse(fs.readFileSync(__path +'/data/Programming.json'));
  const randprograming = programing[Math.floor(Math.random() * programing.length)];
  data = await fetch(randprograming).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/programing.jpeg', data)
  res.sendFile(__path +'/tmp/programing.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/teknologi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const teknologi = JSON.parse(fs.readFileSync(__path +'/data/Technology.json'));
  const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
  data = await fetch(randteknologi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/teknologi.jpeg', data)
  res.sendFile(__path +'/tmp/teknologi.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/mountain', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const mountain = JSON.parse(fs.readFileSync(__path +'/data/Mountain.json'));
  const randmountain = mountain[Math.floor(Math.random() * mountain.length)];
  data = await fetch(randmountain).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/mountain.jpeg', data)
  res.sendFile(__path +'/tmp/mountain.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/tatasurya', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const tatasurya = JSON.parse(fs.readFileSync(__path +'/data/tatasurya.json'));
  const randtatasurya = tatasurya[Math.floor(Math.random() * tatasurya.length)];
  data = await fetch(randtatasurya).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tatasurya.jpeg', data)
  res.sendFile(__path +'/tmp/tatasurya.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kartun', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kartun = JSON.parse(fs.readFileSync(__path +'/data/kartun.json'));
  const randkartun = kartun[Math.floor(Math.random() * kartun.length)];
  data = await fetch(randkartun).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kartun.jpeg', data)
  res.sendFile(__path +'/tmp/kartun.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/yuli', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const yuli = JSON.parse(fs.readFileSync(__path +'/data/yulibocil.json'));
  const randyuli = yuli[Math.floor(Math.random() * yuli.length)];
  data = await fetch(randyuli).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuli.jpeg', data)
  res.sendFile(__path +'/tmp/yuli.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/pentol', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pentol = JSON.parse(fs.readFileSync(__path +'/data/pentol.json'));
  const randpentol = pentol[Math.floor(Math.random() * pentol.length)];
  data = await fetch(randpentol).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pentol.jpeg', data)
  res.sendFile(__path +'/tmp/pentol.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/katakata', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const katakata = JSON.parse(fs.readFileSync(__path +'/data/katakata.json'));
  const randkatakata = katakata[Math.floor(Math.random() * katakata.length)];
  data = await fetch(randkatakata).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/katakata.jpeg', data)
  res.sendFile(__path +'/tmp/katakata.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/toukachan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const toukachan = JSON.parse(fs.readFileSync(__path +'/data/toukachan.json'));
  const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];
  data = await fetch(randtoukachan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/toukachan.jpeg', data)
  res.sendFile(__path +'/tmp/toukachan.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/akira', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const akira = JSON.parse(fs.readFileSync(__path +'/data/akira.json'));
  const randakira = akira[Math.floor(Math.random() * akira.length)];
  data = await fetch(randakira).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/akira.jpeg', data)
  res.sendFile(__path +'/tmp/akira.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/itori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const itori = JSON.parse(fs.readFileSync(__path +'/data/itori.json'));
  const randitori = itori[Math.floor(Math.random() * itori.length)];
  data = await fetch(randitori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/itori.jpeg', data)
  res.sendFile(__path +'/tmp/itori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kurumi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kurumi = JSON.parse(fs.readFileSync(__path +'/data/kurumi.json'));
  const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];
  data = await fetch(randkurumi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kurumi.jpeg', data)
  res.sendFile(__path +'/tmp/kurumi.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/miku', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const miku = JSON.parse(fs.readFileSync(__path +'/data/miku.json'));
  const randmiku = miku[Math.floor(Math.random() * miku.length)];
  data = await fetch(randmiku).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/miku.jpeg', data)
  res.sendFile(__path +'/tmp/miku.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/pokemon', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const pokemon = JSON.parse(fs.readFileSync(__path +'/data/pokemon.json'));
  const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
  data = await fetch(randpokemon).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pokemon.jpeg', data)
  res.sendFile(__path +'/tmp/pokemon.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/ryujin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ryujin = JSON.parse(fs.readFileSync(__path +'/data/ryujin.json'));
  const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];
  data = await fetch(randryujin).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ryujin.jpeg', data)
  res.sendFile(__path +'/tmp/ryujin.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/rose', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const rose = JSON.parse(fs.readFileSync(__path +'/data/rose.json'));
  const randrose = rose[Math.floor(Math.random() * rose.length)];
  data = await fetch(randrose).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rose.jpeg', data)
  res.sendFile(__path +'/tmp/rose.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kaori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kaori = JSON.parse(fs.readFileSync(__path +'/data/kaori.json'));
  const randkaori = kaori[Math.floor(Math.random() * kaori.length)];
  data = await fetch(randkaori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kaori.jpeg', data)
  res.sendFile(__path +'/tmp/kaori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shizuka', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shizuka = JSON.parse(fs.readFileSync(__path +'/data/shizuka.json'));
  const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
  data = await fetch(randshizuka).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shizuka.jpeg', data)
  res.sendFile(__path +'/tmp/shizuka.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kaga', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kaga = JSON.parse(fs.readFileSync(__path +'/data/kaga.json'));
  const randkaga = kaga[Math.floor(Math.random() * kaga.length)];
  data = await fetch(randkaga).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kaga.jpeg', data)
  res.sendFile(__path +'/tmp/kaga.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kotori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kotori = JSON.parse(fs.readFileSync(__path +'/data/kotori.json'));
  const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
  data = await fetch(randkotori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kotori.jpeg', data)
  res.sendFile(__path +'/tmp/kotori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/mikasa', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const mikasa = JSON.parse(fs.readFileSync(__path +'/data/mikasa.json'));
  const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];
  data = await fetch(randmikasa).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/mikasa.jpeg', data)
  res.sendFile(__path +'/tmp/mikasa.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/akiyama', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const akiyama = JSON.parse(fs.readFileSync(__path +'/data/akiyama.json'));
  const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];
  data = await fetch(randakiyama).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/akiyama.jpeg', data)
  res.sendFile(__path +'/tmp/akiyama.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/gremory', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const gremory = JSON.parse(fs.readFileSync(__path +'/data/gremory.json'));
  const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
  data = await fetch(randgremory).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/gremory.jpeg', data)
  res.sendFile(__path +'/tmp/gremory.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/isuzu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const isuzu = JSON.parse(fs.readFileSync(__path +'/data/isuzu.json'));
  const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];
  data = await fetch(randisuzu).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/isuzu.jpeg', data)
  res.sendFile(__path +'/tmp/isuzu.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/cosplay', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cosplay = JSON.parse(fs.readFileSync(__path +'/data/cosplay.json'));
  const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
  data = await fetch(randcosplay).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cosplay.jpeg', data)
  res.sendFile(__path +'/tmp/cosplay.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shina = JSON.parse(fs.readFileSync(__path +'/data/shina.json'));
  const randshina = shina[Math.floor(Math.random() * shina.length)];
  data = await fetch(randshina).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shina.jpeg', data)
  res.sendFile(__path +'/tmp/shina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kagura', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const kagura = JSON.parse(fs.readFileSync(__path +'/data/kagura.json'));
  const randkagura = kagura[Math.floor(Math.random() * kagura.length)];
  data = await fetch(randkagura).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kagura.jpeg', data)
  res.sendFile(__path +'/tmp/kagura.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shinka', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const shinka = JSON.parse(fs.readFileSync(__path +'/data/shinka.json'));
  const randshinka = shinka[Math.floor(Math.random() * shinka.length)];
  data = await fetch(randshinka).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/shinka.jpeg', data)
  res.sendFile(__path +'/tmp/shinka.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/eba', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const eba = JSON.parse(fs.readFileSync(__path +'/data/eba.json'));
  const randeba = eba[Math.floor(Math.random() * eba.length)];
  data = await fetch(randeba).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/eba.jpeg', data)
  res.sendFile(__path +'/tmp/eba.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/deidara', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Deidara = JSON.parse(fs.readFileSync(__path +'/data/deidara.json'));
  const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];
  data = await fetch(randDeidara).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/deidara.jpeg', data)
  res.sendFile(__path +'/tmp/deidara.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/trans', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const trans = JSON.parse(fs.readFileSync(__path +'/data/trans.json'));
  const randtrans = trans[Math.floor(Math.random() * trans.length)];
  data = await fetch(randtrans).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/trans.jpeg', data)
  res.sendFile(__path +'/tmp/trans.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/jeni', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jeni = JSON.parse(fs.readFileSync(__path +'/data/jeni.json'));
  const randjeni = jeni[Math.floor(Math.random() * jeni.length)];
  data = await fetch(randjeni).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jeni.jpeg', data)
  res.sendFile(__path +'/tmp/jeni.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/jiso', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const jiso = JSON.parse(fs.readFileSync(__path +'/data/jiso.json'));
  const randjiso = jiso[Math.floor(Math.random() * jiso.length)];
  data = await fetch(randjiso).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/jiso.jpeg', data)
  res.sendFile(__path +'/tmp/jiso.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/satanic', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const satanic = JSON.parse(fs.readFileSync(__path +'/data/satanic.json'));
  const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
  data = await fetch(randsatanic).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/satanic.jpeg', data)
  res.sendFile(__path +'/tmp/satanic.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/cecan2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cecan2 = JSON.parse(fs.readFileSync(__path +'/data/cecan2.json'));
  const randcecan2 = cecan2[Math.floor(Math.random() * cecan2.length)];
  data = await fetch(randcecan2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cecan2.jpeg', data)
  res.sendFile(__path +'/tmp/cecan2.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/cogan2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cogan2 = JSON.parse(fs.readFileSync(__path +'/data/cogan2.json'));
  const randcogan2 = cogan2[Math.floor(Math.random() * cogan2.length)];
  data = await fetch(randcogan2).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cogan2.jpeg', data)
  res.sendFile(__path +'/tmp/cogan2.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/itachi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Itachi = JSON.parse(fs.readFileSync(__path +'/data/itachi.json'));
  const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];
  data = await fetch(randItachi).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ita.jpeg', data)
  res.sendFile(__path +'/tmp/ita.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/madara', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Madara = JSON.parse(fs.readFileSync(__path +'/data/madara.json'));
  const randMadara = Madara[Math.floor(Math.random() * Madara.length)];
  data = await fetch(randMadara).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/madara.jpeg', data)
  res.sendFile(__path +'/tmp/madara.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/yuki', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Yuki = JSON.parse(fs.readFileSync(__path +'/data/yuki.json'));
  const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];
  data = await fetch(randYuki).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/yuki.jpeg', data)
  res.sendFile(__path +'/tmp/yuki.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/asuna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const asuna = JSON.parse(fs.readFileSync(__path +'/data/asuna.json'));
  const randasuna = asuna[Math.floor(Math.random() * asuna.length)];
  data = await fetch(randasuna).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/asuna.jpeg', data)
  res.sendFile(__path +'/tmp/asuna.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/ayuzawa', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ayuzawa = JSON.parse(fs.readFileSync(__path +'/data/ayuzawa.json'));
  const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
  data = await fetch(randayuzawa).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ayuzawa.jpeg', data)
  res.sendFile(__path +'/tmp/ayuzawa.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/chitoge', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const chitoge = JSON.parse(fs.readFileSync(__path +'/data/chitoge.json'));
  const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];
  data = await fetch(randchitoge).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/chitoge.jpeg', data)
  res.sendFile(__path +'/tmp/chitoge.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/emilia', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const emilia = JSON.parse(fs.readFileSync(__path +'/data/emilia.json'));
  const randemilia = emilia[Math.floor(Math.random() * emilia.length)];
  data = await fetch(randemilia).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/emilia.jpeg', data)
  res.sendFile(__path +'/tmp/emilia.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/hestia', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const hestia = JSON.parse(fs.readFileSync(__path +'/data/hestia.json'));
  const randhestia = hestia[Math.floor(Math.random() * hestia.length)];
  data = await fetch(randhestia).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hestia.jpeg', data)
  res.sendFile(__path +'/tmp/hestia.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/inori', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const inori = JSON.parse(fs.readFileSync(__path +'/data/inori.json'));
  const randinori = inori[Math.floor(Math.random() * inori.length)];
  data = await fetch(randinori).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/inori.jpeg', data)
  res.sendFile(__path +'/tmp/inori.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/ana', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const ana = JSON.parse(fs.readFileSync(__path +'/data/ana.json'));
  const randana = ana[Math.floor(Math.random() * ana.length)];
  data = await fetch(randana).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ana.jpeg', data)
  res.sendFile(__path +'/tmp/ana.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/boruto', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Boruto = JSON.parse(fs.readFileSync(__path +'/data/boruto.json'));
  const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];
  data = await fetch(randBoruto).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bor.jpeg', data)
  res.sendFile(__path +'/tmp/bor.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/erza', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Erza = JSON.parse(fs.readFileSync(__path +'/data/erza.json'));
  const randErza = Erza[Math.floor(Math.random() * Erza.length)];
  data = await fetch(randErza).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/erza.jpeg', data)
  res.sendFile(__path +'/tmp/erza.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kakasih', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Kakasih = JSON.parse(fs.readFileSync(__path +'/data/kakasih.json'));
  const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];
  data = await fetch(randKakasih).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ka.jpeg', data)
  res.sendFile(__path +'/tmp/ka.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/sagiri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sagiri = JSON.parse(fs.readFileSync(__path +'/data/sagiri.json'));
  const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
  data = await fetch(randSagiri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sagiri.jpeg', data)
  res.sendFile(__path +'/tmp/sagiri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/minato', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Minato = JSON.parse(fs.readFileSync(__path +'/data/minato.json'));
  const randMinato = Minato[Math.floor(Math.random() * Minato.length)];
  data = await fetch(randMinato).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/minato.jpeg', data)
  res.sendFile(__path +'/tmp/minato.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/naruto', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Naruto = JSON.parse(fs.readFileSync(__path +'/data/naruto.json'));
  const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];
  data = await fetch(randNaruto).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/naruto.jpeg', data)
  res.sendFile(__path +'/tmp/naruto.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/nezuko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Nezuko = JSON.parse(fs.readFileSync(__path +'/data/nezuko.json'));
  const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];
  data = await fetch(randNezuko).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/nezu.jpeg', data)
  res.sendFile(__path +'/tmp/nezu.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/onepiece', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Pic = JSON.parse(fs.readFileSync(__path +'/data/onepiece.json'));
  const randPic = Pic[Math.floor(Math.random() * Pic.length)];
  data = await fetch(randPic).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pic.jpeg', data)
  res.sendFile(__path +'/tmp/pic.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/rize', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Rize = JSON.parse(fs.readFileSync(__path +'/data/rize.json'));
  const randRize = Rize[Math.floor(Math.random() * Rize.length)];
  data = await fetch(randRize).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/rize.jpeg', data)
  res.sendFile(__path +'/tmp/rize.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/sakura', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sakura = JSON.parse(fs.readFileSync(__path +'/data/sakura.json'));
  const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];
  data = await fetch(randSakura).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sakura.jpeg', data)
  res.sendFile(__path +'/tmp/sakura.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/sasuke', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sasuke = JSON.parse(fs.readFileSync(__path +'/data/sasuke.json'));
  const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];
  data = await fetch(randSasuke).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sasuke.jpeg', data)
  res.sendFile(__path +'/tmp/sasuke.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/tsunade', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Su = JSON.parse(fs.readFileSync(__path +'/data/tsunade.json'));
  const randSu = Su[Math.floor(Math.random() * Su.length)];
  data = await fetch(randSu).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/su.jpeg', data)
  res.sendFile(__path +'/tmp/su.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/montor', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mon = JSON.parse(fs.readFileSync(__path +'/data/montor.json'));
  const randMon = Mon[Math.floor(Math.random() * Mon.length)];
  data = await fetch(randMon).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/montor.jpeg', data)
  res.sendFile(__path+ '/tmp/montor.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/mobil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Mob = JSON.parse(fs.readFileSync(__path +'/data/mobil.json'));
  const randMob = Mob[Math.floor(Math.random() * Mob.length)];
  data = await fetch(randMob).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/mobil.jpeg', data)
  res.sendFile(__path+ '/tmp/mobil.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/boneka-chucky', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Bon = JSON.parse(fs.readFileSync(__path +'/data/boneka.json'));
  const randBon = Bon[Math.floor(Math.random() * Bon.length)];
  data = await fetch(randBon).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/chucky.jpeg', data)
  res.sendFile(__path+ '/tmp/chucky.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/anime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai23 = JSON.parse(fs.readFileSync(__path +'/data/wallhp2.json'));
  const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];
  data = await fetch(randWai23).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wallhp2.jpeg', data)
  res.sendFile(__path+ '/tmp/wallhp2.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/random/blackpink', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Black = JSON.parse(fs.readFileSync(__path +'/data/blackpink.json'));
  const randBlack = Black[Math.floor(Math.random() * Black.length)]
  data = await fetch(randBlack).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/blak.jpeg', data)
  res.sendFile(__path +'/tmp/blak.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/wallhp', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai22 = JSON.parse(fs.readFileSync(__path +'/data/wallhp.json'));
  const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];
  data = await fetch(randWai22).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wallhp.jpeg', data)
  res.sendFile(__path+ '/tmp/wallhp.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/waifu2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai2 = JSON.parse(fs.readFileSync(__path +'/data/waifu2.json'));
  const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
  data = await fetch(randWai2).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wibu2.jpeg', data)
  res.sendFile(__path+ '/tmp/wibu2.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/waifu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Wai = JSON.parse(fs.readFileSync(__path +'/data/waifu.json'));
  const randWai = Wai[Math.floor(Math.random() * Wai.length)];
  data = await fetch(randWai).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wibu.jpeg', data)
  res.sendFile(__path+ '/tmp/wibu.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kpop', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Kpop = JSON.parse(fs.readFileSync(__path +'/data/kpop.json'));
  const randKpop = Kpop[Math.floor(Math.random() * Kpop.length)]
  data = await fetch(randKpop).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kpop.jpeg', data)
  res.sendFile(__path +'/tmp/kpop.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/hekel', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Hekel = JSON.parse(fs.readFileSync(__path +'/data/hekel.json'));
  const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
  data = await fetch(randHekel).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/hek.jpeg', data)
  res.sendFile(__path +'/tmp/hek.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/kucing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Kucing = JSON.parse(fs.readFileSync(__path +'/data/kucing.json'));
  const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]
  data = await fetch(randKucing).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/kucing.jpeg', data)
  res.sendFile(__path +'/tmp/kucing.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/pubg', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Pubg = JSON.parse(fs.readFileSync(__path +'/data/pubg.json'));
  const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]
  data = await fetch(randPubg).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pubg.jpeg', data)
  res.sendFile(__path +'/tmp/pubg.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/ppcouple', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Pp = JSON.parse(fs.readFileSync(__path +'/data/profil.json'));
  const randPp = Pp[Math.floor(Math.random() * Pp.length)]
  data = await fetch(randPp).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pp.jpeg', data)
  res.sendFile(__path +'/tmp/pp.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/anjing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Anjing = JSON.parse(fs.readFileSync(__path +'/data/anjing.json'));
  const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]
  data = await fetch(randAnjing).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ajg.jpeg', data)
  res.sendFile(__path +'/tmp/ajg.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/doraemon', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Dora = JSON.parse(fs.readFileSync(__path +'/data/doraemon.json'));
  const randDora = Dora[Math.floor(Math.random() * Dora.length)]
  data = await fetch(randDora).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/dora.jpeg', data)
  res.sendFile(__path +'/tmp/dora.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/cogan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  Cogan = JSON.parse(fs.readFileSync(__path +'/data/cogan.json'));
  const randCogan = Cogan[Math.floor(Math.random() * Cogan.length)]
  data = await fetch(randCogan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/cogan.jpeg', data)
  res.sendFile(__path +'/tmp/cogan.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/elaina', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Elaina = JSON.parse(fs.readFileSync(__path +'/data/elaina.json'))
const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
//tansole.log(randLoli)
data = await fetch(randElaina).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/elaina.jpeg', data)
res.sendFile(__path +'/tmp/elaina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/loli', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Loli = JSON.parse(fs.readFileSync(__path +'/data/loli.json'))
const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
//tansole.log(randLoli)
data = await fetch(randLoli).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/loli.jpeg', data)
res.sendFile(__path +'/tmp/loli.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/yuri', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

const Yuri = JSON.parse(fs.readFileSync(__path +'/data/yuri.json'))
const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
//tansole.log(randTech)
data = await fetch(randYuri).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/Yuri.jpeg', data)
res.sendFile(__path +'/tmp/Yuri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/cecan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const cecan = JSON.parse(fs.readFileSync(__path +'/data/cecan.json'));
  const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
  data = await fetch(randCecan).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/cecan.jpeg', data)
  res.sendFile(__path +'/tmp/cecan.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/aesthetic', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Aesthetic = JSON.parse(fs.readFileSync(__path +'/data/aesthetic.json'));
  const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
  data = await fetch(randAesthetic).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/aesthetic.jpeg', data)
  res.sendFile(__path +'/tmp/aesthetic.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/justina', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Justina = JSON.parse(fs.readFileSync(__path +'/data/justina.json'));
  const randJus = Justina[Math.floor(Math.random() * Justina.length)];
  data = await fetch(randJus).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/justina.jpeg', data)
  res.sendFile(__path +'/tmp/justina.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/wallpaper/sagiri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Sagiri = JSON.parse(fs.readFileSync(__path +'/data/sagiri.json'));
  const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
  data = await fetch(randSagiri).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/sagiri.jpeg', data)
  res.sendFile(__path +'/tmp/sagiri.jpeg')
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/shota', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Shota = JSON.parse(fs.readFileSync(__path +'/data/shota.json'));
  const randShota = Shota[Math.floor(Math.random() * Shota.length)];
  data = await fetch(randShota).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/shota.jpeg', data)
  res.sendFile(__path+ '/tmp/shota.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/nsfwloli', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Lol = JSON.parse(fs.readFileSync(__path +'/data/nsfwloli.json'));
  const randLol = Lol[Math.floor(Math.random() * Lol.length)];
  data = await fetch(randLol).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/lol.jpeg', data)
  res.sendFile(__path+ '/tmp/lol.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/wallpaper/hinata', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

  const Hinata = JSON.parse(fs.readFileSync(__path +'/data/hinata.json'));
  const randHin = Hinata[Math.floor(Math.random() * Hinata.length)];
  data = await fetch(randHin).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/Hinata.jpeg', data)
  res.sendFile(__path+ '/tmp/Hinata.jpeg');
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/random/quotes2', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://kocakz.herokuapp.com/api/random/text/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-ar2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=ar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-en2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=eng`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-jp2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=jp`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi-ind2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=id`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi4', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=ar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi3', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=ph`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi2', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=en`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fun/simisimi', async (req, res, next) => {
        var Apikey = req.query.apikey
            text = req.query.text
   
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://simsumi.herokuapp.com/api?text=${text}&lang=id`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/info/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/drakorasia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/fakedata', async (req, res, next) => {
        var Apikey = req.query.apikey,
            country = req.query.country
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/hilih', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/music/liriklagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.query;
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json(loghandler.notquery)
        Lirik(lagu)
        .then((lirik) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result: lirik.data
          })
        });
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/music/chordlagu', async (req, res, next) => {
        var Apikey = req.query.apikey,
            lagu = req.query.lagu
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kbbi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidindo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/covidworld', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/random/meme', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/info/kodepos', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kota = req.query.kota
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/translate', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    kata = req.query.kata
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/anime/kusonime', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/anime/loli', async(req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if(listkey.includes(apikey)){
    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              creator: `${creator}`,
              result: hasil
            })
        })
    } catch (e) {}
    } else {
      res.json(loghandler.invalidKey)
    }
});


router.get('/anime/manga', async (req, res, next) => {
        var Apikey = req.query.apikey,
	    search = req.query.search
            
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/kuis/caklontong', async (req, res, next) => {
        var Apikey = req.query.apikey
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})


router.get('/kuis/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
  } else {
  res.json(loghandler.invalidKey)
  }
})

/**
* @Maker
**/



router.get("/photooxy/shadow", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pShadow(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/romantic", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/naruto", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-message", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/glitch", async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/double-heart", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/love-text", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/photooxy/butterfly", async(req, res, next) => {
  const text1 = req.query.text;
  const apikey = req.query.apikey;
  if(!text1) return res.json(loghandler.nottext1)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    } else {
    	res.json(loghandler.invalidKey)
    }
});

/*
@ AKHIR PHOTOOXY
*/
/*
@ TEXTPROME
*/
router.get('/photooxy/army', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/natural-leaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/harry-potter', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/magma', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hallowen-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/neon-light', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/broken-glass', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/art-papper', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glossy', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/water-color', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/multi-color', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/neon-devil', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/sky-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/luxury', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/vintage', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/writing', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/engraved', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glue-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/minios', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/pornhub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/holograpic', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/deluxe-silver', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/fabric', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/wicker', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/wicker-text-effect-online-932.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/larva', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/lava-text-effect-online-914.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/toxic-bokeh', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/stroberi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/strawberry-text-effect-online-889.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/koi', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/koi-fish-text-effect-online-888.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/bread', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/bread-text-effect-online-887.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/horor-blood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/honey', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/honey-text-effect-868.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/ice', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/ice-cold-text-effect-862.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/rusty', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/rusty-metal-text-effect-860.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3dstone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/1917', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/space', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/joker-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-joker-online-934.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/hallowen', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/blood', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    text, 
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/astone', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/grafity-text', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/grafity-text2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/ninja-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-ninja-logo-online-935.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/lion-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/avengers-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/marvel-logo2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/marvel-logo', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/glitch2', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/logo-wolf', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/thunder', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/thunder-text-effect-online-881.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/black-pink', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/drop-water', async(req, res, next) => {



  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/christmas', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/3d-gradient', async(req, res, next) => {
  const apikey = req.query.apikey;
  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/porn-hub', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textpro/captain', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text1;
  const text2 = req.query.text2;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
  Apikey = req.query.apikey;

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/blackpink', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
    const pop = JSON.parse(fs.readFileSync(__path +'/data/kpop.json'));
    const Pop = pop[Math.floor(Math.random() * pop.length)];
    let hasil = Pop.pop;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/pink.jpeg', data)
    res.sendFile(__path +'/tmp/pink.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/asupan', async (req, res, next) => {
  Apikey = req.query.apikey;
  
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)) {
  const Asupan = JSON.parse(fs.readFileSync(__path +'/data/asupantiktok.json'));
  const randAsupan = Asupan[Math.floor(Math.random() * Asupan.length)];
  data = await fetch(randAsupan).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
  res.sendFile(__path +'/tmp/asupan.mp4')
  } else {
    res.json(loghandler.invalidKey)
  }
});
 
router.get("/maker/nulis", async (req, res, next) => {
  
  apikey = req.query.apikey;
  text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
    let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=apivinz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
    res.sendFile(__path +'/tmp/nulis.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/ttp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/ttp?text='+ text +'&apikey=404Api'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ttp.png', data)
  res.sendFile(__path +'/tmp/ttp.png')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/attp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://h4ck3rs404-api.herokuapp.com/api/attp?text='+ text +'&apikey=404Api'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/matrix', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/matrix?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/matrix.jpg', data)
  res.sendFile(__path +'/tmp/matrix.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/breakwall', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/breakwall?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/breakwall.jpg', data)
  res.sendFile(__path +'/tmp/breakwall.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/flowertext', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/flowertext?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/flowertext.jpg', data)
  res.sendFile(__path +'/tmp/flowertext.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/smoketext', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/smoketext?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/smoketext.jpg', data)
  res.sendFile(__path +'/tmp/smoketext.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/skytext', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/skytext?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/skytext.jpg', data)
  res.sendFile(__path +'/tmp/skytext.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/pubglogo', async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  const apikey = req.query.apikey;
  
  if(!text1) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/pubglogo?text1='+ text1 + '&text2' +'&apikey=administrator'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/pubglogo.jpg', data)
  res.sendFile(__path +'/tmp/pubglogo.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/bneon', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/bneon?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/bneon.jpg', data)
  res.sendFile(__path +'/tmp/bneon.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/naruto', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/naruto?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/naruto.jpg', data)
  res.sendFile(__path +'/tmp/naruto.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/teks3d', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/text3dbox?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/text3dbox.jpg', data)
  res.sendFile(__path +'/tmp/text3dbox.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/nulis', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/nulis?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/nulis.jpg', data)
  res.sendFile(__path +'/tmp/nulis.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/epep', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/epep?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/epep.jpg', data)
  res.sendFile(__path +'/tmp/epep.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/silverbutton', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/splaybutton?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/splaybutton.jpg', data)
  res.sendFile(__path +'/tmp/splaybutton.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/goldbutton', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.xyz/api/gplaybutton?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ppp.jpg', data)
  res.sendFile(__path +'/tmp/ppp.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/harta-tahta', async(req, res, next) => {
  const text = req.query.text;
  const apikey = req.query.apikey;
  
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://api.zeks.me/api/hartatahta?text='+ text +'&apikey=administrator' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ok.jpg', data)
  res.sendFile(__path +'/tmp/ok.jpg')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/maker/skatch', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://lindow-api.herokuapp.com/api/sketcheffect?img=${url}&apikey=LindowApi`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/skatch.jpeg', data)
        res.sendFile(__path+'/tmp/skatch.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/welcome', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const memberCount = req.query.memberCount;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const pp = req.query.pp;
  const gcicon = req.query.gcicon;
  if(!username) return res.json(loghandler.notusername)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bg) return res.json(loghandler.bg)
  if(!pp) return res.json(loghandler.pp)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://hadi-api.herokuapp.com/api/card/welcome3?username=${username}&memberCount=${memberCount}&bg=${bg}&pp=${pp}&gcicon=${gcicon}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/welcome.png', data)
        res.sendFile(__path+'/tmp/welcome.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/tololserti', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  if(!text) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let hasil = `https://lolhuman.herokuapp.com/api/toloserti?apikey=muzharzain&name=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tololserti.jpeg', data)
        res.sendFile(__path+'/tmp/tololserti.jpeg')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/maker/emoji2png', async(req, res, next) => {
  const apikey = req.query.apikey;
  const Emoji = req.query.text;
  
  if(!apikey) return jes.json(loghandler.notparam)
  if(!Emoji) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)) {

    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        creator: `${creator}`,
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/downloader/facebook2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://fb-scrape.herokuapp.com/api/fb?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/web2plain-text', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
  } else {
    res.json(loghandler.invalidKey)
  }
});


router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE LIMIT 999'    
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
