export default interface WeatherForecast {
     [x: string]: any;
     Date: Date;
     EpochDate: number;
     Temperature: {
          Minimum: {
               Value: number;
               Unit: string;
               UnitType: number;
          };
          Maximum: {
               Value: number;
               Unit: string;
               UnitType: number;
          };
     };
     Day: {
          Icon: number;
          IconPhrase: string;
          HasPrecipitation: boolean;
          LocalSource: {
               Id: number;
               Name: string;
               WeatherCode: string;
          };
     };
     Night: {
          Icon: number;
          IconPhrase: string;
          HasPrecipitation: boolean;
          LocalSource: {
               Id: number;
               Name: string;
               WeatherCode: string;
          };
     };
     Sources: string[];
     MobileLink: string;
     Link: string;
}

export interface DailyForecast {
     [x: string]: any;
     Date: Date;
     EpochDate: number;
     Temperature: {
          Minimum: {
               Value: number;
               Unit: string;
               UnitType: number;
          };
          Maximum: {
               Value: number;
               Unit: string;
               UnitType: number;
          };
     };
     Day: {
          Icon: number;
          IconPhrase: string;
          HasPrecipitation: boolean;
     };
     Night: {
          Icon: number;
          IconPhrase: string;
          HasPrecipitation: boolean;
     };
}

export interface Forecast {
     Headline: {
          EffectiveDate: string;
          EffectiveEpochDate: number;
          Severity: number;
          Text: string;
          Category: string;
          EndDate: string | null;
          EndEpochDate: number | null;
          MobileLink: string;
          Link: string;
     };
     DailyForecasts: DailyForecast[];
}

export interface Headline {
     EffectiveDate: string;
     EffectiveEpochDate: number;
     Severity: number;
     Text: string;
     Category: string;
     EndDate: string | null;
     EndEpochDate: number | null;
     MobileLink: string;
     Link: string;
}
