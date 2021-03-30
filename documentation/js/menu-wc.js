'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm-atos-avril documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-06fa808a473d2644aedef9757780cc51"' : 'data-target="#xs-components-links-module-AppModule-06fa808a473d2644aedef9757780cc51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-06fa808a473d2644aedef9757780cc51"' :
                                            'id="xs-components-links-module-AppModule-06fa808a473d2644aedef9757780cc51"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link">ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-4f692f46ccaf183f7f4d7b84a5c4a19c"' : 'data-target="#xs-components-links-module-ClientsModule-4f692f46ccaf183f7f4d7b84a5c4a19c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-4f692f46ccaf183f7f4d7b84a5c4a19c"' :
                                            'id="xs-components-links-module-ClientsModule-4f692f46ccaf183f7f4d7b84a5c4a19c"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link">ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-55211e1a274b690252cf226237b25368"' : 'data-target="#xs-components-links-module-CoreModule-55211e1a274b690252cf226237b25368"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-55211e1a274b690252cf226237b25368"' :
                                            'id="xs-components-links-module-CoreModule-55211e1a274b690252cf226237b25368"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link">IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-38be5b72a3ed9495367058c331727458"' : 'data-target="#xs-components-links-module-IconsModule-38be5b72a3ed9495367058c331727458"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-38be5b72a3ed9495367058c331727458"' :
                                            'id="xs-components-links-module-IconsModule-38be5b72a3ed9495367058c331727458"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-1c73bbdde74b99df25875df7c9f6c1d6"' : 'data-target="#xs-components-links-module-LoginModule-1c73bbdde74b99df25875df7c9f6c1d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-1c73bbdde74b99df25875df7c9f6c1d6"' :
                                            'id="xs-components-links-module-LoginModule-1c73bbdde74b99df25875df7c9f6c1d6"' }>
                                            <li class="link">
                                                <a href="components/PageForgotComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageForgotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link">OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-043062bdf5440e215cc44b7d875deeab"' : 'data-target="#xs-components-links-module-OrdersModule-043062bdf5440e215cc44b7d875deeab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-043062bdf5440e215cc44b7d875deeab"' :
                                            'id="xs-components-links-module-OrdersModule-043062bdf5440e215cc44b7d875deeab"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link">OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-cb09f8417d5f2132fa0eb3acf506afde"' : 'data-target="#xs-components-links-module-PageNotFoundModule-cb09f8417d5f2132fa0eb3acf506afde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-cb09f8417d5f2132fa0eb3acf506afde"' :
                                            'id="xs-components-links-module-PageNotFoundModule-cb09f8417d5f2132fa0eb3acf506afde"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link">PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link">TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-528468d2cf325b31247a557b8e11e25a"' : 'data-target="#xs-components-links-module-TemplatesModule-528468d2cf325b31247a557b8e11e25a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-528468d2cf325b31247a557b8e11e25a"' :
                                            'id="xs-components-links-module-TemplatesModule-528468d2cf325b31247a557b8e11e25a"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-6cec774342b35a18ba8cef2db61933d8"' : 'data-target="#xs-components-links-module-UiModule-6cec774342b35a18ba8cef2db61933d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-6cec774342b35a18ba8cef2db61933d8"' :
                                            'id="xs-components-links-module-UiModule-6cec774342b35a18ba8cef2db61933d8"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});