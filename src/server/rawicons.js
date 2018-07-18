import fs from 'fs';

export default function rawdoc(fileName) {
  const dir = 'src/helpers/';
  const content = fs.readFileSync(dir + fileName.src, 'utf8');
  return content.toString();
}
