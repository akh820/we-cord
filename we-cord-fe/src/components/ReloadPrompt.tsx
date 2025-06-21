import { useRegisterSW } from "virtual:pwa-register/react";
import { Button } from "@/components/ui/button";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("서비스 워커 등록됨:", r);
    },
    onRegisterError(error) {
      console.log("서비스 워커 등록 실패:", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {(offlineReady || needRefresh) && (
        <div className="rounded-md border bg-background p-4 shadow-lg">
          <div className="mb-2">
            {offlineReady ? (
              <span>앱이 오프라인에서 작동할 준비가 되었습니다.</span>
            ) : (
              <span>새로운 버전이 있습니다. 새로고침 할까요?</span>
            )}
          </div>
          {needRefresh && (
            <Button size="sm" onClick={() => updateServiceWorker(true)}>
              새로고침
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={close}>
            닫기
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;
