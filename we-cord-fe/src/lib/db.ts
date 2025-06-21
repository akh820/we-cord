import Dexie, { type Table } from "dexie";

// 1. 저장할 데이터의 타입을 정의합니다.
//    나중에 백엔드와 맞출 것을 고려하여 snake_case로 작성할 수도 있지만,
//    일단 프론트엔드에서는 camelCase가 일반적이므로 camelCase로 시작하겠습니다.
export interface Workout {
  id?: number; // '?'는 '있어도 되고 없어도 되는' 옵셔널 속성임을 의미합니다.
  exerciseName: string;
  weight: number;
  reps: number;
  sets: number;
  createdAt: Date;
}

// 2. Dexie를 상속받는 클래스를 만듭니다.
//    이 클래스가 데이터베이스 전체를 나타냅니다.
class WeCordDB extends Dexie {
  // 3. 'workouts'라는 이름의 테이블(Table)을 정의합니다.
  //    이 테이블은 위에서 정의한 Workout 타입의 객체들을 저장할 겁니다.
  workouts!: Table<Workout>;

  constructor() {
    // 4. 부모 클래스(Dexie)의 생성자를 호출하며 데이터베이스 이름을 정해줍니다.
    super("we-cord-database");
    this.version(1).stores({
      // 5. 테이블의 스키마(구조)를 정의합니다.
      //    '++id' : 자동으로 증가하는 고유 번호 (Primary Key)
      //    'exerciseName', 'createdAt': 나중에 데이터를 검색할 때 사용할 인덱스(색인)
      workouts: "++id, exerciseName, createdAt",
    });
  }
}

// 6. 데이터베이스 인스턴스를 생성하고 export 합니다.
//    이제 다른 컴포넌트에서 이 db 객체를 import하여 사용할 수 있습니다.
export const db = new WeCordDB();
