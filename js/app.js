window.onload = function () {

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hi Herbalist!',
            name: 'Herbalist',
            quantity: 0
        },
        methods: {
            increase: function() {
                this.quantity++;
                if (this.quantity > 0) {
                    this.message = 'Hi Herbalist! You have ' + this.quantity + ' herbs';
                }
                else {
                    this.message = 'Hi Herbalist!';
                }
            },
            decrease: function() {
                if (this.quantity > 0) {
                    this.quantity--;
                    this.message = 'Hi Herbalist! You have ' + this.quantity + ' herbs';
                }
                if (this.quantity == 0) {
                    this.message = 'Hi Herbalist!';
                }
            }
        }
    });
}
