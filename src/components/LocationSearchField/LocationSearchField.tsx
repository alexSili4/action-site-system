import { FC,  } from 'react';
import { Input } from './LocationSearchField.styled';
import { InputChangeEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';

const LocationSearchField: FC = () => {
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const search = searchParams.get(SearchParamsKeys.search) ?? '';

  const onInputChange = (e: InputChangeEvent) => {
    const { value, name: key } = e.currentTarget;

    updateSearchParams({ key, value });
  };

  return (
    <Input
      type='text'
      placeholder='Пошук'
      name={SearchParamsKeys.search}
      onChange={onInputChange}
      defaultValue={search}
      autoFocus
    />
  );
};

export default LocationSearchField;
