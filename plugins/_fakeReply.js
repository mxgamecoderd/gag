
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', sourceUrl: 'https://whatsapp.com/2349163960277' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'INSTAGRAM', body: 'Keep bot alive', thumbnailUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', sourceUrl: 'https://whatsapp.com/channel/0029Vb6ef6kLikg2KuwvOp03' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', mediaType: 'VIDEO', description: 'SUBSCRIBE : YT CHANNEL', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', sourceUrl: 'https://whatsapp.com/channel/0029Vb6ef6kLikg2KuwvOp03' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'FOLLOW CHANNEL', body: '© ⚢✞ D@¥ID✞⚢', thumbnailUrl: 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg', sourceUrl: 'https://whatsapp.com/channel/0029Vb6ef6kLikg2KuwvOp03' }}}
    
} 
export default handler
