// fetch("https://fakestoreapi.com/products/")
// .then(response => response.json())
// .then(products => {
//     products.forEach((product) => {
//         const card = document.createElement('div');
//         card.classList.add('product');

//         const title = document.createElement('h2')
//         title.textContent = product.title;

//         const price = document.createElement('strong')
//         price.textContent = product.price

//         card.appendChild(title)
//         card.appendChild(price)

//         productList.appendChild(card)
//     })
// })

// const productList = document.querySelector('.products-list')

// fetch('https://fakestoreapi.com/users')
//   .then(response => response.json())
//   .then(users => {
//     users.forEach((user) => {
//         const card = document.createElement('div')
//         card.classList.add('user')

//         const ism = document.createElement('h1')
//         ism.textContent = user.username

//         const narx = document.createElement('strong')
//         narx.textContent = narx.email

//         card.appendChild(ism)
//         card.appendChild(narx)

//         productList.appendChild(card)
//     })
//   });

//   class BankAccount{
//     #balance;

//     constructor (owner, balance) {
//       this.owner = owner
//       this.balance = balance
//     }

//     pulTushurish(amount){
//       this.#balance += amount;
//     }

//     pulMiqdori() {
//       return `${this.owner}'s balanse is $${this.balance}`;
//     }


    
//   }

//       const acc = new BankAccount ("IdenityNull", 1000);
//     acc.pulTushurish(500);
//     console.log(acc.pulMiqdori());

// encaptulation usuli bu 

// class CoffeMashinasi {
//   boshlash (){
//     console.log("Mashina ishga tushdi");
//   }

//   makeCofe() {
//     console.log("Coffe tayorlanmoqda"); 
//   }

//   cofeYaratish(){
//     this.boshlash();
//     this.makeCofe()
//     console.log("koffe tayyor");
//   }
// }

// const mashina = new CoffeMashinasi();
// mashina.cofeYaratish();


// abstraction

// class hayvon {
//   constructor (name){
//     this.name = name
//   }

//   ovoz() {
//     console.log(`${this.name} ovoz chiqaryabdi`);
//   }
// }

//   class Mushuk extends hayvon {
//     ovoz () {
//       console.log(`${this.name} mewolaydi`); 
//     }
//   }

//   const mushuk = new Mushuk("Mushuk")

//   mushuk.ovoz()

//   //inheritance 

//   class it extends hayvon {
//     ovoz (){
//       console.log("Bu it");
      
//     }
//   }

//   class mol extends hayvon {
//     ovoz(){
//       console.log("bu mol");
      
//     }
//   }

//   const hayvonlar = [new it(), new mol()]
//   hayvonlar.forEach(hayvon => hayvon.ovoz())
//   console.log(hayvonlar);

class Faris {
    constructor(name, age, hobby){
      this.name = name;
      this.age = age;
      this.hobby = hobby
    }

    ismi (){
      console.log(`${this.name} 😼 uxlayabdi`);
    }

    yoshi (){
      console.log(`😼ning yoshi ${this.age}`);
    }

    hobbysi(){
      console.log(`😼ning hobbysi bu ${this.hobby}`);
    }
}

const faris = new Faris("Faris", 1, "uxlash");
console.log(faris);
faris.ismi();
faris.yoshi();
faris.hobbysi();