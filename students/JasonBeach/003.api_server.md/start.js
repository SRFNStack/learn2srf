import spliffy from '@srfnstack/spliffy'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

spliffy({routeDir: join(__dirname, 'src/public')})

