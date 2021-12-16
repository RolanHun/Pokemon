class MyAszinkron {
  constructor() {}

  getAdat(apiVegPont, valtozo, myCallback, myCallbackHiba, index) {
    $.ajax({
      url: apiVegPont,
      type: "GET",
      success: function (result) {
        valtozo = result;
        myCallback(valtozo, index);
      },
      error: function (hibakod) {
        myCallbackHiba(hibakod);
      },
    });
  }
}
