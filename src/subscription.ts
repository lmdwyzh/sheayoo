import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 500,
  name: 'Subscription',
  version: 0,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri:
    'https://fastly.jsdelivr.net/gh/lmdwyzh/sheayoo@main/dist/gkd.json5 ',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
