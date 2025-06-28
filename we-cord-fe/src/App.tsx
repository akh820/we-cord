import { Button } from "@/components/ui/button";
import ReloadPrompt from "./components/ReloadPrompt";
import { useState } from "react";
import axiosInstance from "./api/axiosInstance";
import type { AxiosResponse } from "axios"; // 값과 타입을 구문하기 위해 import type 설정
import { useNavigate } from "react-router-dom";

function App() {
  const [res, setRes] = useState<string | null>("통신 대기중");
  const navigate = useNavigate();

  const testClick = async () => {
    setRes("통신 중...");
    try {
      const response: AxiosResponse<string> = await axiosInstance.get(
        "api/hello"
      );
      setRes(response.data);
    } catch (error) {
      console.error("API call failed:", error);
      setRes("통신 실패");
    }
  };

  const goToCalender = () => {
    navigate("/calender");
  };

  return (
    <>
      <ReloadPrompt />
      <main className="h-dvh bg-background text-foreground">
        <div className="container mx-auto flex h-full max-w-md flex-col items-center p-4">
          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight">We-Cord</h1>
            <Button className="w-full" onClick={goToCalender} size="lg">
              운동 기록하러 가기
            </Button>
          </div>

          <div className="w-full space-y-4 py-4">
            <Button onClick={testClick} className="w-full" size="lg">
              통신 테스트
            </Button>
            <div className="rounded-lg border bg-card p-4 text-card-foreground">
              <h2 className="font-semibold">통신 결과</h2>
              <p className="mt-2 text-muted-foreground">{res}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
