$(function () {
  const myAszinkron = new MyAszinkron();
  let vegpont = "https://pokeapi.co/api/v2/pokemon/pikachu";
  let pokemon = {};
  const szuloElem = $("section");
  const sablonElem = $(".pokemon");
  lista();
  function megjelenit(pokemon, index) {
    let node = sablonElem.clone().appendTo(szuloElem);
    const obj = new Pokemon(node, pokemon, index);
  }
  function hibakezelés(hiba) {
    console.log(hiba);
    $("h2").html("Nincs ilyen Pokemon!");
    $("img").attr(
      "src",
      "https://c.tenor.com/9JqiG4fW-VgAAAAM/oh-shit-ohh.gif"
    );
  }

  let keresomezo = $("#kereso-input");
  keresomezo.on("keyup", () => {
    let vegpont = "https://pokeapi.co/api/v2/pokemon/";
    vegpont += "?name_like=" + keresomezo.val();
    myAszinkron.getAdat(vegpont, pokemon, megjelenit, hibakezelés);
  });

  function lista() {
    for (let index = 1; index < 899; index++) {
      vegpont = "https://pokeapi.co/api/v2/pokemon/" + index;
      myAszinkron.getAdat(vegpont, pokemon, megjelenit, hibakezelés, index);
    }
    sablonElem.remove();
  }
  $("button").on("click", () => {

  });
});
