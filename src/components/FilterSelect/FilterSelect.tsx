import { useState } from 'react';
import { Arrow, Option, Select } from './FilterSelect.style';

interface FilterSelectProps {
  selectName: string;
  children: React.ReactNode;
}

export default function FilterSelect({ selectName, children }: FilterSelectProps) {
  const [isShowOptions, setIsShowOption] = useState(false);

  return (
    <div>
      <Select onClick={() => setIsShowOption(!isShowOptions)}>
        <p>{selectName}</p>
        <Arrow isShowOptions={isShowOptions} />
      </Select>
      <div>{isShowOptions && <Option>{children}</Option>}</div>
    </div>
  );
}
