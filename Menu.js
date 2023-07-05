const fs = require('fs')
const chalk = require('chalk')
const prefix = "!"

global.menu = `╔╗╔╗──╔═╗──╔═╗    
║║╠╬═╦╣═╣╔═╣═╬═╗ 
║╚╣║║║╠═║║╬║╔╣═╣
╚═╩╩╩═╩═╝╚═╩╝╚═╝
━━━━━━━━━━━━━━━━━━━
Main Menu
━━━━━━━━━━━━━━━━━━━
え ${prefix}Jasabanned
え ${prefix}Bugmenu
え ${prefix}Sc
え ${prefix}Payment
え ${prefix}Linkgc
え ${prefix}Grup on/off
え ${prefix}Revoke
え ${prefix}Hidetag
え ${prefix}Promote
え ${prefix}Demote
え ${prefix}Kick
━━━━━━━━━━━━━━━━━━━`
/*=====================[END]=======================*/
/*==================[BUG MENU]====================*/

global.bugmenu =`╔╗╔╗──╔═╗──╔═╗    
║║╠╬═╦╣═╣╔═╣═╬═╗ 
║╚╣║║║╠═║║╬║╔╣═╣
╚═╩╩╩═╩═╝╚═╩╝╚═╝
━━━━━━━━━━━━━━━━━━━
Banned & Unbanned
━━━━━━━━━━━━━━━━━━━
え ${prefix}Jasabanned
え ${prefix}Verif
え ${prefix}Logout
え ${prefix}Kenon
え ${prefix}Kenonwa
え ${prefix}Unbanv1
え ${prefix}Unbanv2
え ${prefix}Unbanv3
え ${prefix}Unbanv4
え ${prefix}Unbanv5
え ${prefix}Unbanv6
え ${prefix}Unbanv7
え ${prefix}Unbanv8
え ${prefix}Unbanv9
え ${prefix}Unbanv10
━━━━━━━━━━━━━━━━━━━
Bug Emoji
━━━━━━━━━━━━━━━━━━━
え ${prefix}😭 628xxx
え ${prefix}😈 628xxx
え ${prefix}🤬 628xxx 
え ${prefix}😡 628xxx
え ${prefix}😎 628xxx
え ${prefix}🔥 628xxx
え ${prefix}🗿 628xxx
━━━━━━━━━━━━━━━━━━━
Bug Attack
━━━━━━━━━━━━━━━━━━━
え ${prefix}Linsori 628xxx
え ${prefix}Linsbussines 628xxx
え ${prefix}Linsbot 628xxx
え ${prefix}Linslebew 628xxx
え ${prefix}Linsboy 628xxx
え ${prefix}Linsturu 628xxx
え ${prefix}Mati 628xxx
え ${prefix}Darkness 628xxx
え ${prefix}Bom 628xxx
え ${prefix}Turu 628xxx
え ${prefix}Santet 628xxx
え ${prefix}Crash 628xxx
え ${prefix}Bug 628xxx
━━━━━━━━━━━━━━━━━━━`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})