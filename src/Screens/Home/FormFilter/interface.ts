import type {Dispatch, SetStateAction} from 'react';

import type {TypePercent} from '../../../Types/hooks';

export interface FormFilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectFilterView: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPrice: string | null;
  setSelectedPrice: (value: string | null) => void;
  selectedPercent: string | null;
  setSelectedPercent: Dispatch<SetStateAction<TypePercent>>;
  nameInput: string;
  setNameInput: (value: string) => void;
  symbolInput: string;
  setSymbolInput: (value: string) => void;
}
