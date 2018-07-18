import fs from 'fs';

export default function rawdoc(componentName) {
  const dir = 'src/app/';
  const content = fs.readFileSync(dir + componentName.src, 'utf8');
  return content.toString();
}

