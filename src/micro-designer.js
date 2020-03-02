import "@vaadin/vaadin-accordion/theme/lumo/vaadin-accordion.js";
import "@vaadin/vaadin-accordion/theme/lumo/vaadin-accordion.js";
import "@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js";
import "@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js";
import "@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox-group.js";
import "@vaadin/vaadin-button/theme/lumo/vaadin-button.js";
import "@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js";
import "@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js";
import "@vaadin/vaadin-split-layout/theme/lumo/vaadin-split-layout.js";
import "@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js";
import "@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js";
import "@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js";
import "@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js";
import "@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js";
import "@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-number-field.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js";
import "@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-password-field.js";
import "@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js";
import "@vaadin/vaadin-context-menu/theme/lumo/vaadin-context-menu.js";
import "@vaadin/vaadin-context-menu/src/vaadin-device-detector.js";
import "@vaadin/vaadin-context-menu/src/vaadin-context-menu-overlay.js";
import "@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs.js";
import "@vaadin/vaadin-tabs/theme/lumo/vaadin-tab.js";
import "@vaadin/vaadin-item/theme/lumo/vaadin-item.js";
import "@vaadin/vaadin-material-styles/version.js";
import "@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js";
import "@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js";
import "@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js";
import "@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js";
import "@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js";
import "@vaadin/vaadin-select/src/vaadin-select.js";
import "@vaadin/vaadin-upload/src/vaadin-upload-file.js";
import "@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js";
import "@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js";
import "@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js";
import "@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js";
import "@vaadin/vaadin-icons";

class MicroDesigner extends HTMLElement {
  
  tags = [
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
// uDesigner Microscopic Universal visual designer for templates

initialDesign = `div
  (
    style
    width: 100%; height: 100%; box-sizing: border-box;
    =
  )`;

currentDesign = null;
selectedElement = null;
rootEl;

// DnD Stuff
markerEl = document.createElement("div");
previousBegin;
previousEnd;
// Positions for DnD
POSITION_BEFORE_ELEMENT = -1;
POSITION_CHILD_OF_ELEMENT = 0;
POSITION_AFTER_ELEMENT = 1;

// Design stack for undo/redo
designStack = [];
redoStack = [];

// UI template
ui = `<div id="container">
  <div id="paper">paper</div>
  <div id="palette">palette</div>
  <div>
    <div id="outline">outline</div>
    <textarea id="attributes">attributes</textarea>
  </div>
</div>
<button id="showbutton">Show model</button>
<div id="marker"></div>
<slot id="light-content"></slot>`;

styles = `
  body {
    width: 100%;
    height: 100%;
  }
  #container {
    display: grid;
    grid-template-columns: auto 15vw 15vw;
    width: 100%;
    height: 100%;
  }
  #paper {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    overflow: hidden;
  }
  #palette {
    width: 100%;
    height: 100vh;
    background-color: light-gray;
    border: 1px solid black;
    overflow-y: auto;
  }
  #outline {
    width: 100%;
    height: 50%;
    border: 1px solid black;
    width: 15vw;
  }

  #outline div {
    margin-left: 1em;
  }

  #attributes {
    width: 100%;
    height: 50%;
    border: 1px solid black;
    width: 15vw;
  }
  #marker {
    position: absolute;
    border: 1px solid red;
    z-index: 10000;
  }
`;

// Finds the first parenthesis starting from index which is not matched.
// That paren marks the end of the component
findDanglingParen (arr, index) {
  let i = index;
  let parenCount = 0;
  do {
    if (i >= arr.length) {
      throw "Ran out of array while dangling" + JSON.stringify(arr);
    }
    switch (arr[i].trim()) {
      case "(":
        parenCount++;
        break;
      case ")":
        parenCount--;
        break;
      default:
        break;
    }
    i++;
  } while (parenCount >= 0);
  return i - 1;
}

getPaperElement  () {
  return this.shadowRoot.querySelector("#paper");
};

 getOutlineElement  () {
  return this.shadowRoot.querySelector("#outline");
};

showCurrentDesign  ()  {
  let paper = this.getPaperElement();
  paper.innerHTML = "";
  this.linoToDOM(this.currentDesign, paper);
  let outline = this.getOutlineElement();
  outline.innerHTML = "";
  this.linoToOutline(this.currentDesign, outline);
};

startDrag  (event, snippet) {
  event.dataTransfer.setData("text", snippet);
  this.previousBegin = this.previousEnd = -1;
};

showNewDesign  (newDesign)  {
  this.designStack.push(this.currentDesign);
  this.currentDesign = newDesign;
  this.showCurrentDesign();
};

startDragFromModel  (elementId, event) {
  // TODO Splice element tree to be dragged out from the model.
  let newDesign = this.currentDesign.slice();
  this.previousBegin = elementId - 1;
  this.previousEnd = this.findDanglingParen(this.currentDesign, elementId + 1);
  let elementTree = newDesign.splice(
    this.previousBegin,
    this.previousEnd - elementId + 2
  );
  this.designStack.push(this.currentDesign);
  this.currentDesign = newDesign;
  event.dataTransfer.setData("text", elementTree);
  event.stopPropagation();
}

getPositionOnTarget (el, clientX, clientY) {
  let bcr = el.getBoundingClientRect();
  let radius = Math.min(bcr.right - bcr.left, bcr.bottom - bcr.top) / 2;
  let midX = (bcr.left + bcr.right) / 2;
  let midY = (bcr.top + bcr.bottom) / 2;
  if (
    Math.sqrt(
      (midX - clientX) * (midX - clientX) + (midY - clientY) * (midY - clientY)
    ) <= radius
  ) {
    return this.POSITION_CHILD_OF_ELEMENT;
  } else if (clientY < midY) {
    return this.POSITION_BEFORE_ELEMENT;
  } else {
    return this.POSITION_AFTER_ELEMENT;
  }
};

placeMarker (e)  {
  let marker = this.shadowRoot.querySelector("#marker");
  marker.style.display = "none";
  let target = this.shadowRoot.elementFromPoint(e.clientX, e.clientY);
  let designId = target.getAttribute("data-design-id");
  if (designId) {
    let bcr = target.getBoundingClientRect();
    marker.style.display = "block";
    marker.style.top = bcr.top + "px";
    marker.style.left = bcr.left + "px";
    marker.style.width = bcr.width + "px";
    marker.style.height = bcr.height + "px";
    let position = this.getPositionOnTarget(target, e.clientX, e.clientY);
    switch (position) {
      case this.POSITION_CHILD_OF_ELEMENT:
        marker.style.border = "1px red solid";
        break;
      case this.POSITION_BEFORE_ELEMENT:
        marker.style.border = "none";
        marker.style.borderTop = "1px red solid";
        break;
      case this.POSITION_AFTER_ELEMENT:
        marker.style.border = "none";
        marker.style.borderBottom = "1px red solid";
        break;
      default:
        break;
    }
    e.preventDefault();
    e.stopPropagation();
  } else {
    marker.style.display = "none";
  }
};

dropElement (e) {
  // Hide marker
  let marker = this.shadowRoot.querySelector("#marker");
  marker.style.display = "none";
  let target = this.shadowRoot.elementFromPoint(e.clientX, e.clientY);
  let index = target.getAttribute("data-design-id") | 0;
  if (index >= this.previousBegin && index <= this.previousEnd) {
    // Do not allow dropping on itself
    return;
  }
  if (index > this.previousEnd) {
    // Adjust for removed content
    index -= this.previousEnd - this.previousBegin;
  }
  let position = this.getPositionOnTarget(target, e.clientX, e.clientY);
  let spliceIndex = this.findDanglingParen(this.currentDesign, index + 1);
  if (position === this.POSITION_AFTER_ELEMENT) {
    spliceIndex = this.findDanglingParen(this.currentDesign, index + 1) + 1;
  } else if (position === this.POSITION_BEFORE_ELEMENT) {
    spliceIndex = index - 1;
  }

  let elementTree = e.dataTransfer.getData("text").split(",");
  let left = this.currentDesign.slice(0, spliceIndex);
  let right = this.currentDesign.slice(spliceIndex, this.currentDesign.length);
  let newDesign = left.concat(elementTree).concat(right);
  this.designStack.push(this.currentDesign);
  this.currentDesign = newDesign;
  this.showCurrentDesign();
  e.preventDefault();
};

selectElement (e) {
  let target = this.shadowRoot.elementFromPoint(e.clientX, e.clientY);
  let designId = target.getAttribute("data-design-id");
  if (designId) {
    this.selectedElement = designId | 0;
    // Mini interpreter for extracting property values
    let stack = [];
    let props = "";
    let ip = (designId | 0) + 1;
    let value = this.currentDesign[ip].trim();
    while (value !== "(" && value !== ")" && ip < this.currentDesign.length) {
      if (value === "=") {
        let tos = stack.pop();
        let nos = stack.pop();
        props = props + `${nos}\t${tos}\n`;
      } else {
        stack.push(value);
      }
      ip++;
      value = this.currentDesign[ip].trim();
    }
    this.shadowRoot.querySelector("#attributes").value = props;
    e.preventDefault();
    e.stopPropagation();
  }
};

saveAttributes ()  {
  let attributeString = this.shadowRoot.querySelector("#attributes").value;
  let attributesAsStrings = attributeString.split("\n");
  let attributes = [];
  for (let i in attributesAsStrings) {
    let str = attributesAsStrings[i].trim();
    if (str !== "") {
      let index = str.indexOf("\t");
      if (index === -1) {
        index = str.indexOf(" ");
      }
      let key = str.substring(0, index);
      let value = str.substring(index);
      attributes.push(key);
      attributes.push(value);
      attributes.push("=");
    }
  }
  // Find range of previous attributes
  let index = this.selectedElement + 1;
  do {
    let a = this.currentDesign[index].trim();
    if (a === "(") {
      index--;
      break;
    }
    if (a === ")") {
      break;
    }
    index++;
  } while (index < this.currentDesign.length);

  // Stick the attributes where the old ones were
  let first = this.currentDesign.slice(0, this.selectedElement + 1);
  let rest = this.currentDesign.slice(index, this.currentDesign.length);
  let newDesign = first.concat(attributes).concat(rest);
  this.designStack.push(this.currentDesign);
  this.currentDesign = newDesign;
  this.showCurrentDesign();
};

linoToDOM  (code, target)  {
  const stack = [];
  const tree = [];
  let current = target;
  // current = target;
  code.forEach((str, index) => {
    const trimmed = str.trim();
    switch (trimmed) {
      case "(": {
        const old = current;
        tree.push(current);
        const tag = stack.pop();
          current = document.createElement(tag);
          current.setAttribute("data-design-id", index);
          current.ondragstart = event => {
            this.startDragFromModel(index, event);
          };
        old.appendChild(current);
        break;
      }
      case ")": {
        current = tree.pop();
        break;
      }
      case "=": {
        const tos = stack.pop();
        const nos = stack.pop();
        if (nos in current) {
          try {
            const json = JSON.parse(tos);
            current[nos] = json;
          } catch (e) {
            current[nos] = tos;
            current.setAttribute(nos, tos);
          }
        } else {
          current.setAttribute(nos, tos);
        }

        break;
      }
      default: {
        stack.push(trimmed);
      }
    }
  });
  return current;
};

linoToOutline(code, target) {
  let stack = [];
  let tree = [];
  let current;
  current = target;
  code.forEach((str, index) => {
    const trimmed = str.trim();
    switch (trimmed) {
      case "(":
        let old = current;
        tree.push(current);
        current = document.createElement("div");
        current.textContent = stack.pop();
        current.setAttribute("data-design-id", index);
        current.ondragstart = event => {
          this.startDragFromModel(index, event);
        };
        current.draggable = true;
        old.appendChild(current);
        break;
      case ")":
        current = tree.pop();
        break;
      case "=":
        break;
      default:
        stack.push(trimmed);
    }
  });
  return current;
};


HTMLToModel(html) {
  const parser = new DOMParser();
  const document = parser.parseFromString(
    html,
    "text/html"
  );
  const atir = [];

  const parseTree = parent => {
    for (let el of parent.childNodes) {
      if (el.nodeType === 3) {
        if (/\S/.test(el.textContent)) {
          atir.push("textContent");
          atir.push(el.textContent);
          atir.push("=");
        }
      } else {
        atir.push(el.tagName.toLowerCase());
        atir.push("(");
        const attributes = el.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const attr = attributes.item(i);
          atir.push(attr.name);
          atir.push(attr.value);
          atir.push("=");
        }

        if (el.children) {
          parseTree(el);
        }
        atir.push(")");
      }
    }
  };
  parseTree(document.body);

  return atir.slice (); //(2, atir.length - 1);
};



constructor () {
  super();
  
  this.attachShadow({ mode: "open" });

  let targetEl = this.shadowRoot;


  // set root element and insert ui into it.
  this.rootEl = targetEl;
  this.rootEl.innerHTML = this.ui;
  // Set theme
  let theme = document.createElement("style");
  theme.innerText = this.styles;
  this.shadowRoot.appendChild(theme);
  

  let palette = this.rootEl.querySelector("#palette");
  for (let i in this.tags) {
    let tagAndSnippet = this.tags[i];
    let el = document.createElement("div");
    el.draggable = true;
    el.ondragstart = event => {
      this.startDrag(event, tagAndSnippet[1]);
    };
    el.textContent = tagAndSnippet[0];
    palette.appendChild(el);
  }
  let outline = this.getOutlineElement();
  outline.ondragover = this.placeMarker.bind(this);
  outline.onclick = this.selectElement.bind(this);
  let paper = this.getPaperElement();
  paper.ondragover = this.placeMarker.bind(this);
  paper.onclick = this.selectElement.bind(this);
  let marker = this.shadowRoot.querySelector("#marker");
  marker.ondrop = this.dropElement.bind(this);
  marker.ondragover = this.placeMarker.bind(this);
  let attributes = this.shadowRoot.querySelector("#attributes");
  attributes.onblur = this.saveAttributes.bind(this);

  //Keyboard handler
  document.body.onkeypress = event => {
    if (event.key === "z" && event.ctrlKey) {
      redoStack.push(currentDesign);
      currentDesign = designStack.pop();
      showCurrentDesign();
      event.stopPropagation();
      event.preventDefault();
    }
    if (event.key === "y" && event.ctrlKey) {
      designStack.push(currentDesign);
      currentDesign = redoStack.pop();
      showCurrentDesign();
      event.stopPropagation();
      event.preventDefault();
    }

    if (event.key === "Delete") {
      let newDesign = currentDesign.slice();
      newDesign.splice(
        selectedElement - 1,
        findDanglingParen(newDesign, selectedElement + 1) - selectedElement + 2
      );
      showNewDesign(newDesign);
      event.stopPropagation();
      event.preventDefault();
    }
  };

  let btn = this.shadowRoot.querySelector("#showbutton");
  btn.onclick = e => {
    this.shadowRoot.querySelector("#attributes").value = JSON.stringify(currentDesign);
  };

  this.shadowRoot.querySelector('#light-content').addEventListener('slotchange',  event => {
    // Initialize design
    this.currentDesign = this.HTMLToModel(this.innerHTML);
    this.designStack.push(this.currentDesign);
  
    // Liftoff
    this.showCurrentDesign();
  
  });


};


}

window.customElements.define("micro-designer", MicroDesigner);