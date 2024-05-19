//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Owner Menu 』───⚝
│々 ${prefix}autoread 
│々 ${prefix}autobio 
│々 ${prefix}autotype 
│々 ${prefix}unavailable 
│々 ${prefix}autorecord 
│々 ${prefix}autorecordtype 
│々 ${prefix}autoswview 
│々 ${prefix}setautoblock 
│々 ${prefix}setantiforeign 
│々 ${prefix}autoblock 
│々 ${prefix}onlygc 
│々 ${prefix}onlypc 
│々 ${prefix}onlyindia 
│々 ${prefix}onlyindo 
│々 ${prefix}anticall 
│々 ${prefix}self 
│々 ${prefix}public 
│々 ${prefix}join 
│々 ${prefix}poll 
│々 ${prefix}spam 
│々 ${prefix}bc 
│々 ${prefix}bcgroup 
│々 ${prefix}setmenu 
│々 ${prefix}setimgmenu 
│々 ${prefix}setvidmenu 
│々 ${prefix}setgifmenu 
│々 ${prefix}setreply 
│々 ${prefix}setprefix 
│々 ${prefix}addlimit 
│々 ${prefix}dellimit 
│々 ${prefix}resethit 
│々 ${prefix}resetuser 
│々 ${prefix}creategc 
│々 ${prefix}setexif 
│々 ${prefix}userjid 
│々 ${prefix}setbotbio 
│々 ${prefix}delppbot 
│々 ${prefix}shutdown 
│々 ${prefix}setppbot 
│々 ${prefix}addprem 
│々 ${prefix}delprem 
│々 ${prefix}addowner 
│々 ${prefix}delowner 
│々 ${prefix}addvn 
│々 ${prefix}addapk 
│々 ${prefix}addzip 
│々 ${prefix}addpdf 
│々 ${prefix}delapk 
│々 ${prefix}delzip 
│々 ${prefix}delpdf 
│々 ${prefix}delvn 
│々 ${prefix}addsticker 
│々 ${prefix}delsticker 
│々 ${prefix}addimage 
│々 ${prefix}delimage 
│々 ${prefix}addvideo 
│々 ${prefix}delvideo 
│々 ${prefix}addtitle 
│々 ${prefix}deltitle 
│々 ${prefix}upswtext 
│々 ${prefix}upswvideo 
│々 ${prefix}upswimage 
│々 ${prefix}upswaudio 
│々 ${prefix}autosticker 
│々 ${prefix}block 
│々 ${prefix}unblock 
│々 ${prefix}leavegc 
│々 ${prefix}pushcontact 
│々 ${prefix}pushcontactv2 
│々 ${prefix}pushcontactv3 
│々 ${prefix}jpm 
│々 ${prefix}post 
│々 ${prefix}clearall 
│々 ${prefix}pinchat 
│々 ${prefix}unpinchat 
╰──────────⳹

⚝───『  Group Menu 』───⚝
│々 ${prefix}antibot 
│々 ${prefix}antiviewonce 
│々 ${prefix}readviewonce 
│々 ${prefix}welcome 
│々 ${prefix}adminevent 
│々 ${prefix}groupevent 
│々 ${prefix}antiforeign 
│々 ${prefix}antimedia 
│々 ${prefix}antiaudio 
│々 ${prefix}antivideo 
│々 ${prefix}antiimage 
│々 ${prefix}antidocument 
│々 ${prefix}antilocation 
│々 ${prefix}anticontact 
│々 ${prefix}antisticker 
│々 ${prefix}antipoll 
│々 ${prefix}antilink 
│々 ${prefix}antilinkgc 
│々 ${prefix}antipromotion 
│々 ${prefix}antivirtex 
│々 ${prefix}grouplink 
│々 ${prefix}listadmin 
│々 ${prefix}invite 
│々 ${prefix}ephemeral 
│々 ${prefix}delete 
│々 ${prefix}setppgroup 
│々 ${prefix}delppgroup 
│々 ${prefix}setnamegc 
│々 ${prefix}setdesc 
│々 ${prefix}add 
│々 ${prefix}kick 
│々 ${prefix}promote 
│々 ${prefix}demote 
│々 ${prefix}kickall 
│々 ${prefix}promoteall 
│々 ${prefix}demoteall 
│々 ${prefix}getcontact 
│々 ${prefix}savecontact 
│々 ${prefix}sendcontact 
│々 ${prefix}contactag 
│々 ${prefix}hidetag 
│々 ${prefix}totag 
│々 ${prefix}tagall 
│々 ${prefix}editinfo 
│々 ${prefix}opentime 
│々 ${prefix}closetime 
│々 ${prefix}resetlink 
│々 ${prefix}getbio 
│々 ${prefix}vote 
│々 ${prefix}upvote 
│々 ${prefix}downvote 
│々 ${prefix}checkvote 
│々 ${prefix}delvote 
│々 ${prefix}antivirus 
│々 ${prefix}antitoxic 
│々 ${prefix}nsfw 
│々 ${prefix}react 
│々 ${prefix}getjoinrequest 
╰──────────⳹

⚝───『  Search 』───⚝
│々 ${prefix}google Ⓕ
│々 ${prefix}wikipedia Ⓕ
│々 ${prefix}ytsearch Ⓕ
│々 ${prefix}xnxxsearch Ⓕ
│々 ${prefix}xvideosearch Ⓕ
│々 ${prefix}apksearch Ⓕ
│々 ${prefix}stickersearch Ⓕ
│々 ${prefix}imdb Ⓕ
│々 ${prefix}wanumber Ⓕ
│々 ${prefix}friend Ⓕ
│々 ${prefix}lyrics Ⓕ
╰──────────⳹

⚝───『  Download Menu 』───⚝
│々 ${prefix}xnxxdl Ⓕ
│々 ${prefix}xvideodl Ⓕ
│々 ${prefix}itunes Ⓕ
│々 ${prefix}play Ⓕ
│々 ${prefix}ytmp3 Ⓕ
│々 ${prefix}ytmp4 Ⓕ
│々 ${prefix}tiktok Ⓕ
│々 ${prefix}tiktokaudio Ⓕ
│々 ${prefix}tiktokvideo Ⓕ
│々 ${prefix}tiktokslide Ⓕ
│々 ${prefix}igvideo Ⓕ
│々 ${prefix}igimage Ⓕ
│々 ${prefix}facebook Ⓕ
│々 ${prefix}twitter Ⓕ
│々 ${prefix}capcut Ⓕ
│々 ${prefix}apk Ⓕ
│々 ${prefix}mega Ⓕ
│々 ${prefix}mediafire Ⓕ
│々 ${prefix}google Ⓕ
│々 ${prefix}gimage Ⓕ
│々 ${prefix}weather Ⓕ
│々 ${prefix}spotify Ⓟ
│々 ${prefix}gitclone Ⓕ
│々 ${prefix}happymod Ⓕ
│々 ${prefix}gdrive Ⓕ
│々 ${prefix}pinterest Ⓕ
│々 ${prefix}ringtone Ⓕ
│々 ${prefix}autodownload 
╰──────────⳹

⚝───『  Convert 』───⚝
│々 ${prefix}obfuscate Ⓕ
│々 ${prefix}styletext Ⓕ
│々 ${prefix}fliptext Ⓕ
│々 ${prefix}tts Ⓕ
│々 ${prefix}say Ⓕ
│々 ${prefix}togif Ⓕ
│々 ${prefix}toqr Ⓕ
│々 ${prefix}bass Ⓕ
│々 ${prefix}blown Ⓕ
│々 ${prefix}deep Ⓕ
│々 ${prefix}earrape Ⓕ
│々 ${prefix}fast Ⓕ
│々 ${prefix}fat Ⓕ
│々 ${prefix}nightcore Ⓕ
│々 ${prefix}reverse Ⓕ
│々 ${prefix}robot Ⓕ
│々 ${prefix}slow Ⓕ
│々 ${prefix}smooth Ⓕ
│々 ${prefix}squirrel Ⓕ
│々 ${prefix}tinyurl Ⓕ
│々 ${prefix}tovn Ⓕ
│々 ${prefix}toaudio Ⓕ
│々 ${prefix}tomp3 Ⓕ
│々 ${prefix}tomp4Ⓕ
│々 ${prefix}toimg Ⓕ
│々 ${prefix}toonce Ⓕ
│々 ${prefix}sticker Ⓕ
│々 ${prefix}smeme Ⓕ
│々 ${prefix}smeta Ⓕ
│々 ${prefix}take Ⓟ
│々 ${prefix}emoji Ⓕ
│々 ${prefix}volaudio Ⓕ
│々 ${prefix}volvideo Ⓕ
│々 ${prefix}ebinary Ⓕ
│々 ${prefix}dbinary Ⓕ
│々 ${prefix}ssweb Ⓕ
│々 ${prefix}quoted Ⓕ
│々 ${prefix}translate Ⓕ
╰──────────⳹

⚝───『  List 』───⚝
│々 ${prefix}listprem Ⓕ
│々 ${prefix}listowner Ⓕ
│々 ${prefix}liststicker Ⓕ
│々 ${prefix}listimage Ⓕ
│々 ${prefix}listvideo Ⓕ
│々 ${prefix}listvn Ⓕ
│々 ${prefix}listapk Ⓕ
│々 ${prefix}listzip Ⓕ
│々 ${prefix}listpdf Ⓕ
│々 ${prefix}listbadword Ⓕ
│々 ${prefix}listpc Ⓕ
│々 ${prefix}listgc Ⓕ
╰──────────⳹

⚝───『  Random Photo 』───⚝
│々 ${prefix}aesthetic Ⓕ
│々 ${prefix}coffee Ⓕ
│々 ${prefix}wikimedia Ⓕ
│々 ${prefix}wallpaper Ⓕ
│々 ${prefix}art Ⓕ
│々 ${prefix}bts Ⓕ
│々 ${prefix}dogwoof Ⓕ
│々 ${prefix}catmeow Ⓕ
│々 ${prefix}lizardpic Ⓕ
│々 ${prefix}goosebird Ⓕ
│々 ${prefix}8ballpool Ⓕ
│々 ${prefix}cosplay Ⓕ
│々 ${prefix}hacker Ⓕ
│々 ${prefix}cyber Ⓕ
│々 ${prefix}gamewallpaper Ⓕ
│々 ${prefix}islamic Ⓕ
│々 ${prefix}jennie Ⓕ
│々 ${prefix}jiso Ⓕ
│々 ${prefix}satanic Ⓕ
│々 ${prefix}justina Ⓕ
│々 ${prefix}cartoon Ⓕ
│々 ${prefix}pentol Ⓕ
│々 ${prefix}cat Ⓕ
│々 ${prefix}kpop Ⓕ
│々 ${prefix}exo Ⓕ
│々 ${prefix}lisa Ⓕ
│々 ${prefix}space Ⓕ
│々 ${prefix}car Ⓕ
│々 ${prefix}technology Ⓕ
│々 ${prefix}bike Ⓕ
│々 ${prefix}shortquote Ⓕ
│々 ${prefix}antiwork Ⓕ
│々 ${prefix}hacking Ⓕ
│々 ${prefix}boneka Ⓕ
│々 ${prefix}rose Ⓕ
│々 ${prefix}ryujin Ⓕ
│々 ${prefix}ulzzangboy Ⓕ
│々 ${prefix}ulzzanggirl Ⓕ
│々 ${prefix}wallml Ⓕ
│々 ${prefix}wallphone Ⓕ
│々 ${prefix}mountain Ⓕ
│々 ${prefix}goose Ⓕ
│々 ${prefix}profilepic Ⓕ
│々 ${prefix}couplepp Ⓕ
│々 ${prefix}programming Ⓕ
│々 ${prefix}pubg Ⓕ
│々 ${prefix}blackpink Ⓕ
│々 ${prefix}randomboy Ⓕ  
│々 ${prefix}randomgirl Ⓕ
│々 ${prefix}hijab Ⓕ  
│々 ${prefix}chinese Ⓕ
│々 ${prefix}indo Ⓕ
│々 ${prefix}japanese Ⓕ
│々 ${prefix}korean Ⓕ
│々 ${prefix}malay Ⓕ
│々 ${prefix}thai Ⓕ
│々 ${prefix}vietnamese Ⓕ
╰──────────⳹

⚝───『  Random Video 』───⚝
│々 ${prefix}tiktokgirl Ⓕ
│々 ${prefix}tiktoknukthy Ⓕ
│々 ${prefix}tiktokkayes Ⓕ
│々 ${prefix}tiktokpanrika Ⓕ
│々 ${prefix}tiktoknotnot Ⓕ
│々 ${prefix}tiktokghea Ⓕ
│々 ${prefix}tiktoksantuy Ⓕ
│々 ${prefix}tiktokbocil Ⓕ
╰──────────⳹

⚝───『  Stalker 』───⚝
│々 ${prefix}tiktokstalk Ⓕ
│々 ${prefix}mlstalk Ⓕ
│々 ${prefix}npmstalk Ⓕ
│々 ${prefix}ghstalk Ⓕ
╰──────────⳹

–『 OpenAI 』───⚝
│々 ${prefix}openai-indo Ⓕ
│々 ${prefix}ai-indo Ⓕ
│々 ${prefix}diffusion Ⓕ
│々 ${prefix}photoleap Ⓕ
│々 ${prefix}openai Ⓕ
│々 ${prefix}dalle Ⓕ
│々 ${prefix}ai Ⓕ
│々 ${prefix}remini Ⓕ
│々 ${prefix}simi Ⓕ
│々 ${prefix}removebg Ⓕ
│々 ${prefix}tozombie Ⓕ
╰──────────⳹

⚝───『  Game 』───⚝
│々 ${prefix}truth Ⓕ
│々 ${prefix}dare Ⓕ
│々 ${prefix}suit Ⓕ
│々 ${prefix}tictactoe Ⓕ
│々 ${prefix}math Ⓕ
╰──────────⳹

⚝───『  Fun Menu 』───⚝
│々 ${prefix}define Ⓕ
│々 ${prefix}readmore Ⓕ
│々 ${prefix}fact Ⓕ
│々 ${prefix}couple Ⓕ
│々 ${prefix}soulmate Ⓕ
│々 ${prefix}stupidcheck Ⓕ
│々 ${prefix}handsomecheck Ⓕ
│々 ${prefix}uncleancheck Ⓕ
│々 ${prefix}hotcheck Ⓕ
│々 ${prefix}smartcheck Ⓕ
│々 ${prefix}greatcheck Ⓕ
│々 ${prefix}evilcheck Ⓕ
│々 ${prefix}dogcheck Ⓕ
│々 ${prefix}coolcheck Ⓕ
│々 ${prefix}waifucheck Ⓕ
│々 ${prefix}awesomecheck Ⓕ
│々 ${prefix}gaycheck Ⓕ
│々 ${prefix}cutecheck Ⓕ
│々 ${prefix}lesbiancheck Ⓕ
│々 ${prefix}hornycheck Ⓕ
│々 ${prefix}prettycheck Ⓕ
│々 ${prefix}lovelycheck Ⓕ
│々 ${prefix}uglycheck Ⓕ
│々 ${prefix}pick Ⓕ
│々 ${prefix}pickupline Ⓕ
│々 ${prefix}quotes Ⓕ
│々 ${prefix}can Ⓕ
│々 ${prefix}is Ⓕ
│々 ${prefix}when Ⓕ
│々 ${prefix}where Ⓕ
│々 ${prefix}what Ⓕ
│々 ${prefix}how Ⓕ
│々 ${prefix}rate Ⓕ
│々 ${prefix}cry Ⓕ
│々 ${prefix}kill Ⓕ
│々 ${prefix}hug Ⓕ
│々 ${prefix}pat Ⓕ
│々 ${prefix}lick Ⓕ 
│々 ${prefix}kiss Ⓕ
│々 ${prefix}bite Ⓕ
│々 ${prefix}yeet Ⓕ
│々 ${prefix}bully Ⓕ
│々 ${prefix}bonk Ⓕ
│々 ${prefix}wink Ⓕ
│々 ${prefix}poke Ⓕ
│々 ${prefix}nom Ⓕ
│々 ${prefix}slap Ⓕ
│々 ${prefix}smile Ⓕ 
│々 ${prefix}wave Ⓕ
│々 ${prefix}awoo Ⓕ
│々 ${prefix}blush Ⓕ
│々 ${prefix}smug Ⓕ
│々 ${prefix}glomp Ⓕ 
│々 ${prefix}happy Ⓕ
│々 ${prefix}dance Ⓕ
│々 ${prefix}cringe Ⓕ
│々 ${prefix}cuddle Ⓕ
│々 ${prefix}highfive Ⓕ 
│々 ${prefix}shinobu Ⓕ
│々 ${prefix}handhold Ⓕ
│々 ${prefix}spank Ⓕ
│々 ${prefix}tickle Ⓕ
│々 ${prefix}avatar Ⓕ
│々 ${prefix}feed Ⓕ
│々 ${prefix}fox_girl Ⓕ
│々 ${prefix}gecg Ⓕ
│々 ${prefix}checkme Ⓕ
│々 ${prefix}sound1 - sound161 Ⓕ
╰──────────⳹

⚝───『  Sticker 』───⚝
│々 ${prefix}goose Ⓕ
│々 ${prefix}woof Ⓕ
│々 ${prefix}8ball Ⓕ
│々 ${prefix}lizard Ⓕ
│々 ${prefix}meow Ⓕ
│々 ${prefix}gura Ⓕ
│々 ${prefix}doge Ⓕ
│々 ${prefix}patrick Ⓕ
│々 ${prefix}lovestick Ⓕ
│々 ${prefix}telestick Ⓕ
│々 ${prefix}ttp Ⓕ
╰──────────⳹

⚝───『  Anime 』───⚝
│々 ${prefix}traceanime Ⓕ
│々 ${prefix}akira Ⓕ
│々 ${prefix}akiyama Ⓕ
│々 ${prefix}ana Ⓕ
│々 ${prefix}asuna Ⓕ
│々 ${prefix}ayuzawa Ⓕ
│々 ${prefix}boruto Ⓕ
│々 ${prefix}chiho Ⓕ
│々 ${prefix}chitoge Ⓕ
│々 ${prefix}cosplayloli Ⓕ
│々 ${prefix}cosplaysagiri Ⓕ
│々 ${prefix}deidara Ⓕ
│々 ${prefix}doraemon Ⓕ
│々 ${prefix}elaina Ⓕ
│々 ${prefix}emilia Ⓕ
│々 ${prefix}erza Ⓕ
│々 ${prefix}gremory Ⓕ
│々 ${prefix}hestia Ⓕ
│々 ${prefix}husbu Ⓕ
│々 ${prefix}inori Ⓕ
│々 ${prefix}isuzu Ⓕ
│々 ${prefix}itachi Ⓕ
│々 ${prefix}itori Ⓕ
│々 ${prefix}kaga Ⓕ
│々 ${prefix}kagura Ⓕ
│々 ${prefix}kakasih Ⓕ
│々 ${prefix}kaori Ⓕ
│々 ${prefix}keneki Ⓕ
│々 ${prefix}kotori Ⓕ
│々 ${prefix}kurumi Ⓕ
│々 ${prefix}loli Ⓕ
│々 ${prefix}loli2 Ⓕ
│々 ${prefix}madara Ⓕ
│々 ${prefix}megumin Ⓕ
│々 ${prefix}mikasa Ⓕ
│々 ${prefix}mikey Ⓕ
│々 ${prefix}miku Ⓕ
│々 ${prefix}minato Ⓕ
│々 ${prefix}naruto Ⓕ
│々 ${prefix}neko Ⓕ
│々 ${prefix}nekonime Ⓕ
│々 ${prefix}nezuko Ⓕ
│々 ${prefix}onepiece Ⓕ
│々 ${prefix}pokemon Ⓕ
│々 ${prefix}randomnime Ⓕ
│々 ${prefix}randomnime2 Ⓕ
│々 ${prefix}rize Ⓕ
│々 ${prefix}sagiri Ⓕ
│々 ${prefix}sakura Ⓕ
│々 ${prefix}sasuke Ⓕ
│々 ${prefix}shina Ⓕ
│々 ${prefix}shinka Ⓕ
│々 ${prefix}shinomiya Ⓕ
│々 ${prefix}shizuka Ⓕ
│々 ${prefix}shota Ⓕ
│々 ${prefix}tejina Ⓕ
│々 ${prefix}toukachan Ⓕ
│々 ${prefix}tsunade Ⓕ
│々 ${prefix}waifu Ⓕ
│々 ${prefix}waifu2 Ⓕ
│々 ${prefix}animewall Ⓕ
│々 ${prefix}yotsuba Ⓕ
│々 ${prefix}yuki Ⓕ
│々 ${prefix}yulibocil Ⓕ
│々 ${prefix}yumeko Ⓕ
│々 ${prefix}8ball Ⓕ
│々 ${prefix}tickle Ⓕ
│々 ${prefix}gecg Ⓕ
│々 ${prefix}feed Ⓕ
│々 ${prefix}animeawoo Ⓕ
│々 ${prefix}animemegumin Ⓕ
│々 ${prefix}animeshinobu Ⓕ
│々 ${prefix}animehandhold Ⓕ
│々 ${prefix}animehighfive Ⓕ
│々 ${prefix}animecringe Ⓕ
│々 ${prefix}animedance Ⓕ
│々 ${prefix}animehappy Ⓕ
│々 ${prefix}animeglomp Ⓕ
│々 ${prefix}animeblush Ⓕ
│々 ${prefix}animesmug Ⓕ
│々 ${prefix}animewave Ⓕ
│々 ${prefix}animesmille Ⓕ
│々 ${prefix}animepoke Ⓕ
│々 ${prefix}animewink Ⓕ
│々 ${prefix}animebonk Ⓕ
│々 ${prefix}animebully Ⓕ
│々 ${prefix}animeyeet Ⓕ
│々 ${prefix}animebite Ⓕ
│々 ${prefix}animelick Ⓕ
│々 ${prefix}animekill Ⓕ
│々 ${prefix}animecry Ⓕ
│々 ${prefix}animewlp Ⓕ
│々 ${prefix}animekiss Ⓕ
│々 ${prefix}animehug Ⓕ
│々 ${prefix}animeneko Ⓕ
│々 ${prefix}animepat Ⓕ
│々 ${prefix}animeslap Ⓕ
│々 ${prefix}animecuddle Ⓕ
│々 ${prefix}animewaifu Ⓕ
│々 ${prefix}animenom Ⓕ
│々 ${prefix}animefoxgirl Ⓕ
│々 ${prefix}animegecg Ⓕ
│々 ${prefix}animetickle Ⓕ
│々 ${prefix}animefeed Ⓕ
│々 ${prefix}animeavatar Ⓕ
│々 ${prefix}anime Ⓕ
╰──────────⳹

⚝───『  Anime NSFW 』───⚝
│々 ${prefix}hentai Ⓕ
│々 ${prefix}gifblowjob Ⓕ
│々 ${prefix}hentaivid Ⓕ
│々 ${prefix}hneko Ⓕ
│々 ${prefix}nwaifu Ⓕ
│々 ${prefix}animespank Ⓕ
│々 ${prefix}trap Ⓕ
│々 ${prefix}blowjob Ⓕ
│々 ${prefix}cuckold Ⓕ
│々 ${prefix}milf Ⓕ
│々 ${prefix}eba Ⓕ
│々 ${prefix}pussy Ⓕ
│々 ${prefix}yuri Ⓕ
│々 ${prefix}zettai Ⓕ
╰──────────⳹

⚝───『  PhotoOxy Maker 』───⚝
│々 ${prefix}shadow Ⓕ 
│々 ${prefix}write Ⓕ 
│々 ${prefix}romantic Ⓕ 
│々 ${prefix}burnpaper Ⓕ
│々 ${prefix}smoke Ⓕ 
│々 ${prefix}narutobanner Ⓕ 
│々 ${prefix}love Ⓕ 
│々 ${prefix}undergrass Ⓕ
│々 ${prefix}doublelove Ⓕ 
│々 ${prefix}coffecup Ⓕ
│々 ${prefix}underwaterocean Ⓕ
│々 ${prefix}smokyneon Ⓕ
│々 ${prefix}starstext Ⓕ
│々 ${prefix}rainboweffect Ⓕ
│々 ${prefix}balloontext Ⓕ
│々 ${prefix}metalliceffect Ⓕ
│々 ${prefix}embroiderytext Ⓕ
│々 ${prefix}flamingtext Ⓕ
│々 ${prefix}stonetext Ⓕ
│々 ${prefix}writeart Ⓕ
│々 ${prefix}summertext Ⓕ
│々 ${prefix}wolfmetaltext Ⓕ
│々 ${prefix}nature3dtext Ⓕ
│々 ${prefix}rosestext Ⓕ
│々 ${prefix}naturetypography Ⓕ
│々 ${prefix}quotesunder Ⓕ
│々 ${prefix}shinetext Ⓕ
╰──────────⳹

⚝───『  Database 』───⚝
│々 ${prefix}setcmd 
│々 ${prefix}delcmd 
│々 ${prefix}listcmd Ⓕ
│々 ${prefix}lockcmd 
│々 ${prefix}addmsg 
│々 ${prefix}delmsg 
│々 ${prefix}getmsg Ⓕ
│々 ${prefix}listmsg Ⓕ
╰──────────⳹

⚝───『  Store 』───⚝
│々 ${prefix}list Ⓕ
│々 ${prefix}store Ⓕ
│々 ${prefix}shop Ⓕ
│々 ${prefix}addlist 
│々 ${prefix}dellist 
╰──────────⳹

⚝───『  Religon 』───⚝
│々 ${prefix}bible Ⓕ
│々 ${prefix}quran Ⓕ
│々 ${prefix}gita Ⓕ
╰──────────⳹

⚝───『  Bug & War 』───⚝
│々 ${prefix}xreact Ⓟ
│々 ${prefix}x Ⓟ
│々 ${prefix}x2 Ⓟ
│々 ${prefix}iosbug Ⓟ
│々 ${prefix}iosbug2 Ⓟ
│々 ${prefix}xaudio Ⓟ
│々 ${prefix}xaudio2 Ⓟ
│々 ${prefix}xsticker Ⓟ
│々 ${prefix}xsticker2 Ⓟ
│々 ${prefix}xloc Ⓟ
│々 ${prefix}xloc2 Ⓟ
│々 ${prefix}xlist Ⓟ
│々 ${prefix}xlist2 Ⓟ
│々 ${prefix}xkill Ⓟ
│々 ${prefix}xkill2 Ⓟ
│々 ${prefix}xkillgc Ⓟ
│々 ${prefix}tempban Ⓟ
│々 ${prefix}xcrash Ⓟ
│々 ${prefix}xcrash2 Ⓟ
│々 ${prefix}xioscrash Ⓟ
│々 ${prefix}xioscrash2 Ⓟ
│々 ${prefix}iosgoogle Ⓟ
│々 ${prefix}iosgoogle2 Ⓟ
│々 ${prefix}iosq Ⓟ
│々 ${prefix}amountbug Ⓟ
│々 ${prefix}pmbug Ⓟ
│々 ${prefix}delaybug Ⓟ
│々 ${prefix}docubug Ⓟ
│々 ${prefix}unlimitedbug Ⓟ
│々 ${prefix}bombug Ⓟ
│々 ${prefix}lagbug Ⓟ
│々 ${prefix}trollybug Ⓟ
│々 ${prefix}gcbug Ⓟ
│々 ${prefix}delaygcbug Ⓟ
│々 ${prefix}laggcbug Ⓟ
│々 ${prefix}bomgcbug Ⓟ
│々 ${prefix}unlimitedgcbug Ⓟ
│々 ${prefix}trollygcbug Ⓟ
│々 ${prefix}docugcbug Ⓟ
│々 ${prefix}verif Ⓟ
│々 ${prefix}banv1 Ⓟ
│々 ${prefix}banv2 Ⓟ
│々 ${prefix}banv3 Ⓟ
│々 ${prefix}banv4 Ⓟ
│々 ${prefix}banv5 Ⓟ
│々 ${prefix}banv6 Ⓟ
│々 ${prefix}unbanv1 Ⓟ
│々 ${prefix}unbanv2 Ⓟ
│々 ${prefix}unbanv3 Ⓟ
│々 ${prefix}unbanv4 Ⓟ
│々 ${prefix}unbanv5 Ⓟ
╰──────────⳹

⚝───『  Other Menu 』───⚝
│々 ${prefix}ping Ⓕ
│々 ${prefix}menu Ⓕ
│々 ${prefix}myip Ⓕ
│々 ${prefix}repo Ⓕ
│々 ${prefix}reportbug Ⓕ
│々 ${prefix}idgroup Ⓕ
│々 ${prefix}owner Ⓕ
│々 ${prefix}rentbot Ⓕ
│々 ${prefix}donate Ⓕ
│々 ${prefix}runtime Ⓕ
│々 ${prefix}checkaccount Ⓕ
╰──────────⳹
`}

global.animemenu = (prefix) => {
return ` ┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Anime 』───⚝
│々 ${prefix}traceanime Ⓕ
│々 ${prefix}akira Ⓕ
│々 ${prefix}akiyama Ⓕ
│々 ${prefix}ana Ⓕ
│々 ${prefix}asuna Ⓕ
│々 ${prefix}ayuzawa Ⓕ
│々 ${prefix}boruto Ⓕ
│々 ${prefix}chiho Ⓕ
│々 ${prefix}chitoge Ⓕ
│々 ${prefix}cosplayloli Ⓕ
│々 ${prefix}cosplaysagiri Ⓕ
│々 ${prefix}deidara Ⓕ
│々 ${prefix}doraemon Ⓕ
│々 ${prefix}elaina Ⓕ
│々 ${prefix}emilia Ⓕ
│々 ${prefix}erza Ⓕ
│々 ${prefix}gremory Ⓕ
│々 ${prefix}hestia Ⓕ
│々 ${prefix}husbu Ⓕ
│々 ${prefix}inori Ⓕ
│々 ${prefix}isuzu Ⓕ
│々 ${prefix}itachi Ⓕ
│々 ${prefix}itori Ⓕ
│々 ${prefix}kaga Ⓕ
│々 ${prefix}kagura Ⓕ
│々 ${prefix}kakasih Ⓕ
│々 ${prefix}kaori Ⓕ
│々 ${prefix}keneki Ⓕ
│々 ${prefix}kotori Ⓕ
│々 ${prefix}kurumi Ⓕ
│々 ${prefix}loli Ⓕ
│々 ${prefix}loli2 Ⓕ
│々 ${prefix}madara Ⓕ
│々 ${prefix}megumin Ⓕ
│々 ${prefix}mikasa Ⓕ
│々 ${prefix}mikey Ⓕ
│々 ${prefix}miku Ⓕ
│々 ${prefix}minato Ⓕ
│々 ${prefix}naruto Ⓕ
│々 ${prefix}neko Ⓕ
│々 ${prefix}nekonime Ⓕ
│々 ${prefix}nezuko Ⓕ
│々 ${prefix}onepiece Ⓕ
│々 ${prefix}pokemon Ⓕ
│々 ${prefix}randomnime Ⓕ
│々 ${prefix}randomnime2 Ⓕ
│々 ${prefix}rize Ⓕ
│々 ${prefix}sagiri Ⓕ
│々 ${prefix}sakura Ⓕ
│々 ${prefix}sasuke Ⓕ
│々 ${prefix}shina Ⓕ
│々 ${prefix}shinka Ⓕ
│々 ${prefix}shinomiya Ⓕ
│々 ${prefix}shizuka Ⓕ
│々 ${prefix}shota Ⓕ
│々 ${prefix}tejina Ⓕ
│々 ${prefix}toukachan Ⓕ
│々 ${prefix}tsunade Ⓕ
│々 ${prefix}waifu Ⓕ
│々 ${prefix}waifu2 Ⓕ
│々 ${prefix}animewall Ⓕ
│々 ${prefix}yotsuba Ⓕ
│々 ${prefix}yuki Ⓕ
│々 ${prefix}yulibocil Ⓕ
│々 ${prefix}yumeko Ⓕ
│々 ${prefix}8ball Ⓕ
│々 ${prefix}tickle Ⓕ
│々 ${prefix}gecg Ⓕ
│々 ${prefix}feed Ⓕ
│々 ${prefix}animeawoo Ⓕ
│々 ${prefix}animemegumin Ⓕ
│々 ${prefix}animeshinobu Ⓕ
│々 ${prefix}animehandhold Ⓕ
│々 ${prefix}animehighfive Ⓕ
│々 ${prefix}animecringe Ⓕ
│々 ${prefix}animedance Ⓕ
│々 ${prefix}animehappy Ⓕ
│々 ${prefix}animeglomp Ⓕ
│々 ${prefix}animeblush Ⓕ
│々 ${prefix}animesmug Ⓕ
│々 ${prefix}animewave Ⓕ
│々 ${prefix}animesmille Ⓕ
│々 ${prefix}animepoke Ⓕ
│々 ${prefix}animewink Ⓕ
│々 ${prefix}animebonk Ⓕ
│々 ${prefix}animebully Ⓕ
│々 ${prefix}animeyeet Ⓕ
│々 ${prefix}animebite Ⓕ
│々 ${prefix}animelick Ⓕ
│々 ${prefix}animekill Ⓕ
│々 ${prefix}animecry Ⓕ
│々 ${prefix}animewlp Ⓕ
│々 ${prefix}animekiss Ⓕ
│々 ${prefix}animehug Ⓕ
│々 ${prefix}animeneko Ⓕ
│々 ${prefix}animepat Ⓕ
│々 ${prefix}animeslap Ⓕ
│々 ${prefix}animecuddle Ⓕ
│々 ${prefix}animewaifu Ⓕ
│々 ${prefix}animenom Ⓕ
│々 ${prefix}animefoxgirl Ⓕ
│々 ${prefix}animegecg Ⓕ
│々 ${prefix}animetickle Ⓕ
│々 ${prefix}animefeed Ⓕ
│々 ${prefix}animeavatar Ⓕ
│々 ${prefix}anime Ⓕ
│々 ${prefix}animequote Ⓕ
╰──────────⳹
`}

global.ownermenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ*
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Owner Menu 』───⚝
│々 ${prefix}autoread 
│々 ${prefix}autobio 
│々 ${prefix}autotype 
│々 ${prefix}unavailable 
│々 ${prefix}autorecord 
│々 ${prefix}autorecordtype 
│々 ${prefix}autoswview 
│々 ${prefix}setautoblock 
│々 ${prefix}setantiforeign 
│々 ${prefix}autoblock 
│々 ${prefix}onlygc 
│々 ${prefix}onlypc 
│々 ${prefix}onlyindia 
│々 ${prefix}onlyindo 
│々 ${prefix}anticall 
│々 ${prefix}self 
│々 ${prefix}public 
│々 ${prefix}join 
│々 ${prefix}poll 
│々 ${prefix}spam 
│々 ${prefix}bc 
│々 ${prefix}bcgroup 
│々 ${prefix}setmenu 
│々 ${prefix}setimgmenu 
│々 ${prefix}setvidmenu 
│々 ${prefix}setgifmenu 
│々 ${prefix}setreply 
│々 ${prefix}setprefix 
│々 ${prefix}addlimit 
│々 ${prefix}dellimit 
│々 ${prefix}resethit 
│々 ${prefix}resetuser 
│々 ${prefix}creategc 
│々 ${prefix}userjid 
│々 ${prefix}setexif 
│々 ${prefix}setbotbio 
│々 ${prefix}delppbot 
│々 ${prefix}shutdown 
│々 ${prefix}setppbot 
│々 ${prefix}addprem 
│々 ${prefix}delprem 
│々 ${prefix}addowner 
│々 ${prefix}delowner 
│々 ${prefix}addvn 
│々 ${prefix}addapk 
│々 ${prefix}addzip 
│々 ${prefix}addpdf 
│々 ${prefix}delapk 
│々 ${prefix}delzip 
│々 ${prefix}delpdf 
│々 ${prefix}delvn 
│々 ${prefix}addsticker 
│々 ${prefix}delsticker 
│々 ${prefix}addimage 
│々 ${prefix}delimage 
│々 ${prefix}addvideo 
│々 ${prefix}delvideo 
│々 ${prefix}addtitle 
│々 ${prefix}deltitle 
│々 ${prefix}upswtext 
│々 ${prefix}upswvideo 
│々 ${prefix}upswimage 
│々 ${prefix}upswaudio 
│々 ${prefix}autosticker 
│々 ${prefix}block 
│々 ${prefix}unblock 
│々 ${prefix}leavegc 
│々 ${prefix}pushcontact 
│々 ${prefix}pushcontactv2 
│々 ${prefix}pushcontactv3 
│々 ${prefix}jpm 
│々 ${prefix}post 
│々 ${prefix}clearall 
│々 ${prefix}pinchat 
│々 ${prefix}unpinchat 
╰──────────⳹
`}

global.othermenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Other Menu 』───⚝
│々 ${prefix}ping Ⓕ
│々 ${prefix}menu Ⓕ
│々 ${prefix}myip Ⓕ
│々 ${prefix}repo Ⓕ
│々 ${prefix}reportbug Ⓕ
│々 ${prefix}idgroup Ⓕ
│々 ${prefix}owner Ⓕ
│々 ${prefix}rentbot Ⓕ
│々 ${prefix}donate Ⓕ
│々 ${prefix}checkaccount Ⓕ
│々 ${prefix}runtime Ⓕ
╰──────────⳹
`}

global.downloadmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Download Menu 』───⚝
│々 ${prefix}xnxxdl Ⓕ
│々 ${prefix}xvideodl Ⓕ
│々 ${prefix}itunes Ⓕ
│々 ${prefix}play Ⓕ
│々 ${prefix}ytmp3 Ⓕ
│々 ${prefix}ytmp4 Ⓕ
│々 ${prefix}tiktok Ⓕ
│々 ${prefix}tiktokaudio Ⓕ
│々 ${prefix}tiktokvideo Ⓕ
│々 ${prefix}tiktokslide Ⓕ
│々 ${prefix}igvideo Ⓕ
│々 ${prefix}igimage Ⓕ
│々 ${prefix}facebook Ⓕ
│々 ${prefix}twitter Ⓕ
│々 ${prefix}capcut Ⓕ
│々 ${prefix}apk Ⓕ
│々 ${prefix}mega Ⓕ
│々 ${prefix}mediafire Ⓕ
│々 ${prefix}google Ⓕ
│々 ${prefix}gimage Ⓕ
│々 ${prefix}weather Ⓕ
│々 ${prefix}spotify Ⓟ
│々 ${prefix}gitclone Ⓕ
│々 ${prefix}happymod Ⓕ
│々 ${prefix}gdrive Ⓕ
│々 ${prefix}pinterest Ⓕ
│々 ${prefix}ringtone Ⓕ
│々 ${prefix}autodownload 
╰──────────⳹
`}

global.groupmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Group Menu 』───⚝
│々 ${prefix}antibot 
│々 ${prefix}readviewonce 
│々 ${prefix}antiviewonce 
│々 ${prefix}welcome 
│々 ${prefix}adminevent 
│々 ${prefix}groupevent 
│々 ${prefix}antiforeign 
│々 ${prefix}antimedia 
│々 ${prefix}antiaudio 
│々 ${prefix}antivideo 
│々 ${prefix}antiimage 
│々 ${prefix}antidocument 
│々 ${prefix}antilocation 
│々 ${prefix}anticontact 
│々 ${prefix}antisticker 
│々 ${prefix}antipoll 
│々 ${prefix}antilink 
│々 ${prefix}antilinkgc 
│々 ${prefix}antipromotion 
│々 ${prefix}antivirtex 
│々 ${prefix}grouplink 
│々 ${prefix}listadmin 
│々 ${prefix}invite 
│々 ${prefix}ephemeral 
│々 ${prefix}delete 
│々 ${prefix}setppgroup 
│々 ${prefix}delppgroup 
│々 ${prefix}setnamegc 
│々 ${prefix}setdesc 
│々 ${prefix}add 
│々 ${prefix}kick 
│々 ${prefix}promote 
│々 ${prefix}demote 
│々 ${prefix}kickall 
│々 ${prefix}promoteall 
│々 ${prefix}demoteall 
│々 ${prefix}getcontact 
│々 ${prefix}savecontact 
│々 ${prefix}sendcontact 
│々 ${prefix}contactag 
│々 ${prefix}hidetag 
│々 ${prefix}totag 
│々 ${prefix}tagall 
│々 ${prefix}editinfo 
│々 ${prefix}opentime 
│々 ${prefix}closetime 
│々 ${prefix}resetlink 
│々 ${prefix}getbio 
│々 ${prefix}vote 
│々 ${prefix}upvote 
│々 ${prefix}downvote 
│々 ${prefix}checkvote 
│々 ${prefix}delvote 
│々 ${prefix}antivirus 
│々 ${prefix}antitoxic 
│々 ${prefix}nsfw 
│々 ${prefix}react 
│々 ${prefix}getjoinrequest 
╰──────────⳹
`}

global.funmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ*
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Fun Menu 』───⚝
│々 ${prefix}define Ⓕ
│々 ${prefix}readmore Ⓕ
│々 ${prefix}fact Ⓕ
│々 ${prefix}couple Ⓕ
│々 ${prefix}soulmate Ⓕ
│々 ${prefix}stupidcheck Ⓕ
│々 ${prefix}handsomecheck Ⓕ
│々 ${prefix}uncleancheck Ⓕ
│々 ${prefix}hotcheck Ⓕ
│々 ${prefix}smartcheck Ⓕ
│々 ${prefix}greatcheck Ⓕ
│々 ${prefix}evilcheck Ⓕ
│々 ${prefix}dogcheck Ⓕ
│々 ${prefix}coolcheck Ⓕ
│々 ${prefix}waifucheck Ⓕ
│々 ${prefix}awesomecheck Ⓕ
│々 ${prefix}gaycheck Ⓕ
│々 ${prefix}cutecheck Ⓕ
│々 ${prefix}lesbiancheck Ⓕ
│々 ${prefix}hornycheck Ⓕ
│々 ${prefix}prettycheck Ⓕ
│々 ${prefix}lovelycheck Ⓕ
│々 ${prefix}uglycheck Ⓕ
│々 ${prefix}pick Ⓕ
│々 ${prefix}pickupline Ⓕ
│々 ${prefix}quotes Ⓕ
│々 ${prefix}can Ⓕ
│々 ${prefix}is Ⓕ
│々 ${prefix}when Ⓕ
│々 ${prefix}where Ⓕ
│々 ${prefix}what Ⓕ
│々 ${prefix}how Ⓕ
│々 ${prefix}rate Ⓕ
│々 ${prefix}cry Ⓕ
│々 ${prefix}kill Ⓕ
│々 ${prefix}hug Ⓕ
│々 ${prefix}pat Ⓕ
│々 ${prefix}lick Ⓕ 
│々 ${prefix}kiss Ⓕ
│々 ${prefix}bite Ⓕ
│々 ${prefix}yeet Ⓕ
│々 ${prefix}bully Ⓕ
│々 ${prefix}bonk Ⓕ
│々 ${prefix}wink Ⓕ
│々 ${prefix}poke Ⓕ
│々 ${prefix}nom Ⓕ
│々 ${prefix}slap Ⓕ
│々 ${prefix}smile Ⓕ 
│々 ${prefix}wave Ⓕ
│々 ${prefix}awoo Ⓕ
│々 ${prefix}blush Ⓕ
│々 ${prefix}smug Ⓕ
│々 ${prefix}glomp Ⓕ 
│々 ${prefix}happy Ⓕ
│々 ${prefix}dance Ⓕ
│々 ${prefix}cringe Ⓕ
│々 ${prefix}cuddle Ⓕ
│々 ${prefix}highfive Ⓕ 
│々 ${prefix}shinobu Ⓕ
│々 ${prefix}handhold Ⓕ
│々 ${prefix}spank Ⓕ
│々 ${prefix}tickle Ⓕ
│々 ${prefix}avatar Ⓕ
│々 ${prefix}feed Ⓕ
│々 ${prefix}fox_girl Ⓕ
│々 ${prefix}gecg Ⓕ
│々 ${prefix}checkme Ⓕ
│々 ${prefix}sound1 - sound161 Ⓕ
╰──────────⳹
`}

global.stalkermenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Stalker 』───⚝
│々 ${prefix}tiktokstalk Ⓕ
│々 ${prefix}mlstalk Ⓕ
│々 ${prefix}npmstalk Ⓕ
│々 ${prefix}ghstalk Ⓕ
╰──────────⳹
`}

global.stickermenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Sticker 』───⚝
│々 ${prefix}goose Ⓕ
│々 ${prefix}woof Ⓕ
│々 ${prefix}8ball Ⓕ
│々 ${prefix}lizard Ⓕ
│々 ${prefix}meow Ⓕ
│々 ${prefix}gura Ⓕ
│々 ${prefix}doge Ⓕ
│々 ${prefix}patrick Ⓕ
│々 ${prefix}lovestick Ⓕ
│々 ${prefix}telestick Ⓕ
│々 ${prefix}ttp Ⓕ
╰──────────⳹
`}

global.databasemenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Database 』───⚝
│々 ${prefix}setcmd 
│々 ${prefix}delcmd 
│々 ${prefix}listcmd Ⓕ
│々 ${prefix}lockcmd 
│々 ${prefix}addmsg 
│々 ${prefix}delmsg 
│々 ${prefix}getmsg Ⓕ
│々 ${prefix}listmsg Ⓕ
╰──────────⳹
`}

global.storemenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Store 』───⚝
│々 ${prefix}list Ⓕ
│々 ${prefix}store Ⓕ
│々 ${prefix}shop Ⓕ
│々 ${prefix}addlist 
│々 ${prefix}dellist 
╰──────────⳹
`}

global.aimenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ*
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  OpenAI 』───⚝
│々 ${prefix}openai-indo Ⓕ
│々 ${prefix}ai-indo Ⓕ
│々 ${prefix}diffusion Ⓕ
│々 ${prefix}photoleap Ⓕ
│々 ${prefix}openai Ⓕ
│々 ${prefix}dalle Ⓕ
│々 ${prefix}ai Ⓕ
│々 ${prefix}remini Ⓕ
│々 ${prefix}simi Ⓕ
│々 ${prefix}removebg Ⓕ
│々 ${prefix}tozombie Ⓕ
╰──────────⳹
`}

global.bugmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Bug & War 』───⚝
│々 ${prefix}xreact Ⓟ
│々 ${prefix}x Ⓟ
│々 ${prefix}x2 Ⓟ
│々 ${prefix}iosbug Ⓟ
│々 ${prefix}iosbug2 Ⓟ
│々 ${prefix}xaudio Ⓟ
│々 ${prefix}xaudio2 Ⓟ
│々 ${prefix}xsticker Ⓟ
│々 ${prefix}xsticker2 Ⓟ
│々 ${prefix}xloc Ⓟ
│々 ${prefix}xloc2 Ⓟ
│々 ${prefix}xlist Ⓟ
│々 ${prefix}xlist2 Ⓟ
│々 ${prefix}xkill Ⓟ
│々 ${prefix}xkill2 Ⓟ
│々 ${prefix}xkillgc Ⓟ
│々 ${prefix}tempban Ⓟ
│々 ${prefix}xcrash Ⓟ
│々 ${prefix}xcrash2 Ⓟ
│々 ${prefix}xioscrash Ⓟ
│々 ${prefix}xioscrash2 Ⓟ
│々 ${prefix}iosgoogle Ⓟ
│々 ${prefix}iosgoogle2 Ⓟ
│々 ${prefix}iosq Ⓟ
│々 ${prefix}amountbug Ⓟ
│々 ${prefix}pmbug Ⓟ
│々 ${prefix}delaybug Ⓟ
│々 ${prefix}docubug Ⓟ
│々 ${prefix}unlimitedbug Ⓟ
│々 ${prefix}bombug Ⓟ
│々 ${prefix}lagbug Ⓟ
│々 ${prefix}trollybug Ⓟ
│々 ${prefix}gcbug Ⓟ
│々 ${prefix}delaygcbug Ⓟ
│々 ${prefix}laggcbug Ⓟ
│々 ${prefix}bomgcbug Ⓟ
│々 ${prefix}unlimitedgcbug Ⓟ
│々 ${prefix}trollygcbug Ⓟ
│々 ${prefix}docugcbug Ⓟ
│々 ${prefix}verif Ⓟ
│々 ${prefix}banv1 Ⓟ
│々 ${prefix}banv2 Ⓟ
│々 ${prefix}banv3 Ⓟ
│々 ${prefix}banv4 Ⓟ
│々 ${prefix}banv5 Ⓟ
│々 ${prefix}banv6 Ⓟ
│々 ${prefix}unbanv1 Ⓟ
│々 ${prefix}unbanv2 Ⓟ
│々 ${prefix}unbanv3 Ⓟ
│々 ${prefix}unbanv4 Ⓟ
│々 ${prefix}unbanv5 Ⓟ
╰──────────⳹
`}

global.randphotomenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Random Photo 』───⚝
│々 ${prefix}aesthetic Ⓕ
│々 ${prefix}coffee Ⓕ
│々 ${prefix}wikimedia Ⓕ
│々 ${prefix}wallpaper Ⓕ
│々 ${prefix}art Ⓕ
│々 ${prefix}bts Ⓕ
│々 ${prefix}dogwoof Ⓕ
│々 ${prefix}catmeow Ⓕ
│々 ${prefix}lizardpic Ⓕ
│々 ${prefix}goosebird Ⓕ
│々 ${prefix}8ballpool Ⓕ
│々 ${prefix}cosplay Ⓕ
│々 ${prefix}hacker Ⓕ
│々 ${prefix}cyber Ⓕ
│々 ${prefix}gamewallpaper Ⓕ
│々 ${prefix}islamic Ⓕ
│々 ${prefix}jennie Ⓕ
│々 ${prefix}jiso Ⓕ
│々 ${prefix}satanic Ⓕ
│々 ${prefix}justina Ⓕ
│々 ${prefix}cartoon Ⓕ
│々 ${prefix}pentol Ⓕ
│々 ${prefix}cat Ⓕ
│々 ${prefix}kpop Ⓕ
│々 ${prefix}exo Ⓕ
│々 ${prefix}lisa Ⓕ
│々 ${prefix}space Ⓕ
│々 ${prefix}car Ⓕ
│々 ${prefix}technology Ⓕ
│々 ${prefix}bike Ⓕ
│々 ${prefix}shortquote Ⓕ
│々 ${prefix}antiwork Ⓕ
│々 ${prefix}hacking Ⓕ
│々 ${prefix}boneka Ⓕ
│々 ${prefix}rose Ⓕ
│々 ${prefix}ryujin Ⓕ
│々 ${prefix}ulzzangboy Ⓕ
│々 ${prefix}ulzzanggirl Ⓕ
│々 ${prefix}wallml Ⓕ
│々 ${prefix}wallphone Ⓕ
│々 ${prefix}mountain Ⓕ
│々 ${prefix}goose Ⓕ
│々 ${prefix}profilepic Ⓕ
│々 ${prefix}couplepp Ⓕ
│々 ${prefix}programming Ⓕ
│々 ${prefix}pubg Ⓕ
│々 ${prefix}blackpink Ⓕ
│々 ${prefix}randomboy Ⓕ  
│々 ${prefix}randomgirl Ⓕ
│々 ${prefix}hijab Ⓕ  
│々 ${prefix}chinese Ⓕ
│々 ${prefix}indo Ⓕ
│々 ${prefix}japanese Ⓕ
│々 ${prefix}korean Ⓕ
│々 ${prefix}malay Ⓕ
│々 ${prefix}thai Ⓕ
│々 ${prefix}vietnamese Ⓕ
╰──────────⳹
`}

global.randvideomenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Random Video 』───⚝
│々 ${prefix}tiktokgirl Ⓕ
│々 ${prefix}tiktoknukthy Ⓕ
│々 ${prefix}tiktokkayes Ⓕ
│々 ${prefix}tiktokpanrika Ⓕ
│々 ${prefix}tiktoknotnot Ⓕ
│々 ${prefix}tiktokghea Ⓕ
│々 ${prefix}tiktoksantuy Ⓕ
│々 ${prefix}tiktokbocil Ⓕ
╰──────────⳹
`}

global.photooxymenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ*
 │   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  PhotoOxy Maker 』───⚝
│々 ${prefix}shadow Ⓕ 
│々 ${prefix}write Ⓕ 
│々 ${prefix}romantic Ⓕ 
│々 ${prefix}burnpaper Ⓕ
│々 ${prefix}smoke Ⓕ 
│々 ${prefix}narutobanner Ⓕ 
│々 ${prefix}love Ⓕ 
│々 ${prefix}undergrass Ⓕ
│々 ${prefix}doublelove Ⓕ 
│々 ${prefix}coffecup Ⓕ
│々 ${prefix}underwaterocean Ⓕ
│々 ${prefix}smokyneon Ⓕ
│々 ${prefix}starstext Ⓕ
│々 ${prefix}rainboweffect Ⓕ
│々 ${prefix}balloontext Ⓕ
│々 ${prefix}metalliceffect Ⓕ
│々 ${prefix}embroiderytext Ⓕ
│々 ${prefix}flamingtext Ⓕ
│々 ${prefix}stonetext Ⓕ
│々 ${prefix}writeart Ⓕ
│々 ${prefix}summertext Ⓕ
│々 ${prefix}wolfmetaltext Ⓕ
│々 ${prefix}nature3dtext Ⓕ
│々 ${prefix}rosestext Ⓕ
│々 ${prefix}naturetypography Ⓕ
│々 ${prefix}quotesunder Ⓕ
│々 ${prefix}shinetext Ⓕ
╰──────────⳹
`}

global.nsfwmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Anime NSFW 』───⚝
│々 ${prefix}hentai Ⓕ
│々 ${prefix}gifblowjob Ⓕ
│々 ${prefix}hentaivid Ⓕ
│々 ${prefix}hneko Ⓕ
│々 ${prefix}nwaifu Ⓕ
│々 ${prefix}animespank Ⓕ
│々 ${prefix}trap Ⓕ
│々 ${prefix}blowjob Ⓕ
│々 ${prefix}cuckold Ⓕ
│々 ${prefix}milf Ⓕ
│々 ${prefix}eba Ⓕ
│々 ${prefix}pussy Ⓕ
│々 ${prefix}yuri Ⓕ
│々 ${prefix}zettai Ⓕ
╰──────────⳹
`}

global.gamemenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Game 』───⚝
│々 ${prefix}truth Ⓕ
│々 ${prefix}dare Ⓕ
│々 ${prefix}suit Ⓕ
│々 ${prefix}tictactoe Ⓕ
│々 ${prefix}math Ⓕ
╰──────────⳹
`}

global.religionmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Religon 』───⚝
│々 ${prefix}bible Ⓕ
│々 ${prefix}quran Ⓕ
│々 ${prefix}gita Ⓕ
╰──────────⳹
`}

global.searchmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Search 』───⚝
│々 ${prefix}google Ⓕ
│々 ${prefix}wikipedia Ⓕ
│々 ${prefix}ytsearch Ⓕ
│々 ${prefix}xnxxsearch Ⓕ
│々 ${prefix}xvideosearch Ⓕ
│々 ${prefix}apksearch Ⓕ
│々 ${prefix}stickersearch Ⓕ
│々 ${prefix}imdb Ⓕ
│々 ${prefix}wanumber Ⓕ
│々 ${prefix}friend Ⓕ
│々 ${prefix}lyrics Ⓕ
╰──────────⳹
`}

global.convertmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  Convert 』───⚝
│々 ${prefix}obfuscate Ⓕ
│々 ${prefix}styletext Ⓕ
│々 ${prefix}fliptext Ⓕ
│々 ${prefix}tts Ⓕ
│々 ${prefix}say Ⓕ
│々 ${prefix}togif Ⓕ
│々 ${prefix}toqr Ⓕ
│々 ${prefix}bass Ⓕ
│々 ${prefix}blown Ⓕ
│々 ${prefix}deep Ⓕ
│々 ${prefix}earrape Ⓕ
│々 ${prefix}fast Ⓕ
│々 ${prefix}fat Ⓕ
│々 ${prefix}nightcore Ⓕ
│々 ${prefix}reverse Ⓕ
│々 ${prefix}robot Ⓕ
│々 ${prefix}slow Ⓕ
│々 ${prefix}smooth Ⓕ
│々 ${prefix}squirrel Ⓕ
│々 ${prefix}tinyurl Ⓕ
│々 ${prefix}tovn Ⓕ
│々 ${prefix}toaudio Ⓕ
│々 ${prefix}tomp3 Ⓕ
│々 ${prefix}tomp4Ⓕ
│々 ${prefix}toimg Ⓕ
│々 ${prefix}toonce Ⓕ
│々 ${prefix}sticker Ⓕ
│々 ${prefix}smeme Ⓕ
│々 ${prefix}smeta Ⓕ
│々 ${prefix}take Ⓟ
│々 ${prefix}emoji Ⓕ
│々 ${prefix}volaudio Ⓕ
│々 ${prefix}volvideo Ⓕ
│々 ${prefix}ebinary Ⓕ
│々 ${prefix}dbinary Ⓕ
│々 ${prefix}ssweb Ⓕ
│々 ${prefix}quoted Ⓕ
│々 ${prefix}translate Ⓕ
╰──────────⳹
`}

global.listmenu = (prefix) => {
return `┍─────── *I N F O  C M D* 
│々 *Ⓟ* = *Premium*
│々 *Ⓕ* = *Free*
╰──────────⳹

┍─────── *I N F O*
│々 *ɴᴀᴍᴀ ʙᴏᴛ*  : ${global.botname}
│々 *ᴄʀᴇᴀᴛᴏʀ*   : ${global.creator}
│々 *ᴍʏ ᴄʜᴀɴɴᴇʟ* : ${global.ytname}
╰──────────⳹

┍─────── *Q U O T E S*
│々 *ᴋᴀᴛᴀ ᴋᴀᴛᴀ ᴜɴᴛᴜᴋ ʜᴀʀɪ ɪɴɪ*
│々 *ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʜᴜ ᴜɴᴛᴜᴋ* 
│   *ʙᴇʀsᴀɴᴅᴀʀ,*
│々 *ᴍᴀsɪʜ ᴀᴅᴀ ɢᴏʀᴇɴɢᴀɴ*
│々 *ᴜɴᴛᴜᴋ ᴅɪᴅᴀʜᴀʀ.*
╰──────────⳹

⚝───『  List 』───⚝
│々 ${prefix}listprem Ⓕ
│々 ${prefix}listowner Ⓕ
│々 ${prefix}liststicker Ⓕ
│々 ${prefix}listimage Ⓕ
│々 ${prefix}listvideo Ⓕ
│々 ${prefix}listvn Ⓕ
│々 ${prefix}listapk Ⓕ
│々 ${prefix}listzip Ⓕ
│々 ${prefix}listpdf Ⓕ
│々 ${prefix}listbadword Ⓕ
│々 ${prefix}listpc Ⓕ
│々 ${prefix}listgc Ⓕ
╰──────────⳹
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})