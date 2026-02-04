import { createClient } from 'contentful';

const client = createClient({
    space: 'mplebvs8ss4g',
    environment: 'master',
    accessToken: '1WBoH0kMARn938Vze-E6VuubEaDuoTtrcLXjMYA4Ttg'
});

client.getEntry('5eeirVxu0SVpbnZP1uqRFJ')
    .then((entry) => console.log(JSON.stringify(entry, null, 2)))
    .catch(console.error);
