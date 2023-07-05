// Multi Device Jadi Wajib Scan No Copy² Session.
// Create by @LinsBotz
//      WhatsApp : wa.me/6281911317205
//      Youtube : youtube.com/@LinsBotz
//      Instagram : instagram.com/rijalsavior


const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const mycolor = (text, color) => {
	return !color ? chalk.greenBright('[ BOT-MD ] ') + chalk.magentaBright(text) : chalk.greenBright('[ BOT-MD ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	mycolor
}
