var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

const datalist = ['python', 'vue', 'golang'];
var app4 =  new Vue({
    el: '#app-4',
    data: {
        todolist: datalist
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        number: 1
    },
    methods: {
        add(){
            this.number = this.number + 1 
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '他會跟著變動喔~'
    }
});

Vue.component("to-item",{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
});