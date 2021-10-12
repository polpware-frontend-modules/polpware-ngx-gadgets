import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵpropertyInterpolate, ɵɵadvance, ɵɵtextInterpolate, EventEmitter, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵɵelement, ɵɵlistener, ɵɵtemplate, ɵɵproperty, ɵɵpureFunction2, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x, FormsModule } from '@angular/forms';
import { NgClass, NgForOf, CommonModule } from '@angular/common';

function LanguageSwitchComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var l_r1 = ctx.$implicit;
    ɵɵpropertyInterpolate("value", l_r1.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(l_r1.text);
} }
var _c0 = function (a0, a1) { return { "form-control-sm": a0, "form-control-lg": a1 }; };
var LanguageSwitchComponent = /** @class */ (function () {
    function LanguageSwitchComponent() {
        this.faGlobe = faGlobe;
        this.langOptions = [];
        this.initValue = '';
        this.size = '';
        this.changed = new EventEmitter();
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
    LanguageSwitchComponent.ɵcmp = ɵɵdefineComponent({ type: LanguageSwitchComponent, selectors: [["polp-gadget-language-switch"]], inputs: { langOptions: "langOptions", initValue: "initValue", size: "size" }, outputs: { changed: "changed" }, features: [ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[1, "form-inline"], [1, "mr-1", 3, "icon"], [1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelement(1, "fa-icon", 1);
            ɵɵelementStart(2, "select", 2);
            ɵɵlistener("ngModelChange", function LanguageSwitchComponent_Template_select_ngModelChange_2_listener($event) { return ctx.langValue = $event; })("change", function LanguageSwitchComponent_Template_select_change_2_listener($event) { return ctx.change($event); });
            ɵɵtemplate(3, LanguageSwitchComponent_option_3_Template, 2, 2, "option", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("icon", ctx.faGlobe);
            ɵɵadvance(1);
            ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c0, ctx.isSmallSize, ctx.isLargeSize))("ngModel", ctx.langValue);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.langOptions);
        } }, directives: [FaIconComponent, SelectControlValueAccessor, NgClass, NgControlStatus, NgModel, NgForOf, NgSelectOption, ɵangular_packages_forms_forms_x], styles: ["[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%]{flex-flow:row}"] });
    return LanguageSwitchComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LanguageSwitchComponent, [{
        type: Component,
        args: [{
                selector: 'polp-gadget-language-switch',
                templateUrl: './language-switch.component.html',
                styleUrls: ['./language-switch.component.scss']
            }]
    }], function () { return []; }, { langOptions: [{
            type: Input
        }], initValue: [{
            type: Input
        }], size: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();

var NgxGadgetsModule = /** @class */ (function () {
    function NgxGadgetsModule() {
    }
    NgxGadgetsModule.ɵmod = ɵɵdefineNgModule({ type: NgxGadgetsModule });
    NgxGadgetsModule.ɵinj = ɵɵdefineInjector({ factory: function NgxGadgetsModule_Factory(t) { return new (t || NgxGadgetsModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                FontAwesomeModule
            ]] });
    return NgxGadgetsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxGadgetsModule, { declarations: [LanguageSwitchComponent], imports: [CommonModule,
        FormsModule,
        FontAwesomeModule], exports: [LanguageSwitchComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxGadgetsModule, [{
        type: NgModule,
        args: [{
                declarations: [LanguageSwitchComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    FontAwesomeModule
                ],
                exports: [LanguageSwitchComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-gadgets
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LanguageSwitchComponent, NgxGadgetsModule };
//# sourceMappingURL=polpware-ngx-gadgets.js.map
