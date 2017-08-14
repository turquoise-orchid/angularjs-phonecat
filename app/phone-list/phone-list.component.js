angular
	.module("phoneList")
	.component("phoneList", {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: function PhoneListCtrl() {
			this.phones = [
				{
				name: "Nexus S",
				description: "Fast just got faster with Nexus S."
				},
				{
				name: "Motorola XOOM™ with Wi-Fi",
				description: "The Next, Next Generation tablet."
				},
				{
				name: "MOTOROLA XOOM™",
				description: "The Next, Next Generation tablet"
				}
			];
		}
	}
);