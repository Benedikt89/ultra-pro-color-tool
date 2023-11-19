import {Checkbox, Col, Input, Row, Tabs, TabsProps} from "antd";
import React, {useState} from "react";
import ColorItem from "./ColorItem.tsx";
import './styles.less';

export const clusters = [
  {name: 'red', leadColor: [255, 0, 0], colors: []},
  {name: 'orange', leadColor: [255, 128, 0], colors: []},
  {name: 'yellow', leadColor: [255, 255, 0], colors: []},
  {name: 'chartreuse', leadColor: [128, 255, 0], colors: []},
  {name: 'green', leadColor: [0, 255, 0], colors: []},
  {name: 'cyan', leadColor: [0, 255, 255], colors: []},
  {name: 'blue', leadColor: [0, 0, 255], colors: []},
  {name: 'violet', leadColor: [127, 0, 255], colors: []},
  {name: 'magenta', leadColor: [255, 0, 255], colors: []},
  {name: 'black', leadColor: [0, 0, 0], colors: []},
  {name: 'grey', leadColor: [235, 235, 235], colors: []},
  {name: 'white', leadColor: [255, 255, 255], colors: []},
];

const Palletes = ({data, setData}) => {
  const [filter, setFilter] = useState('');
  const [colorTag, setColorTag] = useState<string>('')
  const [tab, setTab] = useState<string>('ral')
  const handleFilterChange = (fields: string[]) => {
    console.log(fields)
    setColorTag(prev => fields.filter(f => !prev.includes(f))[0] ?? '')
  }
  const blackCheckColor = ['white', 'beige', 'light-blue', 'yellow']
  const getCheckColor = (value) => {
    return blackCheckColor.includes(value) ? 'black' : 'white'
  }

  const onColorClick = (color) => {
    if (!colorTag) return;
    const tags = (color.tags ?? []);
    const col = {
      ...color,
      tags: tags.includes(colorTag)
        ? tags.filter(t => !colorTag.includes(t))
        : [...tags, colorTag]
    }
    console.log(colorTag, col.tags)
    setData(prev => ({
      ...prev,
      [tab]: prev[tab].map(c => c.uuid === col.uuid ? col : c)
    }))
  }


  const items: TabsProps['items'] = Object.keys(data).map(key => ({
    key: key,
    label: key,
    children: <div className={'paletteWrapper'}>
      {(data[key] ?? []).filter(col => col.id.includes(filter)).map((item, i) => (
          <ColorItem
            key={`${item.uuid}_${i}`}
            item={item}
            onClick={() => onColorClick(item)}
          />
        ),
      )}
    </div>,
  }));

  const byTag = (data[tab] ?? []).filter(col => (col.tags ?? []).includes(colorTag) && col.id.includes(filter));

  console.log(byTag)

  return (
    <Row>
      <Col span={12}>
        <Input value={filter} onChange={e => setFilter(e.target.value)} />
        <Tabs defaultActiveKey={tab} items={items} onChange={setTab} />
      </Col>
      <Col span={12}>
        <Checkbox.Group
          className={''}
          value={[colorTag]}
          onChange={handleFilterChange}
        >
          {clusters.map(cl => (
            <Checkbox
              key={cl.name}
              className={'filterCheckbox'}
              style={{
                "--background-color": cl.name,
                "--border-color": "black",
                "--check-color": getCheckColor(cl.name),
              } as React.CSSProperties}
              value={cl.name}
            />
          ))}
        </Checkbox.Group>
        <div className={'paletteWrapper'}>
          {byTag.map(col => (
            <ColorItem
              key={`${col.uuid}_`}
              item={col}
              onClick={() => onColorClick(col)}
            />
          ))}
        </div>
      </Col>
    </Row>
  )
};

export default Palletes;
