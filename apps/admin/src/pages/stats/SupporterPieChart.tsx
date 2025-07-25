import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { SubTitle } from '@repo/ui/styles';

const SupporterPieChart: React.FC = () => {
  const data = [
    { id: 'A', label: 'A', value: 91 },
    { id: 'B', label: 'B', value: 84 },
    { id: 'C', label: 'C', value: 26 },
    { id: 'D', label: 'D', value: 16 },
    { id: 'E', label: 'E', value: 9 },
    { id: 'F', label: 'F', value: 7 },
    { id: 'G', label: 'G', value: 3 },
    { id: 'H', label: 'H', value: 2 },
    { id: 'I', label: 'I', value: 0 },
  ];

  return (
    <div className="w-full flex-1 h-[300px] flex flex-col items-center">
      <SubTitle className="mb-4">후원자 통계</SubTitle>
      <div className="w-full h-full">
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: 'blues' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#3B82F6"
          arcLinkLabelsThickness={1}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="#3B82F6"
        />
      </div>
    </div>
  );
};

export default SupporterPieChart;
