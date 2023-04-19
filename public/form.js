const oppoStatus = [{
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];
const Module = class {
  constructor() {
    this.statusElement = document.querySelector("select[name='status']");
    this.form = document.querySelector('form');
    this.successElement = document.querySelector("input[name='success']");
    this.outputElment = document.querySelector(".output");
  }

  addEvents() {
    if (this.statusElement) this.statusElement.addEventListener('change', this.updateSuccess.bind(this));
    if (this.form) this.form.addEventListener('submit', this.submitForm.bind(this));
  }

  loadOppoStatus() {
    if (!this.statusElement) return;

    oppoStatus.forEach(status => {
      var opt = document.createElement("option");
      opt.value = status.K_OPPO_STATUS;
      opt.innerHTML = status.STATUS;
      opt.setAttribute('data-success', status.SUCCESS);

      this.statusElement.appendChild(opt);
    });
  }

  updateSuccess(_event) {
    if (!this.successElement) return;

    this.successElement.value = this.statusElement.options[this.statusElement.selectedIndex].getAttribute('data-success');
  }

  submitForm(event) {
    event.preventDefault();

    if (!this.form || !this.outputElment) return;

    var formData = new FormData(this.form), object = {};
    formData.forEach((value, key) => object[key] = value);
    this.outputElment.innerHTML = JSON.stringify(object);
  }
}
	const main = new Module();
	main.loadOppoStatus();
	main.addEvents();