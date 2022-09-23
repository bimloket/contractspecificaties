var respecConfig = {
  // this template doesn't use all possible config parameters
  // see https://github.com/stichting-crow/respec/wiki for all options
  specStatus: "WD",
  imprint: "bimloket",
  // specType: "handreiking",
  // subtitle: "Hier komt een subtitle",
  shortName: "contractspecificaties/",
  // publishDate: "2021-07-27",
  // previousPublishDate: "2021-07-27",
 license: "cc-by",
  editors: [
    {
      name: "Elisabeth de Vries",
      company: "BIM loket",
      companyURL: "https://www.bimloket.nl",
    },
    {
      name: "Rik",
      company: "CROW",
      companyURL: "https://www.crow.nl",
    },
  ],
  authors: [
    {
      name: "Bob Nonnekens",
      company: "CROW",
      companyURL: "https://www.crow.nl",
    },
    {
      name: "Gebruikerscommissie CB-NL en ICDD",
      company: "BIM loket",
      companyURL: "https://www.bimloket.nl",
    },
    {
      name: "Kernteam Provinciaal Contracten Buffet",
      company: "CROW",
      companyURL: "https://www.crow.nl",
    },
  ],
  github: "https://github.com/bimloket/contractspecificaties",
  localBiblio: {},
  lint: { "no-unused-dfns": false },

  // If you need to include a one-off reference that isn't in the SpecRef database or
  // if you need to override an existing reference with specific content, then you can use this configuration option.
localBiblio: {
  LeidraadSE3: {
    title: "Leidraad SE versie 3",
    href: "https://www.leidraadse.nl/assets/files/downloads/LeidraadSE/V3/Leidraad_V3_SE_web.pdf",
    status: "Actueel",
    publisher: "Leidraad SE",
},
  LeidraadSE2: {
  title: "Leidraad SE versie 2",
  href: "https://www.leidraadse.nl/assets/files/downloads/LeidraadSE/V2/LeidraadSE_def_lowres.pdf",
  status: "Vervallen",
  publisher: "Leidraad SE",
},
NEN_EN_ISO_9000_2015: {
  title: "NEN-EN-ISO 9000:2015 Kwaliteitsmanagementsystemen - Grondbeginselen en verklarende woordenlijst",
  href: "https://www.nen.nl/en/nen-en-iso-9000-2015-en-nl-211925",
  status: "Actueel",
  publisher: "NEN",
},
ISO_IEC_IEEE_29148_2018: {
  title: "ISO/IEC/IEEE 29148:2018 Systems and software engineering — Life cycle processes — Requirements engineering",
  href: "https://www.iso.org/standard/72089.html",
  status: "Actueel",
  publisher: "NEN",
},
NEN_2660_2_2022: {
  title: "NEN 2660-2 Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie van NEN 2660-1",
  href: "https://connect.nen.nl/Family/Detail?name=NEN%202660-2",
  status: "Actueel",
  publisher: "NEN",
},
NEN_2660_1_2022: {
  title: "NEN 2660-1 Rules for information modelling of the built environment - Part 1: Conceptual models",
  href: "https://www.nen.nl/en/nen-2660-1-2022-nl-291666",
  status: "Actueel",
  publisher: "NEN",
},

},
};
