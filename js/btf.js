function myBring2Front() {
        //layer1.bringToFront();
        barrios.eachLayer(function (layer) {
          layer.setZIndexOffset(1000);
        });

        manzanas.eachLayer(function (layer) {
          layer.setZIndexOffset(2000);
        });

        super_mercados.eachLayer(function (layer) {
          layer.setZIndexOffset(2000);
        });

        corredores_urbanos.eachLayer(function (layer) {
          layer.setZIndexOffset(2000);
        });
    }

myBring2Front();