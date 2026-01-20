interface LoadingOverlayProps {
  message: string;
  error?: string | null;
}

export function LoadingOverlay({ message, error }: LoadingOverlayProps) {
  return (
    <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center z-[1000] rounded-lg">
      {!error && (
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-500 rounded-full animate-spin mb-4" />
      )}
      <div className={`text-lg font-medium ${error ? 'text-red-500' : 'text-primary-500'}`}>
        {error || message}
      </div>
    </div>
  );
}
