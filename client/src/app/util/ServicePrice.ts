/**
 * TODO: Note that in production costing should all be handled server side
 * This is a temp solution to get costing into the site.
 */

export class ServicePrice {

  /**
   * Calculates the total cost for the given rate and duration.
   * @param {number} service_rate The rate for the service
   * @param {string} rate_type The rate type for the service, HOURLY, DAILY, ONCE
   * @param {Date} start_date The time of the service start
   * @param {Date} end_date The time of the service end
   * @returns {string} A string representation of the total cost
   */
  public static servicePriceString(service_rate: number, rate_type: string, start_date: Date, end_date: Date): string  {

    console.log('servicePriceString called');
    console.log('service_rate: ' + service_rate);
    console.log('rate_type: ' + rate_type);
    console.log('start_date: ' + start_date);
    console.log('end_date: ' + end_date);

    const duration = (end_date.getTime() - start_date.getTime()); // In ms since epoch
    let priceString = '$ ';

    /**
     * Conversion for milliseconds to hours
     * @type {number}
     */
    const MS_TO_HOURS  = 2.77778e-7;

    /**
     * Conversion for milliseconds to days
     * @type {number}
     */
    const MS_TO_DAYS = 1.15741e-8;

    switch (rate_type) {
      case 'ONCE': {
        priceString += service_rate.toFixed(2).toString();
        break;
      }
      case 'HOURLY': {
        console.log('HOURLY');
        const price = service_rate * (duration * MS_TO_HOURS);
        priceString += price.toFixed(2).toString();
        break;
      }
      case 'DAILY': {
        console.log('DAILY');
        const durationDays = Math.floor(duration * MS_TO_DAYS);
        const chargeDuration = durationDays > 1 ? durationDays : 1;
        const price =  chargeDuration * service_rate;
        priceString += price.toFixed(2).toString();

        break;
      }
      default: {
        console.log('DEFAULT');
        priceString += '0';
        break;
      }
    }

    return priceString;
  }


}
