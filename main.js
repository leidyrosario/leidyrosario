(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\" class=\"hfeed site\" [@routerTransition]=\"getDepth(o)\">\n  <app-sidebar></app-sidebar>\n  <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n<div class=\"p-overlay\"></div>\n<div class=\"p-overlay\"></div>\n<div class=\"site-alert animated\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sidebar/sidebar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/sidebar/sidebar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"masthead\" class=\"header\" role=\"banner\">\n  <a\n    class=\"menu-toggle toggle-link\"\n    (click)=\"toggleMenu($event)\"\n    [ngClass]=\"{ 'menu-toggle-opened': menuIsOpen }\"\n  ></a>\n\n  <h1\n    class=\"site-title mobile-title\"\n    [ngClass]=\"{ 'site-title-opened': menuIsOpen }\"\n  >\n    LEIDY ROSARIO\n  </h1>\n\n  <div class=\"header-wrap\" [ngClass]=\"{ 'header-wrap-opened': menuIsOpen }\">\n    <img src=\"./assets/images/site/leidy2.jpg\" alt=\"avatar\" />\n\n    <h1 class=\"site-title\">LEIDY ROSARIO </h1>\n\n    <nav\n      id=\"primary-navigation\"\n      class=\"site-navigation primary-navigation\"\n      role=\"navigation\"\n    >\n      <div class=\"nav-menu\">\n        <ul>\n          <li>\n            <a [routerLink]=\"['/home']\" routerLinkActive=\"active\">\n              <i class=\"pe-7s-home\"></i>Home</a\n            >\n          </li>\n          <li>\n            <a [routerLink]=\"['/about']\" routerLinkActive=\"active\">\n              <i class=\"pe-7s-user\"></i>About Me</a\n            >\n          </li>\n          <li>\n            <a [routerLink]=\"['/resume']\" routerLinkActive=\"active\">\n              <i class=\"pe-7s-id\"></i>Resume</a\n            >\n          </li>\n          <!-- <li>\n                                        <a href=\"#/portfolio\">\n                                            <i class=\"pe-7s-glasses\"></i>Portfolio</a>\n                                    </li>-->\n          <li>\n            <a [routerLink]=\"['/blog']\" routerLinkActive=\"active\">\n              <i class=\"pe-7s-notebook\"></i>Blog</a\n            >\n          </li>\n          <li *ngIf=\"true\">\n            <a [routerLink]=\"['/contact']\" routerLinkActive=\"active\">\n              <i class=\"pe-7s-call\"></i>Contact</a\n            >\n          </li>\n          <li *ngIf=\"false\">\n            <a (click)=\"goto('cominciamo-con-angular')\" routerLinkActive=\"active\">\n              <i class=\"pe-7s-call\"></i>Articolo</a\n            >\n          </li>\n          <li *ngIf=\"false\">\n            <a [routerLink]=\"['/blog']\" routerLinkActive=\"active\">\n              <i class=\"pe-7s-back\"></i>Back</a\n            >\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <!--\n    <div class=\"header-search\">\n      <form role=\"search\" method=\"get\" id=\"search-form\" action=\"#\">\n        <input\n          type=\"text\"\n          value=\"\"\n          name=\"s\"\n          id=\"search\"\n          placeholder=\"enter word\"\n        />\n        <input type=\"submit\" id=\"search-submit\" title=\"Search\" value=\"→\" />\n      </form>\n    </div>\n    -->\n\n    <div class=\"header-bottom\">\n      <app-social></app-social>\n    </div>\n  </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/about/about.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/about/about.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"about\" class=\"pt-page page-layout\">\n  <div class=\"content\">\n    <div class=\"layout-medium\">\n      <h1 class=\"page-title\"><i class=\"pe-7s-user\"></i>about me</h1>\n      <div class=\"section-title center\">\n        <h2>\n          <i>services</i>\n        </h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"service\">\n            <img src=\"./assets/images/site/icon-01-1.png\" alt=\"image\" />\n            <h4>Web Designer</h4>\n            <p>\n              Progetto siti web cercando di renderli di facile utilizzo per l'utente, tenendo sempre in considerazione la responsività.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"service\">\n            <img src=\"./assets/images/site/icon-02-1.png\" alt=\"image\" />\n            <h4>Programmazione</h4>\n            <p>\n              Dedico molto tempo alla mia formazione, al momento mi sto dedicando all'approfondimento di javascript e angular.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"service\">\n            <img src=\"./assets/images/site/icon-03-1.png\" alt=\"image\" />\n            <h4>Futuro</h4>\n            <p>\n              Prossimamente vorrei iniziare nuovi progetti con nuovi linguaggi e framework, come ad esempio Vue, React o Flutter.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3\">\n          <div class=\"service\">\n            <img src=\"./assets/images/site/icon-04-1.png\" alt=\"image\" />\n            <h4>Problem Solving</h4>\n            <p>\n              Ogni problema è una sfida e non un freno. Mi sprona studiare, a imparare e ovviamente a trovarne una soluzione.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"section-title center\">\n        <h2>\n          <i>work process</i>\n        </h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-4 col-sm-2\">\n          <div class=\"process\">\n            <div class=\"zoom\">\n            <i class=\"pe-7s-chat \"></i>\n            <h4>DISCOVER</h4>\n          </div>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-2\">\n          <div class=\"process\">\n            <div class=\"zoom\">\n            <i class=\"pe-7s-light\"></i>\n            <h4>IDEA</h4>\n          </div>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-2\">\n          <div class=\"process\">\n            <div class=\"zoom\">\n            <i class=\"pe-7s-vector\"></i>\n            <h4>DESIGN</h4>\n          </div>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-2\">\n          <div class=\"process\">\n            <div class=\"zoom\">\n            <i class=\"pe-7s-network\"></i>\n            <h4>DEVELOP</h4>\n          </div>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-2\">\n          <div class=\"process\">\n            <div class=\"zoom\">\n            <i class=\"pe-7s-browser\"></i>\n            <h4>TEST</h4>\n          </div>\n          </div>\n        </div>\n        <div class=\"col-xs-4 col-sm-2\">\n          <div class=\"process\">\n            <div class=\"zoom\">\n            <i class=\"pe-7s-rocket\"></i>\n            <h4>LAUNCH</h4>\n          </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section-title center\">\n        <h2>\n          <i>tools</i>\n        </h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-2 center\">\n          <div class=\"tools zoom\">\n            <i class=\"fab fa-js fa-3x\"></i>\n            <h4>Javascript</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-2 center\">\n          <div class=\"tools zoom\">\n            <i class=\"fab fa-angular fa-3x\"></i>\n            <h4>Angular</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-2 center\">\n          <div class=\"tools zoom\">\n            <i class=\"fab fa-css3-alt fa-3x\"></i>\n            <h4>Css</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-2 center\">\n          <div class=\"tools zoom\">\n            <i class=\"fab fa-html5 fa-3x\"></i>\n            <h4>Html</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-2 center\">\n          <div class=\"tools zoom\">\n            <i class=\"fab fa-font-awesome-flag fa-3x\"></i>\n            <h4>Font Awesome</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-2 center\">\n          <div class=\"tools zoom\">\n            <i class=\"fas fa-bold fa-3x\"></i>\n            <h4>Bootstrap</h4>\n          </div>\n        </div>\n      </div>\n      <div class=\"section-title center\">\n        <h2>\n          <i>fun fact</i>\n        </h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-3\">\n          <div class=\"fun-fact zoom\">\n            <i class=\"pe-7s-music\"></i>\n            <h4>2500 Ore di musica ascoltata</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <div class=\"fun-fact zoom\">\n            <i class=\"pe-7s-bookmarks\"></i>\n            <h4>100+ fumetti letti</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <div class=\"fun-fact zoom\">\n            <i class=\"pe-7s-map-2\"></i>\n            <h4>20 Città da visitare</h4>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <div class=\"fun-fact zoom\">\n            <i class=\"pe-7s-coffee\"></i>\n            <h4>20.000 tazze di caffè bevute</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/blog.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/blog.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"blog\" class=\"pt-page page-layout\">\n  <div class=\"content\">\n    <div class=\"layout-medium\">\n      <h1 class=\"page-title\"><i class=\"pe-7s-notebook\"></i>from the blog</h1>\n    </div>\n  </div>\n\n  <div class=\"container\">\n  <div class='card-deck'>\n    <app-card\n              class=\"col-md-4\"\n              *ngFor=\"let post of posts\"\n              [post]=\"post\"\n    >\n    </app-card>\n  </div>\n</div>\n\n\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\" class=\"hfeed site\">\n\n  <div id=\"main\" class=\"site-main\">\n    <div class=\"blog-single \">\n      <div class=\"layout-fixed\">\n        <article class=\"post type-post hentry\">\n          <header class=\"entry-header\">\n            <h1 class=\"entry-title\">Iniziamo con Angular</h1>\n            <div class=\"featured-image\">\n              <img\n                src=\"../assets/images/blog/angular_logo.png\"\n                alt=\"blog-image\"\n              />\n            </div>\n            <div class=\"entry-content\">\n              <p>\n                La tecnologia che permette la creazione di app e webapp si\n                evolve molto rapidamente quindi spesso è difficile rimanere al\n                passo e capire quali strumenti usare per lo sviluppo dei nostri\n                progetti su dispositivi mobili.\n              </p>\n              <p>\n                Angular (attuale versione 7.x) è l'ultima invenzione di un\n                gruppo di ingegneri di Google, capeggiati da Brad Green, nata\n                come evoluzione del progetto AngularJS, un popolare framework\n                Model View (MV*) per la creazione di applicazioni (Web APP) e\n                pagine web.\n              </p>\n              <p>\n                Per framework si intende una struttura che facilita lo sviluppo,\n                sia in termini di velocità che in termini di ordine e\n                mantenibilità del codice, per intendersi come possono essere\n                Laravel,Simphony nel caso di framework php.\n              </p>\n              <h2>Con quale linguaggio si deve creare un'app in Angular?</h2>\n              <p class=\"drop-cap\">\n                Per sviluppare sul nuovo framework, TypeScript è il linguaggio\n                consigliato. Quest'ultimo non è altro che un'estensione, creata\n                da Microsoft, di JavaScript e si basa sulle specifiche della\n                versione 6 di JavaScript - ECMAScript 6 - rilasciate nel maggio\n                2015. Tuttavia è possibile continuare ad usare JavaScript ma con\n                qualche complicazione in più che decisamente non vale la pena\n                sperimentare.\n              </p>\n              <p>\n                Il problema principale di TypeScript è che ancora non tutti i\n                browser supportano ES6, quindi è necessario compilare tutto il\n                codice TypeScript sviluppato, per trasformarlo in un linguaggio\n                \"comprensibile\" agli attuali browser, ossia ES5.\n              </p>\n              <p>\n                E' chiaro quindi che, se hai già delle esperienze nell'uso di\n                JavaScript o jQuery, ti sarà più semplice apprendere questo\n                nuovo linguaggio di alto livello basato appunto su JavaScript.\n              </p>\n              <h3>Che vantaggi ci sono nell’uso di TypeScript?</h3>\n              <p>\n                I vantaggi nell’uso di TypeScript in Angular possono essere\n                riassunti con i vantaggi del linguaggio stesso. TypeScript\n                rispetto a JavaScript è staticamente tipizzato; ciò consente una\n                maggiore sicurezza e robustezza nella scrittura del codice e\n                nella rilevazione degli errori che, rispetto a JavaScript, non\n                verrano elaborati in runtime, ma piuttosto in fase di\n                compilazione. Non dimentichiamo che TypeScript rimane totalmente\n                compatibile con JavaScript e questo consente di poter integrare\n                qualsiasi progetto del secondo all’interno del primo. La\n                tipizzazione dinamica che caratterizza JavaScript rimane inoltre\n                un anello debole in progetti di grosse dimensioni.\n              </p>\n              <h3>Che software posso usare per scrivere in TypeScript</h3>\n              <p>\n                Trattandosi di codice JavaScript, puoi usare un qualsiasi editor\n                di testo, anche se è consigliato avere un software che aiuti nel\n                completamento del codice. Tra questi posso citare Eclipse, VS\n                Code, Sublime Text, WebStorm.\n              </p>\n            </div>\n          </header>\n        </article>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\" class=\"hfeed site\">\n  <div id=\"main\" class=\"site-main\">\n    <div class=\"blog-single \">\n      <div class=\"layout-fixed\">\n        <article class=\"post type-post hentry\">\n          <header class=\"entry-header\">\n            <h1 class=\"entry-title\">Introduzione a Visual Studio Code</h1>\n            <div class=\"featured-image\">\n              <img\n                src=\"../assets/images/blog/vscode.png\"\n                alt=\"blog-image\"\n              />\n            </div>\n            <div class=\"entry-content\">\n              <h4>INTRODUZIONE</h4>\n              <P\n                >Gli sviluppatori hanno due scelte per quanto riguarda il loro\n                ambiente di lavoro, possono scegliere tra un editor di codice e\n                un IDEs (un ambiente di sviluppo integrato in lingua inglese\n                integrated development environment ), in informatica, è un\n                software che, in fase di programmazione, supporta i\n                programmatori nello sviluppo del codice sorgente di un\n                programma.</P\n              >\n\n              <P\n                >Tra editor di codice e IDEs c’è una vasta scelta tanto per\n                nominarne qualcuno XCode, Brackets, Sublime Text, Atom, vim,\n                PHPStorm. La differenza tra un editor e un IDE sta nella\n                funzionalità e nella complessità.\n              </P>\n\n              <P\n                >Per quanto mi riguarda non conosco per diretto utilizzo molti\n                di questi software, spero in futuro poter fare un giusto\n                paragone tra gli uni e gli altri. Ora io ho avuto l’opportunità\n                di provare Sublime Text e VSCODE, ho iniziato a programmare\n                circa 2 anni fa e cercando l’editor giusto sono stata spinta\n                verso questi 2, ma alla fine ho scelto VSCODE.\n              </P>\n\n              <h4>PERCHE’ VSCODE?</h4>\n\n              <p>\n                Quando ho iniziato ero completamente persa e non sapevo come\n                muovermi e la scelta è caduta su VSCODE per il grosso numero di\n                sviluppatori che ne cantavano le lodi. Sono stata attratta al\n                grosso supporto online.\n              </p>\n\n              <p>\n                Oltre le motivazioni personali questo editor ha molte ragioni\n                che lo rendono una valida scelta tra gli editor di codice.\n              </p>\n\n              <p>\n                Questo editor è il risultato di anni e anni di esperienza nello\n                sviluppo di editor di codice da parte di Microsoft.\n              </p>\n\n              <p>\n                L'editor è Open-Source ed è completamente gratis. E' cross\n                platform e funziona con Mac, Linux e Windows. E' fatto con\n                Node.js e puoi fare uso del supporto dedicato a javascript (come\n                l’IntelliSense ed il debugging per citarne alcuni).\n              </p>\n\n              <p>\n                Ha vinto l’entusiasmo della community, ha migliaia di estensioni\n                alcune ufficiali altre fatte dalla community e questo si è\n                tradotto nella\n                <a href=\"https://insights.stackoverflow.com/survey/2019/\"\n                  >classifica di gradimento</a\n                >\n              </p>\n\n              <p>\n                Microsoft rilascia degli update ogni mese. I continui upgrade\n                dimostrano che Microsoft ascolta i propri users, mantenendo la\n                piattaforma sempre stabile.\n              </p>\n\n              <h4>INIZIAMO!</h4>\n\n              <p>\n                Per scaricare il programma bisogna visitare la pagina di\n                <a href=\"https://code.visualstudio.com/\">Visual Studio Code</a>.\n              </p>\n              <img\n                src=\"../assets/images/blog/Schermata 2020-02-19 alle 22.46.32.png\"\n                alt=\"blog-image\"\n                class=\"aligncenter\"\n              />\n\n              <p>\n                L'installazione dovrebbe variare tra i sistemi operativi, quindi\n                seguite le istruzioni per il vostro.\n              </p>\n\n              <p>\n                Quando aprite il vostro editor per la prima volta vedrete la\n                schermata di benvenuto:\n              </p>\n              <img\n                src=\"../assets/images/blog/Schermata 2020-02-28 alle 22.30.26.png\"\n                alt=\"blog-image\"\n                class=\"aligncenter\"\n              />\n\n              <p>\n                Abbiamo una toolbar sulla sinistra con 5 icone. Queste si\n                riferiscono a:\n              </p>\n\n              <ul>\n                <li>The File Explorer</li>\n                <li>Search</li>\n                <li>Source Control</li>\n                <li>The Debugger</li>\n                <li>The Extensions</li>\n              </ul>\n\n              <p>\n                Ora in questo tutorial andrò a toccare solo alcune di queste\n                icone.\n              </p>\n\n              <h4>Explorer</h4>\n              <img\n                src=\"../assets/images/blog/Schermata 2020-02-28 alle 22.41.23.png\"\n                alt=\"blog-image\"\n                class=\"aligncenter\"\n              />\n\n              <p>\n                Premi il tasto “Open Folder” nella sidebar o il link che avete a\n                disposizione nella pagina di benvenuto. Entrambi ti porteranno\n                alla finestra per selezionare i file.\n              </p>\n\n              <p>\n                Scegli una cartella dove hai dei file di codice o di semplice\n                testo e aprilo.\n              </p>\n\n              <p>VSCode ti mostrerà il contenuto di quella cartella:</p>\n              <img\n                src=\"../assets/images/blog/Schermata 2020-02-28 alle 22.47.36.png\"\n                alt=\"blog-image\"\n                class=\"aligncenter\"\n              />\n\n              <p>\n                Se selezionate uno dei file, il contenuto di esso vi apparirà\n                nel pannello principale (sulla destra).\n              </p>\n              <img\n                src=\"../assets/images/blog/Schermata 2020-02-28 alle 22.50.50.png\"\n                alt=\"blog-image\"\n                class=\"aligncenter\"\n              />\n\n              <p>E se cominci a modificarlo ti accorgerai di un pallino bianco che appare sia sulla tab in alto a fianco al nome del file e anche nella sidebar.</p>\n              <figure><img src=\"../../../../../assets/images/blog/Mar-11-2020 09-53-51.gif\" alt=\"blog-image\" class=\"aligncenter\"></figure>\n\n              <p>Premendo CMD+P ti comparira una finestra per selezionare file, così da potersi muovere più velocemente tra i file se si lavora su progetti più grandi: </p>\n              <img src=\"../../../../../assets/images/blog/Schermata 2020-03-11 alle 10.13.47.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <p>Puoi nascondere la sidebar contenente i file usando CMD+B </p>\n\n              <blockquote>\n                <p>Nota: io sto usando le shortcuts per i Mac. Il più delle volte su Windows e Linux basta cambiare CMD con CTRL e dovrebbe funzionare, ma non è sempre così quindi ti consiglio di andare a prenderti la lista dei <a href=\"https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference\">shortcuts</a></p>\n              </blockquote>\n\n              <h4>SEARCH</h4>\n\n              <p>La seconda icona nella sidebar è il “Search”. Cliccandoci ti mostra l’interfaccia di ricerca:</p>\n              <img src=\"../../../../../assets/images/blog/Schermata 2020-03-11 alle 11.55.13.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <p>Per eseguire una ricerca, basta scrivere ciò che cerchi e premere invio. </p>\n\n              <p>Cliccando sul simbolo ▷ sulla destra attiva la funzione cerca e sostituisci. </p>\n\n              <p>Cliccando sui 3 puntini ti mostra un pannello che ti permette solo dei file specifici ed escludendone altri:</p>\n              <img src=\"../../../../../assets/images/blog/search-replace.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <h4>Source Control</h4>\n\n              <p>La terza icona è la Source Control</p>\n              <img src=\"../../../../../assets/images/blog/Schermata 2020-03-11 alle 22.01.49.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <p>VS Code arriva con Git preinstallato. Non andrò nel dettaglio su come funziona Git (io stessa ho bisogno di studiare di più l’argomento). </p>\n\n              <p>La U a fianco di ogni file significa che quel particolare file è stato modificato o aggiunto dall’ultimo commit. </p>\n\n              <p>Per fare il commit devi scrivere il messagio che accompagnerà le nuove modifiche dopo di che premi CMD-Enter o clicchi sull’icona ✔︎ in alto.</p>\n              <img src=\"../../../../../assets/images/blog/Schermata 2020-03-11 alle 23.01.46.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <p>I’icona con i 3 puntini, quando premuta offre una serie di opzioni  per interagire con Git:</p>\n              <img src=\"../../../../../assets/images/blog/Schermata 2020-03-11 alle 23.05.31.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <h4>Debugger</h4>\n\n              <p>La quarta icona apre il debugger di JavaScript. Questo meriterebbe un suo articolo da solo. Quando avrò la conoscenza necessaria per affrontare l’argomento farò un articolo a riguardo. Nel frattempo puoi controllare <a href=\"https://code.visualstudio.com/docs/editor/debugging\">the official docs</a>.</p>\n\n              <h4>Extensions</h4>\n\n              <p>La quinta icona ci porta le estensioni.</p>\n              <img src=\"../../../../../assets/images/blog/Schermata 2020-03-12 alle 20.50.10.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <p>Le estensioni sono tra le funzionalità più interessanti di VS Code. </p>\n\n              <p>Danno un tale valore aggiunto che finirai per usarne parecchie quando lavori a certi progetti. </p>\n\n              <p>Io ne ho parecchie installate.</p>\n\n              <p>Una cosa da tenere a mente è che ogni estensione che installi avrà un impatto (più o meno grande) sulla performance del tuo editor.</p>\n\n              <p>Puoi disabilitare un’estensione che hai installato e abilitarla solo quando ne hai bisogno. </p>\n\n              <p>C'è una lista di estensioni raccomandate che includono i più popolari tools.</p>\n              <img src=\"../../../../../assets/images/blog/Schermata 2020-03-12 alle 20.53.24.png\" alt=\"blog-image\" class=\"aligncenter\">\n\n              <p>Cliccando il tasto verde da inizio all’installazione diretta. Fa tutto per te, devi solo cliccare il tasto “Reload” per attivarla, questo riavvierà la vostra finestra dell'editor.</p>\n\n              <p>Ok! Per adesso mi fermo qui lo so ho molte altre cose da trattare come il terminale e approfondire sulla command pallette. Continuerò questi temi in un altro post. </p>\n\n\n\n            </div>\n          </header>\n        </article>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-template-driven-form/post-template-driven-form.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-template-driven-form/post-template-driven-form.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\" class=\"hfeed site\">\n  <div id=\"main\" class=\"site-main\">\n    <div class=\"blog-single \">\n      <div class=\"layout-fixed\">\n        <article class=\"post type-post hentry\">\n          <header class=\"entry-header\">\n            <h1 class=\"entry-title\">Template Driven Form</h1>\n            <div class=\"featured-image\">\n              <img src=\"../../../../../assets/images/blog/angular-form.png\" alt=\"blog-image\" />\n            </div>\n            <div class=\"entry-content\">\n              <h4>Cominciamo!</h4>\n              <h4>Crea una nuova App</h4>\n              <p>Cominciamo una semplice app con Angular digitando il comando ng new template-driven-form.</p>\n\n              <h4>Prepariamo l’app.component.html </h4>\n              <p>Vai all’app.component.html e mettici questo codice:</p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/2f3c1472d93e57f6a1c526796d22f22a'\"\n              ></ngx-gist>\n              \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\" class=\"hfeed site\">\n  <div id=\"main\" class=\"site-main\">\n    <div class=\"blog-single \">\n      <div class=\"layout-fixed\">\n        <article class=\"post type-post hentry\">\n          <header class=\"entry-header\">\n            <h1 class=\"entry-title\">ToDo App con Angular</h1>\n            <div class=\"featured-image\">\n              <img src=\"../assets/images/blog/OvMZBs9.jpg\" alt=\"blog-image\" />\n            </div>\n            <div class=\"entry-content\">\n              <p>\n                Angular e l’Angular CLI ci permettono di costruire applicazioni\n                single page e siti mono pagine velocemente.\n              </p>\n\n              <p>\n                Grazie a tutte le features native del framework, possiamo\n                sbizzarrirci e focalizzarci nelle cose che rendono la nostra app\n                unica.\n              </p>\n\n              <p>\n                Ho deciso di fare un semplice Todo app e lo so che può essere\n                alquanto sciocco fare una cosa così semplice con Angular, ma\n                questo è solo un tutorial per vedere e capire alcune\n                funzionalità di questo framework.\n              </p>\n\n              <h3>Prima di cominciare</h3>\n              <p>\n                Come prima cosa dobbiamo scaricare\n                <a href=\"https://nodejs.org/it/download\">Node.js</a> e\n                accertarci che sia installato correttamente andando nel terminal\n                e controllando le versioni di node e di npm (node package\n                manager) rispettivamente con node –v e npm –v.\n              </p>\n\n              <p>\n                Ora che abbiamo scaricato node possiamo procedere\n                all’installazione di Angular CLI:\n              </p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/e5b37711cb399355ba88610ac684f416'\"\n              ></ngx-gist>\n\n              <h3>Creare la nostra prima app Angular</h3>\n              <p>\n                Utilizzeremo Angular CLI per creare una serie di componenti,\n                servizi, rotte e direttive.\n              </p>\n\n              <p>\n                Per creare un nuovo progetto con Angular-cli basta aprire il\n                terminale e far partire questo comando:\n              </p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/235be26479d0e5d175fbf0a4eddb6fb2'\"\n              ></ngx-gist>\n\n              <p>\n                Dopo che avrà scaricato tutto il malloppo potremmo aprire il\n                nostro progetto con il nostro editor preferito, il mio è VS CODE\n                (più avanti farò un tutorial a riguardo).\n              </p>\n\n              <p>\n                Se si è nuovi con Angular la struttura del progetto può sembrare\n                caotica ma per iniziare noi ci concentreremo nella cartella src\n                e in particolare la cartella app (qui è dove andremo a creare la\n                nostra app).\n              </p>\n              <img\n                src=\"../assets/images/blog/Schermata 2019-12-17 alle 21.52.28.png\"\n                alt=\"\"\n              />\n\n              <p>Per controllare lo stato della tua app utilizziamo:</p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/8d08751a99f88aa28e3dbbd2b8206d06'\"\n              ></ngx-gist>\n\n              <p>\n                Per farsi una cultura riguardo cosa puoi fare con ng si\n                utilizza:\n              </p>\n              <pre class=\"prettyprint linenums\">ng –help </pre>\n\n              <p>\n                Quando il terminale carica tutto la nostra app sarà disponibile\n                alla porta: http://localhost:4200/\n              </p>\n\n              <p>\n                Per cominciare ci rendiamo la vita semplice e ci facciamo\n                aiutare da bootstrap, ora in base a cosa devi fare puoi\n                scegliere come aggiungerlo al tuo progetto puoi aggiungerlo con\n                un link (per un progetto così piccolo è la scelta più veloce)\n                oppure puoi installare bootstrap nel tuo node_modules (questo\n                metodo di solito è consigliato quando si fanno progetti di una\n                certa dimensione, perciò non lo userò in questo progetto ma faro\n                una spiegazione dettagliata nel mio prossimo progetto).\n              </p>\n\n              <p>Quindi aggiungiamo bootstrap cdn in index.html:</p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/babb6703587f4988f59de1a1e7077756'\"\n              ></ngx-gist>\n\n              <p>\n                Partiamo subito dal app.component.html dove troveremo tutto ciò\n                che vediamo alla porta 4200. Qui cancelleremo tutto tranne che\n                il titolo e aggiungeremo le classi bootstrap per crearci un\n                semplice form.\n              </p>\n              <ngx-gist\n                style=\"height: 335px\"\n                [gistId]=\"'lady-ody93/1901cc700363ffd23843bd2e6cb9c02d'\"\n              ></ngx-gist>\n\n              <p>\n                Se si vuole si può aggiungere un po' di css per renderlo più\n                compatto.\n              </p>\n              <ngx-gist\n                style=\"height: 265px\"\n                [gistId]=\"'lady-ody93/d5ba7e628091dba2c92214ae3168c081'\"\n              ></ngx-gist>\n\n              <p>\n                Per quanto riguarda il CSS, non entrerò nel dettaglio per non\n                dilungare troppo la cosa. in questo progetto mi voglio\n                concentrare solo sulle specifiche di Angular.\n              </p>\n\n              <p>\n                Per popolare il campo di input, possiamo utilizzare la direttiva\n                ngModel che serve a sincronizzare una proprietà con un campo di\n                input in questo modo:\n              </p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/26addf78070ba750bb1037ee5aa962e8'\"\n              ></ngx-gist>\n\n              <p>\n                Dopo di che per mostrare a video ciò che abbiamo inserito nel\n                campo input ci serve prendere la variabile todo in questo modo:\n              </p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/e2542062862e8fd46491e49738d7d230'\"\n              ></ngx-gist>\n\n              <p>\n                Adesso dobbiamo recuperare ciò che abbiamo inserito nell'input.\n                Tornando nel app.component.ts ci creiamo un array vuota:\n              </p>\n              <ngx-gist\n                style=\"height: 160px\"\n                [gistId]=\"'lady-ody93/19bf6c6523829ae04ab8b2f0899d2201'\"\n              ></ngx-gist>\n\n              <p>\n                Fatto questo dobbiamo aggiungere un evento click che andrà a\n                caricare i valori contenuti nell’array todos.\n              </p>\n              <strong>app.component.html:</strong>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/a8d66c6a2a9cf6ef32c32026642d9286'\"\n              ></ngx-gist>\n\n              <p>In <strong>app.component.ts</strong>:</p>\n              <ngx-gist\n                style=\"height: 265px\"\n                [gistId]=\"'lady-ody93/7c9c15cedc75a220fbcddf0e0eb84360'\"\n              ></ngx-gist>\n\n              <p>\n                Per recuperare i dati contenuti in “todos” useremo la direttiva\n                ngFor per ciclare tutti i dati contenuti nell’array e mostrare i\n                dati.\n              </p>\n              <p>Nel <strong>app.component.html</strong>:</p>\n              <ngx-gist\n                style=\"height: 190px\"\n                [gistId]=\"'lady-ody93/c8c4fe06f747bc5ccaf0f02a22cd33f4'\"\n              ></ngx-gist>\n\n              <p>\n                Adesso quando cliccheremo il tasto add i dati verranno aggiunti\n                alla lista sotto così:\n              </p>\n              <figure>\n                <img src=\"../assets/images/blog/add.gif\" alt=\"\" />\n              </figure>\n\n              <p>\n                Ora che l’app è quasi finita aggiungiamo la funzionalità per\n                cancellare i nostri todo. Per cancellare un elemento il modo\n                migliore per farlo è splice, ma per cominciare partiamo\n                aggiungendo un evento click all’icona di elimina e li\n                aggiungiamo come parametro “todo”:\n              </p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/e8813ba7961a1fcfb072a61a52452d54'\"\n              ></ngx-gist>\n\n              <p>Nel <strong>app.component.ts</strong>:</p>\n              <p>\n                Cicliamo tutti i dati dell’array e cancelliamo quelli che\n                clicchiamo.\n              </p>\n              <ngx-gist\n                [gistId]=\"'lady-ody93/58db8233512466694cd1e3ab499c7009'\"\n              ></ngx-gist>\n\n              <p>Il risultato sarà:</p>\n              <figure>\n                <img src=\"../assets/images/blog/delete.gif\" alt=\"\" />\n              </figure>\n\n              <p>ci siamo riusciti!</p>\n\n              <h3>Aggiungiamo l’evento sul pulsante Invio</h3>\n              <p>\n                Possiamo aggiungere il submit del form non solo all’evento\n                (click) dell’icona, ma anche sul tasto invio della tastiera.\n                Come? Ci viene in aiuto una directive chiamata (ngSubmit) che si\n                applica sul Form:\n              </p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/a25c0087cceda8cbee90d90dc8ff9ad9'\"\n              ></ngx-gist>\n\n              <p>\n                Abbiamo bisogno di aggiungere la variabile “#todoForm” al modulo\n                e dargli “ngForm” come valore. In questo caso, abbiamo solo un\n                campo quindi otterremo solo un singolo valore.\n              </p>\n\n              <p>Nel <strong>app.component.html</strong>:</p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/73a4d3b095640f6b6483ea502699d7ec'\"\n              ></ngx-gist>\n\n              <p>In <strong>app.component.ts</strong>:</p>\n              <ngx-gist\n                style=\"height: 170px\"\n                [gistId]=\"'lady-ody93/f5c59f1a6ee38fe04d4a1bac14fd4af5'\"\n              ></ngx-gist>\n\n              <p>\n                Ora dobbiamo inserire il valore restituito all’interno del\n                “todoArray”:\n              </p>\n              <ngx-gist\n                style=\"height: 265px\"\n                [gistId]=\"'lady-ody93/7e94c94e4e3085593f59ea871029ba5d'\"\n              ></ngx-gist>\n\n              <p>\n                Ci siamo! 😀 Il valore è stato inserito premendo soltanto\n                “enter”:\n              </p>\n              <figure>\n                <img src=\"../assets/images/blog/enter.gif\" alt=\"\" />\n              </figure>\n\n              <p>\n                Solo un’utima cosa. Per svuotare il campo di input dopo che si è\n                fatto submit, basta agire sull’html. È possibile concatenare più\n                istruzioni all’interno di una directive di tipo metodo,\n                concatenandole con un punto e virgola.\n              </p>\n              <ngx-gist\n                style=\"height: 110px\"\n                [gistId]=\"'lady-ody93/705447ce625604007013bd45a1dc9bf9'\"\n              ></ngx-gist>\n\n              <h3>In Conclusione</h3>\n              <p>\n                Angular è più facile di quanto pensi. È una delle migliori\n                librerie JavaScript e ha un grande supporto e una bella\n                community. Ha anche strumenti che rendono il lavoro facile e\n                veloce. Ora questa piccola app era solo un inizio, più avanti\n                giocherò con le animazioni e altre cose magari utilizzando\n                questa stessa app o forse una nuova deciderò più avanti, per\n                adesso a presto!\n              </p>\n            </div>\n          </header>\n        </article>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/contact/contact.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/contact/contact.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"contact\" class=\"pt-page page-layout contact light-text\">\n  <div class=\"content\">\n    <h1 class=\"page-title\">\n      <i class=\"pe-7s-call\"></i>\n      CONTACT ME\n    </h1>\n    <div class=\"section-title center\">\n      <h2>\n        <i>Socializiamo</i>\n      </h2>\n    </div>\n    <ul class=\"social\">\n      <li>\n        <a\n          class=\"facebook\"\n          href=\"https://www.facebook.com/leidy.rosariocastillo\"\n        ></a>\n      </li>\n      <li>\n        <a class=\"twitter\" href=\"https://twitter.com/leidyRosario93\"></a>\n      </li>\n      <li>\n        <a class=\"github\" href=\"https://github.com/leidyrosario\"></a>\n      </li>\n      <li>\n        <a\n          class=\"linkedin\"\n          href=\"https://www.linkedin.com/in/leidy-rosario-72b95219b\"\n        ></a>\n      </li>\n    </ul>\n    <div class=\"section-title center\">\n      <h2>\n        <i>Contattami</i>\n      </h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-sm-4\">\n        <div class=\"fun-fact\">\n          <i class=\"pe-7s-map-marker\"></i>\n          <h4>based in Milan, Italy</h4>\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-4\">\n        <div class=\"fun-fact\">\n          <i class=\"pe-7s-call\"></i>\n          <h4>Tel : +39 3475777098</h4>\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-sm-4\">\n        <div class=\"fun-fact\">\n          <i class=\"pe-7s-check\"></i>\n          <h4>Freelance Available</h4>\n        </div>\n      </div>\n    </div>\n    <div class=\"section-title center\">\n      <h2>\n        <i>Drop Me A Line</i>\n      </h2>\n    </div>\n    <!--<div\n                *ngIf=\"!showMessage\"\n                class=\"contact-form\"\n            >\n                <form\n                    [formGroup]=\"registerForm\"\n                    (ngSubmit)=\"onSubmit()\"\n                >\n                    <div class=\"form-group\">\n                        <label for=\"name\">NOME</label>\n                        <input\n                            type=\"text\"\n                            name=\"name\"\n                            id=\"name\"\n                            required\n                            minlength=\"3\"\n                            class=\"form-control\"\n                            formControlName=\"name\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"\n                        >\n                        <div\n                            *ngIf=\"submitted && f.name.errors\"\n                            class=\"invalid-feedback\"\n                        >\n                            <div *ngIf=\"f.name.errors.required\">Nome Richiesto</div>\n                            <div *ngIf=\"f.name.errors.minlength\">\n                                Il campo nome deve avere almeno 3 lettere\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"email\">EMAIL</label>\n                            <input\n                                type=\"text\"\n                                name=\"email\"\n                                id=\"email\"\n                                formControlName=\"email\"\n                                class=\"form-control\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\n                            >\n                            <div\n                                *ngIf=\"submitted && f.email.errors\"\n                                class=\"invalid-feedback\"\n                            >\n                                <div *ngIf=\"f.email.errors.required\">Email Richiesta</div>\n                                <div *ngIf=\"f.email.errors.email\">Email deve essere valida</div>\n                            </div>\n                        </div>\n\n                        <p class=\"antispam\">\n                            Lascia questo vuoto se sei umano :\n                            <br>\n                            <input name=\"url\">\n                        </p>\n\n                        <div class=\"form-group\">\n                            <label for=\"message\">MESSAGIO</label>\n                            <textarea\n                                name=\"message\"\n                                id=\"message\"\n                                class=\"required\"\n                                formControlName=\"message\"\n\n                            ></textarea>\n                            <!-- [ngClass]=\"{ 'is-invalid': submitted && f.message.errors }\"\n                            <div\n                                *ngIf=\"submitted && f.message.errors\"\n                                class=\"invalid-feedback\"\n                            >\n                                <div *ngIf=\"f.message.errors.required\">Messaggio necessario</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <button\n                                class=\"submit button\"\n                                [disabled]=\"f.invalid\"\n                                (click)=\"showHideMessage()\"\n                                (click)=\"clearForm()\"\n                            >\n\n                                Invia\n                            </button>\n                        </div>\n\n                    </div>\n                </form>\n            </div>-->\n    <div *ngIf=\"!showMessage\" class=\"contact-form\">\n      <form #f=\"ngForm\" (submit)=\"onSubmit(f)\">\n        <div class=\"form-group\">\n          <label for=\"name\">NOME</label>\n          <input\n            id=\"name\"\n            type=\"text\"\n            [ngModel]=\"user?.name\"\n            name=\"name\"\n            #labelRef=\"ngModel\"\n            required\n            minlength=\"3\"\n            [ngClass]=\"{ error: labelRef.invalid && f.dirty }\"\n          />\n          <div *ngIf=\"labelRef.errors?.minlength\">troppo corto</div>\n          <div *ngIf=\"labelRef.touched && !labelRef.valid\">\n            il campo è obbligatorio\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">EMAIL</label>\n          <input\n            id=\"email\"\n            type=\"text\"\n            [ngModel]=\"user?.email\"\n            name=\"email\"\n            #emailRef=\"ngModel\"\n            required\n            [ngClass]=\"{ error: emailRef.invalid && f.dirty }\"\n          />\n          <div *ngIf=\"emailRef.touched && !emailRef.valid\">\n            il campo è obbligatorio\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"message\">MESSAGIO</label>\n          <textarea\n            id=\"message\"\n            type=\"text\"\n            [ngModel]=\"user?.message\"\n            name=\"message\"\n            #messageRef=\"ngModel\"\n            required\n            [ngClass]=\"{ error: messageRef.invalid && f.dirty }\"\n          ></textarea>\n          <div *ngIf=\"messageRef.touched && !messageRef.valid\">\n            il campo è obbligatorio\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button type=\"submit\" [disabled]=\"f.invalid\">\n            Invia\n          </button>\n        </div>\n      </form>\n    </div>\n\n    <div *ngIf=\"showMessage\">\n      <h1>GRAZIE!</h1>\n      <i class=\"fas fa-check\"></i>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/home/home.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/home/home.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main\" class=\"site-main\">\n  <section\n    id=\"home\"\n    class=\"pt-page page-layout light-text home-section \"\n    style=\"background-image:url(../../../../../assets/images/site/desktop.jpg)\"\n  >\n    <div class=\"content\">\n      <div class=\"layout-medium\">\n        <h4>Hi, I am</h4>\n        <h1>Leidy Rosario</h1>\n        <h4>\n          I am\n          <span class=\"typed-element\">a Blogger.</span>  \n        </h4>\n      </div>\n    </div>\n  </section>\n  <!-- PAGE : PORTFOLIO \n                <section id=\"portfolio\" class=\"pt-page page-layout portfolio\">\n                      .content \n                    <div class=\"content\">\n                          .layout-medium \n                        <div class=\"layout-medium\">\n      \n                \n                          page-title \n                          <h1 class=\"page-title\">\n                            <i class=\"pe-7s-glasses\"></i>i miei lavori\n                          </h1>\n                           page-title -->\n\n  <!--FILTERS \n                          <ul id=\"filters\" class=\"filters\">\n                              <li class=\"current\">\n                                  <a href=\"#\" data-filter=\"*\">all</a>\n                              </li>\n                              <li>\n                                  <a href=\"#\" data-filter=\".media\">Media</a>\n                              </li>\n                              <li>\n                                  <a href=\"#\" data-filter=\".illustration\">Illustration</a>\n                              </li>\n                              <li>\n                                  <a href=\"#\" data-filter=\".video\">Video</a>\n                              </li>\n                          </ul>\n                           FILTERS-->\n\n  <!-- PORTFOLIO \n                          <div class=\"portfolio-items media-grid masonry\" data-layout=\"masonry\" data-item-width=\"340\">\n      \n      \n                          </div>\n                           PORTFOLIO \n                           \n                        \n                              \n                 </div>\n                         .layout-medium \n                    </div>\n                     .content \n                </section>\n                PAGE : PORTFOLIO -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/not-found/not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/not-found/not-found.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main\" class=\"site-main\">\n  <div class=\"page-single page-layout\">\n    <div class=\"layout-fixed\">\n      <article class=\"hentry\">\n        <header class=\"entry-header\">\n          <h1 class=\"entry-title\">you are lost!</h1>\n        </header>\n        <div class=\"entry-content\">\n          <div class=\"http-alert\">\n            <h1><i class=\"pe-7s-way\"></i></h1>\n            <p>The page you are looking for was not found!</p>\n          </div>\n        </div>\n      </article>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/portfolio/portfolio.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/portfolio/portfolio.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  portfolio works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/resume/resume.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/resume/resume.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"resume\" class=\"pt-page page-layout\">\n  <div class=\"content\">\n    <div class=\"layout-medium\">\n      <h1 class=\"page-title\"><i class=\"pe-7s-id\"></i>resume</h1>\n      <div class=\"row\">\n        <div class=\"col-sm-7\">\n          <div class=\"event\">\n            <h2>CURRICULUM</h2>\n            <p>\n              <i class=\"pe-7s-ribbon\"></i>\n            </p>\n          </div>\n          <div class=\"event\">\n            <h3>Progetti</h3>\n            <h4>Introduzione</h4>\n            <p>\n              Ho iniziato ad interessarmi alla programmazione per pura\n              curiosità, ma col tempo sta crescendo in qualcosa di molto più\n              interessante ed eccitante (una nuova sfida, forse). Voglio\n              imparare nuove cose, ma allo stesso tempo voglio poter mettere in\n              pratica ciò che imparo ed è per questo che ho creato questo sito\n              nella speranza che un giorno potrò lavorare a progetti veri.\n            </p>\n          </div>\n          <div class=\"event\">\n            <h3>Lingue</h3>\n            <h4>Lingue Conosciute</h4>\n              <ul>\n                <li>Spagnolo (Madrelingua)</li>\n                <li>Italiano</li>\n                <li>Inglese (Provabile B2)</li>\n              </ul>\n          </div>\n          <div class=\"event\">\n            <h3>Skills</h3>\n            <h4>Ambienti di sviluppo</h4>\n            <ul>\n              <li>MySQL</li>\n              <li>Firebase</li>\n              <li>Visual Studio Code</li>\n              <li>Webstorm (trial)</li>\n            </ul>\n          </div>\n          <div class=\"event\">\n            <h3>Materiali</h3>\n            <h4>Sistemi operativi</h4>\n            <ul>\n              <li>Mac OS X (principale)</li>\n              <li>Windows</li>\n            </ul>\n          </div>\n\n          <div class=\"section-title center mt-0\">\n            <h2>\n              <i>coding skills</i>\n            </h2>\n          </div>\n          <div class=\"skill-unit\">\n            <h4>HTML5</h4>\n            <div class=\"bar bar1\">  85%</div>\n          </div>\n          <div class=\"skill-unit\">\n            <h4>CSS3</h4>\n            <div class=\"bar bar2\">  80%</div>\n          </div>\n          <div class=\"skill-unit\">\n            <h4>Javascript</h4>\n            <div class=\"bar bar3\">  75%</div>\n          </div>\n          <div class=\"skill-unit\">\n            <h4>Angular</h4>\n            <div class=\"bar bar4\">  70%</div>\n          </div>\n        </div>\n        <div class=\"col-sm-5\">\n\n\n        <div class=\"section-title center mt-0\">\n          <h2>\n              <i>CORSI</i>\n          </h2>\n      </div>\n      <div class=\"testo\">\n          <img src=\"../../../assets/images/blog/javascript.svg\" alt=\"someone\">\n          <h4>Edwin Diaz</h4>\n          <h5>Web Developer & Premium Udemy Instructor </h5>\n          <h6><strong>Javascript intermidiate level 1</strong></h6>\n          <p>Learn to create really nice functionalies by learning the DOM in Javascript. The JavaScript DOM is the big daddy in JavaScript and if you don't know it well, you will not be that  effective when manipulating elements in your application.</p>\n      </div>\n      <div class=\"testo\">\n        <img src=\"../../../assets/images/blog/angular_logo.svg\" alt=\"someone\">\n        <h4>Fabio Biondi</h4>\n        <h5>Google expert & Microsoft MVP</h5>\n        <h6><strong>Angular Fundamentals</strong></h6>\n        <p>Un corso sulle principali funzionalità di Angular 8 per acquisire una solida base sul framework e iniziare a sviluppare le prime Single Page Applications: styling, directives, template driven forms, servizi e dependency injection, server-side communication, multi-view applications con Angular Router, una veloce introduzione alla creazione di componenti e all’organizzazione di progetti.</p>\n      </div>\n      <div class=\"testo\">\n        <img src=\"../../../assets/images/blog/rxjs-1.svg\" alt=\"someone\">\n        <h4>Fabio Biondi</h4>\n        <h5>Google expert & Microsoft MVP</h5>\n        <h6><strong>ANGULAR & RXJS</strong></h6>\n        <p>RxJS è una delle dipendenze più importanti di Angular, alla base della maggior parte delle funzionalità del framework. Infatti, reactive forms, router, HttpClient, HTTP interceptors, @Output EventEmitter, state manager come NGRX, solo per citarne alcuni, sono basati sul concetto di Observable.</p>\n      </div>\n    </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n<div fxFlex=\"70%\" fxLayoutAlign=\" stretch\">\n<mat-card \nappMaterialElevation \n[defaultElevation]=\"defaultElevation\" \nraisedElevation=\"16\"\nclass=\"card1\" \n*ngIf=\"post\" \n[routerLink]=\"[post.path]\"\nclass=\"zoom\"\n>\n  <img mat-card-image class=\"image\" src=\"../../../assets/images/blog/{{ post.thumb }}\">\n  <mat-card-header>\n    <mat-card-title class=\"title\" fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">{{ post.title }}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>{{ post.text }}</p>\n  </mat-card-content>\n  <mat-divider></mat-divider>\n  <mat-card-actions align=\"end\">\n   <mat-icon>favorite</mat-icon>\n   <mat-icon>share</mat-icon>\n  </mat-card-actions>\n</mat-card>\n</div>\n</div> -->\n\n\n<div fxFlex=\"80%\" fxLayoutAlign=\"stretch space-between center\" class=\"flex-grid\">\n  <mat-card class=\"card zoom col\" *ngIf=\"post\" \n  [routerLink]=\"[post.path]\" appMaterialElevation \n  [defaultElevation]=\"defaultElevation\" \n  raisedElevation=\"16\">\n  <img mat-card-image class=\"image\" src=\"../../../assets/images/blog/{{ post.thumb }}\">\n    <mat-card-header >\n      <mat-card-title class=\"title\">{{ post.title }}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content class=\"text\">\n      <p>{{ post.text }}</p>\n    </mat-card-content>\n  <mat-card-actions align=\"end\">\n   <mat-icon>favorite</mat-icon>\n   <mat-icon>share</mat-icon>\n  </mat-card-actions>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _features_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/about/about.component */ "./src/app/features/about/about.component.ts");
/* harmony import */ var _features_resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/resume/resume.component */ "./src/app/features/resume/resume.component.ts");
/* harmony import */ var _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/contact/contact.component */ "./src/app/features/contact/contact.component.ts");
/* harmony import */ var _features_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/portfolio/portfolio.component */ "./src/app/features/portfolio/portfolio.component.ts");
/* harmony import */ var _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/not-found/not-found.component */ "./src/app/features/not-found/not-found.component.ts");
/* harmony import */ var _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/blog/blog.component */ "./src/app/features/blog/blog.component.ts");
/* harmony import */ var _features_blog_posts_post_cominciamo_con_angular_post_cominciamo_con_angular_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component */ "./src/app/features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component.ts");
/* harmony import */ var _features_blog_posts_post_todo_app_con_angular_post_todo_app_con_angular_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component */ "./src/app/features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component.ts");
/* harmony import */ var _features_blog_posts_post_introduzione_vscode_post_introduzione_vscode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component */ "./src/app/features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component.ts");













var routes = [
    { path: 'home', component: _features_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: _features_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'resume', component: _features_resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"] },
    {
        path: 'portfolio',
        component: _features_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
        data: { state: 'portfolio' }
    },
    { path: 'contact', component: _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'blog', component: _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"] },
    { path: 'blog/cominciamo-con-angular', component: _features_blog_posts_post_cominciamo_con_angular_post_cominciamo_con_angular_component__WEBPACK_IMPORTED_MODULE_10__["PostCominciamoConAngularComponent"] },
    { path: 'blog/todo-app-con-angular', component: _features_blog_posts_post_todo_app_con_angular_post_todo_app_con_angular_component__WEBPACK_IMPORTED_MODULE_11__["PostTodoAppConAngularComponent"] },
    { path: 'blog/introduzione-vscode', component: _features_blog_posts_post_introduzione_vscode_post_introduzione_vscode_component__WEBPACK_IMPORTED_MODULE_12__["PostIntroduzioneVscodeComponent"] },
    { path: '**', component: _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.animations */ "./src/app/router.animations.ts");


// import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData.depth;
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            animations: [_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gist/dist/ngx-gist.module */ "./node_modules/ngx-gist/dist/ngx-gist.module.js");
/* harmony import */ var ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _features_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/about/about.component */ "./src/app/features/about/about.component.ts");
/* harmony import */ var _features_resume_resume_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/resume/resume.component */ "./src/app/features/resume/resume.component.ts");
/* harmony import */ var _features_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./features/portfolio/portfolio.component */ "./src/app/features/portfolio/portfolio.component.ts");
/* harmony import */ var _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./features/contact/contact.component */ "./src/app/features/contact/contact.component.ts");
/* harmony import */ var _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./features/not-found/not-found.component */ "./src/app/features/not-found/not-found.component.ts");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _features_map_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./features/map/map.component */ "./src/app/features/map/map.component.ts");
/* harmony import */ var _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./features/blog/blog.component */ "./src/app/features/blog/blog.component.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _features_blog_posts_post_cominciamo_con_angular_post_cominciamo_con_angular_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component */ "./src/app/features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component.ts");
/* harmony import */ var _features_blog_posts_post_todo_app_con_angular_post_todo_app_con_angular_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component */ "./src/app/features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component.ts");
/* harmony import */ var _features_blog_posts_post_introduzione_vscode_post_introduzione_vscode_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component */ "./src/app/features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component.ts");
/* harmony import */ var _core_sidebar_components_social_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/sidebar/components/social.component */ "./src/app/core/sidebar/components/social.component.ts");
/* harmony import */ var _features_blog_posts_post_template_driven_form_post_template_driven_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./features/blog/posts/post-template-driven-form/post-template-driven-form.component */ "./src/app/features/blog/posts/post-template-driven-form/post-template-driven-form.component.ts");
/* harmony import */ var _shared_card_material_elevation_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/card/material-elevation.directive */ "./src/app/shared/card/material-elevation.directive.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _features_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _features_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _features_resume_resume_component__WEBPACK_IMPORTED_MODULE_16__["ResumeComponent"],
                _features_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioComponent"],
                _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"],
                _shared_card_card_component__WEBPACK_IMPORTED_MODULE_20__["CardComponent"],
                _features_map_map_component__WEBPACK_IMPORTED_MODULE_21__["MapComponent"],
                _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_22__["BlogComponent"],
                _features_blog_posts_post_cominciamo_con_angular_post_cominciamo_con_angular_component__WEBPACK_IMPORTED_MODULE_24__["PostCominciamoConAngularComponent"],
                _features_blog_posts_post_todo_app_con_angular_post_todo_app_con_angular_component__WEBPACK_IMPORTED_MODULE_25__["PostTodoAppConAngularComponent"],
                _features_blog_posts_post_introduzione_vscode_post_introduzione_vscode_component__WEBPACK_IMPORTED_MODULE_26__["PostIntroduzioneVscodeComponent"],
                _core_sidebar_components_social_component__WEBPACK_IMPORTED_MODULE_27__["SocialComponent"],
                _features_blog_posts_post_template_driven_form_post_template_driven_form_component__WEBPACK_IMPORTED_MODULE_28__["PostTemplateDrivenFormComponent"],
                _shared_card_material_elevation_directive__WEBPACK_IMPORTED_MODULE_29__["MaterialElevationDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
                ngx_gist_dist_ngx_gist_module__WEBPACK_IMPORTED_MODULE_8__["NgxGistModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/sidebar/components/social.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/sidebar/components/social.component.ts ***!
  \*************************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social',
            template: "<ul class=\"social\">\n  <li>\n    <a\n      class=\"facebook\"\n      href=\"https://www.facebook.com/leidy.rosariocastillo\"\n    ></a>\n  </li>\n  <li>\n    <a class=\"twitter\" href=\"https://twitter.com/leidyRosario93\"></a>\n  </li>\n  <li>\n    <a class=\"github\" href=\"https://github.com/leidyrosario\"></a>\n  </li>\n  <li>\n    <a\n      class=\"linkedin\"\n      href=\"https://www.linkedin.com/in/leidy-rosario-72b95219b\"\n    ></a>\n  </li>\n</ul>\n<div class=\"copy-text\">\n  <p>&copy; 2019 Leidy Rosario</p>\n</div>\n"
        })
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-wrap {\n  transition: all .3s ease-in-out;\n}\n\n.site-title {\n  transition: all .3s ease-in-out;\n}\n\n.menu-toggle {\n  transition: all .3s ease-in-out;\n}\n\n.header-wrap-opened {\n  left: 0;\n}\n\n.site-title-opened {\n  left: 190px;\n}\n\n.menu-toggle-opened {\n  left: 120px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXdyYXAge1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2l0ZS10aXRsZSB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LXRvZ2dsZSB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5oZWFkZXItd3JhcC1vcGVuZWQge1xuICBsZWZ0OiAwO1xufVxuXG4uc2l0ZS10aXRsZS1vcGVuZWQge1xuICBsZWZ0OiAxOTBweDtcbn1cblxuLm1lbnUtdG9nZ2xlLW9wZW5lZCB7XG4gIGxlZnQ6IDEyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route, router) {
        this.route = route;
        this.router = router;
        this.menuIsOpen = false;
    }
    SidebarComponent.prototype.toggleMenu = function ($event) {
        $event.stopPropagation();
        this.menuIsOpen = !this.menuIsOpen;
    };
    SidebarComponent.prototype.onClick = function () {
        this.menuIsOpen = false;
    };
    SidebarComponent.prototype.goto = function (url) {
        this.router.navigate(['blog', url]);
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return console.log('RES: ', res); }))
            .subscribe(function (params) { return _this.url = params.get('blog'); });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sidebar/sidebar.component.html")).default,
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '(window:click)': 'onClick()'
            },
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/core/sidebar/sidebar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/features/about/about.component.css":
/*!****************************************************!*\
  !*** ./src/app/features/about/about.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zoom {\n    transition: transform .2s; /* Animation */\n}\n\n.zoom:hover {\n    transform: scale(1.3); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QixFQUFFLGNBQWM7QUFDN0M7O0FBRUE7SUFDSSxxQkFBcUIsRUFBRSxxRkFBcUY7RUFDOUciLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xufVxuXG4uem9vbTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOyAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/features/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


/*
const query = (s, a, o= {optional: true}) => q(s, a, o);

export const aboutTransition = trigger('aboutTransition', [
  transition(':enter', [
    query('.section-title, .service, .process, .tools, .fun-fact', style({ opacity: 0 })),
    query('.section-title, .service, .process, .tools, .fun-fact', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(0px)', opacity: 1})
    ]),
    ),
  ]),
transition(':leave', [
    query('.content', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(100px)', opacity: 0})]),
    )]),
]);


export const scrollAnimation = trigger('scrollAnimation, aboutTransition', [
  state(':enter', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(':enter', [
    query('.section-title, .process, .tools, .fun-fact', style({ opacity: 0 })),
    query('.section-title, .process, .tools, .fun-fact', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(0px)', opacity: 1}),
    ])),
  ]),
  state(':leave', style({ opacity: 0, transform: 'translateY(-100%)' })),
  transition(':leave', [
    query('.content', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)'), style({transform: 'translateY(100px)', opacity: 0})]),
    )]),
]);
*/
var AboutComponent = /** @class */ (function () {
    /*state = ':enter';
  
    constructor(public el: ElementRef) { }
  
    @HostListener('window:scroll', ['$event'])
      checkScroll() {
        const componentPosition = this.el.nativeElement.offsetTop;
        const scrollPosition = window.pageYOffset;
  
        if (scrollPosition >= componentPosition) {
          this.state = ':enter';
        } else {
          this.state = ':leave';
        }
  
      }
  */
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/about/about.component.html")).default,
            animations: [ /*aboutTransition, scrollAnimation*/]
            // tslint:disable-next-line:use-host-property-decorator
            /*host: {
              '[@aboutTransition]': '',
              '[@scrollAnimation]': '',
            }*/
            ,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.css */ "./src/app/features/about/about.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/features/blog/blog.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/blog/blog.component.ts ***!
  \*************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.posts = [
            {
                path: 'cominciamo-con-angular',
                title: 'Cominciamo con Angular',
                thumb: 'angular-logo-thumb.png',
                text: 'Breve introduzione al framework Angular e a quello che lo rende così accattivante'
            },
            {
                path: 'todo-app-con-angular',
                title: 'ToDo app con Angular',
                thumb: 'todo-thumb.png',
                text: 'Semplice CRUD spiegando ogni passo della realizzazione di un Angular App'
            },
            {
                path: 'introduzione-vscode',
                title: 'Introduzione a VSCode',
                thumb: 'vscode-thumb.png',
                text: 'Prima parte all\'introduzione del editor di codice più famoso del momento'
            },
            {
                path: 'template-driven-form',
                title: 'Template Driven Form',
                thumb: 'tutorial-cover-thumb.png',
                text: ' Tutorial sui template-driven-form di Angular e su come collegarli a Firestore'
            }
        ];
    }
    BlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogposts',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/blog.component.html")).default,
            styles: [""]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PostCominciamoConAngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCominciamoConAngularComponent", function() { return PostCominciamoConAngularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PostCominciamoConAngularComponent = /** @class */ (function () {
    function PostCominciamoConAngularComponent() {
    }
    PostCominciamoConAngularComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-cominciamo-con-angular',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-cominciamo-con-angular.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-cominciamo-con-angular/post-cominciamo-con-angular.component.html")).default
        })
    ], PostCominciamoConAngularComponent);
    return PostCominciamoConAngularComponent;
}());



/***/ }),

/***/ "./src/app/features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PostIntroduzioneVscodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostIntroduzioneVscodeComponent", function() { return PostIntroduzioneVscodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PostIntroduzioneVscodeComponent = /** @class */ (function () {
    function PostIntroduzioneVscodeComponent() {
    }
    PostIntroduzioneVscodeComponent.prototype.ngOnInit = function () {
    };
    PostIntroduzioneVscodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-introduzione-vscode',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-introduzione-vscode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-introduzione-vscode/post-introduzione-vscode.component.html")).default,
            styles: ["blockquote {\n    position: relative;\n    padding-left: 1em;\n    border-left: 0.2em solid lighten($black, 40%);\n    font-family: 'Roboto', serif;\n    font-size: $base-font-size;\n    line-height: $base-line-height;\n    font-weight: 100;\n    &:before, &:after {\n        content: '201C';\n        font-family: 'Sanchez';\n        color: lighten($black, 40%);\n     }\n     &:after {\n        content: '201D';\n     }\n  }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PostIntroduzioneVscodeComponent);
    return PostIntroduzioneVscodeComponent;
}());



/***/ }),

/***/ "./src/app/features/blog/posts/post-template-driven-form/post-template-driven-form.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/blog/posts/post-template-driven-form/post-template-driven-form.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PostTemplateDrivenFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTemplateDrivenFormComponent", function() { return PostTemplateDrivenFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PostTemplateDrivenFormComponent = /** @class */ (function () {
    function PostTemplateDrivenFormComponent() {
    }
    PostTemplateDrivenFormComponent.prototype.ngOnInit = function () {
    };
    PostTemplateDrivenFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-template-driven-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-template-driven-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-template-driven-form/post-template-driven-form.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PostTemplateDrivenFormComponent);
    return PostTemplateDrivenFormComponent;
}());



/***/ }),

/***/ "./src/app/features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PostTodoAppConAngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTodoAppConAngularComponent", function() { return PostTodoAppConAngularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PostTodoAppConAngularComponent = /** @class */ (function () {
    function PostTodoAppConAngularComponent() {
    }
    PostTodoAppConAngularComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-todo-app-con-angular',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-todo-app-con-angular.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/blog/posts/post-todo-app-con-angular/post-todo-app-con-angular.component.html")).default
        })
    ], PostTodoAppConAngularComponent);
    return PostTodoAppConAngularComponent;
}());



/***/ }),

/***/ "./src/app/features/contact/contact.component.css":
/*!********************************************************!*\
  !*** ./src/app/features/contact/contact.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#contact {\n    background: darkslategray; \n  }\n\n .submit button{\n    align-items: flex-start;\n    text-align: center;\n }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7O0NBRUQ7SUFDRyx1QkFBdUI7SUFDdkIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdCB7XG4gICAgYmFja2dyb3VuZDogZGFya3NsYXRlZ3JheTsgXG4gIH1cblxuIC5zdWJtaXQgYnV0dG9ue1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiAiXX0= */");

/***/ }),

/***/ "./src/app/features/contact/contact.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/contact/contact.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



var ContactComponent = /** @class */ (function () {
    function ContactComponent(afDb) {
        this.afDb = afDb;
        this.showMessage = false;
        this.users = [];
    }
    ContactComponent.prototype.onSubmit = function (form) {
        var _a = form.value, name = _a.name, email = _a.email, message = _a.message;
        var date = Date();
        this.showHideMessage();
        var formRequest = { name: name, email: email, message: message, date: date };
        this.afDb.list('/messages').push(formRequest);
    };
    ContactComponent.prototype.showHideMessage = function () {
        this.showMessage = !this.showMessage;
    };
    ContactComponent.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/contact/contact.component.html")).default,
            animations: [],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.css */ "./src/app/features/contact/contact.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/features/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/features/home/home.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    color: black;\n    font-size: 3.5rem;\n}\nh4{\n    color: black;\n    font-size: .7em;\n}\n.typed-element{\n   color: black;\n   font-weight: bold;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0dBQ0csWUFBWTtHQUNaLGlCQUFpQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xufVxuaDR7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cbi50eXBlZC1lbGVtZW50e1xuICAgY29sb3I6IGJsYWNrO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var options = {
            strings: ['a Blogger.', 'a Web Lover.', 'an Adventurer.', 'a Freelancer.'],
            typeSpeed: 100,
            backSpeed: 100,
            showCursor: true,
            cursorChar: '|',
            loop: false
        };
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a('.typed-element', options);
    };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/home/home.component.html")).default,
            animations: [],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/features/home/home.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/map/map.component.ts":
/*!***********************************************!*\
  !*** ./src/app/features/map/map.component.ts ***!
  \***********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.selectPart = function (part) {
        console.log('Selected part: ', part);
    };
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: "\n  <div class='row'>\n    <div id='image_map'>\n      <map name='map_example'>\n        <area shape='poly' coords='0.847,0.885, 1.133,0.669, 1.451,1.085, 1.176,1.225' (click)='selectPart(546)'>\n        <area shape='poly' coords='1.171,0.604, 1.548,0.416, 1.813,0.988, 1.511,1.052' (click)='selectPart(547)'>\n      </map>\n      <img src='https://picsum.photos/557/441' alt='image map example' width='557' height='441' usemap='#map_example'>\n    </div>\n  </div>\n    "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/features/not-found/not-found.component.css":
/*!************************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/not-found/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/not-found/not-found.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./not-found.component.css */ "./src/app/features/not-found/not-found.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/features/portfolio/portfolio.component.css":
/*!************************************************************!*\
  !*** ./src/app/features/portfolio/portfolio.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/portfolio/portfolio.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/portfolio/portfolio.component.ts ***!
  \***********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/portfolio/portfolio.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./portfolio.component.css */ "./src/app/features/portfolio/portfolio.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/features/resume/resume.component.css":
/*!******************************************************!*\
  !*** ./src/app/features/resume/resume.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".labelSkill {\n  float: left;\n  margin-right: 20px;\n}\n\n.bar {\n  height: 25px;\n  margin: 0 auto 10px;\n  border-radius: 15px;\n  line-height: 21px;\n  font-size: 13px;\n  color: #fff;\n  position: relative;\n  padding-left: 15px;\n}\n\n.bar:before {\n  content: '';\n  width: 100%;\n  position: absolute;\n  left: 0;\n  height: 20px;\n  top: 0;\n  z-index: -2;\n  background: #d2d6d7;\n  border-radius: 15px;\n}\n\n.bar:after {\n  content: '';\n  background: #8acb82;;\n  height: 20px;\n  transition: 0.8s;\n  display: block;\n  width: calc(100% - 10px);\n  -webkit-animation: animate 1 4s;\n          animation: animate 1 4s;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  border-radius: 15px;\n}\n\n.bar1:after {\n  max-width: 85%;\n}\n\n.bar2:after {\n  max-width: 80%;\n}\n\n.bar3:after {\n  max-width: 75%;\n}\n\n.bar4:after {\n  max-width: 70%;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes animate {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n.clear {\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsWUFBWTtFQUNaLE1BQU07RUFDTixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWxTa2lsbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5iYXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmJhcjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0yO1xuICBiYWNrZ3JvdW5kOiAjZDJkNmQ3O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYmFyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQ6ICM4YWNiODI7O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuOHM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAxIDRzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5iYXIxOmFmdGVyIHtcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbi5iYXIyOmFmdGVyIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5iYXIzOmFmdGVyIHtcbiAgbWF4LXdpZHRoOiA3NSU7XG59XG5cbi5iYXI0OmFmdGVyIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG59XG5cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/features/resume/resume.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/resume/resume.component.ts ***!
  \*****************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/resume/resume.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resume.component.css */ "./src/app/features/resume/resume.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");


var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 2, 1 => 3, 1 => 4, 1 => 5, 2 => 3, 2 => 4, 2 => 5, 3 => 4, 3 => 5, 4 => 5', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('5 => 4, 5 => 3, 5 => 2, 5 => 1, 4=> 3, 4 => 2, 4 => 1, 3 => 2, 3 => 1, 2 => 1', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }))
            ], { optional: true }),
        ])
    ]),
]);


/***/ }),

/***/ "./src/app/shared/card/card.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/card/card.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*.card1{\n  background-color: #ffff;\n  border-radius : 15px;\n}\n\n.bm--card-equal-height {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.bm--card-equal-height .card-footer {\n  margin-top: auto;\n}\n\n.title {\n  font-size: 20px;\n  margin-bottom: 8px;\n  margin-left: -17px;\n  font-weight: bold;\n  font-style: italic;\n  text-align: left;\n}\n\n.image{\n  height:\"200px\"; \n  width:\"300px\";\n}\n\n.mat-divider{\n  border-top-width: 2px;\n  border-top-style: ridge;\n}\n\n.zoom {\n  transition: transform .2s; /* Animation \n}\n\n.zoom:hover {\n  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) \n}\n*/\n.flex-grid {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 20px 0;\n}\n.col {\n  flex: 1;\n  padding: 20px;\n}\n.flex-grid .col {\n  width: 32%;\n}\nimg {\n  display: block;\n\tborder: 0;\n\twidth: 1000%;\n\theight: auto;\n}\n.card {\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);\n  border-radius : 15px;\n}\n.title {\n  font-size: 20px;\n  margin-bottom: 8px;\n  margin-left: -17px;\n  font-weight: bold;\n  font-style: italic;\n  text-align: left;\n}\n.text {\n  padding: 10px;\n  font-size: .9rem;\n  color: #757575;\n  text-align: left;\n}\n.zoom {\n  transition: transform .2s; /* Animation */\n}\n.zoom:hover {\n  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd0NDO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7QUFDZjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0NBQ2YsU0FBUztDQUNULFlBQVk7Q0FDWixZQUFZO0FBQ2I7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpR0FBaUc7RUFDakcsb0JBQW9CO0FBQ3RCO0FBR0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxjQUFjO0FBQzNDO0FBRUE7RUFDRSxxQkFBcUIsRUFBRSxxRkFBcUY7QUFDOUciLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5jYXJkMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xufVxuXG4uYm0tLWNhcmQtZXF1YWwtaGVpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJtLS1jYXJkLWVxdWFsLWhlaWdodCAuY2FyZC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW1hZ2V7XG4gIGhlaWdodDpcIjIwMHB4XCI7IFxuICB3aWR0aDpcIjMwMHB4XCI7XG59XG5cbi5tYXQtZGl2aWRlcntcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXN0eWxlOiByaWRnZTtcbn1cblxuLnpvb20ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyAvKiBBbmltYXRpb24gXG59XG5cbi56b29tOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSBcbn1cbiovXG4uZmxleC1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZmxleC1ncmlkIC5jb2wge1xuICB3aWR0aDogMzIlO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcblx0Ym9yZGVyOiAwO1xuXHR3aWR0aDogMTAwMCU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICBib3JkZXItcmFkaXVzIDogMTVweDtcbn1cblxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIGNvbG9yOiAjNzU3NTc1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uem9vbSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xufVxuXG4uem9vbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.defaultElevation = 2;
        this.raisedElevation = 8;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CardComponent.prototype, "post", void 0);
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card.component.css */ "./src/app/shared/card/card.component.css")).default]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/card/material-elevation.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/card/material-elevation.directive.ts ***!
  \*************************************************************/
/*! exports provided: MaterialElevationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialElevationDirective", function() { return MaterialElevationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MaterialElevationDirective = /** @class */ (function () {
    function MaterialElevationDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 8;
        this.setElevation(this.defaultElevation);
    }
    // tslint:disable-next-line:variable-name
    MaterialElevationDirective.prototype.ngOnChanges = function (_changes) {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.onMouseEnter = function () {
        this.setElevation(this.raisedElevation);
    };
    MaterialElevationDirective.prototype.onMouseLeave = function () {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.setElevation = function (amount) {
        var _this = this;
        // remove all elevation classes
        var classesToRemove = Array.from(this.element.nativeElement.classList).filter(function (c) { return c.startsWith('mat-elevation-z'); });
        classesToRemove.forEach(function (c) {
            _this.renderer.removeClass(_this.element.nativeElement, c);
        });
        // add the given elevation class
        var newClass = "mat-elevation-z" + amount;
        this.renderer.addClass(this.element.nativeElement, newClass);
    };
    MaterialElevationDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MaterialElevationDirective.prototype, "defaultElevation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MaterialElevationDirective.prototype, "raisedElevation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], MaterialElevationDirective.prototype, "onMouseEnter", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], MaterialElevationDirective.prototype, "onMouseLeave", null);
    MaterialElevationDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMaterialElevation]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], MaterialElevationDirective);
    return MaterialElevationDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBd9Qp_SKHuGCN-Fo-0mmAYuOdYRg_7gzQ',
        authDomain: 'il-mio-sito-91a12.firebaseapp.com',
        databaseURL: 'https://il-mio-sito-91a12.firebaseio.com',
        projectId: 'il-mio-sito-91a12',
        storageBucket: 'il-mio-sito-91a12.appspot.com',
    }
    // firebase: {
    // apiKey: 'AIzaSyDoh0hAec4heuL2JQiWWI1eOoq4JPSAOkk',
    // authDomain: 'angularcourse-2019.firebaseapp.com',
    // databaseURL: 'https://angularcourse-2019.firebaseio.com',
    // projectId: 'angularcourse-2019',
    // storageBucket: 'angularcourse-2019.appspot.com',
    // messagingSenderId: '434755818533',
    // appId: '1:434755818533:web:780a03d2e3d3a627695bcc'
    // }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lady_rosario/Documents/leidy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map