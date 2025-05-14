/* eslint-disable curly */
import {useState, useEffect} from 'react';
import type {CryptoProps} from '../Types';
import type {TypePercent, useFilterProps} from '../Types/hooks';

const useFilter = ({cryptos, setFilteredCryptos}: useFilterProps) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [selectFilterView, setSelectFilterView] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedPercent, setSelectedPercent] =
    useState<TypePercent>('percent:24h');
  const [nameInput, setNameInput] = useState<string>('');
  const [symbolInput, setSymbolInput] = useState<string>('');

  // Effect to apply filters whenever filter states change
  useEffect(() => {
    let filtered = [...cryptos];

    // Filter by name
    if (nameInput.trim()) {
      filtered = filtered.filter(crypto =>
        crypto.name.toLowerCase().includes(nameInput.toLowerCase()),
      );
    }

    // Filter by symbol
    if (symbolInput.trim()) {
      filtered = filtered.filter(crypto =>
        crypto.symbol.toLowerCase().includes(symbolInput.toLowerCase()),
      );
    }

    // Filter by price
    if (selectedPrice === 'price:asc') {
      filtered.sort((a, b) => Number(a.price_usd) - Number(b.price_usd));
    } else if (selectedPrice === 'price:desc') {
      filtered.sort((a, b) => Number(b.price_usd) - Number(a.price_usd));
    }

    // Filter by percent change
    if (selectedPercent) {
      const percentKey = selectedPercent.split(':')[1];
      filtered = filtered.filter(
        crypto => crypto[`percent_change_${percentKey}` as keyof CryptoProps],
      );
    }

    // If no filters are active, reset to original cryptos
    if (
      !nameInput.trim() &&
      !symbolInput.trim() &&
      !selectedPrice &&
      !selectedPercent
    ) {
      setFilteredCryptos(cryptos);
      return;
    }

    setFilteredCryptos(filtered);
  }, [
    nameInput,
    symbolInput,
    selectedPrice,
    selectedPercent,
    cryptos,
    setFilteredCryptos,
  ]);

  // Handle removing a filter
  const handleRemoveFilter = (filterToRemove: string) => {
    const updatedFilters = filter.filter(f => f !== filterToRemove);

    const filterType = filterToRemove.split(':')[1].toLowerCase();

    if (filterType === nameInput.toLowerCase()) setNameInput('');
    else if (filterType === symbolInput.toLowerCase()) setSymbolInput('');
    else if (filterToRemove === selectedPrice) setSelectedPrice(null);
    else if (filterToRemove === selectedPercent)
      setSelectedPercent('percent:24h');

    setFilter(updatedFilters);
  };

  return {
    cryptos,
    filter,
    setFilter,
    selectFilterView,
    setSelectFilterView,
    selectedPrice,
    setSelectedPrice,
    selectedPercent,
    setSelectedPercent,
    nameInput,
    setNameInput,
    symbolInput,
    setSymbolInput,
    handleRemoveFilter,
  };
};

export default useFilter;
