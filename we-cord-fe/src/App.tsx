import { Button } from "@/components/ui/button";
import { useState } from "react";
import axiosInstance from "@/api/axiosInstance"; // 우리가 만든 인스턴스를 import 합니다.
import { useTranslation } from "react-i18next"; // 1. useTranslation 훅을 import 합니다.

function App() {
  // 2. useTranslation 훅을 호출하여 t 함수와 i18n 인스턴스를 가져옵니다.
  //    t 함수는 번역 키를 실제 텍스트로 변환해주는 역할을 합니다.
  //    i18n.changeLanguage()를 사용하면 언어를 변경할 수 있습니다.
  const { t, i18n } = useTranslation();

  // 3. 이제 모든 텍스트를 t 함수와 번역 키로 대체합니다.
  const [message, setMessage] = useState(t("labels.initialMessage"));
  // 로딩 상태를 관리하는 별도의 boolean 상태를 만듭니다.
  const [isLoading, setIsLoading] = useState(false);

  // 2. 버튼 클릭 시 실행될 함수입니다. 비동기(async)로 만들어야 합니다.
  const handleFetchData = async () => {
    setIsLoading(true); // API 호출 직전에 로딩 상태를 true로 설정합니다.
    setMessage(""); // 이전 메시지는 지워줍니다.

    try {
      // 제네릭<string>으로 응답 데이터 타입을 명시합니다.
      // 이제 '/api/hello' 처럼 baseURL 뒤의 경로만 적으면 됩니다.
      const response = await axiosInstance.get<string>("/api/hello");
      setMessage(response.data);
    } catch (error) {
      console.error("API 호출 오류:", error);
      // 에러 메시지도 번역 키를 사용합니다.
      setMessage(t("labels.errorMessage"));
    } finally {
      // API 호출이 성공하든 실패하든, 마지막에는 항상 로딩 상태를 false로 설정합니다.
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex gap-2">
        {/* 4. 언어 변경 버튼을 추가합니다. */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => i18n.changeLanguage("ko")}
        >
          한국어
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => i18n.changeLanguage("ja")}
        >
          日本語
        </Button>
      </div>

      {/* isLoading이 true일 때 버튼을 비활성화(disabled)하여 중복 클릭을 방지합니다. */}
      <Button onClick={handleFetchData} disabled={isLoading}>
        {/* 로딩 상태에 따라 다른 번역 키를 사용합니다. */}
        {isLoading ? t("buttons.loading") : t("buttons.requestData")}
      </Button>

      <div className="rounded-md border bg-gray-100 p-4 font-mono">
        <p className="text-sm text-gray-500">{t("labels.backendResponse")}</p>
        <p className="text-lg font-semibold">{message}</p>
      </div>
    </div>
  );
}

export default App;
