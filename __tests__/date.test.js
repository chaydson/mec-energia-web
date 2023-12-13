import {sendFormattedDate} from '../src/utils/date'
import '@testing-library/jest-dom'
 

describe('Test Date Functions', () => {
  it('tests sendFormattedDate with date object', () => {
    const testedDate =  new Date("2021-05-02T00:00:00")
    const formattedExpected = "2021-05-02";

    expect(sendFormattedDate(testedDate)).toBe(formattedExpected);
  })


})



