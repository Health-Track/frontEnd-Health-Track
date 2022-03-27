import React from 'react'
import { Column } from '@ant-design/plots'

export default function ColumnChart(props) {
  return (
    <Column
      data={props.data}
      xField={props.xField}
      yField={props.yField}
      label={props.label}
      xAxis={props.xAxis}
      meta={props.meta}
      color={props.color}
    />
  );
}
