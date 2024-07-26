// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ResizableBox from "./ResizableBox";
import React, { useEffect, FC, ReactNode } from "react";
import { AxisOptions, Chart } from "react-charts";
import { ISeriesList } from "../types/ChartData";

interface IAreaProps {
  data:ISeriesList
}

const Area: FC<IAreaProps> = (props) : ReactNode => {

  const { data } = props

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum: any) => datum.primary as Date,
    }),
    []
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum: any) => datum.secondary,
        stacked: true,
        // OR
        // elementType: "area",
      },
    ],
    []
  );

  return (
    <>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}

export default Area