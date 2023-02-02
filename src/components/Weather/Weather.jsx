import React from 'react';

export default function Weather({ temp, city, country, sunrise, sunset, error }) {
  return (
    <div>
      {temp && (
        <div>
          <p>
            Местонахождение: Город - {city} Страна - {country}
          </p>
          <p>Температура {temp}</p>
          <p>Восход солнца {sunrise}</p>
          <p>Закат солнца {sunset}</p>
        </div>
      )}
      <p>{error}</p>
    </div>
  );
}
