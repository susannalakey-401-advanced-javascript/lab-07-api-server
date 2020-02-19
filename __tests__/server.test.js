const { server } = require('../lib/server.js');

const supertest = require('supertest');

const mockRequest = supertest(server);


describe('the server', () => {

  it('should give a correct response when we GET from /craftProjects', () => {
    return mockRequest
      .get('/craftProjects')
      .then(results => {
        expect(results.status).toBe(200);
      })
  })

  it('adds a new project when making a POST request to /craftProjects', () => {
    const newEntry = {
      created_by: 'Sara Miller',
      project_name: 'shawl',
      craftId: 2
    }
    return mockRequest
      .post('/craftProjects')
      .send(newEntry)
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.body.created_by).toEqual('Sara Miller');
      })
  })

  it('updates an object when making a PUT request to /craftProjects/:id', () => {

    const updateEntry = {
      created_by: 'Steve Howard',
      project_name: 'blanket',
      craftId: 2,
      id: 2
    }
    return mockRequest
      .put('/craftProjects/:id')
      .send(updateEntry)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.created_by).toEqual('Steve Howard');
      })
  })

  it('deletes an entry when making a DELETE request to /craftProjects/:id', () => {
    return mockRequest
      .delete('/craftProjects/:id')
      .then(results => {
        expect(results.status).toBe(204);
      })
  })



  it('should give a correct response when we GET from /craftTypes', () => {
    return mockRequest
      .get('/craftTypes')
      .then(results => {
        expect(results.status).toBe(200);
      })
  })

  it('adds a new project when making a POST request to /craftTypes', () => {
    const newEntry = {
      name: 'cross-stitch',
      media: 'thread',
      id: 4
    }
    return mockRequest
      .post('/craftTypes')
      .send(newEntry)
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.body.name).toEqual('cross-stitch');
      })
  })

  it('updates an object when making a PUT request to /craftTypes/:id', () => {

    const updateEntry = {
      name: "crochet",
      media: "yarn",
      id: 1
    }
    return mockRequest
      .put('/craftTypes/:id')
      .send(updateEntry)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toEqual('crochet');
      })
  })

  it('deletes an entry when making a DELETE request to /craftTypes/:id', () => {
    return mockRequest
      .delete('/craftTypes/:id')
      .then(results => {
        expect(results.status).toBe(204);
        // not sure this is actually testing anything
        expect(results.body.created_by).toBeUndefined();
      })
  })

})


