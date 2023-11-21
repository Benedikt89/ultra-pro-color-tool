import React from "react";
import {Tooltip, Typography} from "antd";

const ColorItem: React.FC = ({item, onClick, colorName}: any) => {
  const color = () => {
    const {red, green, blue} = item.rgb ?? {}
    if ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) {
      return '#000000'
    }
    return '#ffffff'
  }

  const tagsString = (item.tags ?? []).length ? (item.tags ?? []).join(', ') : 'Нету никаких тэгов'

  return item.imageUrl ? (
    <Tooltip title={tagsString}>
      <div className={'mobihelItem'} onClick={onClick}>
        <img src={item.imageUrl} loading="lazy" alt="color"/>
        <Typography.Text>{item.id}</Typography.Text>
      </div>
    </Tooltip>
  ) : (
    <Tooltip title={tagsString}>
      <div key={item?.id} className={'paletteItem'}>
        <div
          style={{
            height: '100%',
            width: '100%',
            padding: '5px',
            cursor: 'pointer',
            position: 'relative',
            outline: 'none',
            transition: 'box-shadow 100ms ease 0s',
            boxShadow: `${item.hex} 0px 0px 0px ${colorName === item.id ? '5px' : "38px"} inset`,
          }}
          onClick={onClick}
        >
          {colorName !== item.id && <p style={{color: color()}}>{item.id}</p>}
        </div>
      </div>
    </Tooltip>
  )
}

export default ColorItem
