import { DatePicker } from "../pages/datePicker";
const picker = new DatePicker()
describe("Should select a random date", () => {
    beforeEach(() => {
        picker.navigateDatePicker()
    })
    it("User select date on datePicker", () => {
        picker.selectRandomDate(inputDateOne)
        picker.closeDatePicker()
    })
    it("User select date and hour", () => {
        picker.selectRandomDate(inputDateTwo)
        picker.selectRandomHour()
        picker.closeDatePicker()
    })
})