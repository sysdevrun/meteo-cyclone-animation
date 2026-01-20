export function Legend() {
  return (
    <div className="bg-white p-3 rounded-lg shadow-lg text-sm">
      <div className="flex items-center mb-2">
        <div className="w-5 h-3 mr-2 rounded-sm bg-[#0066CC]" />
        <span>Analysis (observed)</span>
      </div>
      <div className="flex items-center mb-2">
        <div className="w-5 h-3 mr-2 rounded-sm bg-[#CC0000]" />
        <span>Forecast</span>
      </div>
      <div className="flex items-center">
        <div className="w-5 h-3 mr-2 rounded-sm bg-orange-400/30 border border-orange-400" />
        <span>Uncertainty cone</span>
      </div>
    </div>
  );
}
