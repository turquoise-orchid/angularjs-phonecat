angular
	.module("phonecatApp")
	.component("phoneList", {
		template: 
		"<ul>" +
			"<li ng-repeat='phone in $ctrl.phones'>" +
	       	"<span>{{phone.name}}</span>" +
	        "<p>{{phone.description}}</p>" +
	      "</li>" +
	     "</ul>",
		controller: function PhoneListCtrl($scope) {
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