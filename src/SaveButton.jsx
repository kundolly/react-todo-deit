import { useOnlineStatus } from '@/hooks/useOnlineStatus';

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSave() {
    alert('✅진행사항 저장됨');
  }

  return (
    <button
      type="button"
      className="btn"
      disabled={!isOnline}
      onClick={handleSave}>
      {isOnline ? '진행사항 저장' : '재연결 중...'}
    </button>
  );
}
