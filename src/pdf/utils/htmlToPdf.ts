import { create } from 'html-pdf';

export const htmlPastor = async (bufferHmll: Buffer) => {
  return new Promise((resolve, reject) => {
    const html = bufferHmll.toString();

    create(html, {
      type: 'pdf',
      format: 'A4',
      orientation: 'portrait',
    }).toBuffer((err, buffer) => {
      if (err) reject(err);

      resolve(buffer);
    });
  });
};
