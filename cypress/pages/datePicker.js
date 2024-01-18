export class DatePicker {
    navigateDatePicker() {
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("/date-picker");
    }

    selectDateRandom(datepickerId) {
        const dateRandom = this.generateDateRandom(
            new Date(1990, 0, 1),
            new Date(2100, 11, 31)
          );
        const formattedDate = this.formatDate(dateRandom);
        cy.get(`#${datepickerId}`).should("exist").clear().type(formattedDate).click();
    }
    generateDateRandom(startDate, endDate) {
        const startTime = startDate.getTime();
        const endTime = endDate.getTime();
        const randomTime = startTime + Math.random() * (endTime - startTime);
        return new Date(randomTime);
      }
      formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${month}/${day}/${year}`;
      }
      selectRandomHour() {
        const hourRandom = this.generateHourRandom();
        const hour = `${hourRandom}`;
        cy.get("#dateAndTimePickerInput").type(hour);
      }
      generateHourRandom() {
        const hoursRandom = Math.floor(Math.random() * 24);
        const minutesRandom = Math.floor(Math.random() * 4) * 15;
        return `${hoursRandom.toString().padStart(2, "0")}:${minutesRandom
          .toString()
          .padStart(2, "0")}`;
      }
      closeDatePicker() {
        cy.get("body").click();
      }

}