import type { PermissonsDto } from '@/interface/admin';

import { Collapse, Switch } from 'antd';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';

interface Props {
  data: PermissonsDto[];
  onChangeSwitch: (checked: boolean, data: any) => void;
}

export default function CollapseSwitch({ data, onChangeSwitch }: Props) {
  return (
    <Collapse>
      {data?.map((el: PermissonsDto, index: number) => (
        <CollapsePanel header={el.action} key={index} css={{ backgroundColor: '#fafafa' }}>
          {/* select all switch */}
          <div style={selectAllSwitchStyle}>
            <p>Select all :</p>
            <Switch value={el.value} onChange={e => onChangeSwitch(e, el)} />
          </div>

          {el.children.map((el2: PermissonsDto, index2: number) => (
            <div key={index2 + index} style={itemStyle}>
              {el2.action}
              <Switch value={el2.value} onChange={e => onChangeSwitch(e, el2)} />
            </div>
          ))}
        </CollapsePanel>
      ))}
    </Collapse>
  );
}

const selectAllSwitchStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  justifyContent: 'end',
  padding: 5,
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#fafafa',
  padding: 5,
  borderRadius: 5,
  marginBottom: 15,
  border: '1px solid #ccc',
};
