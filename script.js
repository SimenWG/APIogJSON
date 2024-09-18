let url = "./fotograf.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Oppgave 1
    // console.log(`i den listen har vi ${data.length} bilder`);

    // Oppgave 2
    // let array = []
    // data.forEach(element => {
    //     // console.log(element.albumId);
    //     array.push(element.albumId);

    // });
    // console.log(`I den listen er det ${Math.max(...array)} albumer`);

    // Oppgave 3

    // data.forEach(element => {
    //     if(element.id == 238) {
    //         console.log(element.title);
    //         console.log(element.id);
    //         console.log(element.url);

    //     }
    // });

    // Oppgave 4

    data.forEach((element) => {
      if (element.id == 5) {
        console.log(element.url);
        document.getElementById("s4").src = element.url;
      }
    });
  });

let url2 = "https://jsonplaceholder.typicode.com/posts";

fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    //Oppgave 1
    /*  data.forEach(element => {
            if (element.id == 95 ) {
                console.log(element.title);
                console.log(element.id);
                
            }
        })
*/
    //Oppgave 2
    // data.forEach(post => {
    //     if (post.userId === 5) {
    //       post.body = "Denne teksten er oppdatert!";
    //     }
    //   });
  
    //   const updatedPosts = data.filter(post => post.userId === 5);
    //   console.log('Oppdatert post for userId 5:', updatedPosts);
    })