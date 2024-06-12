const { client, clientPromise } = jest.requireActual('./__mocks__/mongodbMock');

jest.mock('./__mocks__/mongodbMock', () => {
  return {
    __esModule: true,
    default: clientPromise,
  };
});

// afterAll(async () => {
//   await client?.close()
// })