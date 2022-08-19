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
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var neoxr = "yntkts"
var zeks = "administrator"
var zeks2 = "apivinz"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
const ditzz = require('ditzzlabs')
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

//tk&sub

 (function(_0x27a2ef,_0x285b6f){function _0x3cb0a2(_0x1e34f2,_0x23d680,_0x4d3ead,_0x31bee4){return _0x3f29(_0x31bee4- -0x2c6,_0x4d3ead);}var _0x2a14db=_0x27a2ef();function _0x4c3090(_0x3bbfa4,_0x466a48,_0x6bd434,_0x361546){return _0x3f29(_0x6bd434- -'\x30\x78\x33\x38\x34',_0x3bbfa4);}function _0x4eb899(_0x149a40,_0x3e9136,_0x63d527,_0x37b77a){return _0x3f29(_0x63d527-'\x30\x78\x33\x39\x37',_0x37b77a);}function _0x524729(_0x42541c,_0x2316a6,_0x18f952,_0xfd0c20){return _0x3f29(_0x42541c-'\x30\x78\x33\x38\x33',_0x2316a6);}function _0x95cd3a(_0x8f88dd,_0x156002,_0x2fecdb,_0x269bc5){return _0x3f29(_0x8f88dd- -'\x30\x78\x64\x65',_0x269bc5);}function _0x408b50(_0x48f62a,_0x34a0dd,_0x356285,_0x1d5d23){return _0x3f29(_0x1d5d23-'\x30\x78\x32\x35\x64',_0x48f62a);}function _0x2d87b5(_0x4756d8,_0xa2a830,_0x202c68,_0xd6b551){return _0x3f29(_0x202c68- -0x2ca,_0x4756d8);}function _0xec67f2(_0x1b092c,_0x30fa15,_0x54cf8e,_0x4024ed){return _0x3f29(_0x30fa15- -'\x30\x78\x62\x38',_0x54cf8e);}function _0x1b2f19(_0x26c0e3,_0x219345,_0x264765,_0x1f5fe6){return _0x3f29(_0x26c0e3- -0x3a1,_0x1f5fe6);}while(!![]){try{var _0x1af226=parseInt(_0x95cd3a('\x30\x78\x31\x33\x37',0x129,'\x30\x78\x31\x32\x30','\x30\x78\x31\x34\x35'))/(-0x25*0x95+0x1*-0x824+0x1dae)+parseInt(_0x95cd3a(0x126,0x125,'\x30\x78\x31\x34\x34','\x30\x78\x31\x32\x31'))/(0xe6a+0x10eb+-0x1f53)*(-parseInt(_0x524729('\x30\x78\x35\x39\x32','\x30\x78\x35\x61\x30',0x5a4,'\x30\x78\x35\x39\x61'))/(-0xd08+0xc6*-0x2d+0x2fd9*0x1))+parseInt(_0x95cd3a(0x10f,0x118,0x103,'\x30\x78\x31\x30\x30'))/(-0x24bf+0x738+0x1d8b*0x1)+-parseInt(_0x1b2f19(-0x174,-'\x30\x78\x31\x38\x38',-'\x30\x78\x31\x35\x31',-'\x30\x78\x31\x36\x30'))/(0x257a+-0x24*0x68+-0x16d5)*(-parseInt(_0x524729(0x5af,0x59e,'\x30\x78\x35\x39\x61',0x5a8))/(-0x214b+-0xd49+0x5*0x952))+-parseInt(_0x4c3090(-'\x30\x78\x31\x35\x62',-0x178,-0x16d,-'\x30\x78\x31\x34\x36'))/(-0x65*0x3b+-0x9f8+0x1*0x2146)+-parseInt(_0x524729(0x5a4,0x585,'\x30\x78\x35\x39\x32','\x30\x78\x35\x63\x39'))/(-0x13*-0x8c+0x1f31*0x1+-0x298d*0x1)*(parseInt(_0xec67f2('\x30\x78\x31\x33\x34','\x30\x78\x31\x35\x39',0x13a,0x143))/(0x4c5+-0x1966+0x14aa))+parseInt(_0x2d87b5(-'\x30\x78\x65\x38',-0x10e,-'\x30\x78\x65\x37',-'\x30\x78\x31\x30\x64'))/(-0x2*-0xc15+0x486+-0x1ca6)*(parseInt(_0x1b2f19(-'\x30\x78\x31\x38\x35',-0x178,-0x191,-0x19c))/(0x5*-0x241+0x174e+-0x1*0xbfe));if(_0x1af226===_0x285b6f)break;else _0x2a14db['push'](_0x2a14db['shift']());}catch(_0xe3aeda){_0x2a14db['push'](_0x2a14db['shift']());}}}(_0x3175,-0xad93b*-0x1+-0x1*0x155293+0x17584f));var _0x418eef=(function(){var _0x309a93=!![];return function(_0x4b533a,_0x21799e){var _0x4f996d=_0x309a93?function(){function _0x43f466(_0x2195e2,_0x1dc925,_0x272d92,_0x2903bf){return _0x3f29(_0x1dc925-'\x30\x78\x62\x33',_0x2195e2);}if(_0x21799e){var _0xfb0ec6=_0x21799e[_0x43f466('\x30\x78\x32\x39\x65',0x29c,0x2a3,0x299)](_0x4b533a,arguments);return _0x21799e=null,_0xfb0ec6;}}:function(){};return _0x309a93=![],_0x4f996d;};}());function _0xfdebff(_0x20f734,_0x5e2206,_0x4b4848,_0xaa0f69){return _0x3f29(_0xaa0f69- -0x26,_0x4b4848);}function _0x3f29(_0x3e289a,_0x418eef){var _0x31755d=_0x3175();return _0x3f29=function(_0x3f2946,_0x29fb66){_0x3f2946=_0x3f2946-(-0x2*-0x677+-0x2*-0x599+-0x163d);var _0x1217a4=_0x31755d[_0x3f2946];return _0x1217a4;},_0x3f29(_0x3e289a,_0x418eef);}var _0x3e289a=_0x418eef(this,function(){var _0x2dc1d7={};function _0x32822b(_0x4adbdb,_0x30cf63,_0x51240a,_0xcf8c1e){return _0x3f29(_0x51240a-0xdc,_0x30cf63);}_0x2dc1d7['\x70\x4f\x4f\x49\x63']=_0x3588e2(-0x179,-'\x30\x78\x31\x35\x39',-0x133,-'\x30\x78\x31\x37\x35')+'\x2b\x24';function _0xcedfd8(_0x227aab,_0x3f5bdd,_0x5c8096,_0x1bbaea){return _0x3f29(_0x227aab- -0x102,_0x1bbaea);}var _0x345d0c=_0x2dc1d7;function _0x5c18ac(_0x59e985,_0x34993a,_0xcd6053,_0x1f7c17){return _0x3f29(_0x59e985- -'\x30\x78\x39\x35',_0xcd6053);}function _0x3588e2(_0x38bcfe,_0x570308,_0x51f66c,_0x563d07){return _0x3f29(_0x570308- -0x34c,_0x563d07);}function _0x4d2094(_0x13c7a5,_0xf8571f,_0x18021e,_0x372fc9){return _0x3f29(_0x13c7a5- -'\x30\x78\x32\x37\x65',_0x18021e);}function _0x18128b(_0x1c327,_0x302163,_0x5d34bc,_0x4d4c6b){return _0x3f29(_0x4d4c6b-0x1eb,_0x1c327);}function _0x54be35(_0x2f97ba,_0x2cd3a0,_0x16a473,_0x50f9f8){return _0x3f29(_0x2f97ba-0x11d,_0x16a473);}return _0x3e289a[_0x3588e2(-0x165,-'\x30\x78\x31\x36\x31',-0x17d,-'\x30\x78\x31\x36\x61')]()[_0x5c18ac(0x173,'\x30\x78\x31\x38\x64',0x162,'\x30\x78\x31\x38\x33')](_0x345d0c[_0x18128b(0x3f7,0x3d4,'\x30\x78\x33\x61\x65','\x30\x78\x33\x64\x30')])[_0x32822b(0x2ac,0x2e3,0x2c7,0x2ac)]()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x3e289a)[_0x32822b(0x305,0x2c6,'\x30\x78\x32\x65\x34',0x2ff)](_0x345d0c[_0x3588e2(-'\x30\x78\x31\x35\x34',-0x167,-'\x30\x78\x31\x34\x65',-0x15a)]);});function _0x3175(){var _0x4872b4=['\x39\x36\x37\x35\x39\x32\x35\x45\x4d\x5a\x42\x52\x49','\ud83d\udd10\x20\u1d00\u0274\u1d0f\u0274\u028f\u1d0d\u1d0f\u1d1c','\x74\x45\x6b\x56\x52','\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x65\x72','\x64\x61\x74\x61','\x31\x31\x71\x47\x45\x5a\x72\x64','\x49\x74\x76\x73\x6d','\x31\x7c\x35\x7c\x34\x7c\x32\x7c\x33\x7c','\x63\x72\x65\x61\x74\x6f\x72','\x74\x79\x70\x65','\x38\x59\x43\x6a\x4a\x72\x6b','\x6c\x65\x67\x72\x61\x2e\x70\x68\x2f\x66','\x32\x30\x30','\x77\x61\x72\x6e','\x74\x6c\x4a\x44\x4c','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x6a\x73\x6f\x6e','\ua731\x20\u0299\u1d0f\u1d1b\x20\ud83d\udd10','\x74\x69\x6b\x74\x6f\x6b','\x51\x4f\x57\x67\x4c','\x31\x31\x35\x31\x31\x30\x4b\x49\x59\x5a\x44\x4f','\x31\x39\x35\x53\x48\x49\x52\x48\x76','\x43\x45\x64\x64\x51','\x69\x6b\x42\x45\x65','\x63\x61\x74\x63\x68','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x31\x32\x36\x39\x32\x32\x39\x30\x7a\x62\x78\x4b\x4b\x6c','\x71\x75\x65\x72\x79','\x70\x4f\x4f\x49\x63','\x41\x76\x61\x74\x61\x72','\x47\x4e\x79\x4a\x53','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x65','\x61\x70\x70\x6c\x79','\x76\x4f\x6d\x49\x45','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x71\x6a\x71\x78\x44','\x33\x33\x33\x34\x30\x39\x32\x61\x4b\x71\x71\x6b\x50','\x71\x46\x4e\x56\x51','\x74\x58\x4c\x6b\x59','\x6d\x65\x64\x69\x61','\x74\x61\x62\x6c\x65','\x74\x68\x75\x6d\x62','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x62\x69\x6e\x64','\x52\x57\x52\x44\x51','\x58\x6f\x77\x6e\x6a','\x67\x65\x74','\x4f\x56\x78\x58\x79','\x52\x4e\x78\x44\x4a','\x75\x72\x6c','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x70\x61\x72\x61\x6d\x73','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x62\x37\x30\x63\x35\x31\x62\x66\x32\x37','\x66\x6f\x72\x6d\x61\x74\x74\x65\x64\x53','\x44\x4f\x57\x4e\x4c\x4f\x41\x44\x45\x52','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x76\x69\x64\x65\x6f','\x2f\x74\x6b','\x31\x37\x34\x38\x4a\x4f\x6d\x71\x72\x58','\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c','\x73\x74\x61\x74\x75\x73','\x74\x72\x61\x63\x65','\x73\x65\x61\x72\x63\x68','\x61\x75\x64\x53\x69\x7a\x65','\x6c\x6f\x67','\x2f\x73\x65\x61\x72\x63\x68\x2f\x3a\x6b','\x65\x79\x77\x6f\x72\x64','\x4a\x48\x5a\x48\x75','\x63\x6f\x6e\x73\x6f\x6c\x65','\x31\x35\x32\x37\x48\x7a\x53\x42\x65\x49','\x69\x6c\x65\x2f\x36\x38\x35\x32\x61\x61','\x37\x37\x38\x32\x35\x39\x37\x43\x65\x6e\x47\x6a\x75','\x61\x75\x64\x69\x6f','\x69\x7a\x65','\x6b\x65\x79\x77\x6f\x72\x64','\x36\x38\x34\x34\x31\x38\x65\x42\x62\x51\x75\x67','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28'];_0x3175=function(){return _0x4872b4;};return _0x3175();}function _0x4bd74e(_0x128f91,_0x5f03fe,_0x3a87dc,_0x55fa4e){return _0x3f29(_0x128f91- -'\x30\x78\x31\x61\x35',_0x55fa4e);}function _0x548188(_0x30fab0,_0x3db6b6,_0x342aa5,_0x26cd0a){return _0x3f29(_0x342aa5- -'\x30\x78\x32\x66\x61',_0x3db6b6);}_0x3e289a();function _0x25337b(_0x100762,_0x10b550,_0x55a182,_0xafa0f3){return _0x3f29(_0xafa0f3- -'\x30\x78\x32\x33\x34',_0x100762);}function _0x5aaac0(_0x7253c3,_0xb2835,_0x350ee0,_0x436674){return _0x3f29(_0x350ee0- -0x246,_0xb2835);}var _0x43b14d=(function(){var _0x584bda=!![];return function(_0xdfd1,_0x24bca6){var _0x578eaf=_0x584bda?function(){function _0x28ecea(_0x5b9e93,_0x365c8f,_0x4115cf,_0x19afc5){return _0x3f29(_0x365c8f-0x1cf,_0x5b9e93);}function _0x157ac1(_0x2b5d26,_0x12c388,_0x24e14f,_0x5da722){return _0x3f29(_0x12c388- -'\x30\x78\x33\x61\x63',_0x24e14f);}function _0xf111e5(_0x2af508,_0xe361e5,_0x38e13c,_0x28a38a){return _0x3f29(_0x38e13c-'\x30\x78\x35\x36',_0xe361e5);}if(_0x28ecea(0x421,'\x30\x78\x33\x66\x64',0x3e7,0x41d)!==_0x28ecea('\x30\x78\x33\x66\x30','\x30\x78\x33\x66\x64','\x30\x78\x33\x64\x63',0x3f1)){var _0x58edb7=_0x326311?function(){function _0x48a5f9(_0x72d571,_0x34900d,_0x172a65,_0x483a05){return _0xf111e5(_0x72d571-0x31,_0x172a65,_0x483a05- -0x3be,_0x483a05-0x17b);}if(_0x5dbcfc){var _0xebcb11=_0x12c67c[_0x48a5f9(-0x17e,-0x173,-'\x30\x78\x31\x35\x62',-'\x30\x78\x31\x37\x66')](_0x51232f,arguments);return _0x7557f8=null,_0xebcb11;}}:function(){};return _0x1d2fb5=![],_0x58edb7;}else{if(_0x24bca6){var _0x5d055b=_0x24bca6[_0x28ecea(0x3cc,0x3b8,'\x30\x78\x33\x61\x36',0x392)](_0xdfd1,arguments);return _0x24bca6=null,_0x5d055b;}}}:function(){};return _0x584bda=![],_0x578eaf;};}()),_0x263f4d=_0x43b14d(this,function(){function _0x50217a(_0x7bd3a0,_0x988014,_0x26a974,_0x198cd9){return _0x3f29(_0x7bd3a0- -0x132,_0x988014);}function _0x29c769(_0x5bcc9e,_0x338a68,_0x1b83b4,_0x331815){return _0x3f29(_0x331815-'\x30\x78\x31\x35\x38',_0x5bcc9e);}function _0x4a6498(_0x4d654b,_0x4ca161,_0x74e154,_0x4edf16){return _0x3f29(_0x4edf16- -'\x30\x78\x33\x35\x30',_0x74e154);}function _0x275633(_0x26ef31,_0x375670,_0x40a3dd,_0x1600e6){return _0x3f29(_0x375670- -'\x30\x78\x31\x66\x37',_0x26ef31);}var _0x55604c={'\x71\x6a\x71\x78\x44':function(_0x560a11,_0x3d71a3){return _0x560a11(_0x3d71a3);},'\x71\x46\x4e\x56\x51':function(_0x104581,_0x1c3379){return _0x104581+_0x1c3379;},'\x52\x57\x52\x44\x51':_0x106667(0x5a6,0x5ae,0x5cd,0x5de)+'\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75'+_0x106667('\x30\x78\x35\x63\x32','\x30\x78\x36\x30\x31',0x5e6,'\x30\x78\x36\x30\x63')+'\x20\x29','\x76\x4f\x6d\x49\x45':function(_0x480e05){return _0x480e05();},'\x74\x58\x4c\x6b\x59':_0x329684(-'\x30\x78\x33\x36',-0x36,-0x11,-'\x30\x78\x33\x33'),'\x74\x6c\x4a\x44\x4c':_0x106667('\x30\x78\x35\x63\x66','\x30\x78\x35\x65\x37',0x5f4,0x610),'\x4a\x48\x5a\x48\x75':'\x69\x6e\x66\x6f','\x52\x4e\x78\x44\x4a':'\x65\x72\x72\x6f\x72','\x58\x6f\x77\x6e\x6a':_0x2c775c(-'\x30\x78\x31\x63\x33',-0x1a7,-0x1b6,-0x1d4),'\x6f\x7a\x61\x42\x4c':_0x50217a('\x30\x78\x62\x66',0xb5,0xe4,0xdb),'\x6c\x4a\x6c\x76\x54':_0x50217a('\x30\x78\x64\x35',0xc2,0xd2,'\x30\x78\x64\x65'),'\x69\x6b\x42\x45\x65':function(_0x484fcb,_0x48318f){return _0x484fcb<_0x48318f;},'\x4f\x56\x78\x58\x79':'\x41\x4a\x76\x4d\x66','\x51\x4f\x57\x67\x4c':_0x4a6498(-'\x30\x78\x31\x34\x63',-'\x30\x78\x31\x32\x32',-'\x30\x78\x31\x33\x36',-0x132)+'\x30'},_0x2cf8be;function _0x1bcfa8(_0x350de5,_0x5d5283,_0x557c45,_0x551b6a){return _0x3f29(_0x350de5- -0x334,_0x551b6a);}function _0x329684(_0x34a041,_0x422eab,_0x5acdb6,_0x1915a3){return _0x3f29(_0x5acdb6- -0x21b,_0x34a041);}try{var _0x43f61a=_0x55604c[_0x2c775c(-'\x30\x78\x31\x64\x38',-'\x30\x78\x31\x62\x37',-'\x30\x78\x31\x64\x34',-'\x30\x78\x31\x64\x35')](Function,_0x55604c[_0x329684(-0x49,-'\x30\x78\x32\x37',-'\x30\x78\x32\x64',-0x4d)](_0x55604c[_0x106667(0x5d2,'\x30\x78\x35\x63\x34',0x5be,'\x30\x78\x35\x61\x62')](_0x29c769(0x379,0x349,0x356,0x353)+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20',_0x55604c[_0x4a6498(-0x165,-0x15e,-'\x30\x78\x31\x36\x64',-0x15b)]),'\x29\x3b'));_0x2cf8be=_0x55604c[_0x106667('\x30\x78\x35\x63\x33','\x30\x78\x35\x61\x38',0x5ba,0x597)](_0x43f61a);}catch(_0x2e25a6){_0x2cf8be=window;}function _0x106667(_0x2f40a4,_0x4fc517,_0x564e34,_0x204bc3){return _0x3f29(_0x564e34-'\x30\x78\x33\x64\x30',_0x2f40a4);}function _0x549ff7(_0x59692d,_0x456d49,_0x55fd80,_0x482397){return _0x3f29(_0x456d49- -0x25e,_0x482397);}var _0x26e448=_0x2cf8be['\x63\x6f\x6e\x73\x6f\x6c\x65']=_0x2cf8be[_0x2c775c(-0x1b6,-'\x30\x78\x31\x63\x36',-0x1b0,-0x1ad)]||{};function _0x2c775c(_0x56c3af,_0x582404,_0x497fb5,_0x4a5b9e){return _0x3f29(_0x56c3af- -'\x30\x78\x33\x63\x34',_0x497fb5);}var _0x17998=[_0x55604c[_0x50217a(0xbd,'\x30\x78\x61\x37','\x30\x78\x64\x37',0xc9)],_0x55604c[_0x29c769('\x30\x78\x33\x38\x35',0x37b,'\x30\x78\x33\x35\x65',0x37d)],_0x55604c[_0x549ff7(-0x29,-0x51,-0x78,-0x54)],_0x55604c[_0x2c775c(-0x1cb,-0x1b6,-'\x30\x78\x31\x64\x34',-'\x30\x78\x31\x64\x31')],_0x55604c[_0x2c775c(-'\x30\x78\x31\x63\x65',-0x1ae,-0x1ce,-'\x30\x78\x31\x62\x32')],_0x55604c['\x6f\x7a\x61\x42\x4c'],_0x55604c['\x6c\x4a\x6c\x76\x54']];for(var _0x6c4957=0x2c*0xd3+0x18f3*-0x1+-0xb51;_0x55604c[_0x4a6498(-'\x30\x78\x31\x32\x33',-'\x30\x78\x31\x33\x39',-0x104,-'\x30\x78\x31\x32\x31')](_0x6c4957,_0x17998['\x6c\x65\x6e\x67\x74\x68']);_0x6c4957++){if(_0x55604c[_0x29c769(0x335,0x370,'\x30\x78\x33\x33\x36',0x350)]===_0x55604c[_0x29c769(0x33a,'\x30\x78\x33\x36\x39','\x30\x78\x33\x33\x35',0x350)]){var _0x44f7c1=_0x55604c[_0x1bcfa8(-0x109,-'\x30\x78\x31\x31\x31',-0xe4,-0x12c)]['\x73\x70\x6c\x69\x74']('\x7c'),_0x45281e=-0x200b+0x1038+0xfd3;while(!![]){switch(_0x44f7c1[_0x45281e++]){case'\x30':_0x26e448[_0x1e0661]=_0x17a46c;continue;case'\x31':var _0x17a46c=_0x43b14d[_0x29c769(0x39c,0x37b,0x36e,0x389)+'\x72'][_0x50217a(0xf5,'\x30\x78\x31\x30\x30','\x30\x78\x66\x66','\x30\x78\x31\x31\x33')][_0x4a6498(-0x142,-0x139,-'\x30\x78\x31\x37\x61',-'\x30\x78\x31\x35\x63')](_0x43b14d);continue;case'\x32':_0x17a46c[_0x106667('\x30\x78\x35\x65\x38','\x30\x78\x36\x30\x36','\x30\x78\x35\x66\x36',0x617)]=_0x43b14d[_0x329684(-'\x30\x78\x33\x65',-'\x30\x78\x34\x33',-'\x30\x78\x32\x37',-'\x30\x78\x31\x30')](_0x43b14d);continue;case'\x33':_0x17a46c[_0x29c769('\x30\x78\x33\x35\x63',0x336,'\x30\x78\x33\x35\x34','\x30\x78\x33\x34\x33')]=_0x73cbd0[_0x50217a(0xb9,'\x30\x78\x63\x38',0xb9,'\x30\x78\x61\x32')][_0x1bcfa8(-'\x30\x78\x31\x34\x30',-0x119,-'\x30\x78\x31\x34\x37',-0x12f)](_0x73cbd0);continue;case'\x34':var _0x73cbd0=_0x26e448[_0x1e0661]||_0x17a46c;continue;case'\x35':var _0x1e0661=_0x17998[_0x6c4957];continue;}break;}}else{var _0x51a02f={};_0x51a02f[_0x2c775c(-0x1be,-0x1b3,-'\x30\x78\x31\x61\x62',-'\x30\x78\x31\x65\x33')]=!![],_0x51a02f['\x64\x61\x74\x61']=_0xc49cb6,_0x240487['\x6a\x73\x6f\x6e'](_0x51a02f);}}});_0x263f4d(),router[_0x548188(-'\x30\x78\x31\x32\x30',-0x115,-'\x30\x78\x31\x30\x33',-0x10c)](_0x4bd74e('\x30\x78\x35\x65','\x30\x78\x34\x36',0x7a,'\x30\x78\x36\x65'),async(_0x48bdef,_0x5e3028,_0x44490a)=>{var _0x6ce6b1={};function _0x34f5fb(_0x2fe407,_0x7bd939,_0x2cd381,_0x1529e1){return _0x548188(_0x2fe407-'\x30\x78\x63',_0x2cd381,_0x2fe407-0x469,_0x1529e1-0xf6);}_0x6ce6b1[_0x6497ee(0x409,0x3e4,'\x30\x78\x34\x30\x65',0x402)]=_0x6497ee(0x413,'\x30\x78\x34\x31\x65','\x30\x78\x33\x65\x66','\x30\x78\x34\x31\x63');function _0x1c91f2(_0x4e5cb3,_0x167b1e,_0x1ac3fb,_0x538b1e){return _0x4bd74e(_0x4e5cb3-0x25f,_0x167b1e-0x2a,_0x1ac3fb-0x15e,_0x1ac3fb);}function _0x200dd1(_0x24485b,_0x3d5528,_0xa8606f,_0x16b9c1){return _0x548188(_0x24485b-'\x30\x78\x31\x30\x62',_0x16b9c1,_0x24485b-0x80,_0x16b9c1-0xdf);}_0x6ce6b1['\x49\x74\x76\x73\x6d']=_0x1c91f2(0x2d2,'\x30\x78\x32\x61\x66','\x30\x78\x32\x64\x35',0x2df)+_0x1c91f2('\x30\x78\x32\x65\x33',0x2d0,'\x30\x78\x32\x64\x64','\x30\x78\x32\x63\x37');function _0x1eb6e7(_0x52b4f1,_0x1c0e79,_0x8fb3c1,_0x1c0c91){return _0x4bd74e(_0x1c0e79- -0xf0,_0x1c0e79-0x116,_0x8fb3c1-'\x30\x78\x62\x63',_0x8fb3c1);}_0x6ce6b1[_0x200dd1(-'\x30\x78\x39\x33',-'\x30\x78\x36\x63',-0x7e,-'\x30\x78\x36\x63')]='\u2728\x20\x54\x49\x4b\x20\x54\x4f\x4b\x20'+_0x1eb6e7(-0x6f,-'\x30\x78\x39\x35',-'\x30\x78\x37\x30',-0x82)+'\x20\u2728';function _0x6497ee(_0x836f52,_0x3b2a11,_0x321774,_0x599d13){return _0x548188(_0x836f52-'\x30\x78\x32\x66',_0x321774,_0x836f52-0x4ea,_0x599d13-'\x30\x78\x37\x35');}var _0xbe0920=_0x6ce6b1;function _0x15510e(_0x22856f,_0x44d2ab,_0x309eaf,_0x465335){return _0x548188(_0x22856f-0x16e,_0x22856f,_0x309eaf-'\x30\x78\x33\x62\x66',_0x465335-0x6c);}function _0x3a38f8(_0x331043,_0x1c464a,_0x5d249c,_0x32fecf){return _0x4bd74e(_0x5d249c-'\x30\x78\x31\x61\x36',_0x1c464a-'\x30\x78\x31\x61\x66',_0x5d249c-0x14a,_0x1c464a);}var _0x4e6992=_0x48bdef[_0x6497ee(0x3d4,0x3d5,0x3f3,0x3ef)][_0x34f5fb(0x369,0x351,0x379,'\x30\x78\x33\x34\x61')];function _0x293d94(_0x30c0e5,_0x20dda4,_0x57da06,_0x1b9366){return _0x548188(_0x30c0e5-0x4d,_0x20dda4,_0x57da06-0x58a,_0x1b9366-0x178);}function _0x20e21d(_0x2a6181,_0x33922c,_0xfb9864,_0x182b98){return _0x548188(_0x2a6181-'\x30\x78\x61\x64',_0x2a6181,_0x182b98-'\x30\x78\x61\x38',_0x182b98-0x12b);}if(!_0x4e6992)_0x5e3028['\x6a\x73\x6f\x6e'](errnya);else{var _0x4bc530=await ditzz[_0x1eb6e7(-'\x30\x78\x38\x62',-'\x30\x78\x37\x62',-'\x30\x78\x39\x65',-'\x30\x78\x37\x30')][_0x1c91f2('\x30\x78\x32\x65\x34',0x2f9,'\x30\x78\x32\x64\x31','\x30\x78\x33\x30\x31')](_0x4e6992),_0x13414e={};_0x13414e[_0x200dd1(-'\x30\x78\x37\x34',-0x57,-'\x30\x78\x37\x66',-0x85)]=_0xbe0920[_0x15510e('\x30\x78\x32\x64\x64',0x2e9,0x2de,0x2d9)],_0x13414e[_0x20e21d(-0x38,-'\x30\x78\x31\x33',-0x40,-0x33)]=''+creator,_0x13414e['\x74\x69\x74\x6c\x65']=_0x4bc530['\x74\x69\x74\x6c\x65'],_0x13414e[_0x15510e(0x2d7,0x2ce,'\x30\x78\x32\x62\x37',0x2a8)]=_0x4bc530[_0x1eb6e7(-0xa8,-0x90,-'\x30\x78\x62\x37',-'\x30\x78\x38\x63')],_0x13414e[_0x200dd1(-0x71,-'\x30\x78\x38\x34',-'\x30\x78\x36\x62',-0x5a)]=_0x4bc530[_0x34f5fb('\x30\x78\x33\x35\x66',0x382,0x34d,'\x30\x78\x33\x38\x34')][0x343*0x7+0xcf0+-0x23c3][_0x6497ee(0x3ef,'\x30\x78\x33\x66\x33',0x405,'\x30\x78\x34\x30\x64')+_0x20e21d(-0x3d,-'\x30\x78\x35\x63',-0x1d,-0x3f)],_0x13414e['\x76\x69\x64\x53\x69\x7a\x65']=_0x4bc530['\x6d\x65\x64\x69\x61'][-0x1f30+-0x125b+0x318c]['\x66\x6f\x72\x6d\x61\x74\x74\x65\x64\x53'+_0x1c91f2(0x2cd,0x2b1,'\x30\x78\x32\x65\x64','\x30\x78\x32\x64\x31')],_0x13414e[_0x1c91f2('\x30\x78\x32\x62\x63','\x30\x78\x32\x64\x32',0x2df,0x2a3)]=_0x4bc530[_0x20e21d(-'\x30\x78\x36\x31',-'\x30\x78\x34\x36',-'\x30\x78\x35\x34',-'\x30\x78\x36\x32')][0x25f5+0x315*0xa+0x2263*-0x2][_0x15510e('\x30\x78\x32\x62\x37',0x2c1,'\x30\x78\x32\x62\x66',0x29e)],_0x13414e[_0x293d94('\x30\x78\x34\x39\x37','\x30\x78\x34\x63\x37',0x4a2,0x49d)]=_0x4bc530[_0x15510e(0x28d,'\x30\x78\x32\x62\x66','\x30\x78\x32\x62\x35','\x30\x78\x32\x64\x63')][-0x2*-0xb+-0x137*0x11+0x1493][_0x293d94(0x490,'\x30\x78\x34\x61\x64',0x48a,'\x30\x78\x34\x36\x32')],_0x13414e[_0x20e21d(-0x83,-'\x30\x78\x37\x34',-'\x30\x78\x38\x30',-0x6c)]=_0x200dd1(-0x92,-0x7e,-'\x30\x78\x61\x35',-0x88)+_0x6497ee('\x30\x78\x34\x31\x32',0x414,'\x30\x78\x34\x31\x34',0x432)+_0x293d94('\x30\x78\x34\x39\x36','\x30\x78\x34\x61\x38','\x30\x78\x34\x61\x30','\x30\x78\x34\x63\x31')+_0x1c91f2('\x30\x78\x32\x62\x38',0x2c5,0x2a6,0x292)+'\x39\x37\x32\x34\x34\x2e\x6a\x70\x67',_0x13414e['\x62\x6f\x74\x6e\x61\x6d\x65']=_0xbe0920[_0x20e21d(-'\x30\x78\x33\x34',-0x53,-'\x30\x78\x64',-'\x30\x78\x33\x35')],_0x13414e[_0x200dd1(-'\x30\x78\x35\x61',-'\x30\x78\x33\x61',-0x63,-0x67)]=_0xbe0920[_0x3a38f8('\x30\x78\x31\x63\x32',0x1c1,'\x30\x78\x31\x65\x38',0x200)];var _0xa38f89=_0x13414e;_0x5e3028[_0x1eb6e7(-'\x30\x78\x35\x39',-0x6d,-'\x30\x78\x36\x66',-'\x30\x78\x36\x62')](_0xa38f89);}}),router[_0x25337b(-0x2e,-'\x30\x78\x36\x30',-0x63,-'\x30\x78\x33\x64')](_0x25337b(-'\x30\x78\x33\x65',-0x18,-0x49,-0x29)+_0x4bd74e('\x30\x78\x36\x37','\x30\x78\x38\x33',0x7c,0x72),async(_0x214c45,_0xceae86)=>{function _0x2480d5(_0x11c694,_0x4bb1bd,_0x58a67f,_0x1cb30d){return _0x4bd74e(_0x11c694-0x518,_0x4bb1bd-0x3e,_0x58a67f-'\x30\x78\x31\x66',_0x1cb30d);}function _0x38a4a9(_0x642bd0,_0x96e452,_0x311a5f,_0x1840e2){return _0x4bd74e(_0x311a5f-0x1d7,_0x96e452-'\x30\x78\x32\x34',_0x311a5f-'\x30\x78\x31\x33\x38',_0x96e452);}function _0x516dc0(_0x17f151,_0x19f6f5,_0x380512,_0x3ed747){return _0x25337b(_0x19f6f5,_0x19f6f5-'\x30\x78\x37\x34',_0x380512-0x62,_0x380512- -0x116);}function _0x3046c6(_0x20ab42,_0x1a8cd2,_0x13a651,_0x10ffad){return _0xfdebff(_0x20ab42-'\x30\x78\x31\x38\x33',_0x1a8cd2-0x7a,_0x20ab42,_0x10ffad-0x124);}baiscopelk[_0x2480d5('\x30\x78\x35\x37\x62',0x590,'\x30\x78\x35\x38\x63',0x55a)](_0x214c45[_0x516dc0(-0x170,-'\x30\x78\x31\x37\x32',-0x14e,-0x175)][_0x516dc0(-'\x30\x78\x31\x31\x30',-'\x30\x78\x31\x33\x39',-0x136,-0x15b)]||'')['\x74\x68\x65\x6e'](_0x1d8a4e=>{var _0x308f0f={};_0x308f0f[_0x6aeac1(0xa1,0x87,0x89,0x92)]=!![];function _0x3d9b5c(_0x4d0ff7,_0x5379db,_0x31080f,_0x294711){return _0x2480d5(_0x31080f- -'\x30\x78\x32\x62\x30',_0x5379db-'\x30\x78\x31\x37\x39',_0x31080f-0x8b,_0x4d0ff7);}_0x308f0f[_0x6aeac1('\x30\x78\x38\x63',0xa2,0x85,0xa7)]=_0x1d8a4e;function _0x406b13(_0x4ed55e,_0xf52bf0,_0x3ee2a4,_0x3a7209){return _0x38a4a9(_0x4ed55e-'\x30\x78\x37\x33',_0xf52bf0,_0x3a7209-'\x30\x78\x32\x37\x31',_0x3a7209-0x1c3);}function _0x6aeac1(_0x2c80c7,_0x33d175,_0x1331fa,_0x48e818){return _0x38a4a9(_0x2c80c7-0x144,_0x1331fa,_0x48e818- -0x1a6,_0x48e818-'\x30\x78\x32\x37');}_0xceae86[_0x6aeac1(0xac,'\x30\x78\x61\x31',0xaa,'\x30\x78\x62\x34')](_0x308f0f);})[_0x38a4a9('\x30\x78\x32\x36\x33','\x30\x78\x32\x34\x38','\x30\x78\x32\x36\x32','\x30\x78\x32\x35\x36')](_0x169b30=>{console[_0x3c37a4(-0x164,-'\x30\x78\x31\x37\x61',-'\x30\x78\x31\x35\x34',-0x196)](_0x169b30);var _0x374fc6={};_0x374fc6[_0x3c37a4(-0x171,-'\x30\x78\x31\x37\x65',-0x1a2,-0x18f)]=![];function _0x31a995(_0x4c1ce3,_0x55c9f1,_0x16d959,_0x34f000){return _0x516dc0(_0x4c1ce3-0x1aa,_0x55c9f1,_0x34f000-'\x30\x78\x32\x64\x31',_0x34f000-'\x30\x78\x32\x39');}function _0x9017e0(_0x4fbfbd,_0x3e57c4,_0x4a9d13,_0x30a212){return _0x3046c6(_0x4a9d13,_0x3e57c4-'\x30\x78\x31\x39\x36',_0x4a9d13-'\x30\x78\x31\x63\x37',_0x3e57c4- -'\x30\x78\x32\x37\x64');}function _0x3c37a4(_0x58c13f,_0x4fa358,_0x50bcde,_0x204c7e){return _0x3046c6(_0x50bcde,_0x4fa358-'\x30\x78\x36\x36',_0x50bcde-'\x30\x78\x32\x36',_0x4fa358- -0x482);}_0x374fc6['\x6d\x73\x67']=_0x169b30,_0xceae86[_0x31a995('\x30\x78\x31\x61\x65',0x1a5,0x187,'\x30\x78\x31\x61\x66')](_0x374fc6);});});

//end tk&sub

// start News 

(function(_0x4c9ad6,_0x3244fd){function _0x334d46(_0x4ce182,_0x29a23e,_0x219fc7,_0x43898a){return _0x57aa(_0x43898a- -0xfb,_0x4ce182);}function _0x1ed3d4(_0x18cf3f,_0x6d3810,_0x2cc8f4,_0x20a88f){return _0x57aa(_0x2cc8f4-'\x30\x78\x31\x35\x33',_0x20a88f);}function _0x582975(_0x57d4b3,_0x23dc86,_0x36e7b7,_0x2a64a9){return _0x57aa(_0x2a64a9-'\x30\x78\x32\x66\x61',_0x57d4b3);}function _0x2134d6(_0x2810c6,_0x62faff,_0x1e4583,_0x3220b0){return _0x57aa(_0x2810c6-0x25a,_0x1e4583);}const _0x15e292=_0x4c9ad6();function _0xd31468(_0x3c9ae0,_0x25ff70,_0x226d7b,_0x13162f){return _0x57aa(_0x226d7b- -0x2dd,_0x25ff70);}function _0x5dca0d(_0x347d5e,_0x21713e,_0x2bcd17,_0x13d5a6){return _0x57aa(_0x2bcd17- -'\x30\x78\x33\x63\x37',_0x347d5e);}function _0x4b1799(_0x570627,_0x4f7fbd,_0x2a0c9b,_0x126f28){return _0x57aa(_0x570627- -0x8d,_0x126f28);}function _0x230ab6(_0x51aa94,_0x46a072,_0xd9d7ec,_0x3f1dda){return _0x57aa(_0x3f1dda-'\x30\x78\x31\x62\x32',_0xd9d7ec);}function _0x773a32(_0x30dd46,_0x1023c0,_0x3d613a,_0xae75e0){return _0x57aa(_0x3d613a- -0x21,_0x1023c0);}while(!![]){try{const _0x1af94f=-parseInt(_0x5dca0d(-0x22a,-0x223,-'\x30\x78\x32\x30\x33',-'\x30\x78\x32\x31\x36'))/(-0x6b*-0x3c+-0x4ea*-0x1+0x9ff*-0x3)+parseInt(_0x5dca0d(-'\x30\x78\x31\x63\x65',-'\x30\x78\x31\x64\x37',-0x1c2,-0x1bf))/(-0x1123+0xe*0x94+0x90d)+-parseInt(_0x230ab6('\x30\x78\x33\x61\x62',0x383,0x38b,'\x30\x78\x33\x61\x36'))/(-0xc09+-0x58*-0x17+0x424)*(parseInt(_0x230ab6('\x30\x78\x33\x37\x31',0x371,'\x30\x78\x33\x38\x63',0x380))/(0x12*-0x1a5+-0x51*-0x17+0x2b*0x85))+parseInt(_0x582975('\x30\x78\x35\x33\x30',0x533,'\x30\x78\x34\x66\x65',0x507))/(0xe*-0x97+-0x1f8a+0x27d1)*(-parseInt(_0x5dca0d(-'\x30\x78\x31\x63\x34',-'\x30\x78\x31\x61\x37',-0x1a8,-0x19b))/(-0xc21+-0xf7*-0xd+-0x64))+parseInt(_0x334d46('\x30\x78\x66\x38',0xab,0xa6,'\x30\x78\x64\x34'))/(-0x257b+-0x5*-0x3e3+-0x7*-0x295)*(-parseInt(_0x2134d6(0x446,'\x30\x78\x34\x31\x63',0x473,'\x30\x78\x34\x37\x31'))/(0xe61+0x1d3*-0xd+0x95e))+-parseInt(_0x582975('\x30\x78\x35\x31\x31','\x30\x78\x35\x30\x32','\x30\x78\x35\x31\x36',0x509))/(-0xb*-0x275+-0xefc+-0xc02)+parseInt(_0x230ab6('\x30\x78\x33\x35\x61',0x3a8,'\x30\x78\x33\x36\x61','\x30\x78\x33\x37\x39'))/(0x216+0x15d6+-0x17e2)*(parseInt(_0x230ab6(0x3d8,'\x30\x78\x33\x62\x63',0x3b8,0x3a7))/(0x139a+0x937*0x2+-0x25fd));if(_0x1af94f===_0x3244fd)break;else _0x15e292['push'](_0x15e292['shift']());}catch(_0x301e35){_0x15e292['push'](_0x15e292['shift']());}}}(_0x4a64,0x67ebb*-0x2+-0x99fe6+0xffce3*0x2));function _0x57aa(_0x407dca,_0x4a64ca){const _0x57aa52=_0x4a64();return _0x57aa=function(_0x15cbc3,_0x156cff){_0x15cbc3=_0x15cbc3-(-0x1*0x1af3+0x7c1*-0x5+-0x1*-0x4374);let _0x1e84d1=_0x57aa52[_0x15cbc3];return _0x1e84d1;},_0x57aa(_0x407dca,_0x4a64ca);}const _0x407dca=(function(){function _0x445836(_0x188fa2,_0x48b10a,_0x3df01b,_0x2657e3){return _0x57aa(_0x2657e3-'\x30\x78\x31\x37\x61',_0x188fa2);}const _0x28b782={};_0x28b782[_0x4325e7('\x30\x78\x31\x35\x30',0x162,'\x30\x78\x31\x32\x62','\x30\x78\x31\x33\x65')]=function(_0x2cd577,_0x1857ca){return _0x2cd577===_0x1857ca;},_0x28b782[_0x4325e7('\x30\x78\x31\x32\x30',0x118,'\x30\x78\x31\x32\x61','\x30\x78\x31\x31\x37')]='\x77\x48\x6e\x49\x46';const _0x349fe2=_0x28b782;function _0x4325e7(_0x183de1,_0x10991c,_0x139a49,_0x2c675e){return _0x57aa(_0x2c675e- -0xbd,_0x139a49);}let _0x43c620=!![];return function(_0x1777f9,_0x4e96c7){const _0x2c7671=_0x43c620?function(){function _0x40ee86(_0x46bd9c,_0x260696,_0x341938,_0x4aa4c6){return _0x57aa(_0x341938- -0x340,_0x4aa4c6);}function _0x42a109(_0x598833,_0x27e5c2,_0x20957e,_0x3ee811){return _0x57aa(_0x20957e- -0x15f,_0x598833);}function _0x42770d(_0x222bb9,_0x136be7,_0x36db82,_0x1ca0c3){return _0x57aa(_0x36db82- -0x1cd,_0x136be7);}function _0x10a63f(_0x1a7e88,_0x46374f,_0x2e9762,_0x586fd7){return _0x57aa(_0x586fd7-0x2bc,_0x46374f);}function _0x3b9bc0(_0x500473,_0x42c7d5,_0x167c17,_0x2bc465){return _0x57aa(_0x42c7d5-0x3e6,_0x2bc465);}if(_0x349fe2[_0x10a63f(0x4e9,'\x30\x78\x34\x39\x62','\x30\x78\x34\x61\x63',0x4b7)](_0x349fe2[_0x10a63f('\x30\x78\x34\x37\x35','\x30\x78\x34\x62\x39','\x30\x78\x34\x36\x35','\x30\x78\x34\x39\x30')],_0x349fe2[_0x40ee86(-0x173,-'\x30\x78\x31\x35\x35',-0x16c,-0x19b)])){if(_0x4e96c7){const _0x43d6a8=_0x4e96c7[_0x42770d('\x30\x78\x32\x32',-0x7,-0xd,0xa)](_0x1777f9,arguments);return _0x4e96c7=null,_0x43d6a8;}}else{const _0x3ccc0f=_0x445a9e[_0x10a63f('\x30\x78\x34\x35\x61',0x455,'\x30\x78\x34\x38\x38','\x30\x78\x34\x37\x63')](_0x5c8805,arguments);return _0x4bf0fa=null,_0x3ccc0f;}}:function(){};return _0x43c620=![],_0x2c7671;};}()),_0x2d0a24=_0x407dca(this,function(){function _0x428893(_0x15e59c,_0x5a8fd3,_0x5f100f,_0x25ffcb){return _0x57aa(_0x5f100f- -'\x30\x78\x31\x35\x66',_0x15e59c);}const _0x5d6958={};function _0x3aaec5(_0xef0d32,_0x4a5a4d,_0x1ecf19,_0x204ccd){return _0x57aa(_0x204ccd-'\x30\x78\x33\x36\x64',_0x1ecf19);}_0x5d6958['\x45\x41\x4a\x4d\x6d']=_0x3aaec5('\x30\x78\x35\x34\x33','\x30\x78\x35\x31\x63',0x531,0x537)+'\x2b\x24';function _0x57c102(_0x531db2,_0x1a3405,_0xc2d18e,_0x31d39b){return _0x57aa(_0xc2d18e- -0x263,_0x1a3405);}function _0x307bb4(_0x3cbe09,_0x1518bb,_0x379a2f,_0x3d164d){return _0x57aa(_0x1518bb- -0x22f,_0x379a2f);}function _0x11e522(_0x693e12,_0x12bd0d,_0x1ac9ab,_0x35497b){return _0x57aa(_0x693e12-'\x30\x78\x33\x30\x38',_0x35497b);}const _0x2981f7=_0x5d6958;return _0x2d0a24['\x74\x6f\x53\x74\x72\x69\x6e\x67']()['\x73\x65\x61\x72\x63\x68'](_0x2981f7[_0x3aaec5('\x30\x78\x35\x32\x31',0x52a,0x53d,'\x30\x78\x35\x34\x39')])['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x3aaec5('\x30\x78\x35\x37\x64','\x30\x78\x35\x34\x38','\x30\x78\x35\x33\x62',0x566)+'\x72'](_0x2d0a24)[_0x3aaec5(0x57f,0x564,'\x30\x78\x35\x33\x62',0x552)](_0x2981f7[_0x57c102(-0x94,-'\x30\x78\x39\x31',-'\x30\x78\x38\x37',-'\x30\x78\x38\x30')]);});function _0x149f8b(_0x593d19,_0x52834d,_0x5a79d7,_0x5887b0){return _0x57aa(_0x52834d-0x22,_0x5887b0);}_0x2d0a24();function _0x39ac61(_0x52beb6,_0x230daf,_0x1d2586,_0x3b5a84){return _0x57aa(_0x3b5a84-'\x30\x78\x32\x62\x64',_0x52beb6);}const _0x538037=(function(){const _0x5abc55={};function _0x106f68(_0x3fa269,_0x59a1a5,_0x301e96,_0x1c6c94){return _0x57aa(_0x3fa269-0x120,_0x1c6c94);}_0x5abc55[_0x457d3e(0x131,0x157,'\x30\x78\x31\x35\x64','\x30\x78\x31\x34\x63')]=_0x457d3e(0xf9,'\x30\x78\x31\x31\x36',0xea,'\x30\x78\x65\x35')+_0x457d3e('\x30\x78\x31\x32\x38',0x156,0x135,'\x30\x78\x31\x33\x63');function _0x516b1a(_0x4e7e1d,_0x5c6d6e,_0x404da3,_0x1d0f26){return _0x57aa(_0x5c6d6e- -0x342,_0x404da3);}function _0x1a293b(_0x34ffbd,_0x92680d,_0x37db90,_0x3b0321){return _0x57aa(_0x3b0321- -0x163,_0x37db90);}function _0x25212e(_0x255b79,_0x4edd04,_0xf3cc9d,_0x52701b){return _0x57aa(_0x4edd04-0x137,_0x52701b);}_0x5abc55[_0x25212e(0x320,'\x30\x78\x33\x31\x64','\x30\x78\x33\x30\x34','\x30\x78\x33\x32\x32')]=_0x106f68(0x2f0,0x2cd,'\x30\x78\x32\x64\x61','\x30\x78\x32\x64\x63')+_0x108e6a(-0x4b,-'\x30\x78\x35\x31',-'\x30\x78\x32\x35',-0x80)+'\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28'+'\x20\x29';function _0x3276d8(_0x3024d5,_0x1358ed,_0x364ef6,_0xb826d0){return _0x57aa(_0x364ef6-0x21f,_0xb826d0);}_0x5abc55[_0x108e6a(-0x26,-'\x30\x78\x34\x30',-'\x30\x78\x32\x61',-'\x30\x78\x35\x64')]=function(_0xa45dae,_0x41258a){return _0xa45dae===_0x41258a;},_0x5abc55[_0x106f68('\x30\x78\x32\x66\x39',0x32c,'\x30\x78\x33\x32\x37','\x30\x78\x32\x65\x62')]=_0x47c847('\x30\x78\x38\x37',0x64,0x36,0x66);const _0x548a45=_0x5abc55;function _0x457d3e(_0x32a351,_0x5dd4db,_0x5b73a3,_0x1f5008){return _0x57aa(_0x32a351- -0xd8,_0x5b73a3);}function _0x544490(_0x4d7e00,_0x55e1fd,_0x16205f,_0x20ee79){return _0x57aa(_0x20ee79-0xfb,_0x55e1fd);}let _0x4bd25a=!![];function _0x108e6a(_0x2cc96c,_0x2c7ad0,_0x2a4141,_0x441b2e){return _0x57aa(_0x2c7ad0- -0x242,_0x441b2e);}function _0x47c847(_0xe19f96,_0x2a86e1,_0x559492,_0x150291){return _0x57aa(_0x150291- -0x1b0,_0x559492);}return function(_0xac7a0a,_0xc7d26d){const _0x32a15e={'\x53\x4d\x4c\x4b\x7a':function(_0x27d60e,_0x38ef12){return _0x27d60e(_0x38ef12);},'\x59\x6d\x78\x59\x71':_0x548a45[_0x309215('\x30\x78\x34\x38\x33',0x497,0x482,0x4b6)],'\x58\x57\x46\x61\x75':_0x548a45['\x70\x75\x45\x67\x73'],'\x58\x41\x57\x42\x41':function(_0x34678d,_0x1b1054){function _0xbe1793(_0x289f92,_0x577c69,_0x1d0a4b,_0x5a9780){return _0x309215(_0x289f92-0x194,_0x5a9780- -'\x30\x78\x31\x39\x63',_0x1d0a4b-'\x30\x78\x62\x33',_0x289f92);}return _0x548a45[_0xbe1793(0x317,'\x30\x78\x32\x66\x39','\x30\x78\x33\x30\x65','\x30\x78\x32\x66\x34')](_0x34678d,_0x1b1054);},'\x49\x71\x55\x65\x46':_0x3a68db(-0x108,-0x129,-0x13f,-'\x30\x78\x31\x30\x31'),'\x4e\x76\x6d\x74\x43':_0x548a45[_0xe0643c(0x5b4,0x595,0x5e7,0x5af)]};function _0x309215(_0x12da4d,_0xe45091,_0x2163ee,_0x18ad41){return _0x106f68(_0xe45091-'\x30\x78\x31\x36\x65',_0xe45091-'\x30\x78\x65\x36',_0x2163ee-'\x30\x78\x31\x30\x64',_0x18ad41);}function _0x3a68db(_0x42f526,_0x727872,_0x577a8e,_0x1cbab3){return _0x47c847(_0x42f526-0xfc,_0x727872-0x23,_0x1cbab3,_0x727872- -0x15d);}const _0x37a7ad=_0x4bd25a?function(){function _0x38436b(_0x1de3ae,_0x424fe4,_0x4d3b5f,_0x1d8af9){return _0x3a68db(_0x1de3ae-0x4d,_0x4d3b5f-'\x30\x78\x33\x34\x32',_0x4d3b5f-0x1e8,_0x1d8af9);}function _0x82b36e(_0x3c00fc,_0x1a51dc,_0x4fb271,_0x21a4cf){return _0x3a68db(_0x3c00fc-0x151,_0x1a51dc-0x603,_0x4fb271-'\x30\x78\x31\x65\x63',_0x21a4cf);}function _0xb22ee9(_0x4495d7,_0x260fa4,_0x2a8618,_0x1ecf7c){return _0x3a68db(_0x4495d7-0xe2,_0x260fa4-'\x30\x78\x34\x64\x36',_0x2a8618-'\x30\x78\x31\x30\x38',_0x1ecf7c);}const _0x2f15d1={'\x69\x75\x70\x54\x61':function(_0x1b9a64,_0x951622){return _0x32a15e['\x53\x4d\x4c\x4b\x7a'](_0x1b9a64,_0x951622);},'\x47\x74\x77\x43\x78':function(_0x571998,_0x8b013a){return _0x571998+_0x8b013a;},'\x4d\x6a\x69\x41\x45':_0x32a15e[_0x262144(-0x11c,-0x131,-'\x30\x78\x31\x31\x33',-'\x30\x78\x31\x30\x38')],'\x4d\x52\x72\x5a\x42':_0x32a15e[_0x3646ac(-0x1cf,-'\x30\x78\x31\x63\x32',-0x1c8,-'\x30\x78\x31\x63\x65')]};function _0x3e8334(_0x1041b0,_0x35fe7e,_0xa3b070,_0xcfff23){return _0x309215(_0x1041b0-'\x30\x78\x31\x38\x62',_0x35fe7e- -'\x30\x78\x31\x65\x65',_0xa3b070-'\x30\x78\x39\x38',_0x1041b0);}function _0x3646ac(_0x105fdb,_0x160dd8,_0x200b1f,_0xf0e0f0){return _0xe0643c(_0xf0e0f0- -'\x30\x78\x37\x38\x34',_0x200b1f,_0x200b1f-'\x30\x78\x63\x38',_0xf0e0f0-'\x30\x78\x31\x35\x30');}function _0x1e1252(_0x180e3c,_0x110f1e,_0x27ebd9,_0x106a3c){return _0x3a68db(_0x180e3c-0x194,_0x106a3c-'\x30\x78\x36\x36\x30',_0x27ebd9-0x10e,_0x27ebd9);}function _0x262144(_0x5d6b2c,_0x485797,_0x280e07,_0xc7bd3c){return _0xe0643c(_0x5d6b2c- -0x6c3,_0x485797,_0x280e07-'\x30\x78\x31\x37\x64',_0xc7bd3c-'\x30\x78\x62\x30');}function _0x454760(_0x204edb,_0x2f1fe0,_0xc34c0e,_0xd7e7ee){return _0x3a68db(_0x204edb-'\x30\x78\x31\x31\x37',_0xd7e7ee- -'\x30\x78\x38\x39',_0xc34c0e-0x1e1,_0xc34c0e);}function _0x118f2e(_0x386541,_0x5b3b0e,_0x5efdc0,_0x1d3a7f){return _0x309215(_0x386541-0x7a,_0x5b3b0e- -'\x30\x78\x33\x30\x36',_0x5efdc0-'\x30\x78\x64\x36',_0x1d3a7f);}if(_0x32a15e['\x58\x41\x57\x42\x41'](_0x32a15e['\x49\x71\x55\x65\x46'],_0x262144(-0xcd,-0xdd,-0xb5,-0xa8)))_0x1999fb=_0x2f15d1[_0x3646ac(-'\x30\x78\x31\x39\x34',-'\x30\x78\x31\x64\x33',-0x1a5,-'\x30\x78\x31\x62\x33')](_0x411cbd,_0x2f15d1[_0x38436b('\x30\x78\x32\x31\x65','\x30\x78\x31\x65\x36','\x30\x78\x32\x30\x30',0x1e1)](_0x2f15d1['\x47\x74\x77\x43\x78'](_0x2f15d1[_0x3646ac(-0x1bb,-'\x30\x78\x31\x61\x62',-0x1c4,-'\x30\x78\x31\x62\x65')],_0x2f15d1[_0x1e1252('\x30\x78\x35\x36\x31',0x572,'\x30\x78\x35\x37\x31','\x30\x78\x35\x35\x65')]),'\x29\x3b'))();else{if(_0xc7d26d){if(_0x32a15e[_0x3e8334(0x299,'\x30\x78\x32\x62\x37','\x30\x78\x32\x62\x30',0x2d5)](_0x32a15e[_0x454760(-0x1cd,-0x183,-'\x30\x78\x31\x38\x30',-'\x30\x78\x31\x61\x65')],_0x3646ac(-'\x30\x78\x31\x39\x64',-0x19b,-'\x30\x78\x31\x38\x35',-0x1a1))){if(_0x572d95){const _0x5ad208=_0x40c7db[_0xb22ee9('\x30\x78\x33\x35\x39',0x389,'\x30\x78\x33\x38\x38','\x30\x78\x33\x37\x34')](_0x2bf9ef,arguments);return _0x12a334=null,_0x5ad208;}}else{const _0x516e40=_0xc7d26d[_0xb22ee9(0x367,0x389,0x373,0x3ad)](_0xac7a0a,arguments);return _0xc7d26d=null,_0x516e40;}}}}:function(){};function _0xe0643c(_0x73a9b5,_0x489db8,_0x5aa9ff,_0x1edf3b){return _0x1a293b(_0x73a9b5-'\x30\x78\x31\x63\x32',_0x489db8-0x6,_0x489db8,_0x73a9b5-0x53e);}return _0x4bd25a=![],_0x37a7ad;};}()),_0x2e84dc=_0x538037(this,function(){function _0x106f1b(_0x4e7077,_0x4fda71,_0x33ae21,_0x49a1f6){return _0x57aa(_0x4e7077-0x234,_0x33ae21);}function _0x1c5192(_0x5af037,_0x1bb8ec,_0x1446e7,_0x30a08c){return _0x57aa(_0x1bb8ec- -0xca,_0x30a08c);}function _0x2706f0(_0x2395b4,_0x277833,_0x53d24f,_0xccb34f){return _0x57aa(_0x53d24f- -0xfd,_0xccb34f);}function _0x1b31d9(_0x1d5d51,_0x2e8e10,_0xe87eba,_0x27f1af){return _0x57aa(_0x1d5d51- -'\x30\x78\x32\x35',_0xe87eba);}const _0x1796cc={'\x51\x6f\x43\x41\x4e':function(_0x1b6f33,_0x5237aa){return _0x1b6f33+_0x5237aa;},'\x45\x7a\x75\x72\x51':function(_0x1b9f77,_0x2b8a59){return _0x1b9f77+_0x2b8a59;},'\x75\x77\x62\x41\x4d':_0x26ccba(0x9d,0x7c,0x92,0x9c)+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x4f\x76\x6f\x76\x41':_0x26ccba(0x55,0x7b,0x70,0x67)+_0x1fb69c('\x30\x78\x32\x65\x33',0x2e3,'\x30\x78\x33\x31\x35','\x30\x78\x32\x64\x32')+_0x26ccba(0x90,'\x30\x78\x39\x61','\x30\x78\x61\x32',0xbc)+'\x20\x29','\x66\x50\x4e\x75\x4d':function(_0x35016e,_0xcff8ca){return _0x35016e(_0xcff8ca);},'\x70\x4d\x41\x58\x7a':function(_0x488c86,_0x79e528){return _0x488c86+_0x79e528;},'\x6b\x48\x6d\x4c\x79':function(_0x1e80c0,_0x462a4e){return _0x1e80c0+_0x462a4e;},'\x69\x58\x72\x57\x61':'\x6c\x6f\x67','\x64\x69\x57\x5a\x64':_0x1fb69c(0x305,0x300,'\x30\x78\x32\x66\x62',0x331),'\x44\x61\x50\x58\x4a':'\x74\x72\x61\x63\x65','\x44\x6a\x7a\x63\x50':function(_0x5713c8,_0xb6a87){return _0x5713c8<_0xb6a87;},'\x55\x50\x73\x4b\x6f':_0x2706f0(0xbc,0xf2,'\x30\x78\x64\x35',0xfd)};function _0x3ed66e(_0x4775c2,_0x2d1df9,_0x25bfba,_0x511f75){return _0x57aa(_0x511f75- -0xb5,_0x2d1df9);}const _0x1453d9=function(){let _0x37d96d;function _0x338a71(_0x1d1033,_0x2dff3b,_0x44f688,_0x53dc84){return _0x1fb69c(_0x1d1033-'\x30\x78\x36\x33',_0x44f688- -0x4d6,_0x2dff3b,_0x53dc84-'\x30\x78\x65\x38');}function _0x414cbb(_0x576afd,_0x229396,_0x29a2f7,_0x1958a1){return _0x27f9b5(_0x576afd-0xdd,_0x229396-0xe2,_0x229396-0x159,_0x1958a1);}try{_0x37d96d=Function(_0x1796cc['\x51\x6f\x43\x41\x4e'](_0x1796cc[_0x414cbb('\x30\x78\x31\x39\x32','\x30\x78\x31\x38\x62','\x30\x78\x31\x39\x36','\x30\x78\x31\x35\x64')](_0x1796cc['\x75\x77\x62\x41\x4d'],_0x1796cc[_0x414cbb('\x30\x78\x32\x32\x32','\x30\x78\x31\x66\x30',0x21f,'\x30\x78\x31\x64\x38')]),'\x29\x3b'))();}catch(_0x22fb23){_0x37d96d=window;}return _0x37d96d;},_0x258442=_0x1453d9();function _0x27f9b5(_0x4cdf4d,_0x5ce130,_0x2c5991,_0x1be905){return _0x57aa(_0x2c5991- -'\x30\x78\x31\x38\x61',_0x1be905);}const _0x3b6e13=_0x258442[_0x26ccba(0xd5,0xa3,0xd6,'\x30\x78\x61\x36')]=_0x258442[_0x27f9b5(0x70,0x81,0x6e,'\x30\x78\x36\x66')]||{};function _0x26ccba(_0x3836b9,_0x58b34d,_0x4fcb76,_0x588352){return _0x57aa(_0x58b34d- -'\x30\x78\x31\x35\x35',_0x4fcb76);}function _0x260455(_0x3d04c0,_0x316d31,_0x89f4d5,_0x28d34a){return _0x57aa(_0x89f4d5- -0x155,_0x316d31);}function _0x1fb69c(_0x49beff,_0x540d37,_0x4ae285,_0x5013e7){return _0x57aa(_0x540d37-0xf2,_0x4ae285);}const _0x1499f3=[_0x1796cc[_0x27f9b5('\x30\x78\x34\x37',0x33,0x63,'\x30\x78\x35\x31')],'\x77\x61\x72\x6e',_0x1c5192(0x146,0x130,'\x30\x78\x31\x34\x61',0x12f),_0x1796cc[_0x3ed66e(0x130,'\x30\x78\x31\x35\x35',0x17e,'\x30\x78\x31\x34\x65')],_0x1c5192(0x12c,0x10b,'\x30\x78\x31\x31\x30',0xe9),_0x260455(0xbe,'\x30\x78\x61\x36','\x30\x78\x63\x30','\x30\x78\x61\x36'),_0x1796cc['\x44\x61\x50\x58\x4a']];for(let _0x599306=-0xc61*-0x2+0x2575+-0x3e37;_0x1796cc[_0x260455(0xdd,0x9a,0xc3,'\x30\x78\x39\x64')](_0x599306,_0x1499f3[_0x1fb69c(0x314,0x2f0,'\x30\x78\x33\x31\x66','\x30\x78\x33\x31\x66')]);_0x599306++){if(_0x26ccba('\x30\x78\x39\x38','\x30\x78\x63\x35','\x30\x78\x63\x31','\x30\x78\x65\x36')===_0x1796cc[_0x1c5192(0x105,'\x30\x78\x31\x30\x39','\x30\x78\x31\x30\x39',0xe3)]){let _0x57a224;try{_0x57a224=_0x1796cc[_0x27f9b5('\x30\x78\x34\x34','\x30\x78\x39\x63',0x6d,'\x30\x78\x38\x39')](_0x598e1c,_0x1796cc['\x70\x4d\x41\x58\x7a'](_0x1796cc[_0x2706f0('\x30\x78\x63\x35',0xd5,0xed,0xfe)](_0x1796cc[_0x1fb69c('\x30\x78\x32\x61\x33','\x30\x78\x32\x63\x66',0x2de,'\x30\x78\x32\x61\x35')],_0x1796cc['\x4f\x76\x6f\x76\x41']),'\x29\x3b'))();}catch(_0x294106){_0x57a224=_0x50798a;}return _0x57a224;}else{const _0xc15b71=_0x538037[_0x1b31d9('\x30\x78\x31\x64\x34','\x30\x78\x31\x61\x39','\x30\x78\x31\x62\x35','\x30\x78\x31\x62\x65')+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x106f1b(0x412,'\x30\x78\x34\x33\x35','\x30\x78\x33\x66\x39','\x30\x78\x33\x66\x31')](_0x538037),_0x5c995b=_0x1499f3[_0x599306],_0x9c4479=_0x3b6e13[_0x5c995b]||_0xc15b71;_0xc15b71[_0x106f1b('\x30\x78\x34\x35\x32','\x30\x78\x34\x32\x63',0x43a,'\x30\x78\x34\x34\x64')]=_0x538037[_0x1b31d9(0x1b9,0x1cb,0x19a,0x1a5)](_0x538037),_0xc15b71[_0x2706f0(0xf6,'\x30\x78\x31\x33\x66',0x120,'\x30\x78\x66\x31')]=_0x9c4479[_0x27f9b5('\x30\x78\x38\x31',0x61,'\x30\x78\x39\x33','\x30\x78\x61\x39')]['\x62\x69\x6e\x64'](_0x9c4479),_0x3b6e13[_0x5c995b]=_0xc15b71;}}});_0x2e84dc(),router[_0x149f8b('\x30\x78\x32\x32\x66',0x22e,'\x30\x78\x32\x35\x32',0x208)](_0x149f8b(0x217,'\x30\x78\x32\x33\x62','\x30\x78\x32\x33\x66',0x232),async(_0x2da830,_0x47ae7e)=>{const _0x51fa5b={'\x70\x61\x4e\x55\x55':_0x46ae28(0x5c3,0x5d9,'\x30\x78\x35\x39\x62',0x5bc),'\x51\x6e\x56\x70\x6a':function(_0x5851ca,_0xee56f8){return _0x5851ca(_0xee56f8);},'\x53\x55\x77\x71\x42':_0x5cbe64(0x346,'\x30\x78\x33\x38\x64','\x30\x78\x33\x36\x32','\x30\x78\x33\x34\x63'),'\x73\x6a\x79\x75\x56':_0xd684d5('\x30\x78\x32\x35\x30','\x30\x78\x32\x30\x39',0x22c,0x24e),'\x4b\x77\x72\x77\x4c':_0x5cbe64(0x39a,0x3b4,'\x30\x78\x33\x38\x64','\x30\x78\x33\x37\x39'),'\x51\x67\x59\x4d\x57':'\x68\x72\x65\x66','\x59\x45\x47\x6c\x56':function(_0x51f208,_0x4f9b70){return _0x51f208(_0x4f9b70);},'\x4d\x6e\x71\x58\x67':function(_0x3a2462,_0x3d9a58){return _0x3a2462(_0x3d9a58);},'\x59\x75\x62\x75\x49':_0xd684d5(0x22d,0x24f,'\x30\x78\x32\x32\x66','\x30\x78\x32\x35\x38')+_0x59a5d9('\x30\x78\x63\x33','\x30\x78\x64\x31',0xe4,'\x30\x78\x65\x37')+_0x368db4(0x107,'\x30\x78\x31\x30\x64','\x30\x78\x31\x31\x35','\x30\x78\x66\x32')+'\x6e\x65\x77\x73\x2e\x70\x68\x70','\x76\x73\x63\x56\x67':_0xd684d5('\x30\x78\x32\x34\x32',0x286,0x268,0x28a),'\x4f\x77\x66\x44\x4a':_0x5cbe64(0x390,'\x30\x78\x33\x61\x34',0x375,0x349)};var _0x8264e3=_0x2da830['\x71\x75\x65\x72\x79'][_0x46ae28('\x30\x78\x35\x34\x65','\x30\x78\x35\x61\x37','\x30\x78\x35\x35\x38',0x574)];function _0xd684d5(_0x4c01af,_0x4e719b,_0x1119f3,_0xebf9fe){return _0x39ac61(_0x4e719b,_0x4e719b-0xd3,_0x1119f3-'\x30\x78\x31\x39\x37',_0x1119f3- -0x254);}function _0x4c373d(_0x2cdc76,_0x496126,_0x144863,_0x1e934d){return _0x149f8b(_0x2cdc76-0xf7,_0x1e934d-'\x30\x78\x32\x62',_0x144863-0xa0,_0x496126);}function _0x56719b(_0x2d5490,_0x2cec74,_0x5e7e32,_0x30d414){return _0x39ac61(_0x30d414,_0x2cec74-'\x30\x78\x31\x35\x32',_0x5e7e32-0x18a,_0x2d5490- -'\x30\x78\x35\x62\x35');}function _0x2e4c73(_0x109213,_0x444fe4,_0x4b750e,_0x22cbd4){return _0x39ac61(_0x22cbd4,_0x444fe4-0x1a0,_0x4b750e-'\x30\x78\x31\x30\x37',_0x109213- -0xd);}function _0x46ae28(_0x27140f,_0x5e71c7,_0x2cc2fa,_0x18a88f){return _0x149f8b(_0x27140f-'\x30\x78\x31\x64\x63',_0x18a88f-0x393,_0x2cc2fa-'\x30\x78\x66\x63',_0x5e71c7);}function _0x398827(_0x1d4cf7,_0x6e1bc2,_0x5da3f8,_0x602a3f){return _0x39ac61(_0x1d4cf7,_0x6e1bc2-0x198,_0x5da3f8-0x93,_0x6e1bc2- -'\x30\x78\x33\x37\x38');}function _0x368db4(_0x1a8edf,_0x4d5dc2,_0xae232b,_0x59dea0){return _0x149f8b(_0x1a8edf-0x6d,_0x4d5dc2- -'\x30\x78\x64\x65',_0xae232b-0xf4,_0x1a8edf);}function _0x59a5d9(_0x1baccb,_0x1ae103,_0x24ec87,_0x281c5f){return _0x39ac61(_0x281c5f,_0x1ae103-'\x30\x78\x31\x36\x33',_0x24ec87-'\x30\x78\x61\x64',_0x1ae103- -0x3aa);}if(!_0x8264e3)return _0x47ae7e[_0xd684d5(0x28b,0x2a1,'\x30\x78\x32\x37\x61','\x30\x78\x32\x38\x32')](loghandler['\x6e\x6f\x74\x70\x61\x72\x61\x6d']);function _0x5cbe64(_0xac07d2,_0x55c035,_0x3448f2,_0x5a6c53){return _0x149f8b(_0xac07d2-0x153,_0x3448f2-'\x30\x78\x31\x35\x37',_0x3448f2-0xd9,_0x5a6c53);}if(listkey[_0x5cbe64('\x30\x78\x33\x32\x63',0x350,'\x30\x78\x33\x35\x30',0x376)](_0x8264e3)){const _0x315e70=_0x51fa5b['\x59\x75\x62\x75\x49'];axios[_0x368db4(0x156,'\x30\x78\x31\x35\x30','\x30\x78\x31\x34\x34',0x178)](_0x315e70)[_0x56719b(-0xf4,-'\x30\x78\x31\x31\x33',-'\x30\x78\x64\x32',-'\x30\x78\x66\x32')](_0x1f9484=>{function _0x496fae(_0x3872e4,_0x46a0e7,_0x1919f9,_0x3d4b7c){return _0x5cbe64(_0x3872e4-'\x30\x78\x63\x32',_0x46a0e7-0xdc,_0x3872e4-'\x30\x78\x61\x31',_0x3d4b7c);}function _0x221bf6(_0x72368d,_0x5bb00d,_0x5e1a3d,_0x3f607a){return _0x59a5d9(_0x72368d-0x17c,_0x5bb00d- -'\x30\x78\x62\x32',_0x5e1a3d-'\x30\x78\x35\x63',_0x5e1a3d);}results=[];function _0x3250e2(_0x42c0b7,_0x39a9aa,_0x35b6cc,_0x496ee1){return _0x2e4c73(_0x35b6cc- -0x28b,_0x39a9aa-0x94,_0x35b6cc-'\x30\x78\x31\x39\x33',_0x39a9aa);}function _0x307aa2(_0x2c6fd5,_0x5d23f7,_0x45cce7,_0x15c57f){return _0x56719b(_0x45cce7-0x10a,_0x5d23f7-0x1b0,_0x45cce7-0x15c,_0x15c57f);}const _0x2a814f=cheerio['\x6c\x6f\x61\x64'](_0x1f9484[_0x23dd1b('\x30\x78\x34\x30\x61',0x419,'\x30\x78\x34\x30\x39','\x30\x78\x34\x31\x63')]);function _0x23dd1b(_0x58e1b5,_0x375a2e,_0x88ccef,_0x910bed){return _0x56719b(_0x910bed-0x501,_0x375a2e-'\x30\x78\x31\x35\x30',_0x88ccef-'\x30\x78\x31\x30\x34',_0x375a2e);}function _0x48f833(_0x307b4b,_0x1531a0,_0x42ad56,_0x110a41){return _0x59a5d9(_0x307b4b-0x6f,_0x1531a0- -0x1ff,_0x42ad56-0x26,_0x42ad56);}_0x51fa5b['\x4d\x6e\x71\x58\x67'](_0x2a814f,_0x326165('\x30\x78\x35\x63\x38','\x30\x78\x35\x39\x62',0x5b3,0x5c4)+_0x48f833(-0x116,-0x10b,-0x11c,-'\x30\x78\x65\x64')+_0x326165('\x30\x78\x35\x64\x38',0x5ff,'\x30\x78\x35\x61\x37','\x30\x78\x36\x30\x34')+_0x221bf6(0xb,'\x30\x78\x33\x39','\x30\x78\x32\x35','\x30\x78\x35\x31'))[_0x48f833(-0xf6,-0x116,-0x100,-0x100)]((_0x32d89f,_0xb2460c)=>{function _0x4e619b(_0x5b22eb,_0x2a2336,_0x598f49,_0x38c13b){return _0x48f833(_0x5b22eb-'\x30\x78\x31\x38\x35',_0x2a2336- -'\x30\x78\x39\x32',_0x598f49,_0x38c13b-0x114);}function _0x3de584(_0xa21554,_0x2d6017,_0x4a6767,_0xbd4481){return _0x23dd1b(_0xa21554-0x9a,_0x2d6017,_0x4a6767-'\x30\x78\x65',_0xa21554-0x1b1);}function _0x1f8e29(_0x992671,_0x501030,_0x5d3776,_0x15370e){return _0x326165(_0x992671- -0x372,_0x501030,_0x5d3776-'\x30\x78\x31\x32\x36',_0x15370e-'\x30\x78\x62\x66');}function _0x9fe8d3(_0x48db79,_0x5f0709,_0x13f5a9,_0x59aca9){return _0x48f833(_0x48db79-0x1df,_0x13f5a9- -'\x30\x78\x35\x63',_0x59aca9,_0x59aca9-'\x30\x78\x31\x34\x65');}function _0xfce4d5(_0x3cec57,_0x53ffbb,_0x3fcf2b,_0x43f790){return _0x307aa2(_0x3cec57-0xbf,_0x53ffbb-'\x30\x78\x35\x66',_0x3fcf2b-0x1,_0x53ffbb);}function _0x27727b(_0x2c7ade,_0x362740,_0x34fa0b,_0x227c2a){return _0x48f833(_0x2c7ade-'\x30\x78\x31\x30\x63',_0x34fa0b-0x2cb,_0x362740,_0x227c2a-'\x30\x78\x31\x39\x38');}function _0x39b6bd(_0x2f5110,_0x4fe0be,_0x397cc9,_0x1ce017){return _0x23dd1b(_0x2f5110-'\x30\x78\x31\x63\x65',_0x4fe0be,_0x397cc9-0xcc,_0x397cc9- -'\x30\x78\x31\x36\x39');}function _0x35712d(_0x1fae9a,_0x583026,_0x36911a,_0x1762a5){return _0x3250e2(_0x1fae9a-0x10c,_0x1fae9a,_0x36911a- -0x321,_0x1762a5-0xa1);}function _0x33c8c1(_0xb425ea,_0x54e83a,_0x34fea2,_0x4e77d6){return _0x221bf6(_0xb425ea-0xdd,_0x4e77d6-'\x30\x78\x34\x30\x63',_0x34fea2,_0x4e77d6-'\x30\x78\x35\x61');}if(_0x51fa5b['\x70\x61\x4e\x55\x55']===_0xfce4d5('\x30\x78\x62',-0x1,-0x13,-'\x30\x78\x33\x38'))_0xb044c0[_0xfce4d5('\x30\x78\x35\x36','\x30\x78\x33\x39','\x30\x78\x32\x34',0x37)](_0x49f311[_0xfce4d5('\x30\x78\x35\x31','\x30\x78\x64','\x30\x78\x32\x66',0x1b)]);else{const _0x209fc0=_0x51fa5b[_0x35712d(-'\x30\x78\x31\x31\x36',-0x11e,-'\x30\x78\x66\x62',-0x126)](_0x2a814f,_0xb2460c)[_0x3de584(0x577,0x582,'\x30\x78\x35\x61\x31',0x556)](_0x51fa5b[_0x33c8c1('\x30\x78\x34\x34\x33','\x30\x78\x34\x32\x64','\x30\x78\x34\x35\x36','\x30\x78\x34\x35\x34')])[_0x35712d(-0x13a,-0x155,-0x134,-'\x30\x78\x31\x32\x31')](_0x51fa5b[_0xfce4d5(0x5,'\x30\x78\x32\x65',0x25,'\x30\x78\x32\x62')]),_0x22b8a5=_0x2a814f(_0xb2460c)[_0x9fe8d3(-'\x30\x78\x31\x37\x34',-'\x30\x78\x31\x61\x38',-0x18b,-'\x30\x78\x31\x37\x31')](_0x51fa5b[_0x1f8e29('\x30\x78\x32\x32\x64',0x21c,0x25f,'\x30\x78\x32\x34\x61')])['\x61\x74\x74\x72'](_0x51fa5b['\x4b\x77\x72\x77\x4c']),_0x4b4c07=_0x2a814f(_0xb2460c)['\x66\x69\x6e\x64']('\x61')[_0x9fe8d3(-'\x30\x78\x31\x39\x31',-'\x30\x78\x31\x61\x33',-'\x30\x78\x31\x38\x30',-'\x30\x78\x31\x36\x38')](_0x51fa5b[_0x33c8c1('\x30\x78\x34\x33\x37',0x443,'\x30\x78\x34\x35\x30',0x432)]),_0x39b5af=_0x51fa5b[_0x3de584('\x30\x78\x35\x38\x37','\x30\x78\x35\x37\x30','\x30\x78\x35\x62\x31',0x57a)](_0x2a814f,_0xb2460c)[_0x27727b('\x30\x78\x31\x37\x30',0x1b9,'\x30\x78\x31\x39\x63','\x30\x78\x31\x36\x64')](_0x39b6bd(0x287,'\x30\x78\x32\x62\x38',0x2a6,'\x30\x78\x32\x64\x31')+'\x74\x74\x6c\x65\x2d\x74\x69\x6d\x65')[_0x39b6bd('\x30\x78\x32\x39\x35','\x30\x78\x32\x38\x38',0x27f,'\x30\x78\x32\x39\x64')]()[_0x35712d(-'\x30\x78\x65\x33',-0x108,-0x10c,-'\x30\x78\x31\x31\x37')]('\x0a',''),_0x5ede34=_0x4e619b(-'\x30\x78\x31\x37\x35',-'\x30\x78\x31\x38\x31',-'\x30\x78\x31\x35\x39',-'\x30\x78\x31\x61\x63')+_0x9fe8d3(-0x165,-0x186,-'\x30\x78\x31\x35\x35',-'\x30\x78\x31\x37\x31')+_0x39b6bd('\x30\x78\x32\x37\x64','\x30\x78\x32\x61\x64',0x2aa,'\x30\x78\x32\x63\x30'),_0x3772d1={};_0x3772d1[_0x33c8c1(0x40b,'\x30\x78\x34\x31\x32','\x30\x78\x34\x31\x32','\x30\x78\x34\x32\x66')]=_0x209fc0,_0x3772d1[_0x9fe8d3(-'\x30\x78\x31\x36\x63',-0x153,-0x156,-'\x30\x78\x31\x36\x30')]=_0x22b8a5,_0x3772d1[_0x1f8e29('\x30\x78\x32\x30\x37',0x1f3,'\x30\x78\x31\x66\x33','\x30\x78\x31\x65\x36')+'\x65']=_0x39b5af,_0x3772d1[_0x4e619b(-0x1b6,-'\x30\x78\x31\x39\x65',-0x1c5,-0x16e)]=_0x4b4c07,_0x3772d1[_0x3de584('\x30\x78\x35\x39\x63',0x587,'\x30\x78\x35\x38\x39','\x30\x78\x35\x62\x64')]=_0x5ede34,results[_0x3de584(0x5a8,'\x30\x78\x35\x38\x38',0x5a3,'\x30\x78\x35\x61\x31')](_0x3772d1);}});const _0x382ac5={};function _0x278590(_0x3b0254,_0x4eedf8,_0xb103aa,_0xb69ce1){return _0xd684d5(_0x3b0254-0x17a,_0xb69ce1,_0x3b0254-0x1d7,_0xb69ce1-0xe3);}_0x382ac5[_0x307aa2(-'\x30\x78\x32\x34',-'\x30\x78\x32\x61',-0xb,-'\x30\x78\x65')]=results;function _0x326165(_0x31fcdb,_0x343b5a,_0xd3bf85,_0x191faf){return _0x56719b(_0x31fcdb-0x6b0,_0x343b5a-0x1b,_0xd3bf85-0x7c,_0x343b5a);}_0x47ae7e[_0x326165(0x5c9,0x5df,0x5df,'\x30\x78\x35\x39\x39')](_0x382ac5);});}else{if(_0x51fa5b['\x76\x73\x63\x56\x67']===_0x51fa5b['\x4f\x77\x66\x44\x4a']){if(_0x275cf5){const _0x4e0ce0=_0x5f05f6['\x61\x70\x70\x6c\x79'](_0x2a90ac,arguments);return _0x292109=null,_0x4e0ce0;}}else _0x47ae7e[_0x4c373d(0x269,'\x30\x78\x32\x36\x31',0x230,'\x30\x78\x32\x35\x65')](loghandler['\x69\x6e\x76\x61\x6c\x69\x64\x4b\x65\x79']);}});function _0x4a64(){const _0xb911c3=['\x6e\x65\x77\x73','\x4d\x6c\x78\x46\x4e','\x73\x65\x61\x72\x63\x68','\x70\x75\x45\x67\x73','\x53\x55\x77\x71\x42','\x4e\x76\x6d\x74\x43','\x69\x6d\x67','\x6b\x48\x6d\x4c\x79','\x4d\x6a\x69\x41\x45','\x36\x34\x35\x30\x31\x36\x53\x76\x44\x7a\x48\x4b','\x69\x58\x72\x57\x61','\x70\x75\x73\x68','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x72\x65\x70\x6c\x61\x63\x65\x41\x6c\x6c','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x69\x6d\x61\x67\x65','\ua731\x20\u0274\u1d07\u1d21\ua731\x20\u0299\u1d0f\u1d1b','\x33\x38\x37\x73\x70\x72\x4f\x48\x5a','\x32\x38\x37\x33\x34\x31\x30\x31\x61\x52\x51\x4c\x71\x41','\x69\x75\x70\x54\x61','\x66\x50\x4e\x75\x4d','\x63\x6f\x6e\x73\x6f\x6c\x65','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x69\x6e\x66\x6f','\x77\x6a\x6b\x6e\x66','\x64\x71\x47\x4e\x4a','\ud83d\udd10\x20\u1d00\u0274\u1d0f\u0274\u028f\u1d0d\u1d0f\u1d1c','\x6c\x65\x6e\x67\x74\x68','\x57\x6b\x4f\x41\x69','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x51\x6e\x56\x70\x6a','\x74\x77\x4f\x56\x53','\x64\x69\x57\x5a\x64','\x74\x68\x65\x6e','\x31\x35\x31\x32\x37\x35\x36\x4e\x69\x70\x55\x44\x43','\x2e\x6d\x69\x64\x64\x6c\x65\x2d\x74\x69','\x6e\x54\x4f\x44\x45','\x41\x48\x6d\x4a\x52','\x5a\x71\x44\x70\x65','\x20\ud83d\udd10','\x4d\x52\x72\x5a\x42','\x67\x65\x74','\x35\x46\x66\x70\x67\x77\x68','\x65\x72\x72\x6f\x72','\x32\x33\x33\x35\x35\x39\x6d\x51\x57\x49\x4c\x78','\x2e\x73\x65\x63\x74\x69\x6f\x6e\x20\x3e','\x6a\x73\x6f\x6e','\x73\x6a\x79\x75\x56','\x64\x61\x74\x61','\x73\x72\x63','\x74\x61\x62\x6c\x65','\x74\x67\x42\x4b\x4a','\x58\x41\x57\x42\x41','\x44\x6a\x7a\x63\x50','\x2f\x6e\x65\x77\x73','\x63\x59\x75\x6e\x43','\x66\x4e\x50\x59\x74','\x69\x6e\x76\x61\x6c\x69\x64\x4b\x65\x79','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x33\x33\x30\x33\x30\x37\x38\x56\x47\x47\x4f\x69\x44','\x2d\x73\x65\x63\x74\x69\x6f\x6e\x20\x20','\x4f\x76\x6f\x76\x41','\x45\x7a\x75\x72\x51','\x66\x69\x6e\x64','\x77\x2e\x68\x69\x72\x75\x6e\x65\x77\x73','\x61\x70\x69\x6b\x65\x79','\x61\x70\x70\x6c\x79','\x64\x61\x74\x65\x41\x6e\x64\x54\x69\x6d','\x74\x69\x74\x6c\x65','\x61\x6c\x74','\x31\x30\x33\x36\x35\x36\x34\x48\x66\x69\x54\x50\x44','\x51\x67\x59\x4d\x57','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77','\x31\x30\x72\x4f\x79\x69\x75\x52','\x61\x74\x74\x72','\x2e\x6c\x6b\x2f\x6c\x6f\x63\x61\x6c\x2d','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x47\x74\x77\x43\x78','\x59\x6d\x78\x59\x71','\x59\x45\x47\x6c\x56','\x37\x39\x31\x32\x4f\x6c\x57\x69\x72\x65','\x37\x37\x53\x45\x46\x4f\x78\x4f','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x63\x64\x54\x76\x44','\x55\x50\x73\x4b\x6f','\x57\x6b\x59\x4e\x64','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x65\x61\x63\x68','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x3e\x20\x2e\x72\x6f\x77\x20','\x52\x72\x64\x4a\x71','\x42\x62\x45\x6b\x57','\x58\x57\x46\x61\x75','\x45\x41\x4a\x4d\x6d','\x75\x77\x62\x41\x4d','\x62\x69\x6e\x64','\x74\x65\x78\x74','\x52\x65\x61\x64\x4d\x6f\x72\x65','\x20\x2e\x74\x72\x65\x6e\x64\x69\x6e\x67','\x62\x6f\x74'];_0x4a64=function(){return _0xb911c3;};return _0x4a64();}

//end news

function _0xd05a(_0x14cd43,_0x82ffd4){const _0x3d7e6=_0x4cd8();return _0xd05a=function(_0x5db904,_0x5d7182){_0x5db904=_0x5db904-(-0x1f65+-0xd*0x9b+0x2838);let _0x3f08a7=_0x3d7e6[_0x5db904];if(_0xd05a['JLVhGT']===undefined){var _0x452617=function(_0x332a3c){const _0x43fbea='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5309a4='',_0x259564='',_0x76e40e=_0x5309a4+_0x452617;for(let _0x34fb65=-0x320*-0x4+0xbdf+-0x1*0x185f,_0x14c116,_0x2458bc,_0x39812e=0xa8*-0x25+0x67*0x3c+0x3*0xc;_0x2458bc=_0x332a3c['charAt'](_0x39812e++);~_0x2458bc&&(_0x14c116=_0x34fb65%(-0x3a3+0x188b*0x1+-0x2fc*0x7)?_0x14c116*(0x115f*-0x1+0xb*0x3d+-0x5*-0x300)+_0x2458bc:_0x2458bc,_0x34fb65++%(-0x259d+-0x206b+0x460c))?_0x5309a4+=_0x76e40e['charCodeAt'](_0x39812e+(-0x1b9b+-0x47*0x55+0x3338))-(0xa68*-0x1+0x1682+-0xc10)!==-0x1298+0x3*0xc91+0x131b*-0x1?String['fromCharCode'](-0x12cd+-0x199*-0x7+0x89d&_0x14c116>>(-(0x1703+0x28*0x45+-0x21c9)*_0x34fb65&0x13c7+0x1f93+-0x447*0xc)):_0x34fb65:0x6f1+0x1f0a+-0xca9*0x3){_0x2458bc=_0x43fbea['indexOf'](_0x2458bc);}for(let _0x472f21=-0x20b3+0xcbb*0x2+0x73d*0x1,_0x1141c0=_0x5309a4['length'];_0x472f21<_0x1141c0;_0x472f21++){_0x259564+='%'+('00'+_0x5309a4['charCodeAt'](_0x472f21)['toString'](0x2434+-0xd9b+0x1*-0x1689))['slice'](-(0x1d2f+-0x1cf*0x3+0xbe0*-0x2));}return decodeURIComponent(_0x259564);};_0xd05a['KMWAHc']=_0x452617,_0x14cd43=arguments,_0xd05a['JLVhGT']=!![];}const _0x5856fd=_0x3d7e6[0x7*0x397+-0x1bc5*0x1+0x2a4],_0x264287=_0x5db904+_0x5856fd,_0x3a1237=_0x14cd43[_0x264287];if(!_0x3a1237){const _0x402a5f=function(_0xc9fd81){this['ZkNxZh']=_0xc9fd81,this['KyQlbi']=[-0x56*0x8+0x1b8b*0x1+-0x2*0xc6d,0x1213+-0xcdd+-0x536,0x1d84+0x335+0x1*-0x20b9],this['ehxmZV']=function(){return'newState';},this['NgwluF']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['SvJUEy']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x402a5f['prototype']['OToiXQ']=function(){const _0x3e6492=new RegExp(this['NgwluF']+this['SvJUEy']),_0x3f49bc=_0x3e6492['test'](this['ehxmZV']['toString']())?--this['KyQlbi'][-0x1fdb*0x1+-0x1*0x9ed+0x29c9]:--this['KyQlbi'][0x1b3d+0x3*-0x62f+-0x8b0];return this['ZlBcxt'](_0x3f49bc);},_0x402a5f['prototype']['ZlBcxt']=function(_0x2cc7f6){if(!Boolean(~_0x2cc7f6))return _0x2cc7f6;return this['DbIiBI'](this['ZkNxZh']);},_0x402a5f['prototype']['DbIiBI']=function(_0x366af9){for(let _0x46816a=0x1697+0xdf4+-0x248b*0x1,_0x59e3e2=this['KyQlbi']['length'];_0x46816a<_0x59e3e2;_0x46816a++){this['KyQlbi']['push'](Math['round'](Math['random']())),_0x59e3e2=this['KyQlbi']['length'];}return _0x366af9(this['KyQlbi'][-0x18e8+0x21b3+-0x8cb*0x1]);},new _0x402a5f(_0xd05a)['OToiXQ'](),_0x3f08a7=_0xd05a['KMWAHc'](_0x3f08a7),_0x14cd43[_0x264287]=_0x3f08a7;}else _0x3f08a7=_0x3a1237;return _0x3f08a7;},_0xd05a(_0x14cd43,_0x82ffd4);}(function(_0x46bc64,_0x16e098){function _0x1c2de2(_0x24750b,_0x31be78,_0xecb046,_0x34ab0d){return _0xd05a(_0x34ab0d-0x327,_0x31be78);}function _0x5f01ff(_0x1d0104,_0x4dae27,_0x3287f3,_0x509366){return _0xd05a(_0x509366- -0x221,_0x4dae27);}function _0x358426(_0x1cef90,_0xb6d16e,_0x44c073,_0x2769c9){return _0x481c(_0x2769c9-0x71,_0xb6d16e);}const _0x108187=_0x46bc64();function _0x24cdb6(_0x5aa838,_0x5ca21e,_0x5d9bfe,_0x360bb1){return _0x481c(_0x5aa838-0x23d,_0x5d9bfe);}while(!![]){try{const _0x1ab5a9=parseInt(_0x24cdb6(0x3ca,0x431,'knpN',0x3c6))/(-0x1*0x178d+-0x1*0x191b+0x30a9)*(parseInt(_0x1c2de2(0x4b3,0x510,0x486,0x4d2))/(-0xdb5+-0x1af3+0x28aa))+-parseInt(_0x5f01ff(-0xec,-0x10f,-0xdc,-0x101))/(0x8e7*0x4+-0x172+0x1*-0x2227)*(-parseInt(_0x5f01ff(-0xd0,-0x11d,-0xe7,-0x114))/(-0x2*0xb3+0x217e+0x4*-0x805))+parseInt(_0x1c2de2(0x496,0x512,0x4eb,0x4c7))/(-0x1441+-0x3f*-0x38+0x67e)+-parseInt(_0x358426(0x13b,'Bc7f',0x117,0x179))/(0xbfb*-0x2+0xe34+0x9c8)*(parseInt(_0x5f01ff(-0xd,-0x63,-0x34,-0x4b))/(-0x50e*-0x2+-0x2705+0x39e*0x8))+parseInt(_0x1c2de2(0x4cc,0x4f3,0x4d5,0x4a7))/(0xd89+0x11b5+-0x1f36)+-parseInt(_0x358426(0x1b7,'@e)1',0x182,0x1ef))/(0x2b9*-0x6+0x1d6d+0x687*-0x2)+-parseInt(_0x1c2de2(0x440,0x47a,0x4be,0x4a9))/(0x1ef8+-0x793*0x1+-0x175b);if(_0x1ab5a9===_0x16e098)break;else _0x108187['push'](_0x108187['shift']());}catch(_0x3678ef){_0x108187['push'](_0x108187['shift']());}}}(_0x4cd8,0x321f9*-0x2+0x116a*-0x53+0x133717*0x1));function _0x481c(_0x48ade2,_0x3d2ad1){const _0x55850b=_0x4cd8();return _0x481c=function(_0x51407b,_0x393268){_0x51407b=_0x51407b-(-0x1f65+-0xd*0x9b+0x2838);let _0x24b970=_0x55850b[_0x51407b];if(_0x481c['kWVgnl']===undefined){var _0x285bf6=function(_0x360be3){const _0x358d77='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x23376f='',_0x1cb269='',_0x22eb4c=_0x23376f+_0x285bf6;for(let _0x55c988=-0x320*-0x4+0xbdf+-0x1*0x185f,_0x254a2f,_0x2a91bf,_0x207c43=0xa8*-0x25+0x67*0x3c+0x3*0xc;_0x2a91bf=_0x360be3['charAt'](_0x207c43++);~_0x2a91bf&&(_0x254a2f=_0x55c988%(-0x3a3+0x188b*0x1+-0x2fc*0x7)?_0x254a2f*(0x115f*-0x1+0xb*0x3d+-0x5*-0x300)+_0x2a91bf:_0x2a91bf,_0x55c988++%(-0x259d+-0x206b+0x460c))?_0x23376f+=_0x22eb4c['charCodeAt'](_0x207c43+(-0x1b9b+-0x47*0x55+0x3338))-(0xa68*-0x1+0x1682+-0xc10)!==-0x1298+0x3*0xc91+0x131b*-0x1?String['fromCharCode'](-0x12cd+-0x199*-0x7+0x89d&_0x254a2f>>(-(0x1703+0x28*0x45+-0x21c9)*_0x55c988&0x13c7+0x1f93+-0x447*0xc)):_0x55c988:0x6f1+0x1f0a+-0xca9*0x3){_0x2a91bf=_0x358d77['indexOf'](_0x2a91bf);}for(let _0xfa154d=-0x20b3+0xcbb*0x2+0x73d*0x1,_0x34db81=_0x23376f['length'];_0xfa154d<_0x34db81;_0xfa154d++){_0x1cb269+='%'+('00'+_0x23376f['charCodeAt'](_0xfa154d)['toString'](0x2434+-0xd9b+0x1*-0x1689))['slice'](-(0x1d2f+-0x1cf*0x3+0xbe0*-0x2));}return decodeURIComponent(_0x1cb269);};const _0x4bec82=function(_0x3622d7,_0x44fe37){let _0x22a763=[],_0x45b77e=0x7*0x397+-0x1bc5*0x1+0x2a4,_0x55b69c,_0x29a1c3='';_0x3622d7=_0x285bf6(_0x3622d7);let _0x20a539;for(_0x20a539=-0x56*0x8+0x1b8b*0x1+-0x3f*0x65;_0x20a539<0x1213+-0xcdd+-0x436;_0x20a539++){_0x22a763[_0x20a539]=_0x20a539;}for(_0x20a539=0x1d84+0x335+0x1*-0x20b9;_0x20a539<-0x1fdb*0x1+-0x1*0x9ed+0x2ac8;_0x20a539++){_0x45b77e=(_0x45b77e+_0x22a763[_0x20a539]+_0x44fe37['charCodeAt'](_0x20a539%_0x44fe37['length']))%(0x1b3d+0x3*-0x62f+-0x7b0),_0x55b69c=_0x22a763[_0x20a539],_0x22a763[_0x20a539]=_0x22a763[_0x45b77e],_0x22a763[_0x45b77e]=_0x55b69c;}_0x20a539=0x1697+0xdf4+-0x248b*0x1,_0x45b77e=-0x18e8+0x21b3+-0x8cb*0x1;for(let _0x387138=-0x1607+0x205d*-0x1+0x3664;_0x387138<_0x3622d7['length'];_0x387138++){_0x20a539=(_0x20a539+(-0x2388+0x2*0x10a7+0x23b*0x1))%(-0xa3*0xd+-0x20fc+0x1f*0x15d),_0x45b77e=(_0x45b77e+_0x22a763[_0x20a539])%(-0x18ef+0x18*0x90+0xc6f),_0x55b69c=_0x22a763[_0x20a539],_0x22a763[_0x20a539]=_0x22a763[_0x45b77e],_0x22a763[_0x45b77e]=_0x55b69c,_0x29a1c3+=String['fromCharCode'](_0x3622d7['charCodeAt'](_0x387138)^_0x22a763[(_0x22a763[_0x20a539]+_0x22a763[_0x45b77e])%(-0x53*-0x11+0x959*0x2+-0x1735)]);}return _0x29a1c3;};_0x481c['HsvnuS']=_0x4bec82,_0x48ade2=arguments,_0x481c['kWVgnl']=!![];}const _0xb5c7f2=_0x55850b[0x10*0x211+0xd3a*-0x1+-0x13d6],_0x26e36e=_0x51407b+_0xb5c7f2,_0x5ce476=_0x48ade2[_0x26e36e];if(!_0x5ce476){if(_0x481c['vMvZjg']===undefined){const _0x410edc=function(_0x5cdf29){this['KRMROo']=_0x5cdf29,this['dGjhdi']=[0x1262+0x4*0x2f3+-0x1e2d,0x9a3+-0x1172+0x7cf,0x954+-0x1e*-0xb1+-0x1e12],this['mGhnZe']=function(){return'newState';},this['GbkCSr']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['upuDul']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x410edc['prototype']['btyeFW']=function(){const _0x42547d=new RegExp(this['GbkCSr']+this['upuDul']),_0x3262ae=_0x42547d['test'](this['mGhnZe']['toString']())?--this['dGjhdi'][-0x798+0x69d+0x1c*0x9]:--this['dGjhdi'][-0xdd3+0x2102+-0x132f];return this['WozUQP'](_0x3262ae);},_0x410edc['prototype']['WozUQP']=function(_0x4ae374){if(!Boolean(~_0x4ae374))return _0x4ae374;return this['VMrMpP'](this['KRMROo']);},_0x410edc['prototype']['VMrMpP']=function(_0x4a784c){for(let _0x3bee0a=0x140d+-0x1be5+0x7d8,_0x45baad=this['dGjhdi']['length'];_0x3bee0a<_0x45baad;_0x3bee0a++){this['dGjhdi']['push'](Math['round'](Math['random']())),_0x45baad=this['dGjhdi']['length'];}return _0x4a784c(this['dGjhdi'][-0x101*-0x11+-0x1f73+0xe62]);},new _0x410edc(_0x481c)['btyeFW'](),_0x481c['vMvZjg']=!![];}_0x24b970=_0x481c['HsvnuS'](_0x24b970,_0x393268),_0x48ade2[_0x26e36e]=_0x24b970;}else _0x24b970=_0x5ce476;return _0x24b970;},_0x481c(_0x48ade2,_0x3d2ad1);}const _0x437b5e=(function(){function _0x4aa7de(_0x38ee03,_0x534abf,_0x4cceab,_0x251189){return _0x481c(_0x38ee03-0x2b0,_0x534abf);}const _0x5c612a={'HInEh':function(_0x2444bb,_0x2a6a08){return _0x2444bb===_0x2a6a08;},'LNswZ':_0x4322ce(-0x1df,-0x231,-0x1c1,-0x1c3),'ZUgIn':function(_0x47302f,_0x4ba824){return _0x47302f(_0x4ba824);},'eOQIm':function(_0x1e0f13,_0x51dc5a,_0x16827d){return _0x1e0f13(_0x51dc5a,_0x16827d);},'AgJbv':'img','wDWUP':_0x4322ce(-0x14a,-0x113,-0x158,-0x1ad)+_0x4322ce(-0x187,-0x15b,-0x14f,-0x1e7)+_0x4322ce(-0x138,-0xd3,-0x15e,-0xf6),'KtBha':_0x4aa7de(0x447,'XpoL',0x48b,0x405)+_0x4aa7de(0x410,'Jc7g',0x475,0x44e)+_0xc0862(0x545,0x541,0x4f6,'fi68'),'OhOKa':_0x4322ce(-0x1fa,-0x1a4,-0x261,-0x25d)+_0xc0862(0x51d,0x4ed,0x498,'EsxU')+'.lk/','kQtdb':function(_0xe63c7f,_0x5bd696){return _0xe63c7f!==_0x5bd696;},'rkxcS':_0x4322ce(-0x1a7,-0x19c,-0x19f,-0x17b)};function _0xc0862(_0x4b1527,_0x42cf58,_0x536497,_0x511835){return _0x481c(_0x42cf58-0x397,_0x511835);}function _0x5e86b3(_0x4d997a,_0xc34bf6,_0x2ae4b2,_0xbb2c01){return _0xd05a(_0x4d997a- -0x2bc,_0x2ae4b2);}let _0x51c946=!![];function _0x4322ce(_0x1c5d79,_0x435540,_0x2ace06,_0x552a56){return _0xd05a(_0x1c5d79- -0x304,_0x552a56);}return function(_0x162087,_0x557549){function _0x50e8e1(_0x2ca0a2,_0x3ce246,_0x169564,_0x40721f){return _0x4aa7de(_0x2ca0a2- -0x119,_0x169564,_0x169564-0x15,_0x40721f-0x1ee);}function _0x2dd0d5(_0x2ac999,_0x4aad41,_0x468a44,_0x2bbea9){return _0x4aa7de(_0x2bbea9- -0x3fd,_0x2ac999,_0x468a44-0x4f,_0x2bbea9-0xaf);}function _0x2591e7(_0x4e49ce,_0x28d670,_0x5e1d2f,_0xb5520f){return _0x5e86b3(_0x28d670-0x46f,_0x28d670-0x7f,_0x5e1d2f,_0xb5520f-0x87);}function _0x488fcc(_0x36805a,_0x5d8b9c,_0x75f0f0,_0x13172e){return _0x5e86b3(_0x13172e-0x1a9,_0x5d8b9c-0x14a,_0x5d8b9c,_0x13172e-0x169);}const _0x2035df={'yNdES':function(_0x498a98,_0x4e9d01){function _0x2653be(_0x3e2035,_0x12843a,_0x1268b7,_0xef38c0){return _0x481c(_0xef38c0-0xa2,_0x3e2035);}return _0x5c612a[_0x2653be('7OR1',0x1db,0x168,0x1d8)](_0x498a98,_0x4e9d01);},'lLUmU':function(_0x21c512,_0x3820d9,_0x4a06dc){function _0x13e1b3(_0x35eb38,_0x1d2159,_0x2e241a,_0x50bc6b){return _0xd05a(_0x2e241a-0x178,_0x50bc6b);}return _0x5c612a[_0x13e1b3(0x345,0x31c,0x2e1,0x2d8)](_0x21c512,_0x3820d9,_0x4a06dc);},'nKzqC':_0x5c612a[_0x488fcc(0x9f,0x9,0xbf,0x79)],'cneik':function(_0x2d2558,_0x5913fd){return _0x5c612a['ZUgIn'](_0x2d2558,_0x5913fd);},'XPixL':_0x5c612a['wDWUP'],'GMBMM':_0x5c612a[_0x2dd0d5('yzmo',0x69,0x7e,0x5c)],'guNMq':_0x5c612a[_0x2dd0d5('oI#y',0x35,-0x43,0x11)]};if(_0x5c612a[_0x2dd0d5('(9fh',-0x1,0x1,0xe)](_0x5c612a['rkxcS'],_0x488fcc(-0x25,0x82,0x9e,0x4a))){const _0xf14e61=_0x18be7e['apply'](_0x3d5657,arguments);return _0xc84788=null,_0xf14e61;}else{const _0x30b799=_0x51c946?function(){function _0x5e2172(_0x43b873,_0xee64f2,_0x20fb80,_0x3a84f3){return _0x2dd0d5(_0x3a84f3,_0xee64f2-0x102,_0x20fb80-0x7a,_0x43b873-0x528);}function _0x59afdb(_0x3beb12,_0x2420ba,_0x1ceb74,_0x3761fb){return _0x2dd0d5(_0x3761fb,_0x2420ba-0x6,_0x1ceb74-0x18e,_0x1ceb74-0x2f2);}function _0x3d0c47(_0x5c6aa7,_0x5506c9,_0x1130e3,_0x260b60){return _0x2591e7(_0x5c6aa7-0x19d,_0x260b60- -0x53d,_0x5506c9,_0x260b60-0x61);}function _0x529895(_0x1921da,_0x460b6,_0x163f1e,_0x432d62){return _0x488fcc(_0x1921da-0x9c,_0x460b6,_0x163f1e-0x125,_0x1921da-0x41f);}if(_0x5c612a[_0x529895(0x400,0x3ed,0x3ce,0x3e2)](_0x5c612a[_0x529895(0x480,0x474,0x4be,0x4d3)],_0x5c612a['LNswZ'])){if(_0x557549){const _0x52ba18=_0x557549[_0x3d0c47(-0x21d,-0x19c,-0x1b6,-0x1c4)](_0x162087,arguments);return _0x557549=null,_0x52ba18;}}else{const _0x154a51={'xwEUF':function(_0x18dd12,_0x5f55d0){function _0x5b1a8c(_0x489494,_0x235d8a,_0x4ec562,_0x34a506){return _0x481c(_0x235d8a-0x348,_0x489494);}return _0x2035df[_0x5b1a8c('w689',0x49d,0x4cf,0x455)](_0x18dd12,_0x5f55d0);},'IujOP':_0x5e2172(0x4d1,0x47a,0x520,'V*7D'),'OAWim':function(_0x5a265a,_0x1aa402,_0x8839af){function _0x488f87(_0x50dc5e,_0x54a664,_0x15e761,_0x2199c7){return _0x5e2172(_0x15e761- -0x1d5,_0x54a664-0x149,_0x15e761-0x1cb,_0x2199c7);}return _0x2035df[_0x488f87(0x30b,0x325,0x32f,'Bc7f')](_0x5a265a,_0x1aa402,_0x8839af);},'sAoVb':'.middle-sm'+'-topic','LrsCE':_0x2035df[_0x529895(0x45b,0x402,0x4c8,0x40f)],'gGTro':'data-src','kZdiO':function(_0x5bd3ba,_0x2cdc93){function _0x2785af(_0x3c328a,_0x24d604,_0x1e310b,_0x424bfc){return _0x5e2172(_0x1e310b- -0x531,_0x24d604-0xc4,_0x1e310b-0xa8,_0x424bfc);}return _0x2035df[_0x2785af(0x3d,-0x4d,-0x4,'B@!h')](_0x5bd3ba,_0x2cdc93);},'LItQT':_0x59afdb(0x350,0x397,0x363,'Qr#Z')+_0x59afdb(0x2a3,0x2cd,0x2c6,'H3es')+'tittle-tim'+'e','ucNGD':_0x2035df[_0x5e2172(0x523,0x4fb,0x4b3,'EsxU')],'bwlRC':_0x2035df[_0x5e2172(0x4de,0x4d1,0x497,'@e)1')]},_0x2bce59=_0x2035df[_0x5e2172(0x563,0x56f,0x5b1,'aPUR')];_0x472f21[_0x3d0c47(-0x2d1,-0x2d7,-0x230,-0x264)](_0x2bce59)[_0x529895(0x4d3,0x491,0x526,0x50b)](_0x1bb92e=>{_0x2cc7f6=[];function _0x656c03(_0x48204f,_0x21cf4d,_0x305850,_0x3b1a16){return _0x529895(_0x48204f- -0xd7,_0x3b1a16,_0x305850-0x165,_0x3b1a16-0x95);}function _0x4af1bb(_0x51600f,_0x4d7b20,_0x58f286,_0x108baa){return _0x5e2172(_0x51600f- -0x23b,_0x4d7b20-0x6c,_0x58f286-0x171,_0x58f286);}const _0x37a876=_0x366af9['load'](_0x1bb92e['data']);_0x154a51[_0x40470b(-0x234,'0V&v',-0x1e4,-0x208)](_0x37a876,_0x154a51[_0x656c03(0x3ff,0x3e0,0x3e6,0x3ff)])[_0x4af1bb(0x29e,0x303,'V9Hj',0x27e)]((_0x1aaad6,_0x2e0b3a)=>{const _0x3738b3=_0x154a51[_0x13b6c9('iUL^',0x19c,0x14c,0x141)](_0x37a876,_0x2e0b3a)[_0x43b7cc(-0x270,-0x287,-0x23a,-0x243)]('a')[_0x2f45f6('(9fh',0x1ad,0x1d0,0x20d)](_0x154a51[_0x43b7cc(-0x31e,-0x2f1,-0x2f1,-0x31f)]);function _0x2f45f6(_0xe27338,_0x201fb8,_0x867cfc,_0x151529){return _0x40470b(_0xe27338-0x98,_0xe27338,_0x867cfc-0x1a0,_0x151529-0x402);}const _0x287f5a=_0x154a51['OAWim'](_0x37a876,_0x2e0b3a,_0x154a51[_0x13b6c9('Jc7g',0xb1,0x123,0x15e)])['text']()[_0x13b6c9('d8KA',0x11a,0x169,0x1ce)](_0x13b6c9('iUL^',0xf3,0x13e,0x14b)+'.','');function _0x43b7cc(_0x7f7ea7,_0x11b5a8,_0x291244,_0x54f31f){return _0x656c03(_0x11b5a8- -0x61d,_0x11b5a8-0x59,_0x291244-0xfa,_0x291244);}const _0x5910af=_0x154a51[_0x1e72b8(-0x132,-0x158,-0x105,-0x109)](_0x37a876,_0x2e0b3a)[_0x43b7cc(-0x22a,-0x287,-0x29f,-0x297)](_0x154a51[_0x2f45f6('XpoL',0x1e0,0x1b2,0x206)])['attr'](_0x154a51[_0x2f45f6('jO]G',0x248,0x1f4,0x227)]),_0x28ca51=_0x154a51['kZdiO'](_0x37a876,_0x154a51['LItQT'])[_0x13b6c9('Q*4a',0x1be,0x16d,0x1c9)]()['replace']('\x0a','')[_0x43b7cc(-0x2c2,-0x27a,-0x281,-0x29f)]('\x0a',''),_0x1f0876=_0x154a51[_0x43b7cc(-0x2a4,-0x2d2,-0x2b4,-0x26c)],_0x294e5f={};_0x294e5f[_0x13b6c9('0V&v',0x184,0x15e,0x11e)]=_0x3738b3,_0x294e5f[_0x2f45f6('SJ5m',0x1e1,0x1bd,0x1bc)]=_0x287f5a;function _0x1e72b8(_0x3f71c6,_0x25ac45,_0x57a3c4,_0x2c1879){return _0x656c03(_0x25ac45- -0x4ac,_0x25ac45-0x163,_0x57a3c4-0x17d,_0x57a3c4);}function _0x13b6c9(_0x20769d,_0x5ab433,_0x1babf7,_0x479839){return _0x4af1bb(_0x1babf7- -0x172,_0x5ab433-0x163,_0x20769d,_0x479839-0x135);}_0x294e5f['type']=_0x5910af,_0x294e5f[_0x43b7cc(-0x21d,-0x267,-0x230,-0x21f)]=_0x28ca51,_0x294e5f['bot']=_0x1f0876,_0x3b394d['push'](_0x294e5f);});const _0x2347c4={};_0x2347c4['news']=_0x141131;function _0x40470b(_0x2f7362,_0x3e598a,_0x2243d1,_0x569f0e){return _0x59afdb(_0x2f7362-0xdc,_0x3e598a-0xc8,_0x569f0e- -0x534,_0x3e598a);}_0x59e3e2[_0x4af1bb(0x2da,0x34b,'3T20',0x328)](_0x2347c4);});}}:function(){};return _0x51c946=![],_0x30b799;}};}()),_0x3e2d7c=_0x437b5e(this,function(){function _0x13871a(_0x3ff0e9,_0x5765c9,_0x1eceff,_0x13aebe){return _0x481c(_0x5765c9-0x29d,_0x3ff0e9);}function _0x30c3f9(_0x3a1991,_0x7a8145,_0x2e3444,_0xa5f44b){return _0xd05a(_0x7a8145-0x390,_0x3a1991);}const _0x4f0edf={};function _0x4106e4(_0x343ba5,_0x21091c,_0x4d47bd,_0x409fc8){return _0xd05a(_0x409fc8-0x3cf,_0x4d47bd);}_0x4f0edf[_0x1c9911(-0x5a,'B@!h',-0x9b,0x17)]=_0x4106e4(0x4d5,0x4a7,0x500,0x4f3)+'+$';function _0x1c9911(_0x1bd19e,_0x38eaea,_0x34ce58,_0x5a1dd8){return _0x481c(_0x1bd19e- -0x1fd,_0x38eaea);}const _0x5b1a3b=_0x4f0edf;return _0x3e2d7c[_0x1c9911(-0x82,'MCGm',-0xe1,-0xb6)]()[_0x1c9911(-0x58,'CP##',-0x2b,-0x37)](_0x1c9911(-0x59,'RlHq',-0x64,-0x3c)+'+$')[_0x30c3f9(0x566,0x548,0x54e,0x566)]()[_0x30c3f9(0x48d,0x4aa,0x462,0x516)+'r'](_0x3e2d7c)[_0x4106e4(0x58d,0x54f,0x4e8,0x534)](_0x5b1a3b[_0x13871a('zNOA',0x444,0x413,0x439)]);});function _0x4cd8(){const _0x408f1b=['W5OcW6DZWO9/','W69VC2nD','yLLHtfO','rchcKmkt','r8kzW6dcHgi','wSo7pJORW4tdIY/cPLu','uhj5wMK','jW3cRxi','lM1PzgrSzs1ZBq','qSkbWPRcGW','WRxdVNqp','BCk0aSkZggxcUSot','o8oTW4fZCW','lmkPtSkNnq','yvzTB1O','BCkOW7OJCWvaWPxdGSoQ','CWBcISkata','ANnVBG','WP1xBSo3bG','BKT6Cum','umkAWPxcHmo9','WOyKBZDo','W7OqACoEWP0','jmkXocObW7JcUmoWCSk0','Dgv4Da','D8kjW7avva','fmktW4bItCoIWP/dH8orhG','DSkTu8kVnhDmymkrmW','vIFcSCkgyW','W7GQW64','oGy2W5FdPG','f04hW45d','EKf0AMG','thnnvxC','WQbtvCoucW','zSkYW5xcNMBdOre','xCk5xaySlmkzWOVcMmkf','zMLUza','WRzCcmkaeYVcJLLjW5a','DgLJBguGlNjVDW','eKJdImkMsq','C2vHCMnO','iSoCW7NdOYC','ymk0gmkWfNVcVG','WPVdTHelWQddJCklkSoNnq','zu9rsw0','lMXRlW','BCkQWOlcQmoG','W73dTSoiyNi','W7reth1Y','CMvWBgfJzq','fSkvw8kAgW','W6VdIKS','WOzwFq','ASoygc9l','fhddNCkl','te5ZD1O','kWlcQhu','dSo2W557rq','ChvZAa','WQPop8kgWQtcTmkOW7BdLL4','q0jmrXK','iNtdImkom8o7WQ1yW4hdNG','W7pdIN9BW5tcOqGZ','WOaJoY9dwmk0tuVcLq','6PYXimM04Bsh4BsH6PYXimQz4Bsp4BsB','W4ZcRu1aW63cJ8k2eCo0guBdMW','hNyDW44','ndCZodu2CLHqrxbU','zgf0zq','mtu2otqWmgjYuuHmEa','WQJdQemIW4C','rvzPEgG','dtCsW4NdPW','yM90','oHVcI09P','WRrgzSoJbW','EwHwtwW','WRvbWQqYWPW','WP3dQW0xWQy','qwDkyNy','WRXNasGUWOr7','AuzOAfO','CxvLCNK','tvHpBMm','6P2UWOZkI+g0GUg2UoQDT8kLYjdHT5VHTQy','W5pdLG4','W45gW5/cRaK','wePfwM8','dCouW6fDtq','EMDXzKS','WQXzW4xcIYJdT8ozWQhdTrq','W78SW6X8WRK','wCkLtai','hwShW5G','Bg9Hza','D2TsCLe','AmkRW55PW5y','imoGWPBdIJlcTazrxCkAWOxcNW','dmoJW47dGJu','mJCWntmXnwr2y2Lpsa','ba7cUML2','W5bXjmoA','W6KxtSouWPa','WRXTWQhdNmoQzSkihJ9j','v8knWPxcLCo7WOK','rSolaSkcW6Xgy8kL','l8ofWR1MW78','C8kYW5e','z0nRFZK','WPzjW6P7WPC6W7ugd0u','nti0odm4z3rPs0X1','kmkTzcC','rc3cNmktzc9tWO/cTca','WQHobSongt3dKfTFWOG','CMv0DxjUicHMDq','WOFdI8oAW69g','ymk+W5hcHMVdP1L9zmkY','zw8GlMv4lxzKlq','sfnPAwS','WOZdP8oSW69/','W7CQW6FcGCkUi8og','W47cUCoSfsi','t1jTDLK','Dg9tDhjPBMC','vhvvBxG','8j+uKcdHTidjTog0J8M0YO/HTi3HTi/HTjW','W4xdKa7dKmoH','Aw1N','CXJcUgO','AY3dNrnIbCkEWOPUgW','W7yQW70','BMv3CW','AhjLzG','lM1PzgrSzs1HCG','ic5JB2WTBwqTnG','B1bdwxC','W6ldLMBcHSk+','yxbWBhK','DgHLBG','A2z6qvu','W79WeaumWRvk','yNDSuKm','j8oVWPhdHgxdPqvdASkx','ipcFLja','lmkLqSk/','W43cMSoQcs0','wxzJDMy','eNJdH8ko','W7/WVisl','BMn0Aw9UkcKG','r8kCWPVcLCkWW4n1CSovW6m','WQJdKt45WQe','x8osemk3W5O','mZaZmvjpBergvW','WPnTWOyzWONdJmoq','W4RdILlcU8kydSokEa','seLUrwG','wSkrudWR','WOddHc7cSq','sxvQt1a','DhLWzq','WQRdR8k2vhZcJSoszW0GWOLZ','W7aKW73cLW','y29UC29Szq','v3HfugW','BmkLW7fj','x8kgW7GR','DgL0DgXLlxrPBq','W4xdSaWhdW','DY5OAxj1BMv3CW','yMLUza','WR/dLd01WPK','zgf0yq','lCkPzIupW7xcRG','W6mOW6brWRe','WQ3dGComW7nd','WQazmwRcL1RdM8ozdSo5','lxrVCgLJ','Ahr0Chm6lY93DW','uMXvzwK','DK1XCxG','ntzJyMnbvLq','k8olW4JdHd8','D8kIbSkM','A8oQmcWJWQVdLJJcTW4','8k62JCow4BsGYBZHT4BjHCIL4Bsl4BEB4Bs2','W4qjWQLGWPn+W6Tac1S','r3fOzLG','W6TAW4RcGa','Aw52ywXPzeTLEq','Dwnor0q','W6/dJaiyka','W6DovIJcH1tdHmo0','DgfIBgu','y29UC3rYDwn0BW','fmkkW7iNaI0OWRNdU8ko','W7pdJuLb','x19WCM90B19F','qCo4fb1f','EhDfvuy','mJeZntrlvfrLBg0','fx7cICoeDSooW69CW4ddNq','W7tdVbJdLCox','lNrVzgf5lxzPza','kcGOlISPkYKRkq','Dhb0vxu','z2v0','yxr0CG','nmo4WOzmACkQva','W79TudhcOa','rvHZwuC','zhnxCeK','zxjYB3i','l2HPCNu','WOe7sJn7','vmonp8ks','lGxcOhe','D8k4W4VcGwJdRHe','uMvHzcbnB3jLlG','AMngEfi','zwfJAa','W4JdQcCH','W6xdNdigcq','BgvUz3rO','W50kkCkQxN7cKbiyWOuW','W6XrW5VcNa','lmoUWPLo','W6JdG8ojveSVsG'];_0x4cd8=function(){return _0x408f1b;};return _0x4cd8();}_0x3e2d7c();function _0x2b35d6(_0x3f1112,_0x5ce588,_0xbb0d84,_0x11f0e6){return _0xd05a(_0x3f1112- -0x11d,_0x11f0e6);}const _0x22c2b8=(function(){function _0x2beac1(_0x146ab4,_0xa614af,_0x4912c7,_0x549e58){return _0xd05a(_0x146ab4-0x297,_0xa614af);}function _0x318308(_0x3c4005,_0x887498,_0x2310e1,_0x46378c){return _0x481c(_0x887498- -0x26a,_0x2310e1);}const _0x151ff8={'hgAKa':function(_0x3f7e19,_0x3cd571){return _0x3f7e19===_0x3cd571;},'EEVGA':_0x318308(-0x105,-0xe5,'hn@n',-0xa8),'lkbrV':_0x318308(-0x123,-0xcb,'ve4F',-0xae),'SWIgH':_0x2beac1(0x3e1,0x3c0,0x3a9,0x38b),'mvAAD':function(_0x3ca238,_0x20f105){return _0x3ca238(_0x20f105);},'mKvpz':_0x3ebb43(-0x9f,-0x70,-0xc0,'SJ5m')+'ticle\x20.row'+_0x5208b3(-0x16c,-0x19f,-0x1a0,-0x1ab),'EEbiS':_0x5208b3(-0x1b0,-0x21b,-0x1b4,-0x1ad),'hdzSq':_0x3ebb43(-0xcc,-0xd3,-0xfc,'V9Hj')+_0x5208b3(-0x24e,-0x29b,-0x251,-0x265),'WxEPl':'🔐\x20ᴀɴᴏɴʏᴍᴏᴜ'+_0x3ebb43(-0xbf,-0x82,-0x86,'zNOA')+_0x318308(-0x60,-0x99,'IFJ4',-0xcf),'kfzAU':_0x3ebb43(-0x103,-0x90,-0x9e,'yzmo')};function _0x3ebb43(_0x4eeedc,_0x54e4f7,_0x5348ef,_0x823d61){return _0x481c(_0x5348ef- -0x217,_0x823d61);}let _0x33ac10=!![];function _0x5208b3(_0x9dcc40,_0x246832,_0x286c8e,_0x48efa6){return _0xd05a(_0x48efa6- -0x36e,_0x9dcc40);}return function(_0x17ae45,_0x4fbae5){const _0x7b22b1={'cWRzA':_0x151ff8[_0x24d7b3('#x%C',0x2dc,0x272,0x2cb)],'RlUei':_0x151ff8['hdzSq'],'yhVMl':_0x5a6e35(0x45,0xe,-0x14,-0x77)+'.','Qdnym':'data-src','wkRrQ':'.today-vid'+_0x24d7b3('aPUR',0x325,0x2f8,0x30b)+_0x24d7b3('Q*4a',0x331,0x3bf,0x356)+'e','HSiik':_0x151ff8[_0x5dd477(0x1b1,0x1ae,0x13e,0x117)],'JOQgB':function(_0x3d0c3d,_0x23382e){return _0x3d0c3d(_0x23382e);},'gPqZX':function(_0x56694c,_0x2e8655,_0x4e57cd){return _0x56694c(_0x2e8655,_0x4e57cd);},'niIVr':function(_0x3ae4d8,_0x15ea6c){return _0x3ae4d8(_0x15ea6c);}};function _0x4ea6b3(_0x4ebccb,_0xd99d0e,_0x1d6b87,_0x871a6b){return _0x3ebb43(_0x4ebccb-0x48,_0xd99d0e-0xa5,_0xd99d0e- -0x115,_0x871a6b);}function _0x5a6e35(_0x1d1904,_0x5a98a3,_0x533183,_0x5cc49c){return _0x5208b3(_0x5a98a3,_0x5a98a3-0x19c,_0x533183-0x150,_0x533183-0x228);}function _0x24d7b3(_0x1d883f,_0x5595e2,_0x17629d,_0x240c0f){return _0x318308(_0x1d883f-0xe7,_0x240c0f-0x413,_0x1d883f,_0x240c0f-0x107);}function _0x5dd477(_0x4bba1a,_0x571129,_0x38f9c8,_0x1559c3){return _0x5208b3(_0x4bba1a,_0x571129-0x143,_0x38f9c8-0x26,_0x38f9c8-0x3b0);}if(_0x151ff8[_0x4ea6b3(-0x283,-0x21e,-0x26a,'ve4F')](_0x151ff8[_0x5a6e35(0xc3,0x7b,0x82,0x52)],_0x151ff8[_0x5a6e35(0x94,0x6e,0x82,0xc2)])){const _0xbb4970=_0x33ac10?function(){function _0x1c7829(_0x564ed8,_0x384562,_0x3d943f,_0x579186){return _0x4ea6b3(_0x564ed8-0x9e,_0x3d943f-0x37,_0x3d943f-0x197,_0x384562);}function _0x81904e(_0x1837b3,_0x107448,_0x2b865,_0x3d12c6){return _0x5a6e35(_0x1837b3-0xbb,_0x3d12c6,_0x2b865- -0x199,_0x3d12c6-0x1ae);}function _0x70898b(_0x3e52f9,_0x21be2d,_0x1eda08,_0x2a6a04){return _0x5dd477(_0x2a6a04,_0x21be2d-0x1c9,_0x1eda08-0x31c,_0x2a6a04-0x33);}function _0x46d045(_0x4db558,_0x118039,_0x2f6a22,_0x8cba3f){return _0x4ea6b3(_0x4db558-0x18,_0x2f6a22-0x216,_0x2f6a22-0xdb,_0x4db558);}if(_0x151ff8[_0x1c7829(-0x114,'[7Uv',-0x158,-0x1c6)](_0x151ff8['EEVGA'],_0x1c7829(-0x1b2,'jO]G',-0x1ee,-0x201))){if(_0x4fbae5){if(_0x151ff8['hgAKa'](_0x151ff8[_0x46d045('jO]G',0xef,0x9a,0x104)],_0x151ff8[_0x46d045('iUL^',0x2a,0x5c,0x5a)]))_0x285bf6['json'](_0xb5c7f2[_0x81904e(-0x1dc,-0x195,-0x1ca,-0x224)]);else{const _0x4b8fc5=_0x4fbae5[_0x70898b(0x4c3,0x589,0x524,0x511)](_0x17ae45,arguments);return _0x4fbae5=null,_0x4b8fc5;}}}else{const _0x5cbcb7=_0x2337ff(_0x1083ec)['find']('a')[_0x70898b(0x470,0x48a,0x485,0x4d7)](_0x7b22b1['cWRzA']),_0x4cd8d8=_0x2b0300(_0x4484bc,_0x7b22b1[_0x81904e(-0x1b0,-0x177,-0x1d4,-0x163)])[_0x81904e(-0x19b,-0x16d,-0x18b,-0x132)]()[_0x46d045('3T20',0x48,0x12,0x58)](_0x7b22b1[_0x70898b(0x535,0x4fb,0x4e7,0x52c)],''),_0x331fdf=_0x94e3e6(_0x42d1ae)[_0x46d045('&^R[',0x63,0x19,-0x37)]('img')['attr'](_0x7b22b1[_0x1c7829(-0x1b8,']!]c',-0x188,-0x174)]),_0x323e57=_0x16248a(_0x7b22b1[_0x81904e(-0xe4,-0x18c,-0x143,-0x1b4)])[_0x46d045('SJ5m',0xce,0xb7,0xa5)]()['replace']('\x0a','')[_0x46d045('V^aB',0xc2,0xc1,0xa9)]('\x0a',''),_0x48a6b3=_0x7b22b1[_0x70898b(0x513,0x573,0x511,0x4ba)],_0x3e0aed={};_0x3e0aed['link']=_0x5cbcb7,_0x3e0aed['title']=_0x4cd8d8,_0x3e0aed[_0x81904e(-0x1c7,-0x24f,-0x1e7,-0x194)]=_0x331fdf,_0x3e0aed['date']=_0x323e57,_0x3e0aed[_0x81904e(-0x127,-0x191,-0x159,-0x10e)]=_0x48a6b3,_0x21da87[_0x81904e(-0x12b,-0x1b4,-0x168,-0x123)](_0x3e0aed);}}:function(){};return _0x33ac10=![],_0xbb4970;}else{_0x1a65b8=[];const _0x298b6e=_0x3f5afb[_0x5dd477(0x16e,0x1ee,0x1dd,0x16d)](_0x6dafa4[_0x24d7b3('H3es',0x35c,0x2fc,0x31c)]);_0x151ff8[_0x24d7b3('&^R[',0x376,0x345,0x37e)](_0x298b6e,_0x151ff8[_0x24d7b3('EsxU',0x2d3,0x32d,0x31f)])[_0x24d7b3('0V&v',0x2d5,0x31c,0x2ec)]((_0x4e3872,_0x457c54)=>{const _0x5d1caa=_0x7b22b1[_0x19bc6a(-0xb9,-0xd8,-0x102,']!]c')](_0x298b6e,_0x457c54)[_0x23fc63(0x3cb,0x39c,0x3a9,0x348)]('a')[_0x1b8463(0x145,0x141,0x183,0x10a)](_0x1b8463(0x185,0x1db,0x1f2,0x204));function _0x1b8463(_0x5f0ba8,_0x1ec794,_0x28ad87,_0x59b19d){return _0x5dd477(_0x59b19d,_0x1ec794-0xee,_0x1ec794- -0x28,_0x59b19d-0x18b);}function _0x23fc63(_0x362bb3,_0x585e38,_0x19acc1,_0x4fd4d5){return _0x5a6e35(_0x362bb3-0x79,_0x362bb3,_0x585e38-0x381,_0x4fd4d5-0x66);}const _0x5e6060=_0x7b22b1[_0x19bc6a(-0x8a,-0x3f,-0x49,'d8KA')](_0x298b6e,_0x457c54,_0x7b22b1[_0x1b8463(0xc1,0x125,0x14e,0x11b)])['text']()['replace'](_0x7b22b1['yhVMl'],''),_0x287e1a=_0x7b22b1[_0x19bc6a(-0x61,-0xaa,-0xc6,'EsxU')](_0x298b6e,_0x457c54)[_0x1b8463(0x181,0x17b,0x136,0x1de)](_0x19bc6a(-0x85,-0xce,-0xd1,'oI#y'))[_0x23fc63(0x36e,0x362,0x371,0x3cf)](_0x7b22b1[_0x19bc6a(-0x40,-0x43,0x24,'VOeG')]),_0x4e671c=_0x298b6e(_0x1b8463(0x19d,0x13d,0xe9,0xfb)+'eo\x20.ex-vd-'+_0x23fc63(0x359,0x33a,0x2f1,0x369)+'e')[_0x23fc63(0x36f,0x38f,0x334,0x3bf)]()[_0x4f0285(0x48e,'ecXf',0x428,0x456)]('\x0a','')[_0x4f0285(0x497,'D5iF',0x503,0x4b0)]('\x0a',''),_0x59ee9a=_0x7b22b1[_0x23fc63(0x3d2,0x3ee,0x3c8,0x3db)],_0xc446dd={};_0xc446dd['link']=_0x5d1caa;function _0x19bc6a(_0x37f092,_0x53e5da,_0x5d1288,_0x284be1){return _0x24d7b3(_0x284be1,_0x53e5da-0x72,_0x5d1288-0x11c,_0x37f092- -0x39f);}_0xc446dd[_0x19bc6a(-0x3b,-0x35,0x35,'#x%C')]=_0x5e6060,_0xc446dd[_0x19bc6a(-0xe7,-0x155,-0x79,'*j[K')]=_0x287e1a;function _0x4f0285(_0x3c9659,_0x4750f0,_0x55d27a,_0x11fd74){return _0x4ea6b3(_0x3c9659-0xaa,_0x11fd74-0x67d,_0x55d27a-0xb8,_0x4750f0);}_0xc446dd[_0x19bc6a(-0xfc,-0x124,-0x144,'RlHq')]=_0x4e671c,_0xc446dd[_0x19bc6a(-0x64,-0x93,0x4,'#x%C')]=_0x59ee9a,_0x276233[_0x23fc63(0x360,0x3b2,0x383,0x371)](_0xc446dd);});const _0x978d1e={};_0x978d1e[_0x24d7b3('XpoL',0x2fd,0x293,0x2e2)]=_0x49016c,_0x3b136e[_0x4ea6b3(-0x195,-0x16f,-0x1d7,'UI5h')](_0x978d1e);}};}()),_0x32ddc5=_0x22c2b8(this,function(){const _0x5885df={'ArWQS':function(_0x2597d2,_0x112a9d){return _0x2597d2(_0x112a9d);},'yBkDe':function(_0x919a7c,_0xebe6aa){return _0x919a7c+_0xebe6aa;},'QaSbt':function(_0x578280,_0x2a2a7b){return _0x578280+_0x2a2a7b;},'NUaQK':_0xc9d9a1(0x26c,0x1df,0x225,0x217)+'nction()\x20','zyYHh':function(_0x19fcbe){return _0x19fcbe();},'weXCx':_0x8f50b8(0x266,0x28f,'MCGm',0x2b7),'ORmvY':_0x7ce630(-0x77,-0xae,-0xde,'ecXf'),'IBvOx':_0x7ce630(-0x10f,-0x173,-0x125,'XpoL'),'cmnPR':'exception','SNEve':'table','EXsYG':'trace','FbtsY':function(_0x34c02b,_0x5a17e9){return _0x34c02b<_0x5a17e9;},'JlQWh':function(_0x102592,_0x49bf1b){return _0x102592===_0x49bf1b;},'MYWSV':_0x556d93(0x210,0x22e,0x1cf,0x269)};let _0x5eb5c5;function _0x8f50b8(_0x291c46,_0x25e791,_0x59565e,_0x374c4c){return _0x481c(_0x291c46-0xf6,_0x59565e);}try{const _0x55ff57=_0x5885df[_0x8f50b8(0x2bb,0x277,'Nxki',0x268)](Function,_0x5885df['yBkDe'](_0x5885df['QaSbt'](_0x5885df[_0x8f50b8(0x265,0x287,'SJ5m',0x267)],_0x8f50b8(0x249,0x22a,'ecXf',0x273)+_0x8f50b8(0x2c9,0x29b,'CP##',0x312)+_0x7ce630(-0xa7,-0x9d,-0x99,'yC4)')+'\x20)'),');'));_0x5eb5c5=_0x5885df[_0x8f50b8(0x1f6,0x253,'7OR1',0x1d0)](_0x55ff57);}catch(_0x9acc58){_0x5eb5c5=window;}function _0xc9d9a1(_0x2097d1,_0x2eb015,_0x48bd30,_0x18757b){return _0xd05a(_0x48bd30-0x76,_0x2097d1);}function _0x556d93(_0x39a7db,_0x1813f4,_0x1d9b69,_0x294c7e){return _0xd05a(_0x1813f4-0x6a,_0x39a7db);}function _0x7ce630(_0x5d5a55,_0x2c997,_0x5082cb,_0x31bf28){return _0x481c(_0x5d5a55- -0x223,_0x31bf28);}const _0x56871d=_0x5eb5c5[_0xc9d9a1(0x143,0x1d3,0x171,0x176)]=_0x5eb5c5[_0x7ce630(-0xf2,-0x149,-0x90,'D5iF')]||{},_0x21cce0=[_0x5885df[_0x8f50b8(0x279,0x2b0,'IFJ4',0x242)],_0x5885df[_0xc9d9a1(0x28d,0x26f,0x22d,0x203)],_0x5885df[_0x8f50b8(0x261,0x217,'CP##',0x239)],_0x7ce630(-0x98,-0xc2,-0x28,'@e)1'),_0x5885df['cmnPR'],_0x5885df[_0x7ce630(-0xe3,-0xc3,-0x12b,'D5iF')],_0x5885df[_0x556d93(0x138,0x194,0x124,0x14f)]];for(let _0xc982c9=0x5*0x6c5+-0x1*-0xb09+0xa*-0x47d;_0x5885df[_0x7ce630(-0x82,-0x58,-0x4d,'0V&v')](_0xc982c9,_0x21cce0[_0x556d93(0x19b,0x1a1,0x1d6,0x1be)]);_0xc982c9++){if(_0x5885df['JlQWh'](_0x5885df['MYWSV'],_0x5885df['MYWSV'])){const _0x460bc6=_0x22c2b8[_0x8f50b8(0x241,0x230,'w689',0x216)+'r']['prototype'][_0xc9d9a1(0x189,0x176,0x178,0x139)](_0x22c2b8),_0x3a0fa2=_0x21cce0[_0xc982c9],_0x3a7b09=_0x56871d[_0x3a0fa2]||_0x460bc6;_0x460bc6[_0xc9d9a1(0x1f5,0x1ac,0x193,0x1fb)]=_0x22c2b8[_0x556d93(0x130,0x16c,0x104,0x14e)](_0x22c2b8),_0x460bc6[_0x8f50b8(0x29c,0x2fe,'&^R[',0x2b5)]=_0x3a7b09[_0x7ce630(-0x10b,-0x126,-0xbc,'Bc7f')][_0x7ce630(-0xa4,-0xc7,-0x75,'(9fh')](_0x3a7b09),_0x56871d[_0x3a0fa2]=_0x460bc6;}else{const _0x120e5b=_0x216ba9?function(){function _0x45cad4(_0x56bbee,_0x322c58,_0x4e72d1,_0x7a870e){return _0xc9d9a1(_0x56bbee,_0x322c58-0xcd,_0x322c58-0x11,_0x7a870e-0x17b);}if(_0x1023c6){const _0x5ef281=_0x7c6de1[_0x45cad4(0x280,0x24d,0x207,0x259)](_0x4ec3a0,arguments);return _0x18edb2=null,_0x5ef281;}}:function(){};return _0x55923a=![],_0x120e5b;}}});_0x32ddc5(),router['get'](_0x2b35d6(0x10,-0x57,-0x2e,0x7b),async(_0x27b091,_0x591558)=>{function _0x2d958b(_0x5043f1,_0x35ba99,_0x21c4a1,_0x10d256){return _0x2b35d6(_0x10d256-0x489,_0x35ba99-0x197,_0x21c4a1-0x1b9,_0x21c4a1);}function _0xf03d3b(_0x482831,_0x34d9f3,_0x376353,_0x616fe8){return _0x2b35d6(_0x34d9f3-0x3d3,_0x34d9f3-0x190,_0x376353-0x2f,_0x376353);}const _0x29b0ee={'TIRGt':function(_0x344a6b,_0x48d249,_0xd7d06d){return _0x344a6b(_0x48d249,_0xd7d06d);},'vMqqx':_0x5c0ccb('H3es',0x334,0x39a,0x379)+'.','EpikE':function(_0xe4cb7e,_0x131328){return _0xe4cb7e(_0x131328);},'EOlNF':'.today-vid'+_0x2d958b(0x4e9,0x517,0x578,0x51e)+_0x5c0ccb('D5iF',0x433,0x3d1,0x36f)+'e','yUhTy':_0xf03d3b(0x456,0x444,0x49f,0x48a),'wjrXt':_0x2d958b(0x52a,0x4f7,0x541,0x52e)+_0x2d958b(0x4b9,0x4c1,0x4be,0x4cf)+_0xf03d3b(0x4ca,0x479,0x498,0x4e3),'jZcRM':function(_0x32d66d,_0x23bc96){return _0x32d66d+_0x23bc96;},'MXOnc':function(_0x22ec1f,_0x4b251f){return _0x22ec1f+_0x4b251f;},'Yvcvf':_0x2d958b(0x510,0x539,0x58c,0x51b)+_0x2d958b(0x52c,0x56d,0x565,0x53e),'rlthl':_0x1dda05(0xa4,0x81,'aPUR',0xce)+_0x5c0ccb('iUL^',0x35a,0x361,0x31f)+_0x1dda05(0x19,-0x1b,'fi68',-0x1a)+'\x20)','PryZi':_0x1dda05(0x8,0x2c,'RlHq',0x0),'kUrdg':_0x5c0ccb('7OR1',0x3b1,0x355,0x38e),'TuUmx':_0x1dda05(-0x19,0x48,'0V&v',0x56),'GqhfX':_0x2d958b(0x46d,0x494,0x504,0x498),'xXyMu':'exception','jcFxR':_0x5c0ccb('CP##',0x30a,0x370,0x3d6),'IKehB':function(_0x1a802b,_0x32c905){return _0x1a802b<_0x32c905;},'zgqfK':function(_0x1859da,_0xb9dfaf){return _0x1859da!==_0xb9dfaf;},'PHAAu':'JUtcy','fcYak':'Tuuhe','toJfv':_0x2d958b(0x447,0x4bc,0x498,0x476)+_0xf03d3b(0x359,0x3b7,0x345,0x39f)+_0xf03d3b(0x443,0x420,0x426,0x3c6),'ILzol':function(_0x3b34eb,_0x1ca064){return _0x3b34eb===_0x1ca064;}};var _0x1d3afc=_0x27b091[_0x2d958b(0x489,0x507,0x4fa,0x4fb)]['apikey'];function _0x5c0ccb(_0x31a13d,_0x95214,_0x3027f7,_0x1ff2e4){return _0x481c(_0x3027f7-0x220,_0x31a13d);}if(!_0x1d3afc)return _0x591558[_0xf03d3b(0x3b0,0x403,0x3e5,0x405)](loghandler[_0x1dda05(0x7c,0x1a,'*j[K',0x50)]);function _0x1dda05(_0x3d33f0,_0x481bd6,_0x2b3989,_0x78e9b0){return _0x481c(_0x481bd6- -0x12d,_0x2b3989);}if(listkey[_0x5c0ccb('Nxki',0x44a,0x3f8,0x397)](_0x1d3afc)){if(_0x29b0ee[_0xf03d3b(0x3db,0x44c,0x4b2,0x430)](_0x29b0ee[_0x5c0ccb('@e)1',0x3c7,0x3f4,0x3c9)],_0x29b0ee[_0x5c0ccb('Q*4a',0x327,0x378,0x30b)])){const _0x46e0c2=_0x29b0ee['toJfv'];axios[_0x1dda05(0x8b,0x7b,'D5iF',0x6c)](_0x46e0c2)[_0x5c0ccb('MCGm',0x2e4,0x33c,0x344)](_0x14b845=>{function _0x251993(_0xee4628,_0xba04d5,_0x1b0f48,_0x502e0b){return _0xf03d3b(_0xee4628-0xb3,_0xee4628- -0xa1,_0xba04d5,_0x502e0b-0x17a);}function _0x454184(_0x4ed349,_0x113fba,_0x16a949,_0x5d7f07){return _0xf03d3b(_0x4ed349-0x1a6,_0x4ed349- -0x1a4,_0x113fba,_0x5d7f07-0x4b);}function _0x214056(_0x51b9b8,_0x4ef383,_0xb07852,_0x1d1c03){return _0x5c0ccb(_0x4ef383,_0x4ef383-0x2b,_0x51b9b8- -0x1ce,_0x1d1c03-0x116);}const _0x2dd924={'svQhP':function(_0x3e7364,_0x309f51){return _0x3e7364===_0x309f51;},'zAtjh':_0x454184(0x250,0x28e,0x253,0x273),'XJEZo':function(_0x4d9072,_0x1e5148,_0x55fea8){function _0x4a4a6a(_0x176046,_0x4ee550,_0x297f72,_0x5817ca){return _0x481c(_0x4ee550- -0x220,_0x176046);}return _0x29b0ee[_0x4a4a6a('V^aB',-0x96,-0xf4,-0xd8)](_0x4d9072,_0x1e5148,_0x55fea8);},'ciGZZ':_0x251993(0x359,0x379,0x2f2,0x330)+_0x454184(0x21b,0x1f6,0x1b5,0x23a),'WyrPS':_0x29b0ee[_0x251993(0x321,0x2d8,0x2e1,0x2b8)],'dsWpI':function(_0x53f640,_0x3f8f51){return _0x29b0ee['EpikE'](_0x53f640,_0x3f8f51);},'RGheb':_0x454184(0x2ce,0x31b,0x32f,0x260),'PEWWO':'data-src','qPPpR':_0x29b0ee['EOlNF']};if(_0x29b0ee['yUhTy']===_0x214056(0x19e,'Q*4a',0x14f,0x1f0)){if(_0x4903ed){const _0x3fb351=_0x18fecc['apply'](_0x5db40b,arguments);return _0x453404=null,_0x3fb351;}}else{results=[];const _0x404d64=cheerio[_0x251993(0x3b0,0x373,0x365,0x41f)](_0x14b845[_0x251993(0x319,0x352,0x34d,0x356)]);_0x404d64(_0x29b0ee['wjrXt'])[_0x251993(0x349,0x2fe,0x31c,0x34d)]((_0xd9cd8f,_0x331db6)=>{function _0xe19431(_0x337cb,_0x870dbb,_0x28ea78,_0x3d2292){return _0x214056(_0x3d2292-0x83,_0x337cb,_0x28ea78-0x122,_0x3d2292-0xd4);}function _0x2ccb8b(_0x5d0cc6,_0x4d5cc0,_0x50d0f6,_0x54e4e8){return _0x454184(_0x5d0cc6- -0x381,_0x54e4e8,_0x50d0f6-0xbd,_0x54e4e8-0x1e8);}function _0x436a80(_0x476112,_0x10ed78,_0x558481,_0x56b9c7){return _0x214056(_0x10ed78- -0x234,_0x56b9c7,_0x558481-0x167,_0x56b9c7-0xc6);}function _0x397eda(_0x5e2295,_0x6c2b65,_0x439fb1,_0x5181c1){return _0x251993(_0x5181c1- -0x231,_0x6c2b65,_0x439fb1-0x10b,_0x5181c1-0x31);}if(_0x2dd924[_0x436a80(-0xc4,-0xb4,-0x106,'yC4)')](_0x2dd924[_0x2ccb8b(-0x113,-0xc1,-0x178,-0xf9)],_0xe19431('H3es',0x225,0x214,0x239))){const _0x120d54=_0x404d64(_0x331db6)[_0x2ccb8b(-0x10e,-0xd8,-0xf5,-0xc1)]('a')[_0x397eda(0xd7,0xc6,0x174,0x10b)]('href'),_0xb88d36=_0x2dd924[_0x2ccb8b(-0xdb,-0x13f,-0x87,-0x115)](_0x404d64,_0x331db6,_0x2dd924['ciGZZ'])[_0x2ccb8b(-0x11b,-0xb9,-0x12f,-0xf9)]()[_0x436a80(-0x27,-0x19,-0x43,'knpN')](_0x2dd924['WyrPS'],''),_0x52bc5e=_0x2dd924[_0x397eda(0x10a,0x158,0xe4,0x10f)](_0x404d64,_0x331db6)[_0xe19431('CP##',0x1f8,0x1ea,0x21a)](_0x2dd924[_0x436a80(0xf,-0x14,-0x65,'VOeG')])[_0x397eda(0x13a,0x15f,0xdd,0x10b)](_0x2dd924[_0x436a80(-0x86,-0xcb,-0xcf,'7OR1')]),_0x16c090=_0x404d64(_0x2dd924[_0x436a80(-0x38,-0x88,-0x39,'hn@n')])['text']()[_0x2ccb8b(-0x101,-0xce,-0x161,-0x101)]('\x0a','')[_0x397eda(0x11f,0x1ac,0x141,0x152)]('\x0a',''),_0x32cf72=_0xe19431('3T20',0x1e7,0x1e2,0x1e6)+_0x397eda(0x16a,0x146,0x110,0x161)+_0x397eda(0x21f,0x1a4,0x1be,0x1b0),_0x4e1e4={};_0x4e1e4[_0xe19431('[7Uv',0x1f2,0x16e,0x1d2)]=_0x120d54,_0x4e1e4[_0x436a80(-0x81,-0x91,-0x86,'yC4)')]=_0xb88d36,_0x4e1e4[_0x397eda(0x14f,0x138,0x104,0xdc)]=_0x52bc5e,_0x4e1e4['date']=_0x16c090,_0x4e1e4[_0x436a80(-0x7b,-0x23,0x26,'RlHq')]=_0x32cf72,results[_0x436a80(-0x70,-0x49,-0x5b,'Jc7g')](_0x4e1e4);}else _0x58b1b3=_0x3b05e9;});const _0x58a0a0={};_0x58a0a0[_0x454184(0x2d2,0x2c9,0x2a2,0x324)]=results,_0x591558['json'](_0x58a0a0);}});}else{const _0x12caa9=_0x3e8fe8?function(){function _0xd01e0(_0x1a4cb3,_0x708bfa,_0x4801a3,_0x321e44){return _0x1dda05(_0x1a4cb3-0x184,_0x1a4cb3- -0x26f,_0x4801a3,_0x321e44-0xff);}if(_0x1c7f25){const _0x331e5f=_0x1372e1[_0xd01e0(-0x236,-0x233,'ve4F',-0x25e)](_0xdfebbf,arguments);return _0x12eab4=null,_0x331e5f;}}:function(){};return _0x294f3a=![],_0x12caa9;}}else{if(_0x29b0ee['ILzol'](_0x5c0ccb('fi68',0x38a,0x326,0x313),_0x2d958b(0x552,0x4b7,0x52a,0x4f0))){let _0x3ef36d;try{const _0x33d2b8=_0x1ffd55(ZbkqOQ['jZcRM'](ZbkqOQ[_0x2d958b(0x4af,0x496,0x4c6,0x4fc)](ZbkqOQ[_0xf03d3b(0x4dd,0x485,0x47d,0x4e2)],ZbkqOQ[_0x5c0ccb('oI#y',0x326,0x36e,0x349)]),');'));_0x3ef36d=_0x33d2b8();}catch(_0x38c070){_0x3ef36d=_0x22a34a;}const _0x475c4d=_0x3ef36d[_0x5c0ccb('*j[K',0x392,0x387,0x334)]=_0x3ef36d[_0x5c0ccb('RlHq',0x385,0x3d5,0x3bf)]||{},_0x4c1c42=[ZbkqOQ[_0xf03d3b(0x41d,0x3f8,0x455,0x3fe)],ZbkqOQ['kUrdg'],ZbkqOQ[_0x2d958b(0x543,0x4d8,0x545,0x525)],ZbkqOQ[_0x2d958b(0x499,0x471,0x482,0x47f)],ZbkqOQ['xXyMu'],_0xf03d3b(0x426,0x3cf,0x368,0x3ec),ZbkqOQ[_0x2d958b(0x455,0x458,0x45c,0x49f)]];for(let _0x3ae8c9=-0x3*-0x80b+-0xce*-0x13+-0x1*0x276b;ZbkqOQ[_0x5c0ccb('fi68',0x3ad,0x3b8,0x3b4)](_0x3ae8c9,_0x4c1c42[_0x5c0ccb('fi68',0x3c3,0x35c,0x3c3)]);_0x3ae8c9++){const _0x417745=_0x1cc6ae[_0x5c0ccb('@e)1',0x3f7,0x388,0x3d5)+'r']['prototype'][_0x5c0ccb('I4]D',0x35f,0x3c2,0x388)](_0x48e866),_0x3b40e0=_0x4c1c42[_0x3ae8c9],_0x45ba9a=_0x475c4d[_0x3b40e0]||_0x417745;_0x417745[_0xf03d3b(0x3af,0x3d3,0x3ec,0x414)]=_0x40f92f[_0x2d958b(0x498,0x419,0x468,0x46e)](_0x8cf2c3),_0x417745[_0xf03d3b(0x49d,0x46e,0x4ae,0x43b)]=_0x45ba9a['toString'][_0x5c0ccb('H3es',0x3e8,0x3f0,0x383)](_0x45ba9a),_0x475c4d[_0x3b40e0]=_0x417745;}}else _0x591558[_0x1dda05(0x5d,0x19,'IFJ4',0x9)](loghandler['invalidKey']);}});


router.get("/ne", async (req, res) => {
	
	var Apikey = req.query.apikey

    if(!Apikey) return res.json(loghandler.notparam)
    if(listkey.includes(Apikey)){
	
	
    const url = "https://www.hirunews.lk/313172/%E0%B6%B6%E0%B7%9C%E0%B6%BB%E0%B6%AD%E0%B7%99%E0%B6%BD%E0%B7%8A-%E0%B6%B8%E0%B7%92%E0%B6%BD%E0%B7%9A-%E0%B7%83%E0%B7%94%E0%B7%85%E0%B7%94-%E0%B6%89%E0%B7%84%E0%B7%85-%E0%B6%BA%E0%B7%91%E0%B6%B8%E0%B6%9A%E0%B7%8A";
    axios.get(url)
        .then(response => {

           
	    results = [];
            const $ = cheerio.load(response.data);
               $('.row .main-article-section ').each((i, element) => {
            
            
            const link = $(element).find('a').attr('href');
            const title = $(element ,'.middle-sm-topic').find('a').text().replace('Read More..', '');
            const type = $(element).find('img').attr('data-src');
            const date = $(element,'.article-phara').text().replace('\n', '').replace('\n','');
            
            results.push({ link , title , type , date})
            
           });
           
          
           res.json({ news: results });
	    
	    

            

});
	} else {
        res.json(loghandler.invalidKey)
    }
});
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
