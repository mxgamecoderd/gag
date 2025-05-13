let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;Qasim;;;
FN:⚢✞ D@¥ID✞⚢
ORG:GlobalTechInfo
TITLE:Owner
item1.TEL;waid=2349163960277:2349163960277
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:⚢✞ D@¥ID✞⚢
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: '⚢✞ D@¥ID✞⚢',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
