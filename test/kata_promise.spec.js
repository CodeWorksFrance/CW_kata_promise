const cat_fact_api = require('../src/cat_fact_api')

describe('cat_fact_api', () => {
    it('should retrieve a fact about cats', () => {
        const result = cat_fact_api()
        expect(result.fact).not.toBeUndefined()
        expect(result.length).toBeGreaterThan(0)
    })
})
