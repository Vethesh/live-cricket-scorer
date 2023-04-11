// const KEY = "5c9c1dd9-5b2c-48c8-9997-868f49c40234";

export const GetMatches = () => {
  const url =
    `https://api.cricapi.com/v1/cricScore?apikey=5c9c1dd9-5b2c-48c8-9997-868f49c40234`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log("ERROR:", error));
};

export const getMatchDetails = id => {
  const url =`https://api.cricapi.com/v1/cricScore?apikey=5c9c1dd9-5b2c-48c8-9997-868f49c40234 & id=${id}`;
  return fetch(url).then((response)=>response.json()).catch((error)=>console.log(error));
};
