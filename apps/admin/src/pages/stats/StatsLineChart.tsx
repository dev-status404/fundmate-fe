import React from "react";
import { ResponsiveLine } from "@nivo/line";

const StatsLineChart: React.FC = () => {
  const data = [
    {
      id: "모금액",
      data: [
        { x: 0, y: 15 },
        { x: 1, y: 28 },
        { x: 2, y: 2 },
        { x: 3, y: 27 },
        { x: 4, y: 23 },
        { x: 5, y: 24 },
        { x: 6, y: 29 },
        { x: 7, y: 31 },
        { x: 8, y: 14 },
        { x: 9, y: 7 },
      ],
    },
    {
      id: "후원자수",
      data: [
        { x: 0, y: 24 },
        { x: 1, y: 31 },
        { x: 2, y: 10 },
        { x: 3, y: 14 },
        { x: 4, y: 9 },
        { x: 5, y: 6 },
        { x: 6, y: 12 },
        { x: 7, y: 5 },
        { x: 8, y: 10 },
        { x: 9, y: 6 },
      ],
    },
  ];

  return (
    <div className="w-full h-[300px]">
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 30, bottom: 50, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: 32,
          stacked: false,
          reverse: false,
        }}
        curve="linear"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -30,
          legendPosition: "middle",
        }}
        pointSize={6}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices="x"
        colors={["#4FADF7", "#71C3F5"]}
        tooltip={({ slice }) => (
          <div
            style={{
              background: "white",
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "row", // 가로 정렬
              alignItems: "center",
              gap: "16px",
              whiteSpace: "nowrap",
            }}
          >
            {slice.points.map((point) => (
              <div
                key={point.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "13px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: point.serieColor,
                    borderRadius: "2px",
                  }}
                />
                <span style={{ color: "#333", fontWeight: 500 }}>{point.serieId}:</span>
                <span style={{ color: "#333", fontWeight: 600 }}>{point.data.yFormatted}</span>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default StatsLineChart;
