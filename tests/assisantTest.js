const { processQuery } = require('../core/assistant');

describe('Assistant functionlity', () => {
    test('It should process a query', async () => {
        const response = await processQuery('Hello');
        expect(response).not.toBeUndefined();
    });
});