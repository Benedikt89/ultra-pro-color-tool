import {Button, Col, Input, Row, Tabs, TabsProps} from "antd";
import React, {useCallback, useMemo, useState} from "react";
import ColorItem from "./ColorItem.tsx";
import './styles.less';

export const clusters = [
  {name: 'yellow', leadColor: [255, 224, 1], colors: []},
  {name: 'orange', leadColor: [255, 165, 0], colors: []},
  {name: 'red', leadColor: [255, 0, 0], colors: []},
  {name: 'violet', leadColor: [127, 0, 255], colors: []},
  {name: 'blue', leadColor: [0, 128, 255], colors: []},
  {name: 'green', leadColor: [0, 208, 2], colors: []},
  {name: 'grey', leadColor: [128, 128, 128], colors: []},
  {name: 'brown', leadColor: [97, 64, 33], colors: []},
  {name: 'black', leadColor: [0, 0, 0], colors: []},
  {name: 'white', leadColor: [255, 255, 255], colors: []},
];
interface Color  { id: string; uuid: string; tags: string[]; }
const Palletes = ({data, setData}: any) => {
  const [filter, setFilter] = useState('');
  const [noTags, setNoTags] = useState(false);
  const [colorTag, setColorTag] = useState<string>('')
  const [tab, setTab] = useState<string>('ral')

  const handleFilterChange = useCallback((field: string) => {
    setColorTag(prev => prev === field ? '' : field)
  }, []);

  const onColorClick = useCallback((color: Color) => {
    if (!colorTag) return;
    const tags = (color.tags ?? []);
    const col = {
      ...color,
      tags: tags.includes(colorTag)
        ? tags.filter(t => !colorTag.includes(t))
        : [...tags, colorTag]
    }
    setData(prev => ({
      ...prev,
      [tab]: prev[tab].map(c => c.uuid === col.uuid ? col : c)
    }))
  }, [colorTag, setData, tab])

  const tabFilter = useCallback((col: { id: string | string[]; tags: string[]; }) =>
    col.id.includes(filter) && (noTags ? !col.tags?.length : true) && (!(col.tags ?? []).includes(colorTag)),
    [colorTag, filter, noTags]);

  const items: TabsProps['items'] = useMemo(() => Object.keys(data).map(key => ({
    key: key,
    label: key,
    children: <div className={'paletteWrapper'}>
      {(data[key] ?? [])
        .filter(tabFilter)
        .map((item: Color) => (
            <ColorItem
              key={item.uuid}
              item={item}
              onClick={() => onColorClick(item)}
            />
          ),
        )}
    </div>,
  })), [data, onColorClick, tabFilter]);

  const byTag = useMemo(() => (data[tab] ?? [])
    .filter((col: Color) => (col.tags ?? []).includes(colorTag) && col.id.includes(filter)),
    [colorTag, data, filter, tab]);

  return (
    <Row>
      <Col span={11} style={{ marginRight: 10 }}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Button onClick={() => setNoTags(!noTags)} style={{marginRight: 10}}>
            {noTags ? 'Without tags' : 'All colors'}
          </Button>
          <Input value={filter} onChange={e => setFilter(e.target.value)} />
        </div>
        <Tabs defaultActiveKey={tab} items={items} onChange={setTab} />
      </Col>
      <Col span={11}>
        <div className="clusters-row">
          {clusters.map(cl => (
            <div
              style={{
                "--background-color": `rgb(${cl.leadColor.join(',')})`,
                "--border-color": "magenta",
              } as React.CSSProperties}
              key={cl.name}
              onClick={() => handleFilterChange(cl.name)}
              className={`cluster ${colorTag === cl.name ? 'selected' : ''}`}
            >{cl.name}</div>
          ))}
        </div>
        <div className={'paletteWrapper'}>
          {byTag.map((col: Color) => (
            <ColorItem
              key={col.uuid}
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
