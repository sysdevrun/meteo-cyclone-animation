import { formatWind, formatReferenceTime } from '../utils/formatting';

interface CycloneInfoProps {
  name: string;
  development: string | undefined;
  pressure: number | undefined;
  maxWind: number;
  referenceTime: string;
}

export function CycloneInfo({ name, development, pressure, maxWind, referenceTime }: CycloneInfoProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-sm max-w-[250px]">
      <h3 className="text-gray-800 font-bold mb-2 text-base">
        <span className="mr-1">🌀</span> {name}
      </h3>
      <p className="text-gray-600 my-1">
        <strong className="text-gray-800">Status:</strong> {development || 'N/A'}
      </p>
      {pressure !== undefined && (
        <p className="text-gray-600 my-1">
          <strong className="text-gray-800">Pressure:</strong> {pressure} hPa
        </p>
      )}
      <p className="text-gray-600 my-1">
        <strong className="text-gray-800">Max wind:</strong> {formatWind(maxWind)}
      </p>
      <p className="text-gray-600 my-1">
        <strong className="text-gray-800">Update:</strong> {formatReferenceTime(referenceTime)}
      </p>
    </div>
  );
}
