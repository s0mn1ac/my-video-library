export class DateFormatConstants {

  public static DATE_REPORT_FORMAT: string = 'YYYY-MM-DD';
  public static DATE_TIME_REPORT_FORMAT: string = 'YYYY-MM-DD hh:mm:ss';

  public static DATE_FORMAT_ES: string = 'DD/MM/YYYY';
  public static DATE_FORMAT_EN: string = 'YYYY/MM/DD';

  public static DATE_TIME_FORMAT_ES: string = 'DD/MM/YYYY hh:mm:ss';
  public static DATE_TIME_FORMAT_EN: string = 'YYYY/MM/DD hh:mm:ss';
  
  public static YEAR_FORMAT_ES: string = 'YYYY';
  public static YEAR_FORMAT_EN: string = 'YYYY';

  public static getDateFormat(lang: string): string {
    switch (lang) {
      case 'es':
        return this.DATE_FORMAT_ES;
      case 'en':
        return this.DATE_FORMAT_EN;
      default:
        return this.DATE_FORMAT_ES;
    }
  }
  
  public static getDateTimeFormat(lang: string): string {
    switch (lang) {
      case 'es':
        return this.DATE_TIME_FORMAT_ES;
      case 'en':
        return this.DATE_TIME_FORMAT_EN;
      default:
        return this.DATE_TIME_FORMAT_ES;
    }
  }
  
  public static getYearFormat(lang: string): string {
    switch (lang) {
      case 'es':
        return this.YEAR_FORMAT_ES;
      case 'en':
        return this.YEAR_FORMAT_EN;
      default:
        return this.YEAR_FORMAT_ES;
    }
  }

}
