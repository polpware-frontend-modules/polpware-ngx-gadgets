(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/angular-fontawesome'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-gadgets', ['exports', '@angular/core', '@fortawesome/free-solid-svg-icons', '@fortawesome/angular-fontawesome', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-gadgets'] = {}), global.ng.core, global.freeSolidSvgIcons, global.angularFontawesome, global.ng.forms, global.ng.common));
}(this, (function (exports, core, freeSolidSvgIcons, angularFontawesome, forms, common) { 'use strict';

    function LanguageSwitchComponent_option_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 4);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var l_r1 = ctx.$implicit;
        core.ɵɵpropertyInterpolate("value", l_r1.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(l_r1.text);
    } }
    var _c0 = function (a0, a1) { return { "form-control-sm": a0, "form-control-lg": a1 }; };
    var LanguageSwitchComponent = /** @class */ (function () {
        function LanguageSwitchComponent() {
            this.faGlobe = freeSolidSvgIcons.faGlobe;
            this.langOptions = [];
            this.initValue = '';
            this.size = '';
            this.changed = new core.EventEmitter();
            this.isSmallSize = false;
            this.isLargeSize = false;
        }
        LanguageSwitchComponent.prototype.ngOnInit = function () {
            this.langValue = this.initValue;
            if (this.size == 'small') {
                this.isSmallSize = true;
            }
            else if (this.size == 'large') {
                this.isLargeSize = true;
            }
        };
        LanguageSwitchComponent.prototype.ngOnChanges = function (changes) {
            if (changes.initValue) {
                if (this.initValue != this.langValue) {
                    this.langValue = this.initValue;
                    // Note that this will not trigger event.
                }
            }
        };
        LanguageSwitchComponent.prototype.change = function ($event) {
            this.changed.emit(this.langValue);
        };
        LanguageSwitchComponent.ɵfac = function LanguageSwitchComponent_Factory(t) { return new (t || LanguageSwitchComponent)(); };
        LanguageSwitchComponent.ɵcmp = core.ɵɵdefineComponent({ type: LanguageSwitchComponent, selectors: [["polp-gadget-language-switch"]], inputs: { langOptions: "langOptions", initValue: "initValue", size: "size" }, outputs: { changed: "changed" }, features: [core.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[1, "form-inline"], [1, "mr-1", 3, "icon"], [1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelement(1, "fa-icon", 1);
                core.ɵɵelementStart(2, "select", 2);
                core.ɵɵlistener("ngModelChange", function LanguageSwitchComponent_Template_select_ngModelChange_2_listener($event) { return ctx.langValue = $event; })("change", function LanguageSwitchComponent_Template_select_change_2_listener($event) { return ctx.change($event); });
                core.ɵɵtemplate(3, LanguageSwitchComponent_option_3_Template, 2, 2, "option", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("icon", ctx.faGlobe);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(4, _c0, ctx.isSmallSize, ctx.isLargeSize))("ngModel", ctx.langValue);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.langOptions);
            } }, directives: [angularFontawesome.FaIconComponent, forms.SelectControlValueAccessor, common.NgClass, forms.NgControlStatus, forms.NgModel, common.NgForOf, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x], styles: ["[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%]{flex-flow:row}"] });
        return LanguageSwitchComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LanguageSwitchComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-gadget-language-switch',
                    templateUrl: './language-switch.component.html',
                    styleUrls: ['./language-switch.component.scss']
                }]
        }], function () { return []; }, { langOptions: [{
                type: core.Input
            }], initValue: [{
                type: core.Input
            }], size: [{
                type: core.Input
            }], changed: [{
                type: core.Output
            }] }); })();

    var NgxGadgetsModule = /** @class */ (function () {
        function NgxGadgetsModule() {
        }
        NgxGadgetsModule.ɵmod = core.ɵɵdefineNgModule({ type: NgxGadgetsModule });
        NgxGadgetsModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgxGadgetsModule_Factory(t) { return new (t || NgxGadgetsModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    angularFontawesome.FontAwesomeModule
                ]] });
        return NgxGadgetsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgxGadgetsModule, { declarations: [LanguageSwitchComponent], imports: [common.CommonModule,
            forms.FormsModule,
            angularFontawesome.FontAwesomeModule], exports: [LanguageSwitchComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxGadgetsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [LanguageSwitchComponent],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        angularFontawesome.FontAwesomeModule
                    ],
                    exports: [LanguageSwitchComponent]
                }]
        }], null, null); })();

    exports.LanguageSwitchComponent = LanguageSwitchComponent;
    exports.NgxGadgetsModule = NgxGadgetsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-gadgets.umd.js.map
