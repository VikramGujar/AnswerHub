const countries = ["Austrilia", "germuny", "Unitade state of america"];
// ha array ahe contry cha
function longName(countries) { // function declare kel 
  let longCountry = "";
// long name store karayla ek rikami string ghetli
  for (const country of countries) { // for loop madhe array ghetla
    // array madhla ek ek element country variable madhe yeil
    if (country.length > longCountry.length) {
        // if chi condition ahe 
        // .length already funtion ahe JS amdhe 
        // .length string madhe kiti character ahe te mojat
        // loop chya first itration la 
        // Austrilia > "" as compaire hoil 
        // ani mg country loop chya pratek itration la 
        // pratek element magchya element sobat compare hoil
      longCountry = country;// ya line madhe jr to elemnt motha asel 
    //   tr to longCountry variable madhe store hoy ahe

    }
  }

  return longCountry;//he function return karayly 
  
}

console.log(longName(countries)); // ani ith print hotay