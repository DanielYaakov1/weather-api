export const CURR_WEATHER_TEL_AVIV = [
     {
          LocalObservationDateTime: '2023-03-26T23:57:00+03:00',
          EpochTime: 1679864220,
          WeatherText: 'Some clouds',
          WeatherIcon: 36,
          HasPrecipitation: false,
          PrecipitationType: null,
          IsDayTime: false,
          Temperature: { Metric: { Value: 17.5, Unit: 'C', UnitType: 17 }, Imperial: { Value: 64, Unit: 'F', UnitType: 18 } },
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
     },
];

export const FIVE_DAYS_MOCK = [
     {
          Date: '2023-03-27T07:00:00+08:00',
          EpochDate: 1679871600,
          Temperature: {
               Minimum: {
                    Value: 41,
                    Unit: 'F',
                    UnitType: 18,
               },
               Maximum: {
                    Value: 59,
                    Unit: 'F',
                    UnitType: 18,
               },
          },
          Day: {
               Icon: 7,
               IconPhrase: 'Cloudy',
               HasPrecipitation: false,
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '02',
               },
          },
          Night: {
               Icon: 38,
               IconPhrase: 'Mostly cloudy',
               HasPrecipitation: false,
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '01',
               },
          },
          Sources: ['AccuWeather', 'Huafeng'],
          MobileLink: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?lang=en-us',
          Link: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?lang=en-us',
     },
     {
          Date: '2023-03-28T07:00:00+08:00',
          EpochDate: 1679958000,
          Temperature: {
               Minimum: {
                    Value: 48,
                    Unit: 'F',
                    UnitType: 18,
               },
               Maximum: {
                    Value: 64,
                    Unit: 'F',
                    UnitType: 18,
               },
          },
          Day: {
               Icon: 6,
               IconPhrase: 'Mostly cloudy',
               HasPrecipitation: false,
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '01',
               },
          },
          Night: {
               Icon: 7,
               IconPhrase: 'Cloudy',
               HasPrecipitation: false,
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '02',
               },
          },
          Sources: ['AccuWeather', 'Huafeng'],
          MobileLink: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=1&lang=en-us',
          Link: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=1&lang=en-us',
     },
     {
          Date: '2023-03-29T07:00:00+08:00',
          EpochDate: 1680044400,
          Temperature: {
               Minimum: {
                    Value: 48,
                    Unit: 'F',
                    UnitType: 18,
               },
               Maximum: {
                    Value: 61,
                    Unit: 'F',
                    UnitType: 18,
               },
          },
          Day: {
               Icon: 12,
               IconPhrase: 'Showers',
               HasPrecipitation: true,
               PrecipitationType: 'Rain',
               PrecipitationIntensity: 'Light',
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '07',
               },
          },
          Night: {
               Icon: 12,
               IconPhrase: 'Showers',
               HasPrecipitation: true,
               PrecipitationType: 'Rain',
               PrecipitationIntensity: 'Moderate',
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '07',
               },
          },
          Sources: ['AccuWeather', 'Huafeng'],
          MobileLink: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=2&lang=en-us',
          Link: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=2&lang=en-us',
     },
     {
          Date: '2023-03-30T07:00:00+08:00',
          EpochDate: 1680130800,
          Temperature: {
               Minimum: {
                    Value: 52,
                    Unit: 'F',
                    UnitType: 18,
               },
               Maximum: {
                    Value: 55,
                    Unit: 'F',
                    UnitType: 18,
               },
          },
          Day: {
               Icon: 12,
               IconPhrase: 'Showers',
               HasPrecipitation: true,
               PrecipitationType: 'Rain',
               PrecipitationIntensity: 'Light',
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '07',
               },
          },
          Night: {
               Icon: 12,
               IconPhrase: 'Showers',
               HasPrecipitation: true,
               PrecipitationType: 'Rain',
               PrecipitationIntensity: 'Light',
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '07',
               },
          },
          Sources: ['AccuWeather', 'Huafeng'],
          MobileLink: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=3&lang=en-us',
          Link: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=3&lang=en-us',
     },
     {
          Date: '2023-03-31T07:00:00+08:00',
          EpochDate: 1680217200,
          Temperature: {
               Minimum: {
                    Value: 54,
                    Unit: 'F',
                    UnitType: 18,
               },
               Maximum: {
                    Value: 57,
                    Unit: 'F',
                    UnitType: 18,
               },
          },
          Day: {
               Icon: 12,
               IconPhrase: 'Showers',
               HasPrecipitation: true,
               PrecipitationType: 'Rain',
               PrecipitationIntensity: 'Light',
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '07',
               },
          },
          Night: {
               Icon: 12,
               IconPhrase: 'Showers',
               HasPrecipitation: true,
               PrecipitationType: 'Rain',
               PrecipitationIntensity: 'Light',
               LocalSource: {
                    Id: 7,
                    Name: 'Huafeng',
                    WeatherCode: '07',
               },
          },
          Sources: ['AccuWeather', 'Huafeng'],
          MobileLink: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=4&lang=en-us',
          Link: 'http://www.accuweather.com/en/cn/shaoxing/61622/daily-weather-forecast/61622?day=4&lang=en-us',
     },
];
