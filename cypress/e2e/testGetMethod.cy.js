import { GetMethod } from "../pages/getMethod";
const getMethod = new GetMethod()
beforeEach(() => {
    getMethod.navigateGetMethod()
  });
describe("Review GET method and validate status code and TITLE",() => {
    beforeEach(() => {
        getMethod.performGET('https://demoqa.com/BookStore/v1/Books');
      });
    
      it('Should validate the status code, data type and print TITLE', () => {
        getMethod.validateResponse();
      });
})