const apiUrl = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey 4dt29quqTUIne0aMPOL4DL:0l849tJwAWlI1Wy5PlP05N"
  }
};

let data;
let response;

async function haberleriListele() {
  
    try {
      response = await fetch(apiUrl, options);
      data = await response.json();
      console.log(data.result);
      data.result.forEach(element => {
        const title = document.createElement('h2');
        title.textContent = element.name;
        document.querySelector(".haberler").appendChild(title);
      });
      
    } catch (error) {
      console.error(error);
    }
  }

  haberleriListele();