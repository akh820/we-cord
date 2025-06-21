import { Button } from "@/components/ui/button";
import { useState } from "react";
import axiosInstance from "@/api/axiosInstance"; // 우리가 만든 인스턴스를 import 합니다.

function App() {
  const [message, setMessage] = useState("버튼을 눌러주세요.");
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axiosInstance.get<string>("/api/hello");
      setMessage(response.data);
    } catch (error) {
      console.error("API 호출 오류:", error);
    } finally {
      // API 호출이 성공하든 실패하든, 마지막에는 항상 로딩 상태를 false로 설정합니다.
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      {/* 중복클릭 방지*/}
      <Button onClick={handleFetchData} disabled={isLoading}>
        {isLoading ? "로딩중" : "호출 테스트"}
      </Button>

      <div className="rounded-md border bg-gray-100 p-4 font-mono">
        <p className="text-lg font-semibold">{message}</p>
      </div>
    </div>
  );
}

export default App;
