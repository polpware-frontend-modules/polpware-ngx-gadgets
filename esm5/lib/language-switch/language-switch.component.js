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
    var l_r1 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", l_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r1.text);
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
    LanguageSwitchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LanguageSwitchComponent, selectors: [["polp-gadget-language-switch"]], inputs: { langOptions: "langOptions", initValue: "initValue", size: "size" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[1, "form-inline"], [1, "mr-1", 3, "icon"], [1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "fa-icon", 1);
            i0.ɵɵelementStart(2, "select", 2);
            i0.ɵɵlistener("ngModelChange", function LanguageSwitchComponent_Template_select_ngModelChange_2_listener($event) { return ctx.langValue = $event; })("change", function LanguageSwitchComponent_Template_select_change_2_listener($event) { return ctx.change($event); });
            i0.ɵɵtemplate(3, LanguageSwitchComponent_option_3_Template, 2, 2, "option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("icon", ctx.faGlobe);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c0, ctx.isSmallSize, ctx.isLargeSize))("ngModel", ctx.langValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.langOptions);
        } }, directives: [i1.FaIconComponent, i2.SelectControlValueAccessor, i3.NgClass, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: ["[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%]{flex-flow:row}"] });
    return LanguageSwitchComponent;
}());
export { LanguageSwitchComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LanguageSwitchComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtZ2FkZ2V0cy8iLCJzb3VyY2VzIjpbImxpYi9sYW5ndWFnZS1zd2l0Y2gvbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC50cyIsImxpYi9sYW5ndWFnZS1zd2l0Y2gvbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0lDS3BELGlDQUEwRDtJQUFBLFlBQVU7SUFBQSxpQkFBUzs7O0lBQXZDLDZDQUFtQjtJQUFDLGVBQVU7SUFBViwrQkFBVTs7O0FESDVFO0lBdUJJO1FBaEJBLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFFVCxnQkFBVyxHQUdmLEVBQUUsQ0FBQztRQUVDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVqQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd2QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztJQUViLENBQUM7SUFFakIsMENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLHlDQUF5QzthQUM1QztTQUNKO0lBQ0wsQ0FBQztJQUVELHdDQUFNLEdBQU4sVUFBTyxNQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7a0dBeENRLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDUnBDLDhCQUNJO1lBQUEsNkJBQWlEO1lBQ2pELGlDQUlJO1lBRkksb0pBQXVCLCtGQUNiLGtCQUFjLElBREQ7WUFFM0IsOEVBQTBEO1lBQzlELGlCQUFTO1lBQ2IsaUJBQU07O1lBUE8sZUFBZ0I7WUFBaEIsa0NBQWdCO1lBRWpCLGVBQTRFO1lBQTVFLHNGQUE0RSwwQkFBQTtZQUd4RSxlQUE2QjtZQUE3Qix5Q0FBNkI7O2tDRE43QztDQWtEQyxBQS9DRCxJQStDQztTQTFDWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDbEQ7O2tCQUtJLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhR2xvYmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZ2FkZ2V0LWxhbmd1YWdlLXN3aXRjaCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xhbmd1YWdlLXN3aXRjaC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBmYUdsb2JlID0gZmFHbG9iZTtcblxuICAgIEBJbnB1dCgpIGxhbmdPcHRpb25zOiBBcnJheTx7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9PiA9IFtdO1xuXG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgbGFuZ1ZhbHVlOiBzdHJpbmc7XG4gICAgaXNTbWFsbFNpemU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0xhcmdlU2l6ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhbmdWYWx1ZSA9IHRoaXMuaW5pdFZhbHVlO1xuICAgICAgICBpZiAodGhpcy5zaXplID09ICdzbWFsbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTbWFsbFNpemUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSA9PSAnbGFyZ2UnKSB7XG4gICAgICAgICAgICB0aGlzLmlzTGFyZ2VTaXplID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaW5pdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbml0VmFsdWUgIT0gdGhpcy5sYW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmdWYWx1ZSA9IHRoaXMuaW5pdFZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IHRyaWdnZXIgZXZlbnQuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5sYW5nVmFsdWUpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgPGZhLWljb24gW2ljb25dPVwiZmFHbG9iZVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj5cbiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZm9ybS1jb250cm9sLXNtJzogaXNTbWFsbFNpemUsICdmb3JtLWNvbnRyb2wtbGcnOiBpc0xhcmdlU2l6ZX1cIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsYW5nVmFsdWVcIlxuICAgICAgICAgICAgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsIG9mIGxhbmdPcHRpb25zXCIgdmFsdWU9XCJ7e2wudmFsdWV9fVwiPnt7bC50ZXh0fX08L29wdGlvbj4gICAgXG4gICAgPC9zZWxlY3Q+XG48L2Rpdj5cbiJdfQ==