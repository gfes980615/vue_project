var todolist = new Vue({
    el: '#todolist',
    data: {
        item: '',
        todolists: [],
        doinglist: [],
        finishlist: [],
    },
    methods: {
        add: function() {
          this.todolists.push(this.item);
          this.item = '';
        },
        handleTransferDoingItem: function(value,index){
            this.doinglist.push(value);
            this.todolists.splice(index, 1);
        },
        handleTransferFinishItem: function(value,index){
            this.finishlist.push(value);
            this.doinglist.splice(index, 1);
        },
        handleDeleteItem: function(index) {
            //将list数组中索引为index的位置为起点删掉一个数组元素
            this.finishlist.splice(index, 1);
        },
    }
});

Vue.component("todo-item",{
    props: ['content', 'index'],
    template: '<div>{{ content }}<button @click="doingItem">執行</button></div>',
    
    methods: {
        doingItem: function() {
            this.$emit('doing', this.content, this.index);
        },
    }
})

Vue.component("doing-item",{
    props: ['content', 'index'],
    template: '<div>{{ content }}<button @click="finishItem">完成</button></div>',

    methods: {
        finishItem: function() {
            this.$emit('finish', this.content, this.index);
        },
    }
})

Vue.component("finish-item",{
    props: ['content', 'index'],
    template: '<div>{{ content }}<button @click="deleteItem">刪除</button></div>',

    methods: {
        deleteItem: function() {
            this.$emit('delete', this.index);
        },
    }
})