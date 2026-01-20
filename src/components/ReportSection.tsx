import type { CycloneReport } from '../types';

interface ReportSectionProps {
  report: CycloneReport | null;
}

export function ReportSection({ report }: ReportSectionProps) {
  if (!report) {
    return null;
  }

  return (
    <div className="mt-6 bg-gray-50 rounded-xl p-5">
      <h2 className="text-gray-800 text-xl font-semibold mb-4 pb-3 border-b-2 border-primary-500">
        <span className="mr-2">📋</span>
        Cyclone Activity Report
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {report.text_bloc_item.map((item, index) => {
          if (item.bloc_title) {
            return (
              <div key={index} className="font-bold text-gray-800 mt-4 mb-2">
                {item.bloc_title}
              </div>
            );
          }
          if (item.text) {
            if (item.text === '-------------------------------------------------') {
              return <hr key={index} className="border-t border-dashed border-gray-300 my-4" />;
            }
            if (item.text.trim()) {
              return (
                <div key={index} className="my-1">
                  {item.text}
                </div>
              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
}
