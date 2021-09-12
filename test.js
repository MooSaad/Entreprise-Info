import app from './app';

describe("Test the siren path", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/:siren")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
//   });
  
//   test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//       await fetchData();
//     } catch (e) {
//       expect(e).toMatch('error');
//     }
//   });