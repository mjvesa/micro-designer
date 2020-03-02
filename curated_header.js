import "./node_modules/@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js";
import "./node_modules/@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js";
import "./node_modules/@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox-group.js";
import "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js";
import "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js";
import "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js";
import "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-light.js";
import "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js";
import "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js";
import "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js";
import "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js";
import "./node_modules/@vaadin/vaadin-split-layout/theme/lumo/vaadin-split-layout.js";
import "./node_modules/@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js";
import "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js";
import "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js";
import "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js";
import "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js";
import "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js";
import "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js";
import "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-password-field.js";
import "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js";
import "./node_modules/@vaadin/vaadin-context-menu/theme/lumo/vaadin-context-menu.js";
import "./node_modules/@vaadin/vaadin-context-menu/src/vaadin-device-detector.js";
import "./node_modules/@vaadin/vaadin-context-menu/src/vaadin-context-menu-overlay.js";
import "./node_modules/@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs.js";
import "./node_modules/@vaadin/vaadin-tabs/theme/lumo/vaadin-tab.js";
import "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js";
import "./node_modules/@vaadin/vaadin-material-styles/version.js";
import "./node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js";
import "./node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js";
import "./node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js";
import "./node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-sort-column.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-selection-column.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid.js";
import "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js";
import "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-tree-column.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column-group.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-tree-toggle.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter-column.js";
import "./node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-sorter.js";
import "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-outer-scroller.js";
import "./node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js";
import "./node_modules/@vaadin/vaadin-dropdown-menu/src/vaadin-dropdown-menu-overlay.js";
import "./node_modules/@vaadin/vaadin-dropdown-menu/theme/lumo/vaadin-dropdown-menu.js";
import "./node_modules/@vaadin/vaadin-dropdown-menu/src/vaadin-dropdown-menu-text-field.js";
import "./node_modules/@vaadin/vaadin-upload/src/vaadin-upload-file.js";
import "./node_modules/@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js";
import "./node_modules/@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js";
import "./node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js";
import "./node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js";
let tags = [
  [
    "login-form",
    [
      "div",
      "  (",
      "style",
      "width: 100%; height: 100%",
      "=",
      "div",
      "(",
      "style",
      "width: 100%; display:grid;grid-template-columns: 10em auto; background-color: #ddf;padding: 1em",
      "=",
      "span",
      "(",
      "textContent",
      " name",
      "=",
      ")",
      "vaadin-text-field",
      "(",
      ")",
      "span",
      "(",
      "textContent",
      " password",
      "=",
      ")",
      "vaadin-password-field",
      "(",
      ")",
      "span",
      "(",
      ")",
      "span",
      "(",
      "style",
      " display:flex",
      "=",
      "vaadin-button",
      "(",
      "textContent",
      "login",
      "=",
      ")",
      "vaadin-button",
      "(",
      "textContent",
      "register",
      "=",
      ")",
      ")",
      ")",
      "  )"
    ]
  ],
  ["div", ["div", "(", ")"]],
  ["span", ["span", "(", ")"]],
  ["vaadin-notification", ["vaadin-notification", "(", ")"]],
  ["vaadin-checkbox", ["vaadin-checkbox", "(", ")"]],
  ["vaadin-checkbox-group", ["vaadin-checkbox-group", "(", ")"]],
  ["vaadin-button", ["vaadin-button", "(", ")"]],
  ["vaadin-overlay", ["vaadin-overlay", "(", ")"]],
  ["vaadin-date-picker", ["vaadin-date-picker", "(", ")"]],
  ["vaadin-date-picker-light", ["vaadin-date-picker-light", "(", ")"]],
  ["vaadin-infinite-scroller", ["vaadin-infinite-scroller", "(", ")"]],
  ["vaadin-date-picker-overlay", ["vaadin-date-picker-overlay", "(", ")"]],
  [
    "vaadin-date-picker-overlay-content",
    ["vaadin-date-picker-overlay-content", "(", ")"]
  ],
  ["vaadin-month-calendar", ["vaadin-month-calendar", "(", ")"]],
  ["vaadin-split-layout", ["vaadin-split-layout", "(", ")"]],
  ["vaadin-progress-bar", ["vaadin-progress-bar", "(", ")"]],
  ["vaadin-combo-box-item", ["vaadin-combo-box-item", "(", ")"]],
  ["vaadin-combo-box-light", ["vaadin-combo-box-light", "(", ")"]],
  ["vaadin-combo-box-dropdown", ["vaadin-combo-box-dropdown", "(", ")"]],
  [
    "vaadin-combo-box-dropdown-wrapper",
    ["vaadin-combo-box-dropdown-wrapper", "(", ")"]
  ],
  ["vaadin-combo-box", ["vaadin-combo-box", "(", ")"]],
  ["vaadin-text-field", ["vaadin-text-field", "(", ")"]],
  ["vaadin-password-field", ["vaadin-password-field", "(", ")"]],
  ["vaadin-text-area", ["vaadin-text-area", "(", ")"]],
  ["vaadin-context-menu", ["vaadin-context-menu", "(", ")"]],
  ["vaadin-device-detector", ["vaadin-device-detector", "(", ")"]],
  ["vaadin-context-menu-overlay", ["vaadin-context-menu-overlay", "(", ")"]],
  ["vaadin-tabs", ["vaadin-tabs", "(", ")"]],
  ["vaadin-tab", ["vaadin-tab", "(", ")"]],
  ["vaadin-item", ["vaadin-item", "(", ")"]],
  ["version", ["version", "(", ")"]],
  ["vaadin-horizontal-layout", ["vaadin-horizontal-layout", "(", ")"]],
  ["vaadin-vertical-layout", ["vaadin-vertical-layout", "(", ")"]],
  ["vaadin-form-layout", ["vaadin-form-layout", "(", ")"]],
  ["vaadin-form-item", ["vaadin-form-item", "(", ")"]],
  ["vaadin-grid-filter", ["vaadin-grid-filter", "(", ")"]],
  ["vaadin-grid-sort-column", ["vaadin-grid-sort-column", "(", ")"]],
  ["vaadin-grid-selection-column", ["vaadin-grid-selection-column", "(", ")"]],
  ["vaadin-grid-column", ["vaadin-grid-column", "(", ")"]],
  ["vaadin-grid", ["vaadin-grid", "(", ")"]],
  ["vaadin-grid-scroller", ["vaadin-grid-scroller", "(", ")"]],
  ["vaadin-grid-templatizer", ["vaadin-grid-templatizer", "(", ")"]],
  ["vaadin-grid-tree-column", ["vaadin-grid-tree-column", "(", ")"]],
  ["vaadin-grid-column-group", ["vaadin-grid-column-group", "(", ")"]],
  ["vaadin-grid-tree-toggle", ["vaadin-grid-tree-toggle", "(", ")"]],
  ["vaadin-grid-filter-column", ["vaadin-grid-filter-column", "(", ")"]],
  ["vaadin-grid-sorter", ["vaadin-grid-sorter", "(", ")"]],
  ["vaadin-grid-outer-scroller", ["vaadin-grid-outer-scroller", "(", ")"]],
  ["vaadin-list-box", ["vaadin-list-box", "(", ")"]],
  ["vaadin-dropdown-menu-overlay", ["vaadin-dropdown-menu-overlay", "(", ")"]],
  ["vaadin-dropdown-menu", ["vaadin-dropdown-menu", "(", ")"]],
  [
    "vaadin-dropdown-menu-text-field",
    ["vaadin-dropdown-menu-text-field", "(", ")"]
  ],
  ["vaadin-upload-file", ["vaadin-upload-file", "(", ")"]],
  ["vaadin-upload", ["vaadin-upload", "(", ")"]],
  ["vaadin-dialog", ["vaadin-dialog", "(", ")"]],
  ["vaadin-radio-group", ["vaadin-radio-group", "(", ")"]],
  ["vaadin-radio-button", ["vaadin-radio-button", "(", ")"]],
  ["vaadin-checkbox", ["vaadin-checkbox", "(", ")"]],
  ["vaadin-checkbox-group", ["vaadin-checkbox-group", "(", ")"]],
  ["vaadin-button", ["vaadin-button", "(", ")"]],
  ["vaadin-text-field", ["vaadin-text-field", "(", ")"]],
  ["vaadin-password-field", ["vaadin-password-field", "(", ")"]],
  ["vaadin-text-area", ["vaadin-text-area", "(", ")"]]
];
