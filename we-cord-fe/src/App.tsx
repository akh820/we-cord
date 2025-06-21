import { Button } from "@/components/ui/button";
import ReloadPrompt from "./components/ReloadPrompt";
import { db } from "./lib/db"; // 1. 방금 만든 db 객체를 import 합니다.
import { useLiveQuery } from "dexie-react-hooks"; // 2. 실시간 쿼리 훅을 import 합니다.

function App() {
  // 3. useLiveQuery를 사용해 workouts 테이블의 모든 데이터를 가져옵니다.
  //    IndexedDB 데이터가 변경될 때마다 이 컴포넌트는 자동으로 다시 렌더링됩니다.
  const allWorkouts = useLiveQuery(() => db.workouts.toArray());

  // 4. 간단한 테스트 데이터를 추가하는 함수입니다.
  const addTestWorkout = async () => {
    try {
      await db.workouts.add({
        exerciseName: "벤치프레스",
        weight: 60,
        reps: 10,
        sets: 3,
        createdAt: new Date(),
      });
      console.log("테스트 운동 기록이 추가되었습니다.");
    } catch (error) {
      console.error("데이터 추가 실패:", error);
    }
  };

  return (
    <>
      <ReloadPrompt />
      <div className="flex h-screen flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-2xl font-bold">We-Cord 오프라인 테스트</h1>

        <Button onClick={addTestWorkout}>테스트 운동 기록 추가</Button>

        <div className="w-full max-w-md rounded-md border bg-gray-100 p-4">
          <h2 className="mb-2 font-semibold">저장된 운동 기록:</h2>
          <ul className="list-disc pl-5">
            {/* 5. 가져온 데이터를 화면에 표시합니다. */}
            {allWorkouts?.map((workout) => (
              <li key={workout.id}>
                {workout.exerciseName} - {workout.weight}kg, {workout.reps}회,{" "}
                {workout.sets}세트
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
