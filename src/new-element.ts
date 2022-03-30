import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
	internals_: ElementInternals;
	@property({ type: Number })
	value = 0;

	constructor() {
		super();
		this.internals_ = this.attachInternals();
		this.value = 0;
	}

	// The following properties and methods aren't strictly required,
	// but browser-level form controls provide them. Providing them helps
	// ensure consistency with browser-provided controls.
	get form() {
		return this.internals_.form;
	}
	get name() {
		return this.getAttribute("name");
	}
	get type() {
		return this.localName;
	}
	get validity() {
		return this.internals_.validity;
	}
	get validationMessage() {
		return this.internals_.validationMessage;
	}
	get willValidate() {
		return this.internals_.willValidate;
	}

	checkValidity() {
		return this.internals_.checkValidity();
	}
	reportValidity() {
		return this.internals_.reportValidity();
	}

	static formAssociated = true;
	static styles = [
		clioStyles,
		css`
			p {
				color: blue;
			}
		`,
	];

	@property()
	name = "Somebody";

	render() {
		return html`<p class="button">Hello, ${this.name}!</p>`;
	}
}
