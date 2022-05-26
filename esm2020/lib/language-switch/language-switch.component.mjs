import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
function LanguageSwitchComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r1 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", l_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r1.text);
} }
const _c0 = function (a0, a1) { return { "form-control-sm": a0, "form-control-lg": a1 }; };
export class LanguageSwitchComponent {
    constructor() {
        this.faGlobe = faGlobe;
        this.langOptions = [];
        this.initValue = '';
        this.size = '';
        this.changed = new EventEmitter();
        this.isSmallSize = false;
        this.isLargeSize = false;
    }
    ngOnInit() {
        this.langValue = this.initValue;
        if (this.size == 'small') {
            this.isSmallSize = true;
        }
        else if (this.size == 'large') {
            this.isLargeSize = true;
        }
    }
    ngOnChanges(changes) {
        if (changes.initValue) {
            if (this.initValue != this.langValue) {
                this.langValue = this.initValue;
                // Note that this will not trigger event.
            }
        }
    }
    change($event) {
        this.changed.emit(this.langValue);
    }
}
LanguageSwitchComponent.ɵfac = function LanguageSwitchComponent_Factory(t) { return new (t || LanguageSwitchComponent)(); };
LanguageSwitchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LanguageSwitchComponent, selectors: [["polp-gadget-language-switch"]], inputs: { langOptions: "langOptions", initValue: "initValue", size: "size" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[1, "form-inline"], [1, "mr-1", 3, "icon"], [1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "fa-icon", 1);
        i0.ɵɵelementStart(2, "select", 2);
        i0.ɵɵlistener("ngModelChange", function LanguageSwitchComponent_Template_select_ngModelChange_2_listener($event) { return ctx.langValue = $event; })("change", function LanguageSwitchComponent_Template_select_change_2_listener($event) { return ctx.change($event); });
        i0.ɵɵtemplate(3, LanguageSwitchComponent_option_3_Template, 2, 2, "option", 3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx.faGlobe);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c0, ctx.isSmallSize, ctx.isLargeSize))("ngModel", ctx.langValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.langOptions);
    } }, directives: [i1.FaIconComponent, i2.SelectControlValueAccessor, i3.NgClass, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption], styles: ["[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%]{flex-flow:row}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LanguageSwitchComponent, [{
        type: Component,
        args: [{ selector: 'polp-gadget-language-switch', template: "<div class=\"form-inline\">\n    <fa-icon [icon]=\"faGlobe\" class=\"mr-1\"></fa-icon>\n    <select class=\"form-control\"\n            [ngClass]=\"{'form-control-sm': isSmallSize, 'form-control-lg': isLargeSize}\"\n            [(ngModel)]=\"langValue\"\n            (change)=\"change($event)\">\n        <option *ngFor=\"let l of langOptions\" value=\"{{l.value}}\">{{l.text}}</option>    \n    </select>\n</div>\n", styles: [":host .form-inline{flex-flow:row}\n"] }]
    }], function () { return []; }, { langOptions: [{
            type: Input
        }], initValue: [{
            type: Input
        }], size: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1nYWRnZXRzL3NyYy9saWIvbGFuZ3VhZ2Utc3dpdGNoL2xhbmd1YWdlLXN3aXRjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtZ2FkZ2V0cy9zcmMvbGliL2xhbmd1YWdlLXN3aXRjaC9sYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7SUNLcEQsaUNBQTBEO0lBQUEsWUFBVTtJQUFBLGlCQUFTOzs7SUFBdkMsNkNBQW1CO0lBQUMsZUFBVTtJQUFWLCtCQUFVOzs7QURFNUUsTUFBTSxPQUFPLHVCQUF1QjtJQWtCaEM7UUFoQkEsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUVULGdCQUFXLEdBR2YsRUFBRSxDQUFDO1FBRUMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3ZDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBRWIsQ0FBQztJQUVqQixRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDM0I7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDaEMseUNBQXlDO2FBQzVDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OEZBeENRLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDUnBDLDhCQUF5QjtRQUNyQiw2QkFBaUQ7UUFDakQsaUNBR2tDO1FBRDFCLG9KQUF1QiwrRkFDYixrQkFBYyxJQUREO1FBRTNCLDhFQUE2RTtRQUNqRixpQkFBUyxFQUFBOztRQU5BLGVBQWdCO1FBQWhCLGtDQUFnQjtRQUVqQixlQUE0RTtRQUE1RSxzRkFBNEUsMEJBQUE7UUFHMUQsZUFBYztRQUFkLHlDQUFjOzt1RkRFL0IsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0ksNkJBQTZCO3NDQVE5QixXQUFXO2tCQUFuQixLQUFLO1lBS0csU0FBUztrQkFBakIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhR2xvYmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZ2FkZ2V0LWxhbmd1YWdlLXN3aXRjaCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xhbmd1YWdlLXN3aXRjaC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBmYUdsb2JlID0gZmFHbG9iZTtcblxuICAgIEBJbnB1dCgpIGxhbmdPcHRpb25zOiBBcnJheTx7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9PiA9IFtdO1xuXG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgbGFuZ1ZhbHVlOiBzdHJpbmc7XG4gICAgaXNTbWFsbFNpemU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0xhcmdlU2l6ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhbmdWYWx1ZSA9IHRoaXMuaW5pdFZhbHVlO1xuICAgICAgICBpZiAodGhpcy5zaXplID09ICdzbWFsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTbWFsbFNpemUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSA9PSAnbGFyZ2UnKSB7XG4gICAgICAgICAgICB0aGlzLmlzTGFyZ2VTaXplID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaW5pdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbml0VmFsdWUgIT0gdGhpcy5sYW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmdWYWx1ZSA9IHRoaXMuaW5pdFZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IHRyaWdnZXIgZXZlbnQuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5sYW5nVmFsdWUpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgPGZhLWljb24gW2ljb25dPVwiZmFHbG9iZVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj5cbiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZm9ybS1jb250cm9sLXNtJzogaXNTbWFsbFNpemUsICdmb3JtLWNvbnRyb2wtbGcnOiBpc0xhcmdlU2l6ZX1cIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsYW5nVmFsdWVcIlxuICAgICAgICAgICAgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsIG9mIGxhbmdPcHRpb25zXCIgdmFsdWU9XCJ7e2wudmFsdWV9fVwiPnt7bC50ZXh0fX08L29wdGlvbj4gICAgXG4gICAgPC9zZWxlY3Q+XG48L2Rpdj5cbiJdfQ==