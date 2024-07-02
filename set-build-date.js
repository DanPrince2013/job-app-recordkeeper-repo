const fs = require('fs');
const path = require('path');

const buildDate = new Date().toLocaleString();
const envFilePath = path.resolve(__dirname, '.env');

fs.writeFileSync(envFilePath, `REACT_APP_BUILD_DATE="${buildDate}"\n`, { flag: 'w' });

console.log(`Build date set to: ${buildDate}`);
