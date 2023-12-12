let search = document.querySelector(".input");

let text = document.querySelector(".paragraph");

let btn = document.querySelector(".btn");

const contacts = [
  { name: "Rodolfo", number: "(10) 91234-5678" },
  { name: "Paulo", number: "(11) 91234-5678" },
  { name: "Aline", number: "(12) 91234-5678" },
  { name: "Maria", number: "(13) 91234-5678" },
  { name: "Ester", number: "(14) 91234-5678" },
];

btn.addEventListener("click", investigation);

function investigation() {
  if (search.value.toLowerCase() == "") {
    alert("Digite um nome");
  } else {
    for (let index = 0; index < contacts.length; index++) {
      if (search.value.toLowerCase() === contacts[index].name.toLowerCase()) {
        text.innerHTML = `Contato encontrado <br> Nome: ${contacts[index].name} Tel: ${contacts[index].number}`;
        break;
      } else {
        text.innerHTML = "Contato não encontrado";
      }
    }

    //for of
    /* for (const contact of contacts) {
      if (search.value.toLowerCase() === contact.name.toLowerCase()) {
        text.innerHTML = `Contato encontrado <br> Nome: ${contact.name} Tel: ${contact.number}`;
        break;
      } else {
        text.innerHTML = "Contato não encontrado";
      }
    }
  } */

    //while
    /* let i = 0;
    while (i < contacts.length) {
      if (contacts[i].name.toLowerCase() == search.value.toLowerCase()) {
        text.innerHTML = `Contato encontrado <br> Nome: ${contacts[i].name} Tel: ${contacts[i].number}`;
      }
      i++;
    } */

    //do while
    /* let i = 0;
    do {
      if (search.value.toLowerCase() == contacts[i].name.toLowerCase()) {
        text.innerHTML = `Contato encontrado <br> Nome: ${contacts[i].name} Tel: ${contacts[i].number}`;
      }
      i++;
    } while (i < contacts.length);
    i = 0; */

    //forEach
    /* contacts.forEach(function (item) {
      if (search.value.toLowerCase() == item.name.toLowerCase()) {
        text.innerHTML = `Contato encontrado <br> Nome: ${item.name} Tel: ${item.number}`;
      }
    }); */
  }
}
