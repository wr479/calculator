console.log ('Good ' + 'Evening')

let myName
console.log (myName)
myName='Oleg'
console.log(myName)

const myName1='Oleg'
console.log (myName1)

const objectA={
    a:10,
    b:true
}
const copyOfA=objectA
copyOfA.c='abc'
console.log(copyOfA)

const myCity={
    city: 'Togliatti'
}//объект
myCity.popular=true//св-ва
console.log(myCity)
myCity.country='Russia'
console.log(myCity)

const myCity1={
    city:'Togliatti'
}
    myCity1['popular']=true,
    console.log(myCity1)

    const countryPropertName='country'
    myCity1[countryPropertName]='Russia'//[]-когда должно быть какое-л. выражение (например, название переменной)
    console.log(myCity1)

    const myCity5={
        city:'Togliatti',
        cityGreeting(){//()-функция
            console.log('Greetings!!')
        }
    }
    myCity5.cityGreeting()//вызов метода

    const a=10
    let b=a//copy by value (копирование значения)
    b=30
    console.log(a)//значение а не изменилось
    console.log(b)

    const person={
        name6: 'Bob',
        age: 25
    }
    const person2=person// копирование ссылки(copy by reference)
    person2.age=26//        мутация объекта, на который
    person2.isAdult=true//  ссылается "person2"
    console.log(person.age)//мутация отображется и на оргинальный объект
    console.log(person.isAdult)

    //Как избежать мутаций
    //если нет вложенных объектов
    //в1
    const person10={
        name7: 'Bob',
        age: 25
    }
    const person15=Object.assign({},person)
    person15.age=26
    person15.isAdult=true
    console.log(person15.age)
    console.log(person10.age)
    //в2
    const person11={
        name: 'Bob',
        age: 25
    }
    const person16={...person}//ссылки на вложенные объекты сохраняются
    //{...person}-оператор разделения объекта на св-ва
    person16.name='Alice'
    console.log(person16.name)
    console.log(person11.name)

    //в3(полное избежание мутаций)
    const person12={
        name: 'Bob',
        age: 25
    }
    const person17=JSON.parse(JSON.stringify(person12))//Конвертация в объект/строку
    //ссылки на вложенные объекты не сохраняются
    person17.name='Alice'
    console.log(person16.name)
    console.log(person11.name)

    //Колбэк функции
    function printMyName(){
        console.log('Oleg')
    }
    setTimeout(printMyName, 2000)//функция будет вызвана через 2000 миллисекунд

    const a5=5
    function myFn(){
      function innerFn(){
          console.log(a5)
    }
      innerFn()
    }
    myFn()
