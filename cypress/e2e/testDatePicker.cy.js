import { DatePicker } from "../pages/datePicker";
const picker = new DatePicker()
describe("Should select a random date", () => {
    beforeEach(() => {
        picker.navigateDatePicker()
    })
    it("User select date on datePicker", () => {
        picker.selectRandomDate()
        picker.closeDatePicker()
    })
    it("User select date and hour", () => {
        picker.selectRandomDateTwo()
        picker.selectRandomHour()
        picker.closeDatePicker()
    })
})