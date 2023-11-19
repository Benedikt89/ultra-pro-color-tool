import './App.css'
import Palletes from "./components/filters.tsx";
import {Button, ConfigProvider, message, theme, Upload, UploadProps} from "antd";
import {palettes} from "./components/constants.ts";
import {useEffect, useMemo, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import initData from './assets/data.json';

type PalleteType = typeof palettes.manufacturer;
const addUuidkeys = (obj: PalleteType) => {
  const res = {...obj};
  Object.keys(obj).forEach(key => {
    res[key] = (res[key] ?? []).map(c => c.uuid ? c : ({ ...c, uuid: uuidv4() }))
  });

  return res;
}

export const getImgUrl = (url: string) => {
  return `${url}`;
}

function App() {
  const [data, setData] = useState(addUuidkeys(initData));

  useEffect(() => {

  }, []);
  const downloadJson = () => {
    const filename = 'data.json';
    const jsonStr = JSON.stringify(data);

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  function onReaderLoad(event){
    try {
      console.log(event.target.result);
      const obj = JSON.parse(event.target.result);
      setData(addUuidkeys(obj));
      message.success('Uploaded successfully!')
    } catch (e) {
      message.error('Wrong format!')
    }
  }
  const uploadJson = (file) => {
    try {
      const reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(file);
    } catch (e) {
      message.error('Wrong format!')
    }
  }

  const props: UploadProps = {
    name: 'file',
    beforeUpload: (file) => {
      uploadJson(file);

      return false;
    },
  };

  const transformed = useMemo(() => {
    const res = {...data};
    Object.keys(res).forEach(key => {
      res[key] = (res[key] ?? []).map(c => !c.image ? c : ({ ...c, imageUrl: getImgUrl(c.image) }))
    });

    return res;
  }, [data]);
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <div>
          <div className={'header'}>
            <Button onClick={downloadJson}>Download</Button>
            <Upload {...props}>
              <Button>Click to Upload</Button>
            </Upload>
          </div>
          <Palletes data={transformed} setData={setData} />
        </div>
      </ConfigProvider>
    </>
  )
}

export default App
