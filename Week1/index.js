var app = new Vue({
    el:'#app',
    data : {
        items :['add milk','add sugar','add tea powder']
    },

    methods : {
        addItem()  {
            this.items.push(this.newItem);
            this.newItem = '';
                        }
                    }

})
