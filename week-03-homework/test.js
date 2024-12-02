class Character {
  constructor(name, level, hp, attack) {
    this.name = name; // 캐릭터 이름         //1. RPG 게임에서 사용할 **캐릭터 클래스를 설계**하세요.
    this.level = level; // 캐릭터 레벨
    this.hp = hp; // 체력
    this.attacker = attacker; // 공격력
  }
  attack() {
    console.log(`${this.name}가 공격을시도합니다!`); // 2. attack 메서드를 구현하여, 호출 시 “<캐릭터 이름>가 공격을 시도합니다!“를 출력할 것.
  }

  heal(amount) {
    this.hp += amount;
    console.log(`${this.name} 체력이 ${amount}만큼 회복되었습니다`); // heal 메서드를 구현하여, 호출 시 체력이 회복되고 “XXX의 체력이 Y만큼 회복되었습니다.“를 출력할 것.
  }

  levelup() {
    this.level += 1; // 레벨 증가
    const healthIncrease = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 체력 증가
    const attackIncrease = Math.floor(Math.random() * 5) + 1; // 1~5 랜덤 공격력 증가      // 4. levelUp 메서드를 구현하여 레벨업을 하면 렌덤으로 체력, 공격력을 추가해줄 것.

    this.hp += healthIncrease;
    this.attacker += attackIncrease;
  }

  displayInfo() {
    console.log(
      `이름: ${this.name}, 레벨: ${this.level}, 체력: ${this.hp}, 공격력: ${this.attacker}` //2. 캐릭터 클래스는 아래 조건을 만족해야 합니다: 1. 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
    );
  }
}

const warrior = new Character("전사", 100, 25, 15);
const mage = new Character("마법사", 100, 30, 5); //  3. 설계한 클래스를 사용하여 **3명의 캐릭터 객체**를 만드세요
const archer = new Character("궁수", 100, 20, 10);

warrior.attack();
mage.heal(20); // 4. 각 캐릭터 객체에서 attack과 heal 메서드를 실행해 보세요
archer.attack();

function findTreasure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.1; // 10% 확률로 성공
      if (success) {
        resolve("축하합니다! 황금 보물을 발견!");
      } else {
        reject("보물을 찾는 데 실패");
      }
    }, 3000); // 3초 후에 실행
  });
}

// findTreasure 호출 및 then/catch 사용
findTreasure()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
