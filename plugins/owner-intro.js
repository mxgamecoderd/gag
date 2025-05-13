import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Fetch environment variables with defaults
    const OwnerName = process.env.OWNER_NAME || '⚢✞ D@¥ID✞⚢';
    const timeZone = process.env.TIME_ZONE || 'NIGERIA';
    const profession = process.env.OWNER_STATUS || '𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁';
    const skills = process.env.OWNER_SKILLS || '𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃';
    const language = process.env.LANGUAGE || '𝙴𝙽𝙶𝙻𝙸𝚂𝙷,𝚄𝚁𝙳𝚄';
    const project = process.env.BOTNAME || '𝚀𝚄𝙴𝙴𝙽 𝙹𝙴𝚂𝚂𝙸𝙲𝙰 𝚇𝙼𝙳';
    const hobbies = process.env.HOBBIES || '𝙲𝙾𝙳𝙸𝙽𝙶,𝙱𝙾𝚃𝚂';

    // Expanded intro card text with additional fields
    const introText = `
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name    : ${OwnerName}
 ◈ •│
 ◈ •│ Place     : ${timeZone}
 ◈ •│
 ◈ •│ Gender  : 𝙼𝙰𝙻𝙴
 ◈ •│
 ◈ •│ Age        : 𝟸𝟼_
 ◈ •│
 ◈ •│ Status   : ${profession}
 ◈ •│
 ◈ •│ Skills     : ${skills}
 ◈ •│
 ◈ •│ Lang     : ${language}
 ◈ •│
 ◈ •│ Project  : ${project}
 ◈ •│
 ◈ •│ Hobbie  : ${hobbies}
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
    `;

    let pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    // Try fetching the profile picture of the sender
    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://whatsapp.com/channel/0029Vb6ef6kLikg2KuwvOp03'; // Example source URL for the card
    const OwnerImg = 'https://i.ibb.co/r2KDNHS3/Whats-App-Image-2025-05-13-at-07-53-48-20d63e06.jpg';
    const contextInfo = {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '𝚀𝚄𝙴𝙴𝙽 𝙹𝙴𝚂𝚂𝙸𝙲𝙰 𝚇𝙼𝙳', // Title of the card
        body: '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯',
        thumbnailUrl: OwnerImg, // Fixed URL syntax with quotes
        mediaUrl: pp,  // Corrected to use profile picture URL fetched
        sourceUrl: sourceUrl, // Source URL for the card
      },
    };

    // Send the message with the extended intro text and external ad reply
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^owner|intro|duction$/i;

export default handler;
