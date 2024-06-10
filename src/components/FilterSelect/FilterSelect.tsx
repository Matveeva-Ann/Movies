import { Arrow, Option, Select } from './FilterSelect.style';

interface FilterSelectProps {
  selectName: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function FilterSelect({ selectName, children, isOpen, setIsOpen }: FilterSelectProps) {

  return (
    <div>
      <Select onClick={() => setIsOpen(!isOpen)}>
        <p>{selectName}</p>
        <Arrow isShowOptions={isOpen} />
      </Select>
     {isOpen &&  <div><Option>{children}</Option></div>}
    </div>
  );
}
