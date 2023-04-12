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

export interface ILocation {
     Key: string;
     name: string;
     Country?: string;
     region?: string;
     LocalizedName?: string;
}

export interface ICurrentWeather {
     [x: string]: any;
     Temperature: {
          Metric: {
               Value: number;
          };
     };
     WeatherText: string;
}
