# Documenten

Het documentenformat wordt gebruikt voor de definitie van de documenten. De volgende documenten worden opgenomen in de documententabel:

* Brondocumenten voor eisen: dit kan een beleidsstuk zijn, of een norm of wet of ander document waarin eisen beschreven staan. Dit document wordt toegevoegd om een relatie te behouden met het brondocument en om de context van de eis te kunnen opzoeken. De eisen in de eisentabel zijn de eisen die contractueel gelden, een opdrachtnemer hoeft het brondocument niet zelf te scannen op eisen.
* Van toepassing zijnde documenten, waarnaar verwezen wordt in een eistekst. Dit kan een beleidsstuk zijn, of een norm of wet of ander document waarin eisen beschreven staan. Een opdrachtnemer wordt door deze verwijzing verplicht om zelf de eisen in dit document te scannen en mee te nemen in de verificatie en validatie.
* Overige contractuele documenten, zodat ook teksten in paragraven kunnen worden toegevoegd als data. Dit betreft een document, waarvan hele paragraven niet zijn vertaald naar eisen, maar een context bieden voor de eisen, bijvoorbeeld inleidende hoofdstukken van de Vraagspecificatie Eisen, Proces en informatieleveringsspecificatie. Dank zij de documententabel kan een opdrachtnemer wel de teksten per paragraaf inlezen en deze als context oproepen in eigen projectbeheersingssystemen.

De vertaling / binding van documenten is naar [cs:Document](https://data.crow.nl/contractspecificaties/def/Document) als specialisatie van nen2660:InformatieObject. Merk op: ook een eis wordt gezien als InformatieObject; maar deze wordt opgenomen in de Eisentabel. In de onderwerpentabel zijn te leveren documenten/datasets (informatieleveringen) óók InformatieObject. De informatieleveringen die gevráágd worden in het contract, staan niet in de Documententabel, maar in de Onderwerpentabel.

## Documentenformat
Het format wordt rijen getoond in plaats van in kolommen, om de leesbaarheid te bevorderen. Bij uitwisseling is de tabel horizontaal waarbij een of meerdere regels gebruikt kunnen worden per onderwerp. 

<table class="data">
<thead>
	<th>Kolomnaam
	<th>Definitie
	<th>Voorbeeld
</thead>
<tr>
	<td scope="row">  [=documentURI=]
	<td class="def">In deze kolom staat de unieke naam (URI) van het document.
	<td class="example">`https://www.example.org/id/Voorbeeld-Document1`
</tr>
<tr>
	<td scope="row">  [=documentCode=]
	<td class="def">In deze kolom staat de code ofwel het nummer van het document.
	<td class="example">Ede300-225
</tr>
<tr>
	<td scope="row"> [=documentNaam=] 
	<td class="def">In deze kolom staat de naam van het document.
	<td class="example">Omgevingsvisie Ede
</tr>
<tr>
	<td scope="row">   [=documentVersie=]
	<td class="def">In deze kolom staat de versie van het document.
	<td class="example">1.0
</tr>
<tr>
	<td scope="row">   [=documentVersieDatum=]
	<td class="def">In deze kolom staat de versiedatum van het document.
	<td class="example">10-10-1979
</tr>
<tr>
	<td scope="row">  [=documentAuteur=]
	<td class="def">In deze kolom staat de auteur van het document.
	<td class="example"> Jan Klaassen
</tr>
</tr>
<tr>
	<td scope="row">  [=documentType=]
	<td class="def">In deze kolom staat het documenttype.
	<td class="example">Een omgevingsvisie
</tr>
</tr>
<tr>
	<td scope="row">   [=documentSectie=]
	<td class="def">In deze kolom staat de sectie URI
	<td class="example">`https://www.example.org/id/Voorbeeld-Sectie1`
</tr>
</tr>
<tr>
	<td scope="row">  [=documentSectieNaam=]
	<td class="def">In deze kolom staat de sectie naam.
	<td class="example">1. Inleiding
</tr>
</tr>
<tr>
	<td scope="row">  [=documentSectieTekst=]
	<td class="def">In deze kolom staat de sectie tekst.
	<td class="example">Tekst van de sectie
</tr>
</table>

## Details documententabel

### <dfn>documentURI

De URI is de unieke identifier voor het document binnen het project.Zie [URI volgens W3C](https://www.w3.org/wiki/URI).

Voor het opstellen van URI's heeft de [[NEN_2660_2_2022]] een URI-strategie die je MOET volgen.

| Taalbinding | Kardinaliteit | Datatype                                               |
|-------------|---------------|--------------------------------------------------------|
| n.v.t.      | 1:1           | [xsd:anyURI](https://www.w3.org/2001/XMLSchema#anyURI) |
| { .def }

<aside class="note" title="LinkedData Proof">
Een URI maakt het meteen "linked data proof"
</aside>

### <dfn>documentCode

De DocumentCode is een nummer van het onderwerp in spreektaal, vaak een voor mensen herkenbare code of projectnummer. Deze meestal eenvoudige en soms logisch genummerde Code maakt het mogelijk om in een gesprek naar hetdocument te verwijzen, zonder de volledige URI te hoeven benoemen. Omdat deze code het document identificeert, MOET de code binnen het project uniek zijn.

| Taalbinding                                                                   | Kardinaliteit | Datatype                                               | Geadviseerd maximaal aantal tekens |
|-------------------------------------------------------------------------------|---------------|--------------------------------------------------------|------------------------------------|
| [skos:notation](https://www.w3.org/2009/08/skos-reference/skos.html#notation) | 1:1           | [xsd:string](https://www.w3.org/2001/XMLSchema#string) | 255                                |
| { .def } |

### <dfn>documentNaam

De DocumentNaam is de voor mensen leesbare naam van het document. Deze naam hoeft niet uniek te zijn in het project, maar dat is natuurlijk wel handig.

| Taalbinding                                                                     | Kardinaliteit | Datatype                                               | Geadviseerd maximaal aantal tekens |
|---------------------------------------------------------------------------------|---------------|--------------------------------------------------------|------------------------------------|
| [skos:prefLabel](https://www.w3.org/2009/08/skos-reference/skos.html#prefLabel) | 1:1           | [xsd:string](https://www.w3.org/2001/XMLSchema#string) | 255                                |
| { .def }

### <dfn>documentVersie

In deze kolom staat de versie van het document.

| Taalbinding                                                          | Kardinaliteit | Datatype                                               | Geadviseerd maximaal aantal tekens |
|----------------------------------------------------------------------|---------------|--------------------------------------------------------|------------------------------------|
| [cs:version](https://data.crow.nl/contractspecificaties/def/version) | 0:1           | [xsd:string](https://www.w3.org/2001/XMLSchema#string) | 255                                |
| { .def }

### <dfn>documentVersieDatum

In deze kolom staat de versiedatum van het document.

| Taalbinding                                                                  | Kardinaliteit | Datatype                                           |
|------------------------------------------------------------------------------|---------------|----------------------------------------------------|
| [cs:versionDate](https://data.crow.nl/contractspecificaties/def/versionDate) | 0:1           | [xsd:date](https://www.w3.org/2001/XMLSchema#date) |
| { .def }

### <dfn>documentAuteur

In deze kolom staat de auteur van het document.

| Taalbinding                                     | Kardinaliteit | Datatype                                               | Geadviseerd maximaal aantal tekens |
|-------------------------------------------------|---------------|--------------------------------------------------------|------------------------------------|
| [dct:creator](http://purl.org/dc/terms/creator) | 0:n           | [xsd:string](https://www.w3.org/2001/XMLSchema#string) | 255                                |
| { .def }

### <dfn>documentType

In deze kolom staat het documenttype. Voor documenttypen is nog geen nationale afspraak gemaakt.

| Taalbinding                                                                    | Kardinaliteit | Datatype                                               | Geadviseerd maximaal aantal tekens |
|--------------------------------------------------------------------------------|---------------|--------------------------------------------------------|------------------------------------|
| [cs:documentType](https://data.crow.nl/contractspecificaties/def/documentType) | 0:1           | [xsd:string](https://www.w3.org/2001/XMLSchema#string) | 255                                |
| { .def }


### <dfn>documentSectie

<aside class="note" title="Teksten opnemen als data">
De bovenstaande eigenschappen van het document zijn voldoende om bij een eis het brondocument te kunnen meegeven. 
Naast eisen kunnen ook teksten in de contractdocumenten worden meegegeven als data. Hiervoor kunnen de onderstaande eigenschappen worden gebruikt. Als je geen teksten wilt opnemen, kun je deze kolommen leeg laten. 
Toepassingsvoorbeelden om teksten uit te wisselen:
<ol><li> In Vraagspecificaties worden vaak naast eisen ook teksten toegevoegd. Door deze per sectie beschikbaar te maken kan een opdrachtnemer het gehele contract verwerken in een projectmanagementsysteem of kwaliteitssystreem. Het is dan mogelijk om bijvoorbeeld eisen af te leiden uit de tekst, of raakvlakken en risico's, of andere zaken.</li> 
<li>Ook kan deze optie gebruikt worden in een contract voor ingenieursdiensten, waarbij ook het samenstellen van een contract wordt gevraagd aan een opdrachtnemer. De opdrachtgever geeft dan teksten mee die tekstueel aan het project kunnen worden aangepast.</li>
</ol>
Bij gebruikmaking van deze optie kan eventueel een aparte tabel uitgewisseld worden, waarin de tekst van één document wordt uitgewisseld, om foutopsporing eenvoudiger te maken.
</aside>

In deze kolom staat de documentsectie. Deze kan gebruikt worden om een document verder op te delen. Middels de 'heeft deel' relatie kunnen net zoveel secties aan een document toegevoegd worden als er nodig zijn.

| Taalbinding                                                        | Kardinaliteit         | Datatype                                               |
|--------------------------------------------------------------------|-----------------------|--------------------------------------------------------|
| [nen2660:hasPart](https://nl-digigo.github.io/nen2660/def#hasPart) | 0:n (t.o.v. Document) | [xsd:anyURI](https://www.w3.org/2001/XMLSchema#anyURI) |
| { .def }

### <dfn>documentSectieNaam

De DocumentSectieNaam is de voor mensen leesbare naam van het onderwerp. Deze naam hoeft niet uniek te zijn in het project, maar dat is natuurlijk wel handig.

| Taalbinding                                                                     | Kardinaliteit               | Datatype                                               | Geadviseerd maximaal aantal tekens |
|---------------------------------------------------------------------------------|-----------------------------|--------------------------------------------------------|------------------------------------|
| [skos:prefLabel](https://www.w3.org/2009/08/skos-reference/skos.html#prefLabel) | 1:1 (t.o.v. DocumentSectie) | [xsd:string](https://www.w3.org/2001/XMLSchema#string) | 255                                |
| { .def }

### <dfn>documentSectieTekst

In deze kolom staat de paragraaftekst.

| Taalbinding                                                   | Kardinaliteit               | Datatype                                               |
|---------------------------------------------------------------|-----------------------------|--------------------------------------------------------|
| [rdf:value](http://www.w3.org/1999/02/22-rdf-syntax-ns#value) | 0:1 (t.o.v. DocumentSectie) | [xsd:string](https://www.w3.org/2001/XMLSchema#string) |
| { .def }
