class Pokemon {
  constructor(node, adat, i) {
    this.adat = adat;
    this.adat.i = i;
    this.node = node;
    this.id = this.node.children(".id");
    this.nev = this.node.children(".nev");
    this.kep = this.node.children(".kep");
    this.kepesseg = this.node.children(".kepesseg");
    this.gomb = this.node.children(".kivalaszt");

    this.setAdat(adat);
  }
  setAdat(adat) {
    this.id.text(adat.id);
    this.nev.text(adat.name);
    this.kep.attr("src", adat.sprites.front_default);
    this.kepesseg.text("Képessége: "+adat.abilities[0].ability.name);
    this.gomb.text("Kiválaszt");
  }
}
