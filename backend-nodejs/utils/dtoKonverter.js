exports.convertAutoAndAutoBildToAutoDto = (auto, autoBilder) => {
    const bildUrls = autoBilder.map(bild => bild.bildUrl);
    
    return {
        autoId: auto._id,
        marke: auto.marke,
        modell: auto.modell,
        beschreibung: auto.beschreibung,
        baujahr: auto.baujahr,
        kmStand: auto.kmStand,
        tuev: auto.tuev,
        leistung: auto.leistung,
        preis: auto.preis.toString(),
        bildUrl: bildUrls
    };
};