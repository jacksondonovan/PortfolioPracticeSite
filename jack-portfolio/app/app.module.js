var app = angular.module("app",[])

app.component("jacktitle",{
  controller: function(){
    const vm = this
    vm.title = 'Hello from the other side'
  },
  templateUrl: '/templates/gallery.hbs'
})
