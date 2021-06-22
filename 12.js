// 게임 캐릭터 클래스 만들기
const Wizard = class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
};

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// ES6 이후 자바스크립트에도 class가 생겼다! (내부적으로는 프로토타입을 따른다)
// 더 공부하기!
