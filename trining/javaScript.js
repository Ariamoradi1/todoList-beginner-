var userlist = [
{id:1, todolist:'game', isDoing:false},
{id:2, todolist:'learning', isDoing:true},
{id:3, todolist:'football', isDoing:false},
]

var userInput = prompt('please enter your choose: /n 1:add to your list /n 2:remove to your list /n 3: isDoing todo')

if (userInput === '1') {

var userInput2 = prompt('enter your todo name:')
var userObject = {
id: userlist.length + 1,
todolist: userInput2,
isDoing:false,

}
userlist.push(userObject)
console.log(userObject)

} else if (userInput === '2') {

var userRemove = prompt('please enter you todo for remove')

var usertodoRemove = userlist.findIndex(function(todo){

return todo.todolist === userRemove
})

userlist.splice(usertodoRemove, 1)

console.log(userlist)

} else if (userInput === '3') {

var userAdd = prompt('please enter your todo name')

userlist.forEach(function(todo){

if (todo.title === userAdd)

 todo.isDoing = true

})

console.log(userlist)

} else {

    alert('error404')
}