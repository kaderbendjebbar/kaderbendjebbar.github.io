// EO1
function facturesSonelgaz_E01(D) {
  var TR1Elect = 0,
    TR2Elect = 0,
    TR3Elect = 0,
    TR4Elect = 0;
  TR1Elect = D.QElect;

  if (D.QElect > 125) {
    TR1Elect = 125;
    TR2Elect = D.QElect - 125;
  }
  // if (D.QElect > 250) {
  //   TR2Elect = 125;
  //    TR3Elect = D.QElect - 250;
  // }
  // if (D.QElect > 1000) {
  //   TR3Elect = 750;
  //   TR4Elect = D.QElect - 1000;
  //  }

  var TR1Gaz = 0,
    TR2Gaz = 0,
    TR3Gaz = 0,
    TR4Gaz = 0;
  TR1Gaz = D.QGaz;
  if (D.QGaz > 1125) {
    TR1Gaz = 1125;
    TR2Gaz = D.QGaz - 1125;
  }
  if (D.QGaz > 2500) {
    TR2Gaz = 1375;
    TR3Gaz = D.QGaz - 2500;
  }
  if (D.QGaz > 7500) {
    TR3Gaz = 5000;
    TR4Gaz = D.QGaz - 7500;
  }

  var MTR1Elect = 0,
    MTR2Elect = 0;

  if (TR1Elect == 0) {
    MTR1Elect = 0;
  } else {
    MTR1Elect = TR1Elect * D.prixTR1Elect;
  }
  if (TR2Elect == 0) {
    MTR2Elect = 0;
  } else {
    MTR2Elect = TR2Elect * D.prixTR2Elect;
  }

  var MTR1Gaz = 0,
    MTR2Gaz = 0,
    MTR3Gaz = 0,
    MTR4Gaz = 0;
  if (TR1Gaz == 0) {
    MTR1Gaz = 0;
  } else {
    MTR1Gaz = TR1Gaz * D.prixTR1Gaz;
  }
  if (TR2Gaz == 0) {
    MTR2Gaz = 0;
  } else {
    MTR2Gaz = TR2Gaz * D.prixTR2Gaz;
  }
  if (TR3Gaz == 0) {
    MTR3Gaz = 0;
  } else {
    MTR3Gaz = TR3Gaz * D.prixTR3Gaz;
  }
  if (TR4Gaz == 0) {
    MTR4Gaz = 0;
  } else {
    MTR4Gaz = TR4Gaz * D.prixTR4Gaz;
  }

  const TotalHTTR12Gaz = MTR1Gaz + MTR2Gaz;
  const TotalHTTR34Gaz = MTR3Gaz + MTR4Gaz;

  const TotalHT = MTR1Elect + MTR2Elect + 262.2;
  const TotalHTGaz = TotalHTTR12Gaz + TotalHTTR34Gaz;
  const TotalHTElect = TotalHT;
  const TVA9 = (TotalHT * 7) / 100;
  const TVA19 = 0; //((TotalHTTR34Elect + TotalHTTR34Gaz) * 19) / 100;
  const TotalTVA = TVA9;
  // const TVA9 = MTR1Elect * 0.09;
  // const TVA19 = MTR2Elect * 0.19;
  // const TotalTVA = TVA19 + TVA19;

  const NetTTC = TotalHT + TVA9 + 100;
  var NetTTC1p = (NetTTC * 1) / 100;
  const deft = Math.trunc(NetTTC);
  if (NetTTC != deft) {
    NetTTC1p = NetTTC1p + 1;
  }
  var timbre = NetTTC1p;
  if (NetTTC1p > 2500) {
    timbre = 2500;
  }
  if (NetTTC1p < 5) {
    timbre = 5;
  }
  timbre = Math.trunc(timbre);
  const TotalEspece = NetTTC + timbre;
  //Dim Resultats(21)
  var Resultats = Float64Array;
  Resultats[0] = TotalEspece;
  Resultats[1] = TR1Elect;
  Resultats[2] = TR2Elect;
  Resultats[3] = TR3Elect;
  Resultats[4] = TR4Elect;
  Resultats[5] = TotalHTElect;
  Resultats[6] = TR1Gaz;
  Resultats[7] = TR2Gaz;
  Resultats[8] = TR3Gaz;
  Resultats[9] = TR4Gaz;
  Resultats[10] = TotalHTGaz;
  Resultats[11] = D.PMDR;
  Resultats[12] = TotalHT;
  Resultats[13] = TVA9;
  Resultats[14] = TVA19;
  Resultats[15] = TotalTVA;
  Resultats[16] = D.DroitFix;
  Resultats[17] = D.TaxeHabitation;
  Resultats[18] = NetTTC;
  Resultats[19] = timbre;
  Resultats[20] = TotalEspece;
  return Resultats;
}

// TARIF 54M
function facturesSonelgazMenage(D) {
  var TR1Elect = 0,
    TR2Elect = 0,
    TR3Elect = 0,
    TR4Elect = 0;
  TR1Elect = D.QElect;
  if (D.QElect > 125) {
    TR1Elect = 125;
    TR2Elect = D.QElect - 125;
  }
  if (D.QElect > 250) {
    TR2Elect = 125;
    TR3Elect = D.QElect - 250;
  }
  if (D.QElect > 1000) {
    TR3Elect = 750;
    TR4Elect = D.QElect - 1000;
  }

  var TR1Gaz = 0,
    TR2Gaz = 0,
    TR3Gaz = 0,
    TR4Gaz = 0;
  TR1Gaz = D.QGaz;
  if (D.QGaz > 1125) {
    TR1Gaz = 1125;
    TR2Gaz = D.QGaz - 1125;
  }
  if (D.QGaz > 2500) {
    TR2Gaz = 1375;
    TR3Gaz = D.QGaz - 2500;
  }
  if (D.QGaz > 7500) {
    TR3Gaz = 5000;
    TR4Gaz = D.QGaz - 7500;
  }

  var MTR1Elect = 0,
    MTR2Elect = 0,
    MTR3Elect = 0,
    MTR4Elect = 0;
  if (TR1Elect == 0) {
    MTR1Elect = 0;
  } else {
    MTR1Elect = TR1Elect * D.prixTR1Elect;
  }
  if (TR2Elect == 0) {
    MTR2Elect = 0;
  } else {
    MTR2Elect = TR2Elect * D.prixTR2Elect;
  }
  if (TR3Elect == 0) {
    MTR3Elect = 0;
  } else {
    MTR3Elect = TR3Elect * D.prixTR3Elect;
  }
  if (TR4Elect == 0) {
    MTR4Elect = 0;
  } else {
    MTR4Elect = TR4Elect * D.prixTR4Elect;
  }
  var MTR1Gaz = 0,
    MTR2Gaz = 0,
    MTR3Gaz = 0,
    MTR4Gaz = 0;
  if (TR1Gaz == 0) {
    MTR1Gaz = 0;
  } else {
    MTR1Gaz = TR1Gaz * D.prixTR1Gaz;
  }
  if (TR2Gaz == 0) {
    MTR2Gaz = 0;
  } else {
    MTR2Gaz = TR2Gaz * D.prixTR2Gaz;
  }
  if (TR3Gaz == 0) {
    MTR3Gaz = 0;
  } else {
    MTR3Gaz = TR3Gaz * D.prixTR3Gaz;
  }
  if (TR4Gaz == 0) {
    MTR4Gaz = 0;
  } else {
    MTR4Gaz = TR4Gaz * D.prixTR4Gaz;
  }

  const TotalHTTR12Elect = MTR1Elect + MTR2Elect;
  const TotalHTTR34Elect = MTR3Elect + MTR4Elect;
  const TotalHTTR12Gaz = MTR1Gaz + MTR2Gaz;
  const TotalHTTR34Gaz = MTR3Gaz + MTR4Gaz;

  const TotalHTElect =
    Math.trunc((TotalHTTR12Elect + TotalHTTR34Elect) * 100) / 100 + 0.01;
  const TotalHTGaz =
    Math.trunc((TotalHTTR12Gaz + TotalHTTR34Gaz) * 100) / 100 + 0.01;

  const TotalHT = TotalHTElect + TotalHTGaz + D.PMDR;
  const TVA9 =
    Math.trunc(
      (((TotalHTTR12Elect + TotalHTTR12Gaz + D.PMDR) * 9) / 100) * 100
    ) /
      100 +
    0.01;
  const TVA19 =
    Math.trunc((((TotalHTTR34Elect + TotalHTTR34Gaz) * 19) / 100) * 100) / 100;
  const TotalTVA = Math.trunc((TVA9 + TVA19) * 100) / 100;

  const DroitFixConsommation = D.DroitFix;
  const NetTTC =
    Math.trunc((TotalHT + TotalTVA + D.DroitFix + D.TaxeHabitation) * 100) /
    100;

  var NetTTC1p = Math.trunc(NetTTC * 0.01);

  const deft = Math.trunc(NetTTC);
  if (NetTTC > deft) {
    NetTTC1p = NetTTC1p + 1;
  }

  var timbre = NetTTC1p;
  if (NetTTC1p > 2500) {
    timbre = 2500;
  }
  if (NetTTC1p < 5) {
    timbre = 5;
  }

  // timbre = Math.trunc(timbre);

  const TotalEspece = NetTTC + timbre;
  //Dim Resultats(21)
  var Resultats = Float64Array;
  Resultats[0] = TotalEspece;
  Resultats[1] = TR1Elect;
  Resultats[2] = TR2Elect;
  Resultats[3] = TR3Elect;
  Resultats[4] = TR4Elect;
  Resultats[5] = TotalHTElect;
  Resultats[6] = TR1Gaz;
  Resultats[7] = TR2Gaz;
  Resultats[8] = TR3Gaz;
  Resultats[9] = TR4Gaz;
  Resultats[10] = TotalHTGaz;
  Resultats[11] = D.PMDR;
  Resultats[12] = TotalHT;
  Resultats[13] = TVA9;
  Resultats[14] = TVA19;
  Resultats[15] = TotalTVA;
  Resultats[16] = D.DroitFix;
  Resultats[17] = D.TaxeHabitation;
  Resultats[18] = NetTTC;
  Resultats[19] = timbre;
  Resultats[20] = TotalEspece;
  return Resultats;
}
// TARIF 54NM
function facturesSonelgazCommerciale(D) {
  var TR1Elect = 0,
    TR2Elect = 0,
    TR3Elect = 0;
  TR1Elect = D.QElect;

  D.PMDR = D.PMDR - 85.5;
  if (D.QElect > 250) {
    TR1Elect = 250;
    TR2Elect = D.QElect - 250;
  }
  if (D.QElect > 1000) {
    TR2Elect = 750;
    TR3Elect = D.QElect - 1000;
  }

  var TR1Gaz = 0,
    TR2Gaz = 0,
    TR3Gaz = 0;
  TR1Gaz = D.QGaz;

  if (D.QGaz > 2500) {
    TR1Gaz = 2500;
    TR2Gaz = D.QGaz - 2500;
  }
  if (D.QGaz > 7500) {
    TR2Gaz = 5000;
    TR3Gaz = D.QGaz - 7500;
  }
  var MTR1Elect = 0,
    MTR2Elect = 0,
    MTR3Elect = 0;
  if (TR1Elect == 0) {
    MTR1Elect = 0;
  } else {
    MTR1Elect = TR1Elect * D.prixTR2Elect;
  }
  if (TR2Elect == 0) {
    MTR2Elect = 0;
  } else {
    MTR2Elect = TR2Elect * D.prixTR3Elect;
  }
  if (TR3Elect == 0) {
    MTR3Elect = 0;
  } else {
    MTR3Elect = TR3Elect * D.prixTR4Elect;
  }

  var MTR1Gaz = 0,
    MTR2Gaz = 0,
    MTR3Gaz = 0;
  if (TR1Gaz == 0) {
    MTR1Gaz = 0;
  } else {
    MTR1Gaz = TR1Gaz * D.prixTR2Gaz;
  }
  if (TR2Gaz == 0) {
    MTR2Gaz = 0;
  } else {
    MTR2Gaz = TR2Gaz * D.prixTR3Gaz;
  }
  if (TR3Gaz == 0) {
    MTR3Gaz = 0;
  } else {
    MTR3Gaz = TR3Gaz * D.prixTR4Gaz;
  }

  const TotalHTTR1Elect = MTR1Elect;
  const TotalHTTR23Elect = MTR2Elect + MTR3Elect;
  const TotalHTTR1Gaz = MTR1Gaz;
  const TotalHTTR23Gaz = MTR2Gaz + MTR3Gaz;

  const TotalHTElect =
    Math.trunc((TotalHTTR1Elect + TotalHTTR23Elect) * 100) / 100 + 0.01;
  const TotalHTGaz =
    Math.trunc((TotalHTTR1Gaz + TotalHTTR23Gaz) * 100) / 100 + 0.01;

  const TotalHT = TotalHTElect + TotalHTGaz + D.PMDR;
  const TVA9 =
    Math.trunc((((TotalHTTR1Elect + TotalHTTR1Gaz + D.PMDR) * 9) / 100) * 100) /
      100 +
    0.01;
  const TVA19 =
    Math.trunc((((TotalHTTR23Elect + TotalHTTR23Gaz) * 19) / 100) * 100) / 100;
  const TotalTVA = Math.trunc((TVA9 + TVA19) * 100) / 100;

  const DroitFixConsommation = 0.0;
  const NetTTC =
    Math.trunc((TotalHT + TotalTVA + D.TaxeHabitation) * 100) / 100;

  var NetTTC1p = Math.trunc(NetTTC * 0.01);

  const deft = Math.trunc(NetTTC);
  if (NetTTC > deft) {
    NetTTC1p = NetTTC1p + 1;
  }

  var timbre = NetTTC1p;
  if (NetTTC1p > 2500) {
    timbre = 2500;
  }
  if (NetTTC1p < 5) {
    timbre = 5;
  }
  timbre = Math.trunc(timbre);
  const TotalEspece = NetTTC + timbre;

  //Dim Resultats(21)
  var Resultats = Float64Array;
  Resultats[0] = TotalEspece;
  Resultats[1] = TR1Elect;
  Resultats[2] = TR2Elect;
  Resultats[3] = TR3Elect;
  Resultats[4] = TR3Elect;
  Resultats[5] = TotalHTElect;
  Resultats[6] = TR1Gaz;
  Resultats[7] = TR2Gaz;
  Resultats[8] = TR3Gaz;
  Resultats[9] = TR3Gaz;
  Resultats[10] = TotalHTGaz;
  Resultats[11] = D.PMDR;
  Resultats[12] = TotalHT;
  Resultats[13] = TVA9;
  Resultats[14] = TVA19;
  Resultats[15] = TotalTVA;
  Resultats[16] = DroitFixConsommation;
  Resultats[17] = D.TaxeHabitation;
  Resultats[18] = NetTTC;
  Resultats[19] = timbre;
  Resultats[20] = TotalEspece;
  return Resultats;
}
// TARIF 53NM
function facturesSonelgaz53(D53) {
  const QElectJ = D53.QElectJ;
  const QElectN = D53.QElectN;
  const PElectJ = D53.PElectJ;
  const PElectN = D53.PElectN;

  const QElectTotal = QElectJ + QElectN;
  const MElectJ = QElectJ * PElectJ;
  const MElectN = QElectN * PElectN;
  const TotalHTElect = MElectJ + MElectN;
  var MHTElectSoutenu = D53.MHTElectSoutenu;

  var TR1Gaz = 0,
    TR2Gaz = 0,
    TR3Gaz = 0;
  TR1Gaz = D53.QGaz;

  if (D53.QGaz > 2500) {
    TR1Gaz = 2500;
    TR2Gaz = D53.QGaz - 2500;
  }
  if (D53.QGaz > 7500) {
    TR2Gaz = 5000;
    TR3Gaz = D53.QGaz - 7500;
  }

  var MTR1Gaz = 0;
  var MTR2Gaz = 0;
  var MTR3Gaz = 0;

  if (TR1Gaz == 0) {
    MTR1Gaz = 0;
  } else {
    MTR1Gaz = TR1Gaz * D53.prixTR2Gaz;
  }
  if (TR2Gaz == 0) {
    MTR2Gaz = 0;
  } else {
    MTR2Gaz = TR2Gaz * D53.prixTR3Gaz;
  }
  if (TR3Gaz == 0) {
    MTR3Gaz = 0;
  } else {
    MTR3Gaz = TR3Gaz * D53.prixTR4Gaz;
  }
  const TotalHTTR1Gaz = MTR1Gaz;
  const TotalHTTR23Gaz = MTR2Gaz + MTR3Gaz;
  const TotalHTGaz = TotalHTTR1Gaz + TotalHTTR23Gaz;

  if (TotalHTElect <= MHTElectSoutenu) {
    MHTElectSoutenu = TotalHTElect;
  }

  const TotalHT = TotalHTElect + TotalHTGaz + D53.PMDR;
  var TVA9 = 0,
    TVA19 = 0;
  TVA9 = (TotalHTTR1Gaz + MHTElectSoutenu + D53.PMDR) * 0.09;
  TVA19 = (TotalHTElect - MHTElectSoutenu + TotalHTTR23Gaz) * 0.19;

  const TotalTVA = TVA9 + TVA19;
  const DroitFixConsommation = 0.0;

  const NetTTC = TotalHT + TotalTVA + DroitFixConsommation + D53.TaxeHabitation;
  var NetTTC1p = (NetTTC * 1) / 100;
  const deft = Math.trunc(NetTTC);
  if (NetTTC != deft) {
    NetTTC1p = NetTTC1p + 1;
  }
  var timbre = NetTTC1p;
  if (NetTTC1p > 2500) {
    timbre = 2500;
  }
  if (NetTTC1p < 5) {
    timbre = 5;
  }
  timbre = Math.trunc(timbre);
  const TotalEspece = NetTTC + timbre;

  //Dim Resultats(21)
  var Resultats = Float64Array;
  Resultats[0] = TotalEspece;
  Resultats[1] = QElectJ;
  Resultats[2] = QElectN;
  Resultats[3] = MElectJ;
  Resultats[4] = MElectN;
  Resultats[5] = TotalHTElect;
  Resultats[6] = TR1Gaz;
  Resultats[7] = TR2Gaz;
  Resultats[8] = TR3Gaz;
  Resultats[9] = TR3Gaz;
  Resultats[10] = TotalHTGaz;
  Resultats[11] = D53.PMDR;
  Resultats[12] = TotalHT;
  Resultats[13] = TVA9;
  Resultats[14] = TVA19;
  Resultats[15] = TotalTVA;
  Resultats[16] = DroitFixConsommation;
  Resultats[17] = D53.TaxeHabitation;
  Resultats[18] = NetTTC;
  Resultats[19] = timbre;
  Resultats[20] = NetTTC + timbre;
  return Resultats;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").onsubmit = () => {
    const QElect = document.querySelector("#QElect").value;
    const QElectJ = document.querySelector("#QElectJ").value;
    const QElectN = document.querySelector("#QElectN").value;
    const QGaz = document.querySelector("#QGaz").value;
    const PMD = document.querySelector("#PMD").value;
    const Categorie = document.querySelector("#Categorie").value;
    //const css = document.querySelector("#table").computedStyleMap
    //console.log(css)
    //Rem DroitFix
    //console.log(parseFloat("0215") + 100);

    var DroitFix = 0;
    if (QElect > 70 && QElect <= 190) {
      DroitFix = 25;
    }
    if (QElect > 190 && QElect <= 390) {
      DroitFix = 50;
    }
    if (QElect > 390) {
      DroitFix = 100;
    }

    var D = {
      QElect: QElect,
      QGaz: QGaz,
      PMD: PMD,
      prixTR1Elect: 1.7787,
      prixTR2Elect: 4.1789,
      prixTR3Elect: 4.812,
      prixTR4Elect: 5.4796,
      PMD4: 52.4,
      PMD6: 78.7,
      PMD12: 157.3,
      PMD20: 262.2,
      PMD40: 524.4,
      PMD60: 786.6,
      PMD80: 1048.8,
      RDVElect1: 164.16,
      RDVElect2: 347.7,
      TaxeHabitation: 300,
      DroitFix: DroitFix,
      prixTR1Gaz: 0.1682,
      prixTR2Gaz: 0.3245,
      prixTR3Gaz: 0.4025,
      prixTR4Gaz: 0.4599,
      RDVGaz: 85.5,
      PMDR: 85.5,
    };
    var D53 = {
      QElect: QElect,
      QElectJ: QElectJ,
      QElectN: QElectN,
      QGaz: QGaz,
      PMD: PMD,
      PElectJ: 4.8698,
      PElectN: 1.205,
      PMD4: 376.9,
      PMD6: 465.8,
      PMD12: 732.4,
      PMD20: 1087.8,
      PMD40: 1976.4,
      PMD60: 2865.0,
      PMD80: 3753.6,
      RDVElect1: 164.16,
      RDVElect2: 347.7,
      TaxeHabitation: 300,
      DroitFix: DroitFix,
      prixTR1Gaz: 0.1682,
      prixTR2Gaz: 0.3245,
      prixTR3Gaz: 0.4025,
      prixTR4Gaz: 0.4599,
      RDVGaz: 85.5,
      PMDR: 0.0,
      MHTElectSoutenu: 301.25,
    };
    var PMDR = D.PMDR;
    var PMDR53 = 0.0;

    switch (PMD) {
      case "4":
        PMDR += D.PMD4;
        break;
      case "6":
        PMDR += D.PMD6;
        break;
      case "12":
        PMDR += D.PMD12;
        break;
      case "20":
        PMDR += D.PMD20;
        break;
      case "40":
        PMDR += D.PMD40;
        break;
      case "60":
        PMDR += D.PMD60;
        break;
      case "80":
        PMDR += D.PMD80;
        break;
      default:
        PMDR += D.PMD6;
    }
    switch (PMD) {
      case "4":
        PMDR53 = D53.PMD4;
        break;
      case "6":
        PMDR53 = D53.PMD6;
        break;
      case "12":
        PMDR53 = D53.PMD12;
        break;
      case "20":
        PMDR53 = D53.PMD20;
        break;
      case "40":
        PMDR53 = D53.PMD40;
        break;
      case "60":
        PMDR53 = D53.PMD60;
        break;
      case "80":
        PMDR53 = D53.PMD80;
        break;
      default:
        PMDR53 = D53.PMD6;
    }
    D.PMDR = PMDR;
    D53.PMDR = PMDR53;

    document.querySelector("#simulation").innerHTML =
      "Simulation calculFacture_54M(Menage)";
    if (Categorie == "54M") {
      D.TaxeHabitation = 150;
    }
    var result = facturesSonelgazMenage(D);

    if (Categorie == "E01") {
      D.TaxeHabitation = 0;

      result = facturesSonelgaz_E01(D);
      document.querySelector("#simulation").innerHTML =
        "Simulation calculFacture_E01(Commerce)";
    }

    if (Categorie == "54NM") {
      result = facturesSonelgazCommerciale(D);
      document.querySelector("#simulation").innerHTML =
        "Simulation calculFacture_54NM(Commerce)";
    }
    if (Categorie == "53NM") {
      result = facturesSonelgaz53(D53);
      document.querySelector("#simulation").innerHTML =
        "Simulation calculFacture_53NM(Commerce)";
    }
    //math.trunc(25.6);

    var NetTTC = Math.trunc(result[18] * 100) / 100;

    const NetTTCS = NetTTC.toLocaleString();
    const timbre = result[19];
    const timbreS = timbre.toLocaleString();
    var TotalEspece = Math.trunc(result[20] * 100) / 100;

    const TotalEspeceS = TotalEspece.toLocaleString();
    const redevenceFixx = Math.trunc((result[11] * 100) / 100);
    const TotalHtt = Math.trunc(result[12] * 100) / 100;
    const TVAA9 = Math.trunc(result[13] * 100) / 100;
    const TVAA19 = Math.trunc(result[14] * 100) / 100;
    const TotalTVAA = Math.trunc(result[15] * 100) / 100;
    const TaxeHabitationN = result[17];
    document.querySelector("#RedevenceFix").value = redevenceFixx;
    document.querySelector("#MontantHT").value = TotalHtt;
    document.querySelector("#TVA9").value = TVAA9;
    document.querySelector("#TVA19").value = TVAA19;
    document.querySelector("#TotalTVA").value = TotalTVAA;
    document.querySelector("#TaxeHabitation").value = TaxeHabitationN;
    document.querySelector("#MontantTTC").value = NetTTCS;
    document.querySelector("#timbre").value = timbreS;
    document.querySelector("#MontantEspece").value = TotalEspeceS;
    //math.trunc(25.6); // pour debuger
    return false;
  };
});
