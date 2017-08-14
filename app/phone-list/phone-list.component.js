angular
	.module("phoneList")
	.component("phoneList", {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: function PhoneListCtrl() {
			this.phones = [
				{
				name: "Nexus S",
				description: "Fast just got faster with Nexus S.",
				age: 1
				},
				{
				name: "Motorola XOOM™ with Wi-Fi",
				description: "The Next, Next Generation tablet.",
				age: 2
				},
				{
				name: "MOTOROLA XOOM™",
				description: "The Next, Next Generation tablet",
				age: 3
				}
			];
			this.orderProp = 'age';
		}
	}
);